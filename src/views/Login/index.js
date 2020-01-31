import React from 'react';
import { Container, Content, Text, Button, Grid } from 'native-base';
import styles from './style';
import { Image } from 'react-native';
import * as Google from 'expo-google-app-auth';

const googleImage = require('../../../assets/google-icon-1.png');

const Login = () => {

    const handleLoginPress = async () => {
        const { type, accessToken, user } = await Google.logInAsync({
            iosClientId : '607442737024-5kqmeo6f8bmusngra5ja59bhk39l0mkp.apps.googleusercontent.com',
            androidClientId: '607442737024-r6ck1hss9bj21j5mif99qb6bq3t17021.apps.googleusercontent.com',
            iosStandaloneAppClientId: '607442737024-5kqmeo6f8bmusngra5ja59bhk39l0mkp.apps.googleusercontent.com',
            androidStandaloneAppClientId: '607442737024-r6ck1hss9bj21j5mif99qb6bq3t17021.apps.googleusercontent.com',
        });
        console.log('type:', type)
        console.log('accessToken:', accessToken)
        console.log('user:', user)
    }

    return (
        <Container>
            <Content contentContainerStyle={ styles.content }>
                <Grid style={ styles.grid }>
                    <Text style={ styles.title }>Bienvenid@</Text>
                    <Text style={ styles.subtitle }>Inicia sesión para continuar</Text>
                    <Button light style={ styles.googleBtn } onPress={handleLoginPress}>
                        <Image source={googleImage } style={ styles.googleIcon }/>
                        <Text>Google</Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    );
};

export default Login;