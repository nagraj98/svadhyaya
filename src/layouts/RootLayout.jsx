import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
            as="aside" 
            colSpan={1}
            minHeight="100vh"
            bg="purple.200"
            p="30px"
        >
            <span>sidebar</span>
        </GridItem>

        <GridItem 
            colSpan={5}
            as="main"
            p="40px"
        >
            <NavBar />
            <Outlet />
        </GridItem>
    </Grid>
  )
}