import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {

    const BoxStyles = {
        p : "10px",
        bg : "purple.400",
        color : "white",
        m : "10px",
        textAlign : "center",
        filter: "blur(1px)",
        ":hover": {
            color: "black",
            bg: "blue.300"
        }
    }

    return (
        
      <Container as="section">
        <Heading my="30px" p="10px">Dashboard</Heading>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, cupiditate!</Text>
        <Text color="blue.300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, cupiditate!</Text>

        <Box bg="orange.400">
            <Text color="white">This is a box</Text> 
        </Box>

        <Box sx={BoxStyles}>
            This is a box styled with sx
        </Box>

        </Container>
    )
  }