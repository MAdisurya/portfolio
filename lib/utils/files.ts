import fs from 'fs'
import path from 'path'

const pipe =
  <T>(...fns: Array<(arg: T | T[]) => any>) =>
  (x: T) =>
    fns.reduce((v, f) => f(v), x)

const flattenArray = <T>(input: T[]) =>
  input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])

const map =
  <T>(fn: (arg: T) => any) =>
  (input: T[]) =>
    input.map(fn)

const walkDir = (fullPath: string) => {
  return fs.statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath)
}

const pathJoinPrefix = (prefix: string) => (extraPath: string) => path.join(prefix, extraPath)

const getAllFilesRecursively = (folder: string): string[] => {
  // short-circuit if folder doesn't exist
  if (!fs.existsSync(folder)) {
    return []
  }

  return pipe(fs.readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder)
}

export default getAllFilesRecursively
