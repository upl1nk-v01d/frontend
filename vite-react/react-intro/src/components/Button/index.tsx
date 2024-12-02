import { Character } from "../../types";
import "./style.css";

type Props = {
    onClick: () => void;
    variant?: "primary" | "secondary"; 
}

const Button = ({onClick, variant = "primary"}: Props) => {
    return <button className={`button ${variant}`} onClick={onClick}>Get Characters</button>;
};

export default Button;