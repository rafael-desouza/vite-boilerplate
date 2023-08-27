import * as S from './styles'

interface MenuToggleProps {
  onClick: () => void // Define o tipo para onClick como uma função que não retorna nada
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ onClick }) => (
  <S.OpenLinksButton onClick={onClick}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <S.StyledPath
        variants={{
          closed: { d: 'M 2 2.5 L 35 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' }
        }}
      />
      <S.StyledPath
        d="M 2 9.423 L 35 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <S.StyledPath
        variants={{
          closed: { d: 'M 2 16.346 L 35 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' }
        }}
      />
    </svg>
  </S.OpenLinksButton>
)
