import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'


export default function Nav() {
    const navStyle= {
        color: 'black'
    };
  return (
      <nav>
          <h3>Personal Finance Dashboard</h3>
          <ul className = "nav-links">
              <Link style= {navStyle} to= '/about'>
                <li>About</li>
              </Link>
              <Link style={navStyle} to = '/expensetracker'>
                <li>Expense Tracker</li>
              </Link>
              <Link style={navStyle} to = '/portfolio'>
                <li>Portfolio</li>
              </Link>
              <Link style= {navStyle} to = '/auth/logout'>
              <li>Logout</li>
              </Link>
          </ul>
      </nav>
  );
}

