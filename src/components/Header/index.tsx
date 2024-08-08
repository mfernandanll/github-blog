import logo from '../../assets/logo.png'
import effect from '../../assets/effect.png'
import { Container, LeftImage, Logo, RightImage } from './styles'

export function Header(){
  return (
    <Container>
      <LeftImage src={effect} />
      <Logo src={logo} />
      <RightImage src={effect} />
    </Container>
  )
}