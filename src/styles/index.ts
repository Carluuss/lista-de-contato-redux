import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16em;
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: blue;
  border-radius: 8px;
  margin-right: 8px;
`


export default EstiloGlobal;
