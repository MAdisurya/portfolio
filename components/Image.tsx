import { FC } from 'react'
import NextImage, { ImageProps } from 'next/image'

interface Props extends ImageProps {}

// eslint-disable-next-line jsx-a11y/alt-text
const Image: FC<Props> = ({ ...rest }) => <NextImage {...rest} />

export default Image
