import { useReducer, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { reducer } from './reducer'
import Header from './components/header'

const INITIAL_STATE = {
  langCode: 'zh-tw',
  curArticle: '{structure.general}',
  menu: []
}

function App() {
  const [variables, dispatch] = useReducer(reducer, INITIAL_STATE)
  const { menu } = variables
  useEffect(
    () =>
      dispatch({
        type: 'CHANGE_LANG_CODE',
        payload: INITIAL_STATE
      }),
    []
  )
  console.log('menu,', menu)
  console.log('variables,', variables)

  return (
    <div className="App">
      <Header menu={menu} dispatch={dispatch} />
      <div style={{ height: '90px' }}></div>
      <div
        onClick={() =>
          dispatch({
            type: 'CHANGE_LANG_CODE',
            payload: { langCode: 'zh-cn' }
          })
        }
      >
        zh-cn
      </div>
      <div
        onClick={() =>
          dispatch({
            type: 'CHANGE_LANG_CODE',
            payload: { langCode: 'zh-tw' }
          })
        }
      >
        zh-tw
      </div>
      <div
        onClick={() =>
          dispatch({
            type: 'CHANGE_ARTICLE',
            payload: { displayKey: '{structure.football}' }
          })
        }
      >
        football
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )

  function handleChangeArticle(displayKey) {}
}

export default App
