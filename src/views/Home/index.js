import React from 'react'
import {Container, Title} from './styles'
import Hamburguer from '../../components/svg/Hamburguer'

export default function Home(){
    return (
        <Container>
        <Hamburguer />
            <Title>Início</Title>
        </Container>
    )
}