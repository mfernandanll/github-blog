import logo from '../../assets/logo.png'
import effect from '../../assets/effect.png'
import { Container } from './styles'

export function Header(){
  return (
    <Container>
      <img src={effect} />
      <img src={logo} />
      <img src={effect} />
    </Container>
  )
}