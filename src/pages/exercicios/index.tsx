import axios from "axios"
import { useEffect, useState } from "react";
import { Container, Content, Title } from "./style";

const Exercicios = () => {

  const [rickAndMorty, setRickAndMorty] = useState()

  const maskify = (value: string) => {
    if (value.length <= 4) {
      return value;
    } else {
      return "#".repeat(value.length - 4) + value.slice(-4);
    }
  }

  const updateData = (objetoOriginal: any, dadosAtualizados: any) => {
    for (let key in dadosAtualizados) {
      if (objetoOriginal.hasOwnProperty(key)) {
        objetoOriginal[key] = dadosAtualizados[key];
      }
    }
    return objetoOriginal;
  }

  const getRickAndMortyCharacters = async () => {
    const result = await axios.get("https://rickandmortyapi.com/api/character")
    const names = ['Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith']
    let filterByName = result.data.results.filter((character: any) => names.includes(character.name))
    filterByName = filterByName.map((character: any) => {
      return {
        nome: character.name,
        genero: character.gender,
        avatar: character.image,
        especie: character.species
      }
    })
    setRickAndMorty(filterByName)
    return filterByName
  }

  const checkIfTheFirstLetterIsUppercase = (word: string) => {
    const getFirstLetter = word.slice(0,1)
    const getFirstLetterUpper = word.slice(0,1).toUpperCase()

    if(getFirstLetter === getFirstLetterUpper){
      return true
    }

    return false
  }

  useEffect(() => {
    getRickAndMortyCharacters()
  },[])

  return(
    <Container>
      <Content><Title>maskify:</Title> {maskify("4556364607935616")}</Content>
      <Content><Title>updateData:</Title> {JSON.stringify(updateData({name: "Walter"}, {name: "Mendes", tel: "11958545632"}))}</Content>
      <Content><Title>rickAndMorty:</Title> {JSON.stringify(rickAndMorty)}</Content>
      <Content><Title>checkIfTheFirstLetterIsUppercase:</Title> {JSON.stringify(checkIfTheFirstLetterIsUppercase("Walter"))}</Content>
    </Container>
  )
}

export default Exercicios