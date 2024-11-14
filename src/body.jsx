import "./body.css";
import Button from "./button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Body() {
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
          <Button text="CHAT" icon={<MdMessage />} />
          <Button text="CALL" icon={<FaPhoneAlt />} />
          <form></form>
        </div>
        <img src="/images/contact_us.png" alt="Contact Us Logo" />
      </div>
    </div>
  );
}
