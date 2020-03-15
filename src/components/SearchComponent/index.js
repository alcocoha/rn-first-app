import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { Form, Item, Input, Icon, Picker, Button, Text } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';

import { getLocations } from '../../redux/actions/itineraries';

const SearchComponent = () => {

    const dispatch = useDispatch();

    const [ originPlace, setOriginPlace ] = useState('');
    const [ destinationPlace, setDestinationPlace ] = useState('');
    const [ outboundDate, setOutboundDate ] = useState('Salida');
    const [ inboundDate, setInboundDate ] = useState('Regreso');
    const [ flight, setFlight ] = useState();
    const [ adults, setAdults ] = useState("0");
    const [ children, setChildren] = useState("0");

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        if(show){
            const currentDate = selectedDate || date;
            const showActive = Platform.OS === 'ios' ? true : false;
            const date = currentDate;
            const realTime = `${date.getFullYear()}-${ date.getMonth() + 1 }-${date.getDate()}`;

            if( flight === 'leave' ){
                setOutboundDate( realTime );
            } else {
                setInboundDate( realTime );
            }
            setShow( showActive );
            setDate( currentDate );
        }
    };

    const showMode = currentMode => {
        setMode(currentMode);
        setShow(true);
    };

    const showDatepicker = flight => {
        setFlight(flight);
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const searchButtonIsDisabled = () => {
        if( !originPlace ||
            !destinationPlace ||
            !outboundDate ||
            !inboundDate ||
            !adults){
                return true;
        }
        return false;
    }

    const handleSearch = () => {
        dispatch( getLocations() );
    }
    
    const handleSearchOrigin = ({ nativeEvent }) => {
        if(originPlace.length > 3){
            console.log('Dispara la accion')
            console.log('handleSearchOrigin-->nativeEvent', nativeEvent)
            dispatch( getLocations(originPlace) );
        }
    }
    const handleSearchDestination = ({ nativeEvent }) => {
        if(destinationPlace.length > 3){
            console.log('Dispara la accion')
            console.log('handleSearchDestination-->nativeEvent', nativeEvent)
            dispatch( getLocations(destinationPlace) );
        }
    }
    return (
        <Form style={ styles.form }>
            <View>
                {show && (
                    <DateTimePicker
                        testID="foo"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
            <Item>
                <Icon name="ios-home" />
                <Input
                    placeholder="Origen"
                    value={ originPlace }
                    onChangeText={ setOriginPlace }
                    onKeyPress={ handleSearchOrigin }
                />
            </Item>
            <Item>
                <Icon name="ios-airplane"/>
                <Input
                    placeholder="Destino"
                    value={ destinationPlace }
                    onChangeText={ setDestinationPlace }
                    onKeyPress={ handleSearchDestination }
                />
            </Item>
            <Item style={ styles.datesContainer }>
                <Button
                    transparent={true}
                    onPress={ () => showDatepicker('leave') }
                >
                    <Icon style={ styles.clearButton } ios="ios-calendar" android="md-calendar" />
                    <Text style={ styles.clearButton }>{ outboundDate }</Text>
                </Button>

                <Button
                    transparent={true}
                    onPress={ () => showDatepicker('return') }
                >
                    <Icon style={ styles.clearButton } ios="ios-calendar" android="md-calendar" />
                    <Text style={ styles.clearButton }>{ inboundDate }</Text>
                </Button>

            </Item>
            <Item>
                <Icon name="person"/>
                <Picker
                    selectedValue={ adults }
                    onValueChange={ e => setAdults(e) }
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
                    onValueChange={ e => setChildren(e) }
                >
                    <Picker.Item label="Niños" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                </Picker>
            </Item>
            <Button
            style={ styles.button }
            disabled={ searchButtonIsDisabled() }
            onPress={ handleSearch }>
                <Text>Buscar</Text>
                <Icon name="search" style={ styles.buttonIcon } />
            </Button>
        </Form>
    );
};

export default SearchComponent;