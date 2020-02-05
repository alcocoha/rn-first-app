import React from 'react';
import { Container, Content, Spinner } from 'native-base';
import { ROUTES, STORAGE_KEYS } from '../../constants';
import { getItem } from '../../utils/storage';
import styles from './style';

export default ({ navigation }) => {

    const tokenValidation = async () => {
        const token = await getItem( STORAGE_KEYS.ACCESS_TOKEN );
        console.log('token: ', token)
        return token;
    }

    React.useEffect( () => {
        const token = tokenValidation();
        let route = ROUTES.LOGIN;

        if( token ) route = ROUTES.HOME; 
        navigation.navigate( route );
    });

    return (
        <Container>
            <Content contentContainerStyle={ styles.content }>
                <Spinner color="red"/>
            </Content>
        </Container>
    );
};