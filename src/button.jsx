import "./button.css";

export default function Button(props) {
  return (
    <button className = {!props.isOutline ? "button" : "button_outline"}>
        {props.icon}
        {props.text}
    </button>
  );
}
