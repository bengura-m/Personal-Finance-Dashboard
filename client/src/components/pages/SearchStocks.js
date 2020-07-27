// import React from 'react'
// import Navbar from '../Nav'
// import { BrowserRouter, Router, Route, Switch, Redirect } from "react-router-dom";
// import Wrapper from '../Wrapper';

// export default function Portfolio (){
//     return(
//         <h1>portfolio</h1>
//     )
// }

import React, { Component } from "react";
import API from "../utils/stockAPI";
import Jumbotron from "../Jumbotron";
import { Container, Row, Col } from "../Grid";
import SearchForm from "../SearchForm";
import SearchResult from "../SearchResult"


class SearchStocks extends Component {
    //create state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.getYahooFinanceStocks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // store response in a array
                    let results = res.data.items
                    //map through the array 
                    results = results.map(result => {
                        //store each book information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.setState({ stocks: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.stocks)
        let savedStocks = this.state.stocks.filter(stock => stock.id === event.target.id)
        savedStocks = savedStocks[0];
        API.saveStock(savedStocks)
            .then(this.setState({ message: alert("Your stock is saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Find Your Favorite Books with GoogleBook API</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResult books={this.state.stocks} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}

export default SearchStocks

