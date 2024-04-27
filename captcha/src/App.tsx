import { Turnstile } from '@marsidev/react-turnstile';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
function App() {
    const [token, setToken] = useState<string>("");
    const [otp, setOTP] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
    <>
      <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
        <input type="text" placeholder="OTP" onChange={(event: any)=> {
          setOTP(event.target.value)
        }} />
          <br></br>
          <input placeholder="New Password" onChange={(event: any)=>{
            setPassword(event.target.value)
          }}></input>
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
              otp:""+otp+"",
              newPassword:password,
              token:token
            }
            )
          }}>Update Password</button>
      </div>

    </>
    )
    
}

export default App
