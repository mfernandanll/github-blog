import { SearchContainer, SearchInput } from "./styles";

export function SearchForm() {
  return (
    <SearchContainer>
      <header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>

      <SearchInput
        type="text"
        placeholder="Buscar conteúdo"
      />
    </SearchContainer>
  )
}