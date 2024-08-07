import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) =>
    `linear-gradient(${props.theme["base-profile"]}, ${props.theme["base-post"]})`};

  height: 18.5rem;

  img:last-child {
    transform: rotate(180deg);
  }
`