import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Grid,
    Flex,
    Image,
    Text,
    Button,
    Input,
    useMediaQuery
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import IProdutoCarrinho from '../../interfaces/produtoCarrinho'

import { BsTrash, BsTruck } from 'react-icons/bs';
import { modificarQuantidade, removeProduct } from '../../store/reducers/carrinho';

import api from '../../services/api';
import { useState, useEffect } from 'react';

type Props = {
    isOpen: boolean
    onClose: () => void
}

interface IState {
    carrinho: IProdutoCarrinho[] | []
}




export default function DrawerCart(props: Props) {

    const { isOpen, onClose } = props;

    const carrinho = useSelector((state: IState) => state.carrinho);

    const dispatch = useDispatch();

    const [endereco, setEndereco] = useState({
        cep: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    const [errorCep, setErrorCep] = useState('');

    const [valorTotalCompra, setValorTotalCompra] = useState(0);

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')



    useEffect(() => {

        function calcularValorTotal() {
            let valorTotal = 0;

            carrinho.forEach((produtoCarrinho) => {
                valorTotal += produtoCarrinho.quantidadeCompra * produtoCarrinho.valor
            })

            return setValorTotalCompra(valorTotal);
        }

        calcularValorTotal();

    }, [carrinho])


    async function buscarCep() {

        await api.get(`${endereco.cep}/json/`).then((response) => {
            setEndereco({
                cep: response.data.cep,
                rua: response.data.logradouro,
                bairro: response.data.bairro,
                cidade: response.data.localidade,
                estado: response.data.uf
            })
            setErrorCep('');
            console.log("Sucesso");
        }).catch((err) => {
            setErrorCep('CEP INVÁLIDO');
            setEndereco({
                cep: '',
                rua: '',
                bairro: '',
                cidade: '',
                estado: ''
            })
        })

    }

    return (
        <Drawer
            onClose={onClose}
            isOpen={isOpen}
            size="sm"
            colorScheme="green"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton
                    color="white"
                />
                <DrawerHeader
                    display="flex"
                    bg="black"
                    color="white"
                    alignItems="center"
                >
                    Carrinho de Compras
                </DrawerHeader>
                <DrawerBody>
                    {carrinho.length > 0
                        ?
                        <>
                            <Grid
                                templateColumns='repeat(1, 1fr)'
                                gap={6}
                                marginTop="20px"
                            >
                                {carrinho.map((produtoCarrinho) => (
                                    <Flex
                                        width="100%"
                                        height="100%"
                                    >
                                        <Flex
                                            width="30%"
                                        >
                                            <Image
                                                src={produtoCarrinho.imagem}
                                                alt={produtoCarrinho.nome}
                                                width="80px"
                                                height="80px"
                                            />
                                        </Flex>
                                        <Flex
                                            width="70%"
                                            flexDirection="column"
                                            height="100%"
                                        >
                                            <Flex
                                                justifyContent="space-between"
                                                height="50%"
                                            >
                                                <Text>
                                                    {produtoCarrinho.nome}
                                                </Text>
                                                <BsTrash
                                                    cursor="pointer"
                                                    onClick={() => dispatch(removeProduct(produtoCarrinho))}
                                                />
                                            </Flex>
                                            <Flex
                                                height="50%"
                                                alignItems="center"
                                            >
                                                <Button
                                                    color="white"
                                                    width="25px"
                                                    bg="black"
                                                    border="none"
                                                    borderRadius="8px 0px 0px 8px"
                                                    cursor="pointer"
                                                    onClick={() => {
                                                        if (produtoCarrinho.quantidadeCompra > 1) {
                                                            dispatch(modificarQuantidade({ id: produtoCarrinho.id, quantidade: -1 }))
                                                        }
                                                    }}
                                                >
                                                    -
                                                </Button>
                                                <Text
                                                    padding="10px"
                                                >
                                                    {produtoCarrinho.quantidadeCompra}
                                                </Text>
                                                <Button
                                                    color="white"
                                                    width="25px"
                                                    bg="black"
                                                    border="none"
                                                    borderRadius="0px 8px 8px 0px"
                                                    cursor="pointer"
                                                    onClick={() => dispatch(modificarQuantidade({ id: produtoCarrinho.id, quantidade: 1 }))}
                                                >
                                                    +
                                                </Button>
                                                <Text
                                                    marginLeft={isLargerThan800 ? "80px" : "55px"}
                                                >
                                                    {(produtoCarrinho.quantidadeCompra * produtoCarrinho.valor).toLocaleString('pt-BR', {
                                                        minimumFractionDigits: 2, style: 'currency', currency: 'BRL'
                                                    })}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                ))}
                            </Grid>
                            <Flex
                                justifyContent="space-between"
                                marginTop="60px"
                            >
                                <Text
                                    fontSize="22px"
                                >
                                    Subtotal:
                                </Text>
                                <Text
                                    fontSize="22px"
                                    fontWeight="700"
                                    color="black"
                                >
                                    {valorTotalCompra.toLocaleString('pt-BR',
                                        { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
                                    }
                                </Text>
                            </Flex>
                            <Flex
                                alignItems="center"
                                marginTop="25px"
                            >
                                <BsTruck
                                    fontSize="22px"
                                />
                                <Text
                                    fontSize="18px"
                                    marginLeft="10px"
                                >
                                    Meios de envio:
                                </Text>
                            </Flex>
                            <Input
                                marginTop="12px"
                                placeholder="Seu CEP"
                                maxLength={8}
                                onBlur={() => buscarCep()}
                                value={endereco.cep}
                                onChange={(event) => setEndereco({ ...endereco, cep: event.target.value })}
                            />
                            <Text
                                color="red"
                                margin="0px 0px 0px 5px"
                                fontSize="12px"
                            >
                                {errorCep}
                            </Text>
                            <Text
                                marginTop="25px"
                                fontWeight="700"
                                fontSize="20px"
                            >
                                {endereco.rua}
                            </Text>
                            <Text
                                marginTop="2px"
                            >
                                {endereco.cidade} {endereco.estado}
                            </Text>
                            <Text
                                fontWeight="200"
                            >
                                {endereco.bairro}
                            </Text>
                            <Flex
                                justifyContent="space-between"
                                marginTop="50px"
                            >
                                <Text
                                    fontSize="22px"
                                >
                                    Total:
                                </Text>
                                <Text
                                    fontSize="22px"
                                    fontWeight="700"
                                    color="black"
                                >
                                    {valorTotalCompra.toLocaleString('pt-BR',
                                        { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
                                </Text>
                            </Flex>
                            <hr />
                            <Button
                                marginTop="50px"
                                width="100%"
                                color="white"
                                bg="black"
                            >
                                FINALIZAR COMPRA
                            </Button>
                        </>
                        :
                        <Text
                            fontSize="20px"
                            marginTop="20px"
                            textAlign="center"
                        >
                            Não possui produtos no carrinho!
                        </Text>
                    }
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}