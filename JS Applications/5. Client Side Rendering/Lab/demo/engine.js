export function renderTemplate(templateAsString, data) {
  const pattern = /{{(.+?)}}/gm // global, multiline

  return templateAsString.replace(pattern, (match, propName) => {
    return data[propName]
  })
}
