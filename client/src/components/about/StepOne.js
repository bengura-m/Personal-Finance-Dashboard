
import React, { useState } from 'react'
import './custom.css'
import './normilize.css'
import './skeleton.css'

export default () => {
  const [fullName, setFullName] = useState('')
  const [Age, SetAge] = useState('')
  const [FinancialDependants, setFinancialDependants] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')

  return (
    <div className = 'container'>
        <div className='row'>
            <div className='six columns'>
              <label>Full Name</label>
                  <input
                  className='u-full-width'
                  placeholder='Full Name'
                  type='text'
                  onChange={e => setFullName(e.target.value)}
                  value={fullName}
                  autoFocus
                  />
            </div>
        </div>
      <div className='row'>
        <div className='six columns'>
          <label>Your email</label>
          <input
            className='u-full-width required'
            placeholder='test@mailbox.com'
            type='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Confirm email</label>
          <input
            className='u-full-width'
            placeholder='Confirm email'
            type='email'
            onChange={e => setEmailConfirm(e.target.value)}
            value={emailConfirm}
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Age</label>
          <input
            className='u-full-width'
            placeholder='Age'
            type='text'
            onChange={e => SetAge(e.target.value)}
            value={Age}
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Financial Dependants</label>
          <input
            className='u-full-width'
            placeholder='Financial Dependants'
            type='text'
            onChange={e => setFinancialDependants(e.target.value)}
            value={FinancialDependants}
          />
        </div>
      </div>
    </div>
  )
}