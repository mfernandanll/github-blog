import { CardContainer, Description } from "./styles";
import { Issue } from "../../../../contexts/PostsContext";
import { useNavigate } from "react-router-dom";

import Markdown from "react-markdown";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { ptBR } from "date-fns/locale/pt-BR";

interface PostCardProps {
  issue: Issue
}

export function PostCard({ issue }: PostCardProps) {
  const navigate = useNavigate()

  function handleCardDetails() {
    navigate(`/issue/${issue.number}`)
  }

  return (
    <CardContainer onClick={handleCardDetails}>
      <header>
        <h3>{issue.title}</h3>
        <span>{formatDistanceToNow(new Date(issue.createdAt), {addSuffix: true, locale: ptBR})}</span>
      </header>

      <Description>
        <Markdown>{issue.description}</Markdown>
      </Description>
    </CardContainer>
  )
}