import "./contact.scss";
import { Person } from "@material-ui/icons";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <div className="itemContainer">
          <Person className="icon" />
          <a href="tel:+0642061401">+0642061401</a>
        </div>
        <div className="itemContainer">
          <Person className="icon" />
          <a HREF="mailto:yasin52gumus@gmail.com">yasin52gumus@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
