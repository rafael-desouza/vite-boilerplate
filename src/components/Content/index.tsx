import * as S from './style'

export type ContentProps = {
  children: React.ReactNode
}

export const Content = ({ children }: ContentProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
