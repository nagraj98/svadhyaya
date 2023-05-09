import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";

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
        <SimpleGrid p="10px" spacing={10} bg="gray.100" minChildWidth="200px">
            <Box h="200px" border="2px solid"></Box>
            <Box h="200px" border="2px solid"></Box>
            <Box h="200px" border="2px solid"></Box>
            <Box h="200px" border="2px solid"></Box>

            <Box h="200px" border="2px solid"></Box>
            <Box h="200px" border="2px solid"></Box>
            <Box h="200px" border="2px solid"></Box>
            <Box h="200px" border="2px solid"></Box>

            <Box h="200px" border="2px solid"></Box>
            <Box h="200px" border="2px solid"></Box>
            <Box h="200px" border="2px solid"></Box>
            <Box h="200px" border="2px solid"></Box>

        </SimpleGrid>
    )
  }