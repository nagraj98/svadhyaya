import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

    const tasks = useLoaderData()


    return (
        <SimpleGrid  spacing={10} minChildWidth="300px">
            
            {tasks && tasks.map(task => (
                <Card key={task.id}>
                    <CardHeader>
                        <Flex gap={"20px"}>
                            <Box>
                                AV
                            </Box>
                            <Box>
                                <Heading size="md">
                                    {task.title}
                                </Heading>
                                <Text>by {task.author}</Text>
                            </Box>
                        </Flex>
                    </CardHeader>
                    <CardBody>{task.description}</CardBody>
                    <Divider />
                    <CardFooter>
                        <HStack>
                            <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                            <Button variant="ghost" leftIcon={<EditIcon />}>Edit</Button>
                        </HStack>
                    </CardFooter>
                </Card>
            ))  
        }
            

        </SimpleGrid>
    )
  }

export const tasksLoader = async() => {
    const res = await fetch("http://localhost:4000/tasks")
    
    return res.json()
}