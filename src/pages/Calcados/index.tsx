import {
    Flex,
    Grid,
    Text,
    useMediaQuery
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CardProduto from '../../Components/CardProduto';
import IProduto from '../../interfaces/produto';

interface IState {
    produtos: IProduto[]
}


export default function Calcados() {
    const produtos = useSelector((state: IState) => state.produtos);

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

    return (
        <Flex
            flexDirection="column"
            width="100%"
            alignItems="center"
            paddingBottom="80px"
        >
            <Text
                fontSize="40px"
                color="black"
                marginTop="20px"
            >
                Calçados
            </Text>
            <Grid
                templateColumns={isLargerThan800 ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)'}
                gap={6}
                gridRowGap="50px"
                marginTop="20px"
            >
                {produtos.filter((produto) => produto.categoria === 'calçados').map((produto) => (
                    <CardProduto {...produto} />
                ))}
            </Grid>
        </Flex>
    );
}