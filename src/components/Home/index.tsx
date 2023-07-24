import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <S.Title>Welcome to the Home Page</S.Title>
      <S.Message>This is a simple home page created using React.</S.Message>
      <S.LinkButton to="/counter">
        <>Go to Counter</>
      </S.LinkButton>
    </S.Container>
  )
}
