import {
    Flex,
    Grid,
    GridItem
} from '@chakra-ui/react';

import CardAddons from './CardAddons';


import { useMediaQuery } from '@chakra-ui/react'



export default function Addons(){

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    return(
        <Flex
            width="100%"
            bg="#F9F9F9"
            padding="50px 0px"
            alignItems="center"
            justifyContent="center"
            marginTop="150px"
        >
            <Grid templateColumns={isLargerThan800 ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)'} gap={6} gridRowGap="50px" >
                <CardAddons />
                <CardAddons />
                <CardAddons />
                <CardAddons />
            </Grid>
        </Flex>
    );
}