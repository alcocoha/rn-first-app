import { AsyncStorage } from 'react-native';

export const saveItem = async ( keyName, keyValue ) => {
    try {
        await AsyncStorage.setItem( keyName, keyValue );
        return true;
    } catch (error) {
        console.error(error);
    }
};

export const getItem = async ( keyName ) => {
    try {
        const value = await AsyncStorage.getItem( keyName );
        if (value !== null) {
            // We have data!!
            console.log(value);
            return value;
        }
    } catch (error) {
        console.error(error);
    }
};

export const clearAll = async() => {
    try {
        const results = await AsyncStorage.clear();
        return results;
    } catch (error) {
        console.error(error);
    }
}
