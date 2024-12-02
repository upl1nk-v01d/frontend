import { Character } from "../../types";
import Card from "../Card"

type Props = {
    characters: Character[];
    onClick: (character: Character) => void;
}

const CardList = ({characters, onClick}: Props) => {

    return (
        <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
            {characters.map((character) => (
                <Card key={character.id} character={character} onClick={() => onClick(character)}/>
            ))}
        </div>
    )
}

export default CardList