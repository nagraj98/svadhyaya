import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Grid, GridItem } from "@chakra-ui/react"
import SideBar from "../components/SideBar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
            as="aside" 
            colSpan={{base:6, lg:2, xl:1}}
            minHeight={{lg:"100vh"}}
            bg="purple.200"
            p={{base:"20px", lg:"30px"}}
        >
            <SideBar />
        </GridItem>

        <GridItem 
            colSpan={{base:6, lg:4, xl:5}}
            as="main"
            p="40px"
        >
            <NavBar />
            <Outlet />
        </GridItem>
    </Grid>
  )
}