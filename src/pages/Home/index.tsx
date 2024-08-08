import { Header } from "../../components/Header";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";

export function Home(){
  return (
    <div>
      <Header />
      <Profile />
      <SearchForm />
    </div>
  )
}