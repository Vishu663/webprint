import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import google_icon from '../assets/google.png';
import './LoginPage.css';
import Buttons from '../components/Button/Button';
import TextField from '../components/TextField/TextField';
import { ChangeEvent } from 'react';

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  console.log(event);
};

function LoginPage() {
  return (
    <div className='main'>
      <div className='container'>
        <div className='header'>
          <div className='text'>Login</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <img src={email_icon} alt='' />
            <span>Email</span>
          </div>
          <TextField
            type='email'
            name='Email'
            value=''
            placeholder='Enter your Email here'
            handleChange={handleChange}
          />
          <div className='input'>
            <img src={password_icon} alt='' />
            <span>Password</span>
          </div>
          <TextField
            type='password'
            name='Password'
            value=''
            placeholder='Enter your Password here'
            handleChange={handleChange}
          />
          <div className='loginButton'>
            <Buttons type='submit' bTitle='Login' bType='primary' />
          </div>
          <div className='underline'></div>
          <div className='googleButton'>
            <img src={google_icon} alt='' />
            <Buttons type='submit' bTitle='Login with Google' bType='primary' />
          </div>
        </div>
        <div className='Para'>
          <p>
            By clicking “Login with Google/Email/SAML” above, you acknowledge that you have read and
            understood, and agree to WebPrint’s Term & Conditions & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
