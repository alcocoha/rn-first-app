import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Spinner } from 'native-base';
import { COLORS } from '../../constants';
import styles from './style';

const FixedList = ({ places, containerStyle, handlerPress }) => {

    console.log('places--->', places)

    if( places && places.length > 0) {
        return (
            <Container style={ [styles.container, containerStyle] }>
                <Content>
                    <List>
                        { places.map( (place, index) => 
                            (<ListItem
                                key={ index }
                                onPress={ () => handlerPress( place ) }
                            >
                                <Text>{ place.PlaceName }</Text>
                            </ListItem>)
                        ) }
                    </List>
                </Content>
            </Container>
        );
    } else {
        return <Spinner size={ 30 } color={ COLORS.PRIMARY }/>
    }
};

export default FixedList;