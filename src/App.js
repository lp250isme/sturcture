import { useReducer, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { reducer } from './reducer'
import Header from './components/header'

const INITIAL_STATE = {
  langCode: 'zh-tw',
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
