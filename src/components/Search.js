import React, { Component } from "react";

export default class Search extends Component {

    constructor({ searchChange }) {
        super();
        this.searchChange = searchChange;
    }

    render() {

        return (

            <section className="search">
                <input 
                    type="search" 
                    placeholder="Find your friend!" 
                    onChange={ this.searchChange }></input>
            </section>

        )
    }

}