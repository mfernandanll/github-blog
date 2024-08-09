import { useContext } from "react";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { PostsContainer, PostsGrid } from "./styles";
import { PostContext } from "../../contexts/PostsContext";

export function Home(){
  const { issues } = useContext(PostContext);

  return (
    <div>
      <Profile />

      <PostsContainer>
        <SearchForm />

        <PostsGrid>
          {
            issues &&
            issues.map(issue => (
              <PostCard key={issue.number} issue={issue}/>
            ))
          }
        </PostsGrid>
      </PostsContainer>
    </div>
  )
}