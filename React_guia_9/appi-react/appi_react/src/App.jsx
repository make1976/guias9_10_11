import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import { react, useEffect } from 'react';
import { CharCard } from './components/CharCard';
import { Filter } from './components/Filter';


function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    getApiData();
  }, [filter]);

  const getApiData = async () => {
    const { data } = await axios.get(
     filter === ""?
      "https://rickandmortyapi.com/api/character" :
      `https://rickandmortyapi.com/api/character/?name=${filter}`
    );
    setCharacters(data.results);
  }
  return (
    <>
      <Container className = "mt 4"/>
      <Filter {...{ filter, setFilter}}/>
      <Row className = "mt-2">
        {
          characters.map((val, key) => (
            <Col key = {val.id} sm >
              <CharCard {...val} />
            </Col>
          ))
        }
      </Row>
      <Container />
    </>
  )
}

export default App
