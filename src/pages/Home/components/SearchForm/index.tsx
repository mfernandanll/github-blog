import { ChangeEvent, useContext, useEffect, useState } from "react";
import { SearchContainer, SearchInput } from "./styles";
import { PostContext } from "../../../../contexts/PostsContext";

export function SearchForm() {
  const { issues, fetchIssues } = useContext(PostContext);
  const [searchTerm, setSearchTerm] = useState('');
  const issueQuantity = issues.length;

  function handleSearchIssues(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value); 
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchIssues(searchTerm);
    }, 500); 
  

    return () => clearTimeout(delayDebounceFn); 
  }, [searchTerm, fetchIssues]);

  return (
    <SearchContainer>
      <header>
        <h2>Publicações</h2>
        <span>{`${issueQuantity} publicações`}</span>
      </header>

      <SearchInput
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearchIssues}
      />
    </SearchContainer>
  )
}