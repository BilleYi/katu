import styled from "styled-components"

export const StyledPanel = styled.div`

  .formContainer {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 500px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    z-index: 100;
  }

  .logintitle {
    text-align: center;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    color: white;
  }
`