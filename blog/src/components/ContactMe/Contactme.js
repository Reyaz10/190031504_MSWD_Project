import {useState} from 'react';
import "./contactme.css";

function Contactme() {
  
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
    };
    return (
<div className="contactme" id="contactme">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
    
    );
}

export default Contactme
