// Code Keypad Component Hereimport React from 'react';
import React from 'react';

export default class Keypad extends React.Component {

    render() {
        return (
            <div>
                <input type='password' 
                onKeyUp={this.sayTheLineBart}>

                </input>
            </div>
        )
    }

    sayTheLineBart() {
        console.log('Entering password...')
    }

}

