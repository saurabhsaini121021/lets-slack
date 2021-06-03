import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';
import pic from "./tittle1.png"
const LoginContainer = styled.div`
    background-color: purple;
    height: 100vh;
    display: grid;
    place-items: center
    
`;
const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius:10px;
    box-shadow: 0 1px 3px black, 0 1px 2px black;

    >img{
        object-fit:contain;
        height: 100px;
        margin-bottom: 40px;
        
        }

    >Button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: purple;
        color: white;
        :hover{
            opacity: 0.5;
            background-color:purple;
        }
    }   
`;

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) =>
            alert(error.message))
    };
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src={pic} alt="" />
                <h1>Sign in to the Let's Slack</h1>
                <p>@saurabh Saini</p>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login
