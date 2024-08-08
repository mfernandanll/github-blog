import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem;
  border-radius: 10px;

  background-color: ${(props) => props.theme["base-post"]};

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.6;
      color: ${(props) => props.theme["base-title"]};

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
              line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme["base-span"]};
      white-space: nowrap;
      margin-top: 0.313rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-text"]};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
            line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`