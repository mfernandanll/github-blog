import styled from "styled-components";

export const ProfileContainer = styled.section`
  max-width: 54rem;
  margin: -6rem auto 4.5rem;
  padding: 2.5rem 2rem;

  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;

  display: flex;
  gap: 2rem;

  img {
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 1.5rem;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  }

  a {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.6;
    text-decoration: none;
    text-transform: uppercase;

    svg {
      margin-left: 0.8rem;
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
    color: ${(props) => props.theme["base-subtitle"]};
  }
`