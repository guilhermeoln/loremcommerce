import { Flex, Image, Text, Select, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import IProduto from '../../interfaces/produto';
import IProdutoCarrinho from '../../interfaces/produtoCarrinho';
import { addToCart, modificarQuantidade } from '../../store/reducers/carrinho';


interface IState {
    carrinho: IProdutoCarrinho[] | []
    produtos: IProduto[]
}

export default function CardProduto(props: IProduto) {

    const { nome, imagem, id, tamanhos, categoria, valor, destaque } = props;

    const { carrinho, produtos } = useSelector((state: IState) => ({
        carrinho: state.carrinho,
        produtos: state.produtos
    }));

    const produtoNoCarrinho = carrinho.find((produtoCarrinho) => produtoCarrinho.id === id);

    const dispatch = useDispatch();

    return (
        <Flex
            flexDirection="column"
            padding="10px"
            borderRadius="8px"
            _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                transition: "ease 0.5s all",
                cursor: "pointer"
            }}
            alignItems="center"
        >
            <Image
                src={imagem}
                alt={nome}
                width="300px"
                height="300px"
            />
            <Text
                textAlign="center"
                marginTop="20px"
                fontWeight="200"
            >
                {nome}
            </Text>
            <Text
                marginTop="10px"
                fontSize="20px"
                fontWeight="700"
                color="black"
            >
                {valor.toLocaleString('pt-BR',
                    { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
                }
            </Text>
            <Flex
                marginTop="20px"
                width="80%"
            >
                <Select
                    size="sm"
                    textAlign="center"
                    placeholder="Escolha o tamanho"
                >
                    {tamanhos.map((tamanho, index) => (
                        <option value={tamanho} key={index}>
                            {tamanho}
                        </option>
                    ))}
                </Select>
            </Flex>
            {produtoNoCarrinho
                ?
                <Flex
                    marginTop="20px"
                >
                    <Button
                        color="white"
                        width="25px"
                        bg="black"
                        border="none"
                        borderRadius="8px 0px 0px 8px"
                        cursor="pointer"
                        onClick={() => {
                            if (produtoNoCarrinho.quantidadeCompra > 1) {
                                dispatch(modificarQuantidade({ id: produtoNoCarrinho.id, quantidade: -1 }))
                            }
                        }}
                    >
                        -
                    </Button>
                    <Text
                        display="flex"
                        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                        padding="5px"
                        width="30PX"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {produtoNoCarrinho?.quantidadeCompra}
                    </Text>
                    <Button
                        color="white"
                        width="25px"
                        bg="black"
                        border="none"
                        borderRadius="0px 8px 8px 0px"
                        cursor="pointer"
                        onClick={() => dispatch(modificarQuantidade({ id: produtoNoCarrinho.id, quantidade: 1 }))}
                    >
                        +
                    </Button>
                </Flex>
                :
                <Button
                    width="80%"
                    padding="15px"
                    bg="black"
                    border="none"
                    borderRadius="10px"
                    color="white"
                    marginTop="20px"
                    cursor="pointer"
                    onClick={() => dispatch(addToCart(props))}
                    _hover={{
                        bgColor: "none"
                    }}
                >
                    COMPRAR
                </Button>
            }
        </Flex>
    );
}