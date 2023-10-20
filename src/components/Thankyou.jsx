import checkedImg from "../assets/images/icon-success.svg";
import "./Thankyou.css";
export default function ThankYou({email,onClick}) {

    
  return (
    <div className="main-div" >
      <img className="checked-img" src={checkedImg} />

      <h1>Thank you for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span className="email">{email}</span> . Please open it and click the
        button inside to confirm your subscription
      </p>
      <button onClick={onClick}>Dismiss messege</button>
    </div>
  );
}
