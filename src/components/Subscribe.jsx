import {useState} from "react";
import validator from "validator";
import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg";
import "./Subscribe.css";
export default function Subscribe({email,onChange,subscribed}) {
  const [error,setError] = useState(false);
  

  
  function handleSubmit(e) {
    e.preventDefault();
    if(validator.isEmail(email)){
      subscribed()
    }else{
      setError(true)
    }
  }

  return (
    <div className="main-container">
      <img className="mobile-img" src={mobileImage} />
      <img className="desktop-img" src={desktopImage} />
      <div className="content-div">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiveing monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are of success</li>
          <li>Add much more!</li>
        </ul>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">
            <div className="error-email">Email address
              {error && <p className="error-messege">Valid email required</p> } 
            </div>
            <input onClick={()=>setError(false)} onChange={onChange} class={error && "input-error"} id="email" value={email} type="email" placeholder="email@company.com" />
          </label>
          <button >Subscribe to monthly newsletter</button>
        </form>
      </div>
    </div>
  );
}
