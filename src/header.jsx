import "./header.css";      
export default function Header(){
    return(
        <div className = "header">
            <img src="./images/puma logo.png" alt="puma logo"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}