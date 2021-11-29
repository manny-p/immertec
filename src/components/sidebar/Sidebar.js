import Layout from '@/components/layout/Layout';
import {Box, Divider, Flex, Grid, GridItem, Spacer, Stack} from '@chakra-ui/react';
import {Logo} from '@/components/sidebar/Logo';
import {SearchField} from '@/components/sidebar/SearchField';
import {NavLink} from '@/components/sidebar/NavLink';
import {FaRegBell, FaRegChartBar, FaRegHeart, FaRegPaperPlane, FaRegQuestionCircle, FaUser} from 'react-icons/fa';
import {UserProfile} from '@/components/sidebar/UserProfile';

const Sidebar = ({children}) => {
    return (
        <Layout>
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                bg="ghostwhite"
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <Flex
                        height="90vh"
                        width="100%"
                        direction="column"
                        bg="teal.600"
                        color="white"
                        px={6}
                        py={8}
                    >
                        <Box mb={8}>
                            <Logo/>
                        </Box>
                        <SearchField mb={6}/>
                        <Stack spacing={6}>
                            <Stack>
                                <NavLink label="People" icon={FaUser} isActive/>
                                <NavLink label="Favorites" icon={FaRegHeart}/>
                                <NavLink label="Workflow" icon={FaRegPaperPlane}/>
                                <NavLink label="Statistics" icon={FaRegChartBar}/>
                            </Stack>
                            <Divider borderColor="whiteAlpha.400"/>
                            <Stack>
                                <NavLink label="Notifications" icon={FaRegBell}/>
                                <NavLink label="Help Center" icon={FaRegQuestionCircle}/>
                            </Stack>
                        </Stack>
                        <Spacer/>
                        <UserProfile
                            name="firstName LastName"
                            image="https://via.placeholder.com/150"
                            email="someEmail@example.com"
                        />
                    </Flex>
                </GridItem>
                <GridItem
                    colSpan={4}
                    rowSpan={2}
                    bg="ghostwhite"
                >
                    {children}
                </GridItem>
            </Grid>
        </Layout>
    )
}

export default Sidebar