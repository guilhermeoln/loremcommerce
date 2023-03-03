import {
    Flex,
    Text
} from '@chakra-ui/react';

import { RiLuggageCartFill } from 'react-icons/ri';



export default function CardAddons(){
    return(
        <Flex
            width="100%"
        >
            <Flex
                width="30%"
                justifyContent="center"
            >  
                <RiLuggageCartFill 
                    fontSize="60px"
                />
            </Flex>
            <Flex
                flexDirection="column"
                width="70%"
            >
                <Text
                    width="80%"
                    color="black"
                    fontWeight="700"
                >
                    ENVIAMOS SUAS COMPRAS
                </Text>
                <Text>
                    Entrega em todo o país
                </Text>
            </Flex>
        </Flex>
    );
}