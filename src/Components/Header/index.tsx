import React from 'react';

import {
    Flex,
    Image,
    Text,
    useDisclosure,
    Button
} from '@chakra-ui/react';

import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import IProdutoCarrinho from '../../interfaces/produtoCarrinho';
import DrawerCart from '../DrawerCart';
import { Link } from 'react-router-dom';


interface IState {
    carrinho: IProdutoCarrinho[] | []
}


export default function Header() {

    const carrinho = useSelector((state: IState) => state.carrinho);

    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <Flex
            width="100%"
            height="150px"
            flexDirection="column"
            bgColor="black"
            color="white"
            position="fixed"
            zIndex="2"
        >
            <Flex
                width="100%"
                height="70%"
                alignItems="center"
                justifyContent="space-between"
            >
                <Text
                    color="white"
                    fontSize="38px"
                    marginLeft="15px"
                >
                    LOREM
                </Text>
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    marginRight="15px"
                >
                    <BsCart3
                        fontSize="30px"
                        onClick={onOpen}
                        cursor="pointer"
                    />
                    <Text
                        position="absolute"
                        margin="-5px 0px 20px 25px"
                        bg="white"
                        width="20px"
                        height="20px"
                        borderRadius="50%"
                        color="black"
                        textAlign="center"
                    >
                        {carrinho.length}
                    </Text>
                    <Text
                        fontSize="12px"
                        marginTop="5px"
                        fontWeight="400"
                    >
                        Meu carrinho
                    </Text>
                    <DrawerCart
                        isOpen={isOpen}
                        onClose={onClose}
                    />
                </Flex>
            </Flex>
            <hr />
            <Flex
                width="100%"
                height="30%"
                alignItems="center"
                justifyContent="center"
            >
                <Text
                    marginRight="20px"
                    fontWeight="100"
                >
                    <Link to="/">
                        Início
                    </Link>
                </Text>
                <Text
                    marginRight="20px"
                    fontWeight="100"
                >
                    <Link to="/camisetas">
                        Camisetas
                    </Link>
                </Text>
                <Text
                    marginRight="20px"
                    fontWeight="100"
                >
                    <Link to="/bermudas">
                        Bermudas
                    </Link>
                </Text>
                <Text
                    marginRight="20px"
                    fontWeight="100"
                >
                    <Link to="/calçados">
                        Calçados
                    </Link>
                </Text>
            </Flex>
        </Flex>
    );
}