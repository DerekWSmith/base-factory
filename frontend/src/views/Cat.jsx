import React from "react";
import axios from 'axios';

class Cat extends React.Component {
    constructor() {
        super();
        this.state = { mytext: '' };
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8080/`)
            .then(res => {
                console.log(res);
                // const jsonData = JSON.parse(); // Parse the JSON string
                this.setState({ mytext: JSON.stringify(res.data) }); // Convert the object to a string and update state
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
                <p><pre>{this.state.mytext}</pre></p>
        );
    }
}

export default Cat;
