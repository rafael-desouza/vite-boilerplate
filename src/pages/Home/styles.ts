import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export const Message = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`

export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

export const Contacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5%;
`

export const Contact = styled(Link)`
  display: inline-block;
  flex: 30%;
  background-color: #7b00ff;
  padding: 0.5rem 0;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #5600b3;
  }
`
