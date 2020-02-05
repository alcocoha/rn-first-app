import React from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Thumbnail } from 'native-base';
import { COLORS } from '../../constants';
import styles from './styles';

const HeaderContainer = ({ imageUri }) => {
    return (
        <Header androidStatusBarColor={ COLORS.PRIMARY_DARK } style={ styles.header }>
            <Left>
                <Button transparent>
                <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title> Header</Title>
            </Body>
            <Right>
                <Thumbnail source={ { uri: imageUri } } small/>
            </Right>
        </Header>
    );
};

export default HeaderContainer;