import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import {FirebaseContext} from '../components/Firebase'

import SEO from "../components/seo"

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const {firebase, loading} = useContext(FirebaseContext)

    const handleSubmit = e => {
        e.preventDefault()
        if (!loading) {
            firebase.login(credentials)
        }
        
    }

    const handleChange = e => {
        e.persist()
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    value={credentials.email} 
                    name='email' 
                    placeholder='email' 
                    type='email' 
                    onChange={handleChange}
                />
                <input 
                    value={credentials.password} 
                    name='password' 
                    placeholder='password' 
                    type='password'  
                    onChange={handleChange}
                />
                <button type='submit'>Login</button>
            </form>
        </section>
    )

}

export default Login
