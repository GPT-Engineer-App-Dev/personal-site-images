import { Box, Flex, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react';
import { FaCamera } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Welcome to GPT Engineer</Heading>
        <Text fontSize="lg" mb={6}>Explore the capabilities of AI in web development.</Text>
      </Flex>
      <Box bg="gray.100" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Gallery</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box boxSize="sm">
            <Image src="https://via.placeholder.com/300" alt="Placeholder image" />
            <Text mt={2} fontSize="sm" textAlign="center">Project 1</Text>
          </Box>
          <Box boxSize="sm">
            <Image src="https://via.placeholder.com/300" alt="Placeholder image" />
            <Text mt={2} fontSize="sm" textAlign="center">Project 2</Text>
          </Box>
          <Box boxSize="sm">
            <Image src="https://via.placeholder.com/300" alt="Placeholder image" />
            <Text mt={2} fontSize="sm" textAlign="center">Project 3</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;