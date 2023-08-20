import styled from 'styled-components'
import { Form } from 'react-router-dom'

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  width: 200px;
`

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
