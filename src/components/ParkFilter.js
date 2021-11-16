import React, {useState} from 'react'

const ParkFilter = React.createContext({
    parkFilter: [],
    addPark: (x) => {},
});

export {ParkFilter}

// Function created to set an array of parkCodes that are used to filter out 
// Webcams accordingly. This allows for the Body.js file to send data over to the 
// Webcams.js file and handles all of the state changes and saving of the data
// This uses some functionality from the CreateContext React Library
export const ParkFilterProvider = (props) => {
    const makeAddPark = (parkFilter) => (park) => {
        if (!parkFilter.includes(park)) {
            const newParkFilter = [...parkFilter, park];
            setState({
                addPark: makeAddPark(newParkFilter),
                parkFilter: newParkFilter,
            });
        }
    }

    const initState = {
        parkFilter: [],
        addPark: makeAddPark([]),
    }

    const [state, setState] = useState(initState);

    console.log('render');
    console.log(state.parkFilter);

    return (
        <ParkFilter.Provider value={state}>
            {props.children}
        </ParkFilter.Provider>
    )
}
