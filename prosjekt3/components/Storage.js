import { AsyncStorage } from 'react-native';

// retrieve
export const retrieve = async (key) => {
    const retrievedItem =  await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item

};

// store
export const store = async (key, item) => {
    try {
        let jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        console.log(key)
    } catch (error) {
        console.log(error.message);
    }
}

