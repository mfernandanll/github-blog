import { Issue } from "../../../../contexts/PostsContext";
import { CardContainer } from "./styles";
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

      <p>
        {issue.description}
      </p>
    </CardContainer>
  )
}