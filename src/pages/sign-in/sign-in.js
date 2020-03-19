import React from 'react'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'

import './sign-in.scss'

const SignInSignUp = () => (
    <div>
        <div className='signin'>
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignInSignUp