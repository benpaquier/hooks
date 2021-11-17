import useComponentDidMount from "../hooks/useComponentDidMount"

const Button = props => {
  useComponentDidMount("Button")

  const { label, handleClick } = props

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  )
}

export default Button
