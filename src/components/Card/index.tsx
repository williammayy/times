import React from 'react';

import { Container, Image, Title } from './styles';

import americaImg from '../../assets/img/america.png';

export function Card(){
    return (
        <Container>
            <Image source={americaImg} resizeMode="contain"/>
            <Title>América</Title>
        </Container>
    )
}