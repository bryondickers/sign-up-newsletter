import {useState} from "react";
import Subscribe from "./components/Subscribe";
import ThankYou from "./components/Thankyou";

function App() {
  const [isSuccess,setIsSuccess] = useState(false);
  const [formEmail,setFormEmail] = useState("")
  function handleChange(e){
    setFormEmail(e.target.value)
  }
  function isSubscribe(){
    setIsSuccess(true)
  }
  function handleDismissSuccess() {
    setIsSuccess(false)
    setFormEmail("")
  }
  return (
    <div>
     {
      isSuccess ? 
      <ThankYou email={formEmail} onClick={handleDismissSuccess}/> :
      <Subscribe 
      email={formEmail}
      onChange={handleChange}
      subscribed={isSubscribe}
      />
     }
    </div>
  );
}

export default App;
