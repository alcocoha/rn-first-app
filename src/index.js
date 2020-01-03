import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import Store from './redux/store';

import * as Font from 'expo-font';
import { Spinner } from 'native-base';

import { FONTS } from './constants'

const store = Store();
const ROBOTO = require('../node_modules/native-base/Fonts/Roboto.ttf');
const ROBOTO_MEDIUM = require('../node_modules/native-base/Fonts/Roboto_medium.ttf');

export default () => {

    const { ROBOTO_FONT, ROBOTO_MEDIUM_FONT } = FONTS;

    const [ fontsLoader, setFontLoader ] = React.useState(false);

    const loadFonts = async () => {
        await Font.loadAsync( {
            [ROBOTO_FONT]: ROBOTO,
            [ROBOTO_MEDIUM_FONT]: ROBOTO_MEDIUM
        } );
        setFontLoader(true);
    }

    React.useEffect( () => {
        if( !fontsLoader) {
            loadFonts();
        }
    }, [fontsLoader] );

    if( !fontsLoader ){
        return <Spinner color="red"/>
    }

    return (
        <Provider store={ store }>
            <Routes/>
        </Provider>
    );
};