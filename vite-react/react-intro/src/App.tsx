import axios from "axios";
import './App.css'
import Card from "./components/Card"
import CardList from "./components/CardList"
import React, { useEffect, useState } from "react";
import { ApiResponse, Character } from "./types";
import Button from "./components/Button";
import ModalWindow from "./components/Description";

function App() {
  const cl = console.log.bind(console);

  const [characters, setCharacters] = useState<Character[]>([]);
  const charactersLength = characters.length;

  const getCharacters = async () => {
    const response = await axios.get<ApiResponse>("https://rickandmortyapi.com/api/character");
    setCharacters(response.data.results);
    console.log(response.data);
  }

  useEffect(() => {
    getCharacters();
  }, [])

  const openCharacterDescription = (character: Character) => {
    ModalWindow();
    console.log("id: " + character.id);
    console.log("name: " + character.name);
    console.log("status: " + character.status);
  }
  
  return (
    <>
      <Button variant="primary" onClick={getCharacters} />
      <CardList characters={characters} onClick={ (character) => openCharacterDescription(character)} />
    </>
  );
}

export default App

