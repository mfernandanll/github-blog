import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background: ${(props) =>
    `linear-gradient(${props.theme["base-profile"]}, ${props.theme["base-post"]})`};

  height: 18.5rem;

`

export const LeftImage = styled.img`
  margin-top: 4.375rem;
`

export const Logo = styled.img`
  margin-top: 4rem;
`

export const RightImage = styled.img`
  margin-top: 1.875rem;
  transform: rotate(180deg);
`