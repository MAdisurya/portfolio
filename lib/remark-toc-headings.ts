import { visit } from 'unist-util-visit'
import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'

interface ExportRef {
  value: string
  url: string
  depth: number
}

interface Options {
  exportRef: ExportRef[]
}

export default function remarkTocHeadings(options: Options) {
  return (tree) =>
    visit(tree, 'heading', (node) => {
      const textContent = toString(node)
      options.exportRef.push({
        value: textContent,
        url: '#' + slug(textContent),
        depth: node.depth,
      })
    })
}
