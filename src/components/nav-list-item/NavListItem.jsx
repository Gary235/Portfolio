import { ActiveItemLink, Item, ItemLink } from "./styles"

const NavListItem = (props) => {
  const {active = false, text, url, clickHandler} = props

  const Link = active ? ActiveItemLink : ItemLink;

  return (
    <Item onClick={clickHandler} className="link">
      <Link href={url}>{text}</Link>
    </Item>
  )
}

export default NavListItem
