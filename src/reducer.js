import marked from 'marked'
import baseStructure from './structure/structure.json'
import i18n from './structure/i18n.json'

function formatMenu(langCode) {
  const sortedStructure = baseStructure.sort(function (a, b) {
    return a.displayOrder > b.displayOrder ? 1 : -1
  })
  const localizations = i18n.find(
    item => item.langCode === langCode
  ).localizations
  return sortedStructure.map(structure => ({
    ...localizations.find(item => item.displayKey === structure.displayKey),
    subStructure: localizations.filter(
      item =>
        item.displayKey.split('.')[0].replace('{', '') ===
        structure.directoryName
    )
  }))
}

const rootDirect = 'structure'
function loadArticle(langCode, displayKey) {
  const tempDirects = displayKey.replace('{', '').replace('}', '').split('.')
  const directs =
    tempDirects[0] === rootDirect ? tempDirects : [rootDirect, ...tempDirects]
  console.log('directs,', directs)
  // const readmePath = require('./Readme.md')
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LANG_CODE':
      const selectedLangCode = action.payload.langCode
      const menu = formatMenu(selectedLangCode)
      console.log('menu,', menu)
      return {
        ...state,
        langCode: action.payload.langCode,
        menu
      }
    case 'CHANGE_ARTICLE':
      const { langCode } = state
      const { displayKey } = action.payload
      const article = loadArticle(langCode, displayKey)
      return {
        ...state,
        curArticle: displayKey
      }
    default:
      throw new Error(`不存在的 action type: ${action.type}`)
  }
}
