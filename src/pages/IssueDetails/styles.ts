import styled from "styled-components";

export const IssueContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;

  min-height: calc(100vh - 18.5rem);
`

export const IssueHeader = styled.div`
  margin-top: -5.375rem;
  padding: 2.5rem 2rem;

  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  }

  > p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 1.5rem;
  }
`

export const Header  = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  a {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["base-label"]};
    width: 1.125rem;
    height: 1.125rem;
  }

  span {
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-span"]};
  }
`

export const IssueDescription = styled.section`
  max-width: 54rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  gap: 0.75rem;
  flex-direction: column;

  line-height: 1.6;

  img{
    width: 100%;
  }

  h1 {
    color: ${(props) => props.theme.blue};
    font-size: 1.3rem;
  }

  h2 {
    margin-top: 1rem;
    color: ${(props) => props.theme.blue};
    font-size: 1rem;
  }

  h3 {
    margin-top: 0.625rem;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
  }

  ul, ol {
    padding-left: 0;
    margin-left: 20px; 
    list-style-position: inside; 
  }

  li {
    margin-top: .25rem
  }

  pre {
    background-color: ${(props) => props.theme["base-post"]};
    padding: 1rem;
  }
`