import styled from "styled-components";

const Input = styled.input`
  text-decoration: line-through;
`;
const Button = styled.input.attrs({ type: "submit" })`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Other = styled.input`
  margin: 20px;
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border-radius: 4px;
`;

const Select = styled.select`
margin:20px;
 font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid var(--input-border);
  border-radius: 4px;
}`;

const Text = styled.text`
  font-size: 26px;
  font-weight: 300;
  color: #f51e00;
  margin: 0 0 24px;
`;
const SmallerText = styled.text`
  color: #4c4a37;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  line-height: 32px;
  margin: 0 0 24px;
`;

export { Input, Button, Other, Select, Text, SmallerText };
