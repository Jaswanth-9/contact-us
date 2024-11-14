import "./button.css";

export default function Button(props) {
  return (
    <button className = "button">
        {props.icon}
        {props.text}
    </button>
  );
}
