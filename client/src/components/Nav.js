
// import React from 'react';
// import {Navbar, Form, FormControl, Button} from 'react-bootstrap'

// // import './style.css'
// // import {BrowserRouter as Router, Link} from 'react-router-dom'
// import { Link} from 'react-router-dom'

// export default function Nav() {
//     // const navStyle= {
//     //     color: 'black'

//   return (
//     <Navbar bg="dark" variant="dark">
//       <Navbar.Brand href="/about">Personal Finance Dashboard</Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="/about">About</Nav.Link>
//           <Nav.Link href="/expensetracker">Expense Tracker</Nav.Link>
//           <Nav.Link href="/portfolio">Portfolio</Nav.Link>
//           <Nav.Link href="/auth/logout">Logout</Nav.Link>
//         </Nav>
//       <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-info">Search</Button>
//       </Form>
//     </Navbar>
//   );
// }


import React from "react";
import Navbar from "react-bootstrap";

function Nav() {
    return (
        <nav className="topnav navbar navbar-expand-lg navbar-primary bg-primary">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Personal Finance Dashboard</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="about">
                        <a className="nav-link" href="/about"><button type="button" className="btn btn-info text-white">About</button></a>
                    </li>
                    <li className="nav-item" id="portfolio">
                        <a className="nav-link" href="/portfolio"><button type="button" className="btn btn-info text-white">Portfolio</button></a>
                    </li>
                    <li className="nav-item" id="expensetracker">
                        <a className="nav-link" href="/expensetracker"><button type="button" className="btn btn-warning text-white">Expense Tracker</button></a>
                    </li>
                    <li className="nav-item" id="savedstocks">
                        <a className="nav-link" href="/savedStocks"><button type="button" className="btn btn-warning text-white">Saved Stocks</button></a>
                    </li>
                    <li className="nav-item" id="searchStocks">
                        <a className="nav-link" href="/searchStocks"><button type="button" className="btn btn-warning text-white">Search Stocks</button></a>
                    </li>
                    <li className="nav-item" id="logout">
                        <a className="nav-link" href="/auth/logout"><button type="button" className="btn btn-warning text-white">Logout</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

