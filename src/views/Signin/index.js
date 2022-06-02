import React, { useState } from 'react'
import { Title } from './styles'
import { Container, ImagemSVG, InputArea} from '../../components/styled/Others'
import IconInput from '../../components/styled/IconInput'
import Hamburguer from '../../components/svg/Hamburguer'
import Header from '../../components/styled/Header'

export default function Signin(){
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    return (
        <>
        <Header headerTitle="Chô Burguer" />
        <Container>
            <ImagemSVG escala="0.4">
                <Hamburguer />
            </ImagemSVG>
            <InputArea>
                <Title>Login</Title>
                <IconInput
                    icon="email"
                    placeholder="Digite o seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <IconInput
                    icon="lock"
                    placeholder="Digite a sua senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />        

            </InputArea>
        </Container>
       </>
    )
}