import React from 'react';
import { Action } from 'redux';

const IsLoggedReducer = (state = false, action : Action) => {
    switch(action.type) {
        case 'IsLoggedIn':
            return !state;
            break;
        case 'IsLoggedOut':
            return state;
            break;
        default:
            return state;
            break;
    }
}