import styled from 'styled-components'

const height = 60

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  background-color: #282c34;
  color: #fff;
  height: ${height}px;
`

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    > * {
      opacity: 1;
    }
  }
`

const SubItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0;
  top: ${height}px;
  opacity: 0;
  z-index: 1;
  width: 100%;
  background-color: #282c34;
`

const Item = styled.div`
  font-size: 1rem;
  padding: 20px;
  cursor: pointer;
`

export default function Header({ menu, dispatch }) {
  return (
    <Container>
      {menu.map(item => {
        if (item.subStructure.length) {
          return (
            <SubMenu>
              <Item key={item.displayKey}>{item.displayValue}</Item>
              <SubItemContainer>
                {item.subStructure.map(item => (
                  <Item key={item.displayKey}>{item.displayValue}</Item>
                ))}
              </SubItemContainer>
            </SubMenu>
          )
        }
        return <Item key={item.displayKey}>{item.displayValue}</Item>
      })}
    </Container>
  )
}
