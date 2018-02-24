const getAnyLanguage = (content, languages) => {
  let result = ''
  for (let index = 0; index < languages.length; index++) {
    const language = languages[index]
    if (content[language]) {
      result = content[language]
      break
    }
  }
  return result
}

const getDefaultLanguage = (content, defaultLanguage, languages) => {
  if (!content[defaultLanguage]) return getAnyLanguage(content, languages)
  return content[defaultLanguage]
}

const getDataWithLanguage = (content, language, defaultLanguage, languages) => {
  if (!content) return ''
  if (typeof content !== 'object') return content
  if (!content[language]) return getDefaultLanguage(content, defaultLanguage, languages)
  return content[language]
}

export {
  getDataWithLanguage
}
