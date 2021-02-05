// Code EyesOnMe Component Here
import React from 'react';

export default class Keypad extends React.Component {

    render() {
        return (
            <button
            onFocus={() => console.log("Good!")}
            onBlur={() => console.log("Hey! Eyes on me!")}>

            </button>
        )
    }

}
