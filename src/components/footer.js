import styled from 'styled-components'
import i18n from '../structure/i18n.json'

const height = 40

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: right;
  align-content: center;
  background-color: #282c34;
  color: #fff;
  height: ${height}px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 20px;
  cursor: pointer;
`

export default function Footer({ handleChangeLangCode }) {
  return (
    <Container>
      {i18n.map(({ langCode }) => (
        <Item key={langCode} onClick={() => handleChangeLangCode(langCode)}>
          {langCode}
        </Item>
      ))}
    </Container>
  )
}

export const FooterHeight = height
