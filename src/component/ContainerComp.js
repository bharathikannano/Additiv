import React from "react";

export default class ContainerComp extends React.Component {
    constructor(props) {
        super(props);

    }

    onSearch(){

    }

    render(){
    return(
        <React.Fragment>
        <input type="text"/>
        <button onClick={() => this.onSearch.bind(this)}>Search</button>
        </React.Fragment>
    );

    }
}