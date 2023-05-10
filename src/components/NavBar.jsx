import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";

export default function NavBar() {
  return (

    //understanginf the flex element 

    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //     <Box w="100px" h="50px" bg="red">1</Box>
    //     <Box w="100px" h="50px" bg="purple">2</Box>
    //     <Box w="100px" h="50px" flexGrow="1" bg="pink">3</Box>
    //     <Box w="100px" h="50px" flexGrow="2" bg="blue">4</Box>
    // </Flex>

    <Flex as="nav" align="center" mb={4}>
        <Heading as="h1">Svadhyaya app</Heading>
        <Spacer />
        <HStack spacing="2">
            <Box bg="gray.200">M</Box>
            <Text>some@email.dev</Text>
            <Button colorScheme="teal">Logout</Button>
        </HStack>
    </Flex>
  )
}
