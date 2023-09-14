import './App.css'
import ReCAPTCHA from "react-google-recaptcha";
import react, { useRef  } from 'react';
import axios from 'axios';

function App() {

  const captchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = captchaRef.current.getValue();
    console.log({ token })
    captchaRef.current.reset(); 

    const payload = {
      username: "kionjng",
      firstName: "opop",
      lastName: "opop",
      email: "ririririr@gmail.com",
      countryCode: "+234",
      phoneNumber: "8194942389658",
      gender: "MALE",
      birthday: new Date().toString(),
      password: "password",
      image: "https://www.google.com",
      token,
    }

    const response = await axios.post('http://localhost:3001/users', payload).catch(console.log);
    console.log({
      response: "success",
      data: response.data,
    })

  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' className='input'/>
        <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            ref={captchaRef}
            theme="dark"
          />
        <button>Submit</button>
    </form>
  )
}

export default App
