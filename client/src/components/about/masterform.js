import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from '../react-multistep'
import './css/custom.css'
import './css/normilize.css'
import './css/skeleton.css'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
]

export default function MasterForm () {
  <div className='container'>
    <MultiStep steps={steps} />
    <div className='container app-footer'>
      <h6>Press 'Enter' or click on progress bar for next step.</h6>
    </div>
  </div>
}
