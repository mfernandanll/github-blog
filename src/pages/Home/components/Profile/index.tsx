import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Content, Header, Tags, ProfileContainer, Tag } from "./styles";
import { PostContext } from "../../../../contexts/PostsContext";
import { useContextSelector } from "use-context-selector";

export function Profile() {
  const userInfo = useContextSelector(PostContext, (context) => {
    return context.userInfo
  })

  return (
    <ProfileContainer>
      <img src={userInfo.avatarUrl} alt={`Foto de perfil de ${userInfo.login}`} />

      <Content>
        <Header>
          <h1>{userInfo.name}</h1>
          <a href={userInfo.url} target="_blank">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </a>
        </Header>

        <p>{userInfo.description}</p>

        <Tags>
          <Tag>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userInfo.login}</span>
          </Tag>
          <Tag>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{`${userInfo.followers} seguidores`}</span>
          </Tag>
        </Tags>
      </Content>
    </ProfileContainer>
  )
}