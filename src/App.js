import { useReducer, useEffect } from 'react'
import { marked } from 'marked'
import { reducer } from './reducer'
import styled from 'styled-components'
import Header from './components/header'
import Footer, { FooterHeight } from './components/footer'
import { INITIAL_STATE } from './reducer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  position: relative;
  padding: 0px 20px 50px 20px;
`

function App() {
  const [variables, dispatch] = useReducer(reducer, INITIAL_STATE)
  const { menu, articlePath, article, langCode } = variables
  useEffect(() => initialize(INITIAL_STATE), [])

  useEffect(() => {
    fetch(articlePath)
      .then(response => response.text())
      .then(result =>
        dispatch({
          type: 'SET_ARTICLE',
          payload: marked(result)
        })
      )
  }, [articlePath, langCode])

  return (
    <Container>
      <Header menu={menu} handleChangeArticle={handleChangeArticle} />
      <Content>
        <article dangerouslySetInnerHTML={{ __html: article }}></article>
      </Content>
      <Footer handleChangeLangCode={handleChangeLangCode} />
    </Container>
  )

  function initialize() {
    dispatch({
      type: 'CHANGE_LANG_CODE',
      payload: INITIAL_STATE
    })
  }

  function handleChangeArticle(displayKey) {
    dispatch({
      type: 'CHANGE_ARTICLE',
      payload: { displayKey }
    })
  }

  function handleChangeLangCode(langCode) {
    dispatch({
      type: 'CHANGE_LANG_CODE',
      payload: { langCode }
    })
  }
}

export default App
