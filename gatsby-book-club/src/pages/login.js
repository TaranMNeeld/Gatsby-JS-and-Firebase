import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import {FirebaseContext} from '../components/Firebase'

import SEO from "../components/seo"

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMsg, setErrorMsg] = useState('')

    const {firebase, loading} = useContext(FirebaseContext)

    const handleSubmit = e => {
        e.preventDefault()
        if (!loading) {
            firebase.login(credentials).catch(error => {
                setErrorMsg(error.message)
            })
        }
        
    }

    const handleChange = e => {
        e.persist()
        setErrorMsg('')
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
                    required
                />
                <input 
                    value={credentials.password} 
                    name='password' 
                    placeholder='password' 
                    type='password'  
                    onChange={handleChange}
                    required
                />
                {!!errorMsg &&
                    <p>{errorMsg}</p>
                }
                <button type='submit'>Login</button>
            </form>
        </section>
    )

}

export default Login
