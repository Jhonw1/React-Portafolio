import { List } from '../List/List'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='menu'>
        <ul>
          <List name="Home" path={'/'} />
          <List name="About" path={'/About'} />
          <List name="Contact" path={'/Contact'} />
          <List name="Compras" path={'/Compras'} />

        </ul>
    </nav>
  )
}
{/* <List path="/" name="Home" ></List>
<List path="/About" name="About"></List>
<List path="/Contact" name="Contact"></List>
<List path="/Compras" name="Compras"></List> */}