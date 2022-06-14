import { styled, css } from '../../../stitches.config'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>
const Image = styled('img', {
  verticalAlign: 'middle',
  maxWidth: '100%'
})

export const ImageBox = ({ ...props }: ImageProps) => {
  return <Image {...props} />
}
