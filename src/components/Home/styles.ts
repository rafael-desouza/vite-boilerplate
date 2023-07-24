import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  margin: 50px auto;
  max-width: 600px;
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

export const LinkButton = styled.a`
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
