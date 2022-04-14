
const TextGradient = (props) => {
  const {Element = 'span', children} = props;


  return <Element className="text-gradient">{children}</Element>
}

export default TextGradient
