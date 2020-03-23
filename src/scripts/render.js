this.getClassName = (name) => `.${name}`;

this.getIdName = (name) => `#${name}`;

this.renderAdd = (container, data) => {
  let object = $(getClassName(container));

  object.append(data)
}

this.renderDel = (id) => {
  let object = $(getIdName(id));

  object.remove()
}

this.renderDelClass = (className) => {
  let object = $(getClassName(className));

  object.remove()
}

this.getRandomInt = (min, max) => Math.floor(Math.random() * Math.floor(max)) + min;
