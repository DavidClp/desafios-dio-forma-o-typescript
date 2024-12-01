import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box as="header" bg={bg} color={color} px={4} boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" letterSpacing="wide">
          Dio Bank
        </Text>

   
        <Flex alignItems="center" gap={4}>
          <IconButton
            size="md"

            aria-label="Toggle theme"
            onClick={toggleColorMode}
          >
            {colorMode === 'light'? <FaRegMoon /> : <MdOutlineWbSunny />} 

          </IconButton>
          <Button as="a"  colorScheme="teal" variant="solid">
            Login
          </Button>
          <Button as="a" colorScheme="teal" variant="outline">
            Cadastro
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
