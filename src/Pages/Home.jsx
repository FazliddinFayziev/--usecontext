import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const Home = () => {

    const { home } = useGlobalContext();

    return (
        <div className='main'>
            <div>
                <h2>{home}</h2>
                <Link to={'/login'} className='button'>
                    <button>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Home