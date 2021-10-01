const Avatar = ({src, ...rest}) => (
  <img
    src={src}
    {...rest}
    alt="no image"
    style={{
      'border-top-left-radius': '50% 50%',
      'border-top-right-radius': '50% 50%',
      'border-bottom-right-radius': '50% 50%',
      'border-bottom-left-radius': '50% 50%',
    }}
  />
)

export default Avatar
