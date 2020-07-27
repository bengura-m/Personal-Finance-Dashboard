import React, {Component} from "react";
import { BrowserRouter, Router, Route, Switch, Redirect } from "react-router-dom";
import Landingpage from "./components/pages/landingpage";
import axios from 'axios';
import About from "./components/pages/about";
import Expensetracker from "./components/pages/expensetracker";
import SavedStocks from './components/pages/SavedStocks'
import SearchStocks from "./components/pages/SearchStocks"
import Navbar from "./components/Nav";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import GlobalStore from "./components/utils/context/GlobalStore";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//         <Wrapper>
//           <Route exact path="/">
//             {loggedIn ? <Redirect to ="/about"/>: <Landingpage/> }
//           </Route>
//           <Route exact path="/about" component={About} />
//           <Route exact path="/expensetracker" component={Expensetracker} />
//           <Route exact path="/porfolio" component={Portfolio} />
//         </Wrapper>
//         </Switch>
//       </div>
//     </Router>
//   );
// }


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  render() {
    return (
      <div className="app">
        
        <BrowserRouter>
          <Navbar/>
            <Switch>
              <Wrapper>
              <GlobalStore.GlobalProvider>
              <Route
                exact
                path={"/"}
                render={props => (
                  <Landingpage
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              </GlobalStore.GlobalProvider>
              <Route
                exact
                path={"/about"}
                render={props => (
                  <About
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              {/* <Route
                exact
                path={"/portfolio"}
                render={props => (
                  <Portfolio
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              /> */}
              <Route
                exact
                path={"/expensetracker"}
                render={props => (
                  <Expensetracker
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              <Route
                exact
                path={"/savedStocks"}
                render={props => (
                  <SavedStocks
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              <Route
                exact
                path={"/searchStocks"}
                render={props => (
                  <SearchStocks
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              </Wrapper>
            </Switch>
          
        </BrowserRouter>
      </div>
    );
  }
}