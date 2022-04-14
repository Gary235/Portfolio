import { ActiveItemLink, Item, ItemLink } from "./styles"

const NavListItem = (props) => {
  const {active = false, text, url} = props

  const Link = active ? ActiveItemLink : ItemLink;

  return (
    <Item>
      <Link href={url}>{text}</Link>
    </Item>
  )
}

export default NavListItem
