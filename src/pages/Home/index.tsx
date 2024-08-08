import { Header } from "../../components/Header";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { PostsContainer, PostsGrid } from "./styles";

export function Home(){
  return (
    <div>
      <Header />
      <Profile />

      <PostsContainer>
        <SearchForm />

        <PostsGrid>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsGrid>
      </PostsContainer>
    </div>
  )
}