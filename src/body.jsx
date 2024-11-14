import "./body.css";
import Button from "./button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

export default function Body() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[text, setText] = useState("");

    const onSubmit = (e)=> {
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
    }

  return (
    <div className="body">
      <div className="body_desc">
        <h1>CONTACT US</h1>
        <p>
          We’re here to help! Whether you have a question about our products, an
          order, or just want to connect, our team is ready to assist you.
        </p>
      </div>
      <div className="body_main">
        <div>
          <div className="body_buttons">
            <Button text="CHAT" icon={<MdMessage />} />
            <Button text="CALL" icon={<FaPhoneAlt />} />
          </div>
          <Button isOutline={true} text="EMAIL" icon={<HiMail />} />
          <form onSubmit = {onSubmit}>
            <div className="body_form">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="body_form">
              <label htmlFor="email">Mail ID</label>
              <input type="email" name="email" />
            </div>
            <div className="body_form">
              <label htmlFor="text">Text</label>
              <textarea name="text" rows = "5"/>
            </div>
            <div style={{display : "flex", justifyContent : "end"}}>
            <Button text="Submit" />
            </div>
          </form>
          <div>
            { name + ": " + email +": "+text}
          </div>
        </div>
        <img src="/images/contact_us.png" alt="Contact Us Logo" />
      </div>
    </div>
  );
}
