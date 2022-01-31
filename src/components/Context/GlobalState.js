import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    currentState: 
        {
            state:	"DELIVERED",
            timestamp:	"2018-07-07T12:50:20.941Z",
            TrackingNumber:	"6636234",
            PromisedDate:	"2020-07-22T19:07:50.883Z"
        },
    TransitEvents: 
        [
            {state: "TICKET_CREATED", timestamp: "2018-07-05T11:03:52.342Z"},
            {state: "PACKAGE_RECEIVED", timestamp: "2018-07-05T11:03:52.342Z", hub:	"Bosta HQ"},
            {state: "NOT_YET_SHIPPED", timestamp: "2018-07-07T08:25:12.190Z"},
            {state: "OUT_FOR_DELIVERY", timestamp: "2018-07-07T12:50:02.000Z"},
            {state: "RECEIVED_DELIVERY_LOCATION", timestamp: "2018-07-07T12:50:05.497Z"},
            {state: "DELIVERED", timestamp: "2018-07-07T12:50:20.941Z"}
        ]
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
    <GlobalContext.Provider value={{
        currentState: state.currentState,
        TransitEvents: state.TransitEvents
    }}>
        {children}
    </GlobalContext.Provider>)
}