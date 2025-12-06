
import { Box } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { LoginCard } from "../components/Card/LoginCard"
const Home = () => {
    return(
            <Box
                minH="100vh"
                bgGradient="linear(to-br, purple.600, pink.400)"
            >

                <Flex
                align="center"
                justify="center"
                minH="calc(100vh - 64px)"
                px="4"
                >
                    <LoginCard />
                </Flex>
            </Box>
    )
}
export default Home