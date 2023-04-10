import { styled } from '@mui/system';

export const Container = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  flex-direction: column;
`
export const Content = styled('div')`
  border-radius: 10px;
  background-color: #bfbfbf;
  padding: 10px;
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`
export const Title = styled('div')`
  font-size: 20px;
  padding: 0 0 10px 0;
  font-weight: bold;;
`