import { Turnstile } from '@marsidev/react-turnstile';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
function App() {
    const [token, setToken] = useState<string>("");
    return (
    <>
      <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
        <input type="text" placeholder="OTP"  />
          <br></br>
          <input placeholder="New Password"></input>
          <br></br>
          <p>
            <Turnstile onSuccess={(token) => {
              setToken(token)
            }} siteKey='0x4AAAAAAAYW9AWoBF2FhEAa' />
          </p>
          <br></br>
          <button onClick={()=>{
            axios.post("http://localhost:3000/reset-password",{
              email:"sumit.nair26@gmail.com",
              otp:"903109",
             newPassword:"somenewpassword".
              token:token
            }
            )
          }}>Update Password</button>
      </div>

    </>
    )
    
}

export default App
