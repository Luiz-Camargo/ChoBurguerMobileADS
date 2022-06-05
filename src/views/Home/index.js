import React from 'react'
import {Container, Title} from './styles'
import Hamburguer from '../../components/svg/Hamburguer'
import Header from '../../components/styled/Header'

export default function Home(){
    return (
        <>
        <Header headerTitle="BURGER" />
        <Container>
        <Hamburguer />
            <Title>Início</Title>
        </Container>
        </>
    )
}