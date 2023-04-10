import { useRouter } from 'next/router'
import { ButtonUI, Container } from './style'

export default function Home() {
  const { push } = useRouter()

  return (
    <Container>
      <ButtonUI onClick={() => push("/exercicios")}>Exercicios</ButtonUI>
      <ButtonUI onClick={() => push("/busca")}>Teste</ButtonUI>
    </Container>
  )
}
