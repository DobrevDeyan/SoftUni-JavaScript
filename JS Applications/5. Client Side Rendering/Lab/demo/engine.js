export function renderTemplate(template, data) {
  const pattern = /{{(.+?)}}/gm // global, multiline

  return template.replace(pattern, (match, propName) => {
    return data[propName]
  })
}
