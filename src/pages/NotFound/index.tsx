import {
    Flex,
    Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';




export default function NotFound(){
    return(
        <Flex
            flexDirection="column"
            width="100%"
            height="80vh"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                fontSize="60px"
                fontWeight="700"
            >
                404
            </Flex>
            <Flex
                marginTop="-20px"
            >
                Página não encontrada...
            </Flex>
            <Button>
                <Link to="/">
                    INÍCIO
                </Link>
            </Button>
        </Flex>
    );
}