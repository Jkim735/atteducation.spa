import { Tooltip } from 'react-tippy'
const Button = (props) => {
  const {
    className,
    children,
    type = 'button',
    typeBtn = 'button',
    href = '',
    content,
    position = 'top',
    ...rest
  } = props

  const classValue = `font-medium text-lg leading-6 p-3 bg-[#FBCE00] rounded-md shadow-md ${className} transition ease-in-out hover:translate-y-1 hover:scale-105 duration-200`

  const BtnRender =
    typeBtn === 'button' ? (
      <button {...rest} className={classValue} type={type}>
        {children}
      </button>
    ) : (
      <a
        className={classValue}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )

  if (content) {
    return (
      <Tooltip title={content} position={position} trigger="mouseenter">
        {BtnRender}
      </Tooltip>
    )
  } else {
    return BtnRender
  }
}

export default Button
