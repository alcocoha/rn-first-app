import React, { useState } from 'react';
import { Form, Item, Input, Icon, DatePicker, Picker, Button, Text } from 'native-base';
import styles from './style';

const SearchComponent = () => {

    const [ originPlace, setOriginPlace ] = useState('');
    const [ destinationPlace, setDestinationPlace ] = useState('');
    const [ outboundDate, setOutboundDate ] = useState();
    const [ inboundDate, setInboundDate ] = useState();
    const [ adults, setAdults ] = useState("0");
    const [ children, setChildren] = useState("0");

    return (
        <Form style={ styles.form }>
            <Item>
                <Icon name="ios-home" />
                <Input
                    placeholder="Origen"
                    value={ originPlace }
                    onChangeText={ setOriginPlace }
                />
            </Item>
            <Item>
                <Icon
                    name="ios-airplane"
                    value={ destinationPlace }
                    onChangeText={ setDestinationPlace }
                />
                <Input placeholder="Destino" />
            </Item>
            <Item style={ styles.datesContainer }>
                <Icon ios="ios-calendar" android="md-calendar" />
                <DatePicker
                    placeHolderText="Ida"
                    onDateChange={ setOutboundDate }
                />
                <Icon ios="ios-calendar" android="md-calendar" />
                <DatePicker
                    placeHolderText="regreso (opcional)"
                    onDateChange={ setInboundDate }
                />
            </Item>
            <Item>
                <Icon name="person"/>
                <Picker
                    selectedValue={ adults }
                    onValueChange={ setAdults }
                >
                    <Picker.Item label="Adultos" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                </Picker>

                <Icon name="person"/>
                <Picker
                    selectedValue={ children }
                    onValueChange={ setChildren }
                >
                    <Picker.Item label="Niños" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                </Picker>
            </Item>
            <Button style={ styles.button } disabled={true}>
                <Text>Buscar</Text>
                <Icon name="search" style={ styles.buttonIcon } />
            </Button>
        </Form>
    );
};

export default SearchComponent;