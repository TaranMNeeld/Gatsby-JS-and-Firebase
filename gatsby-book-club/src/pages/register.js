import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import {FirebaseContext} from '../components/Firebase'

import SEO from "../components/seo"

const Register = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        confirm: ''
    })

    const {firebase, loading} = useContext(FirebaseContext)

    const handleSubmit = e => {
        e.preventDefault()
        if (credentials.password === credentials.confirm) {
            firebase.register(credentials)
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
            <form onSubmit={handleSubmit}>
                <input 
                    value={credentials.email} 
                    name='email' 
                    placeholder='email' 
                    type='email' 
                    onChange={handleChange}
                    required
                />
                <input 
                    value={credentials.password} 
                    name='password' 
                    placeholder='password' 
                    type='password'  
                    onChange={handleChange}
                    required
                    minLength={8}
                />
                <input 
                    value={credentials.confirm} 
                    name='confirm' 
                    placeholder='confirm password' 
                    type='password'  
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Register</button>
            </form>
    )

}

export default Register
