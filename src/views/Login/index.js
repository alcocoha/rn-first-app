import React from 'react';
import { Container, Content, Text, Button, Grid } from 'native-base';
import styles from './style';
import { Image } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { saveItem } from '../../utils/storage';
import { STORAGE_KEYS, GOOGLE_TYPES, ROUTES } from '../../constants';
import env from '../../../env';

const googleImage = require('../../../assets/google-icon-1.png');

const Login = ({ navigation }) => {

    const handleLoginPress = async () => {

        try {
            const { type, accessToken, user } = await Google.logInAsync( env() );
    
            if( type === GOOGLE_TYPES.SUCCESS ) {
                const userResult = await saveItem( STORAGE_KEYS.USER_INFO, JSON.stringify( user ) );
                const tokenResult = await saveItem( STORAGE_KEYS.ACCESS_TOKEN, JSON.stringify( accessToken ) );

                if( userResult && tokenResult ) {
                    navigation.navigate( ROUTES.HOME );
                } else {
                    console.error( 'error al iniciar sesión' );
                }
            }
        } catch (error) {
            console.error(error);
        }

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