import { Grid, IconButton, List, ListItem, ListItemText, TextField, } from "@mui/material"
import './NavBar.css'
import { IoPersonSharp } from "react-icons/io5"
import { FaCartShopping } from "react-icons/fa6";

const NavBar = () => {
  return (
    <Grid container className="navbar-container">
      <Grid item xs={5} sm={5}>
        <List component={"nav"} className="navbar" >
          <ListItem >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem >
            <ListItemText primary="New" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Men" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Woman" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Kid's" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Shoes" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Accessories" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={4} sm={4} className="navbar-search" >
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          fullWidth />
      </Grid>
      <Grid item xs={1} sm={1} className="navbar-cart-login" >
        <IconButton>
          <FaCartShopping size={20} color="black" />
        </IconButton>
        <IconButton>
          <IoPersonSharp size={20} color="black" />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default NavBar