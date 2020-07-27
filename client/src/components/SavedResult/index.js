import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedStocks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Stocks you are tracking</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Stocks you are tracking </h3>
                    {props.savedStocks.map(savedstock => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedstock.title + "Card"} key={savedstock._id}>
                                    {/* col-3 show image of the book */}
                                    <Col size="2" className="stockImage">
                                        <img src={savedstock.image} alt={savedstock.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    {/* col-9 show information of the book */}
                                    <Col size="9" className="stockInfo">
                                        <Row>
                                            <h2 className="stockTitle">{savedstock.title}</h2>
                                        </Row>
                                        <Row>
                                            <h3 className="stockAuthor">{savedstock.authors}</h3>
                                        </Row>
                                        <Row>
                                            <p className="stockDescription">{savedstock.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteStock btn btn-danger" id={savedstock._id} onClick={() => props.handleDeleteButton(savedstock._id)}>
                                        Delete Stock
                                    </button>
                                    <a href={savedstock.link} target="_blank">
                                        <button className="viewBook btn btn-success">
                                            View Stock
                                        </button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedResult