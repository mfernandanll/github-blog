import { Header, IssueContainer, IssueDescription, IssueHeader, Tag, Tags } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function IssueDetails() {
  return (
    <IssueContainer>
      <IssueHeader>
        <Header>
          <a>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </a>
          <a href="https://github.com/mfernandanll">
            <span>Ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Header>

        <h1>JavaScript data types and data structures</h1>

        <Tags>
          <Tag>
            <FontAwesomeIcon icon={faGithub} />
            <span>mfernandanll</span>
          </Tag>
          <Tag>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </Tag>
          <Tag>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </Tag>
        </Tags>
      </IssueHeader>

      <IssueDescription>
        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
        <p>
          Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
      </IssueDescription>
    </IssueContainer>
  )
}