import styled from "styled-components";

interface TitleProps {
  size?: boolean;
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px;
  gap: 10px;
`;

const Title = styled.div<TitleProps>`
  color: black;
  font-family: Monserrat, sans-serif;
  font-size: ${({ size }) => (size ? "20px" : "40px")};
  cursor: pointer;
`;

const Inputs = styled.input`
  width: 400px;
  height: 40px;
  color: black;
  border-radius: 20px;
  border: none;
  padding-left: 10px;
  &:hover {
    cursor: pointer;
    border: none;
  }
`;
const FormBox = styled.form`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Button = styled.button`
  width: 400px;
  height: 40px;
  border-radius: 20px;
  color: blue !important;
  font-size: 20px;
  font-family: Monserrat, sans-serif;
  &:hover {
    background-color: aqua;
    border: none;
  }
`;

export { Wrapper, Title, Inputs, FormBox, Button };
