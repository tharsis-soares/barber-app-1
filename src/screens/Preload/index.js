import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

import BarberLogo from '../../assets/barber.svg';

export default () => {
    return (
        <Container>
            <BarberLogo width={120} height={40} />
        </Container>
    )
}