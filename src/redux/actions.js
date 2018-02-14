import axios from 'axios';
import {fetchClassess} from '../API'
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SORT_CLASSES = 'SORT_CLASSES'
export const GET_CLASSES = 'GET_CLASSES'
export const logIn = user => ({ type: LOG_IN, payload: user });
export const logOut = user => ({ type: LOG_OUT });
export const sortClasses = classes => ({ type: SORT_CLASSES,classes });
export function getClasses() {
    const request = fetchClassess()
            .then((res) => {res.data})
            .catch(err => console.log(err))

    return {
        type: GET_CLASSES,
        payload: request
    };
}