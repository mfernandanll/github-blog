import { Header, IssueContainer, IssueDescription, IssueHeader, Tag, Tags } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { IssueByNumber, PostContext } from "../../contexts/PostsContext";
import Markdown from "react-markdown";

import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { ptBR } from "date-fns/locale/pt-BR";

export function IssueDetails() {
  const [issueInfo, setIssueInfo] = useState<IssueByNumber>(
    {
      number: 0,
      comments: 0,
      repository: '',
      title: '',
      userName: '',
      createdAt: '',
      description: ''
    }
  )
  const { issueId } = useParams();
  const { fetchIssueByNumber } = useContext(PostContext);  

  const formatDate = (date: string) => formatDistanceToNow(new Date(date), {addSuffix: true, locale: ptBR})

  useEffect(() => {
    async function handleFetchIssue() {
      const issue = await fetchIssueByNumber(Number(issueId))
      setIssueInfo(issue)
    }
    
    handleFetchIssue()
    
  }, [fetchIssueByNumber, issueId])

  return (
    <IssueContainer>
      {
        issueInfo &&
        <div>
          <IssueHeader>
            <Header>
              <Link to='/'>
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>Voltar</span>
              </Link>
              <a href={issueInfo.repository}>
                <span>Ver no github</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Header>

            <h1>{issueInfo.title}</h1>

            <Tags>
              <Tag>
                <FontAwesomeIcon icon={faGithub} />
                <span>{issueInfo.userName}</span>
              </Tag>
              <Tag>
                <FontAwesomeIcon icon={faCalendarDay} />
                <span>{issueInfo.createdAt ? formatDate(issueInfo.createdAt) : 0}</span>
              </Tag>
              <Tag>
                <FontAwesomeIcon icon={faComment} />
                <span>{issueInfo.comments ?? 0} comentários</span>
              </Tag>
            </Tags>
          </IssueHeader>

          <IssueDescription>
            <Markdown>
              {issueInfo.description}
            </Markdown>
          </IssueDescription>
        </div>
      }
    </IssueContainer>
  )
}