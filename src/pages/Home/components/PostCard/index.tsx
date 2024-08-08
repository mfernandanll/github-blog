import Markdown from "react-markdown";
import { Issue } from "../../../../contexts/PostsContext";
import { CardContainer, Description } from "./styles";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  issue: Issue
}

export function PostCard({ issue }: PostCardProps) {
  return (
    <CardContainer>
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