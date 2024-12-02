import { Character } from "../../types";
import "./style.css"

type Props = {
    character: Character;
    onClick: (character: Character) => void;
}

const Card = ({onClick, character}: Props) => {
    return (
        <div style={{border: "1px solid black", padding: "10px"}}>
            <img className="card" src={character.image} alt={character.name} onClick={ () => onClick(character)}/>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
        </div>
    );
}

export default Card;