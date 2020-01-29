import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            greeting: 'Welcome :)'
        };
    }

    updateHours(hours){
        let phrase;
        if(hours > 18 || hours < 4){phrase = 'Good Evening!'}
        else if(hours > 12){phrase = 'Good Afternoon!'}
        else{phrase = 'Good Morning!'}
        this.state.greeting = phrase;
    }

    render(){
        let hours = new Date().getHours();
        this.updateHours(hours);
        return <>
                <h1>{this.state.greeting}</h1>
                <h3>Odometer:</h3>
            </>
    };
}

export default Header;




