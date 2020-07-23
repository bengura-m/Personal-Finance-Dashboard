import React, { useState } from 'react'
import './custom.css'
import './normilize.css'
import './skeleton.css'

export default () => {
    const [life, setLife] = useState('')
    const [tpd, setTpd] = useState('')
    const [incomeprotection, setIncomeprotection] = useState('')

    return(
    <div className = 'container'>
        <div className='row'>
            <div className='six columns'>
              <label>Life Insurance</label>
              <input
                className='u-full-width'
                placeholder='Life Insurance'
                type='text'
                onChange={e => setLife(e.target.value)}
                value={life}
                autoFocus
              />
            </div>
        </div>
        <div className='row'>
            <div className='six columns'>
                <label>TPD Cover</label>
                <input
                    className='u-full-width'
                    placeholder='Full Name'
                    type='text'
                    onChange={e => setTpd(e.target.value)}
                    value={tpd}
                    autoFocus
                />
            </div>
        </div>
        <div className='row'>
            <div className='six columns'>
                <label>Income Protection</label>
                <input
                    className='u-full-width'
                    placeholder='Income Protection'
                    type='text'
                    onChange={e => setIncomeprotection(e.target.value)}
                    value={incomeprotection}
                    autoFocus
                />
            </div>
        </div>
    </div>
    )
}