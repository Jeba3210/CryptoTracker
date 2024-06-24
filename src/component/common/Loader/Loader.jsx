import { CircularProgress } from '@mui/material'
import React from 'react'
import './loader.css'

function Loader() {
  return (
    <div className='loader'>
        <CircularProgress color='success'/>
    </div>
  )
}

export default Loader