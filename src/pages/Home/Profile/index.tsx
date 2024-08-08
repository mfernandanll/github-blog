import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Content, Header, Tags, ProfileContainer, Tag } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/29306656?v=4" alt="Foto de perfil do usuário" />

      <Content>
        <Header>
          <h1>Fernanda Loureiro</h1>
          <a href="https://github.com/mfernandanll">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </a>
        </Header>

        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <Tags>
          <Tag>
            <FontAwesomeIcon icon={faGithub} />
            <span>mfernandanll</span>
          </Tag>
          <Tag>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </Tag>
        </Tags>
      </Content>
    </ProfileContainer>
  )
}