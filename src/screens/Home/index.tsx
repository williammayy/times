import React from 'react';

import { Container, Header, Title, Content } from './styles';

import { Card } from '../../components/Card';

export function Home() {
    return (
        <Container>
            <Header>
                <Title>CAMPEONATO BRASILEIRO</Title>
            </Header>

            <Content>
                <Card/>
                <Card/>
            </Content>

        </Container>
    );
}