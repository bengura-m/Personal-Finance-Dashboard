import React, { Component } from "react";
import API from "../utils/stockAPI";
import Jumbotron from "../Jumbotron";
import { Container} from "../Grid";
import SavedResult from "../SavedResult"

class SaveStock extends Component {
    state = {
        savedStocks: []
    };

    //when this component mounts, grab all books that were save to the database 
    componentDidMount() {
        API.getStocks()
            .then(res => this.setState({ savedStocks: res.data }))
            .catch(err => console.log(err))
    }

    //function to remove book by id
    handleDeleteButton = id => {
        API.deleteStock(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <SavedResult savedStocks={this.state.savedStocks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}



export default SaveStock 