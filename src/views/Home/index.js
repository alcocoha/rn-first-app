import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Grid } from 'native-base';
import { isEmpty } from 'lodash';

import Header from '../../components/Header';
import SearchComponent from '../../components/SearchComponent';
import { getItem } from '../../utils/storage';
import { STORAGE_KEYS } from '../../constants';
import styles from './style';
import genericStyles from '../../styles';

const Home = () => {

    const [ userData, setUserData ] = React.useState( {} );

    const getUserData = async () => {
        const data = await getItem(STORAGE_KEYS.USER_INFO);
        setUserData( JSON.parse( data ) );
    }

    React.useEffect( () => {
        if( isEmpty( userData ) ) {
            console.log('ESTA VACIO');
            getUserData();
        }
    }, [ userData ] );

    return (
        <Container style={styles.container}>
            <Header imageUri={ userData.photoUrl }/>
            <Content contentContainerStyle={ genericStyles.centerContent }>
                <Grid contentContainerStyle={ genericStyles.centerGrid }>
                    <SearchComponent />
                </Grid>
            </Content>
        </Container>
    );
};

export default Home;