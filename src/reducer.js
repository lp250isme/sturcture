import baseStructure from './md/structure.json'
import i18n from './md/i18n.json'

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
    case 'CHANGE_STRUCTURE':
      return {
        ...state,
        filter: { ...state.filter, category: action.payload.category },
        pagination: { ...state.pagination, current: 1 }
      }
    default:
      throw new Error(`不存在的 action type: ${action.type}`)
  }
}
