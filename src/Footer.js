import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Leandro Rodriguez'
        }
    }

    render() {
        return (
            <>
            <p>&copy; {this.state.name}</p>
            </>
        )
    }
}

export default Footer;