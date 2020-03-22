this.getClassName = (name) => {
  return `.${name}`
}

this.getIdName = (name) => {
  return `#${name}`
}

this.renderAdd = (container, data) => {
  let object = $(getClassName(container));

  object.append(data)
}

this.renderDel = (id) => {
  let object = $(getIdName(id));

  object.remove()
}
