import { useState } from 'react'
import styled from 'styled-components'
import structure from '../md/structure.json'
import i18n from '../md/i18n.json'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-item: center;
  flex-direction: row;
  background-color: #282c34;
  color: #fff;
`

const SubMenu = styled.div``

const Item = styled.div`
  font-size: 30px;
  padding: 20px;
  cursor: pointer;
`

export default function Header({ menu, dispatch }) {
  return (
    <Container>
      {menu.map(item => {
        if (item.subStructure.length) {
          return (
            <>
              <Item key={item.displayKey}>{item.displayValue}</Item>
              {item.subStructure.map(item => (
                <Item key={item.displayKey}>{item.displayValue}</Item>
              ))}
            </>
          )
        }
        return <Item key={item.displayKey}>{item.displayValue}</Item>
      })}
    </Container>
  )
}
