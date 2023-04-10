import { styled } from '@mui/system';

export const Container = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #c5efeb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Title = styled('h1')`
  color: #444;
  text-align: center;
  font-size: 38px;
  font-weight: bold;
  margin: 0;
  margin: 15px 0;
`
export const Value = styled('span')`
  color: #fff;
  padding: 5px 15px;
  border-radius: 15px;
  font-weight: bold;
  width: auto;
  font-size: 25px;
  background-color: #00ab9b;
`
export const Text = styled('p')`
  color: #898989;
  padding: 5px;
  border-radius: 15px;
`