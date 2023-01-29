import { useState } from "react";
export function useLocalStorage (key, initialValue){
    const [storedValue, setStoredValue] = useState( ()=>{

        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue  // si hay item lo parsea, si no hay item devuelve el initialValue
            
        } catch (error) {
            return initialValue
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))   //el value tiene que ser un string

        } catch (error) {
            console.error(error)
        }
    }
    return [storedValue, setValue]

}

export function LocalStorageRedux (initialState) {
    
    const getLocalStorage = () => {
        try {
            const item = window.localStorage.getItem('globalState')
            return item ? JSON.parse(item) : initialState  // si hay item lo parsea, si no hay item devuelve el initialValue
            
        } catch (error) {
            return initialState
        }
    }

    const setLocalStorage = (value) => {
        try {
            window.localStorage.setItem('globalState', JSON.stringify(value))   //el value tiene que ser un string

        } catch (error) {
            console.error(error)
        }
    }

    return [getLocalStorage, setLocalStorage]

}