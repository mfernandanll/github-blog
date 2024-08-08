import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 3rem;
  
  header {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 1.6;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
      line-height: 1.6;
    }
  }

`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;

  background-color: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  border: 1px solid ${(props) => props.theme["base-border"]};
  border-radius: 6px;
  
  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`