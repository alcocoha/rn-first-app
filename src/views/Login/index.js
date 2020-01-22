import React from 'react';
import { Container, Content, Text, Button, Grid } from 'native-base';
import styles from './style';
import { Image } from 'react-native';

const googleImage = require('../../../assets/google-icon-1.png');

const Login = () => {

    return (
        <Container>
            <Content contentContainerStyle={ styles.content }>
                <Grid style={ styles.grid }>
                    <Text style={ styles.title }>Bienvenid@</Text>
                    <Text style={ styles.subtitle }>Inicia sesión para continuar</Text>
                    <Button light style={ styles.googleBtn }>
                        <Image source={googleImage } style={ styles.googleIcon }/>
                        <Text>Google</Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    );
};

export default Login;