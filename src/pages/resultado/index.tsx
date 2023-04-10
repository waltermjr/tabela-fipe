import { useContext } from 'react'
import { Container, Title, Value, Text } from '../../styles/resultado'
import { fipeContext } from '@/context/contextFipe'

const Result = () => {
  const { fipeResult } = useContext(fipeContext)

  return (
    <Container>
      <Title>{`TabelaFipe: ${fipeResult.Marca} ${fipeResult.Modelo}`}</Title>
      <Value>{fipeResult.Valor}</Value>
      <Text>Este é o preço de compra do veiculo</Text>
    </Container>
  )
}

export default Result