import { Box, Center, Flex } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" h="100vh" w="100vw">
      <Header />
      <Center flex="1" direction="column">
        {children}
      </Center>
      <Footer />
    </Flex>
  )
}
