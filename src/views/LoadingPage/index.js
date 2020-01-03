import React from 'react';
import { Container, Content, Text, Spinner, Grid } from 'native-base';
import styles from './style';
import { ROUTES } from '../../constants';

export default ({ navigation }) => {

    React.useEffect( () => {
        navigation.navigate( ROUTES.LOGIN );
    });

    return (
        <Container>
            <Content contentContainerStyle={ styles.content }>
                <Spinner color="red"/>
            </Content>
        </Container>
    );
};