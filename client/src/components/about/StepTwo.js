import React, { useState } from 'react'
import './custom.css'
import './normilize.css'
import './skeleton.css'


export default () => {
  const [occupation, setOccupation] = useState('')
  const [income, setIncome] = useState('')
  const [otherincome, setOtherIncome] = useState('')
  const [expenses, setExpenses] = useState('')

  return (
    <div className= 'container'>
      <div className='row'>
          <div className='six columns'>
            <label>Occupation</label>
            <input
              className='u-full-width'
              placeholder='Occupation'
              type='text'
              onChange={e => setOccupation(e.target.value)}
              value={occupation}
              autoFocus
            />
          </div>
      </div>
      <div className='row'>
          <div className='six columns'>
            <label>Annual Income</label>
            <input
              className='u-full-width'
              placeholder='Annual Income'
              type='integer'
              onChange={e => setIncome(e.target.value)}
              value={income}
              autoFocus
            />
          </div>
      </div>
      <div className='row'>
          <div className='six columns'>
              <label>Other Income</label>
              <input
                className='u-full-width'
                placeholder='Other Income'
                type='integer'
                onChange={e => setOtherIncome(e.target.value)}
                value={otherincome}
                autoFocus
              />
          </div>
      </div>
      <div className='row'>
          <div className='six columns'>
              <label>Expenses</label>
              <input
                className='u-full-width'
                placeholder='Expenses'
                type='interger'
                onChange={e => setExpenses(e.target.value)}
                value={expenses}
                autoFocus
              />
          </div>
      </div>
    </div>
  )
}