import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../Nav'
import MultiStep from 'react-multistep'

import StepOne from '../about/StepOne'
import StepTwo from '../about/StepTwo'
import StepThree from '../about/StepThree'
import StepFour from '../about/StepFour'
import { ResumeToken } from 'mongodb'
import { Container, Row, Col } from '../Grid'
import API from "../utils/clientAPI";
import Jumbotron from "../Jumbotron";


const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> }

]

// const About = () => (
//   <div className='container'>
//     <MultiStep steps={steps} />
//     <div className='container app-footer'>
//       <h6>Press 'Enter' or click on progress bar for next step.</h6>
//     </div>
//   </div>
// )

// export default About

class About extends Component {
          state = {
          fullName: "",
          age: [],
          occupation: "",
          income: "", 
          otherincome:"",
          expenses:"",
          assets: "",
          liabilities:"",
          lifeinsurance:"",
          tpdcover:"",
          incomeprotection:"",
      };

      //function to take value of what enter in the search bar
    handleInputChange = event => {
      this.setState({ search: event.target.value })
  }

    //function to control the submit button of the form 
    handleFormSubmit = event => {
      event.preventDefault();
      // once it clicks it connects to the google client api with the search value
      API.getClient(this.state.search)
          .then(res => {
              if (res.data.items === "error") {
                  throw new Error(res.data.items);
              }
              else {
                  // store response in a array
                  let results = res.data.items
                  //map through the array 
                  results = results.map(result => {
                      //store each client information in a new object 
                    result = {
                        key: result.id, 
                        id:result.id, 
                        fullName: result.fullName,
                        age: result.age,
                        occupation: result.occupation,
                        income: result.income,
                        otherincome:result.otherincome,
                        expenses:result.expenses,
                        assets: result.assets,
                        liabilities:result.liabilities,
                        lifeinsurance:result.lifeinsurance,
                        tpdcover:result.tpdcover,
                        incomeprotection:result.incomeprotection, 
                    }
                  return result;
                })

                 // reset the sate of the empty client array to the new arrays of objects with properties geting back from the response
                 this.setState({ client: results, error: "" })
                }
              })
              .catch(err => this.setState({ error: err.items }));
      }

      handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.client)
        let savedClient = this.state.client.filter(client => client.id === event.target.id)
        savedClient = savedClient[0];
        API.saveClient(savedClient)
            .then(this.setState({ message: alert("Your details have been saved") }))
            .catch(err => console.log(err))
      }

      render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Lets get to know each other</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <MultiStep steps={steps}
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                {/* <br></br>
                <Row className="buttonDiv ">
                    <button className="saveBook btn btn-primary" id={client.id} onClick={(event) => props.handleSavedButton(event)}>
                        Save Book
                    </button>
                </Row> */}
            </Container>
        )
    }
}

export default About