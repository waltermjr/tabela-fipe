import { styled } from '@mui/system';
import { Autocomplete, Button } from "@mui/material";

export const Container = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f3f3f3;
`

export const ButtonUI = styled(Button)`
  margin: 10px 0;
  background-color: #3f1787;
  text-transform: capitalize;
  padding: 10px 30px;

  &:hover{
    background-color: #5220ad;
  }
`

export const Content = styled('div')`
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 5px 2px -4px rgba(194,194,194,1);
`

export const AutoCompleteUI = styled(Autocomplete)`
  margin: 10px 0;
  width: 100%;
`

export const Title = styled('h1')`
  color: #444;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`

export const SubTitle = styled('h2')`
  color: #444;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`