import  Button  from 'react-bootstrap/Button'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='p-4'>
      Home
      <br />
      <Button className='mt-4' variant='primary'>

    <Link to='basic' style={{textDecoration:'none', color:'white'}}>
        Basic
    </Link>
      </Button>
    </div>
  )
}

export default Home
