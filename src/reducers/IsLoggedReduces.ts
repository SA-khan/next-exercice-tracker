import React from 'react';

const IsLoggedReducer = (state = false, action) => {
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