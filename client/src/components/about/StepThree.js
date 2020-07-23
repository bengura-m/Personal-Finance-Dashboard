import React, { useState } from 'react'
import './custom.css'
import './normilize.css'
import './skeleton.css'


export default () => {
  const [assets, setAssets] = useState('')
  const [liabilities, setLiabilities] = useState('')

  return (
    <div className = 'container'>
      <div className='row'>
        <div className='six columns'>
          <label>Assets</label>
          <input
            className='u-full-width required'
            placeholder='Assets'
            type='Assets'
            onChange={e => setAssets(e.target.value)}
            value={assets}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Liabilities</label>
          <input
            className='u-full-width'
            placeholder='Liabilities'
            type='Liabilities'
            onChange={e => setLiabilities(e.target.value)}
            value={liabilities}
          />
        </div>
      </div>
    </div>
  )
}