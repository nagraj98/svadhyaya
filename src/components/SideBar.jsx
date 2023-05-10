import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <List spacing={2} color="black">
        <ListItem>
            <ListIcon as={CalendarIcon}></ListIcon>
            <NavLink to="/">Dashboard</NavLink>
        </ListItem>

        <ListItem>
            <ListIcon as={EditIcon}></ListIcon>
            <NavLink to="/create">Create</NavLink>
        </ListItem>

        <ListItem>
            <ListIcon as={AtSignIcon}></ListIcon>
            <NavLink to="/profile">Profile</NavLink>
        </ListItem>
    </List>
  )
}
