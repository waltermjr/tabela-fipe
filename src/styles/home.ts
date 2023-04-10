import { styled } from '@mui/system';
import { Button } from "@mui/material";

export const Container = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
`

export const ButtonUI = styled(Button)`
  margin: 10px 0;
  background-color: #3f1787;
  text-transform: capitalize;
  padding: 10px 30px;
  color: white;
  margin: 0 10px;

  &:hover{
    background-color: #5220ad;
  }
`
