import React, { Component } from "react";
import data from "../data/Data"
import Header from "../components/Header"
import Search from "../components/Search"
import Scroll from "../components/Scroll"
import CardList from "../components/CardList"


export default class App extends Component {

    constructor() {
        super();
        this.state = {
            characters: data,
            emails: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ emails: users }));
    }

    onSearchChange = (event) => { //ANOTAAAAAAAR
        this.setState({ searchfield: event.target.value }); //ANOTAAAAAAAR
    }

    render() {

        const { characters, emails, searchfield } = this.state;
        
        const filteredCharacters = characters.filter(
            character => {
                return character.name.toLowerCase().includes(searchfield.toLowerCase())
            }
        )

        if (!emails.length) {   //If length === 0 retorna False, so we add ! to check if is <> 0
            return <h1>LOADING</h1>
        } else {
            return (
                <main>
                    <Header />
                    <Search searchChange = { this.onSearchChange }/>
                    <Scroll>
                        <CardList characters = { filteredCharacters } emails = { emails } />
                    </Scroll>
                </main>
            )
        }

    }

}