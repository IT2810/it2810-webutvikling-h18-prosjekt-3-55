import { AsyncStorage } from 'react-native';

// retrieve
export const retrieve = async (key) => {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
        console.log(value);
    }

};

// store
export const store = async (key, value) => {
    await AsyncStorage.setItem(key, value);
    console.log(value)
};
