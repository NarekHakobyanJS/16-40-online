import React from 'react'
import {Formik, Form, Field} from 'formik'
import { useNavigate } from 'react-router-dom'

const Login = ({users}) => {
    const navigate = useNavigate()

    const authUser = (value, users) => {
        const user = users.find((user) => user.email === value.email)
        if(user){
            let bool = user.password === value.password 
            if(bool){
                navigate('/profile', {state : user})
            }
        }
       
        
    }
  return (
    <div>
        <Formik
            initialValues={{
                email : "",
                password : ''
            }}
            onSubmit={(value) => authUser(value, users)}
        >
            <Form>
                <Field name='email' placeholder='email'/>
                <Field name='password' placeholder='password'/>
                <button type='submit'>Login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Login