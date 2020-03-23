class View {
  constructor(root, template, container) {
    this.root = root;
    this.rootObj = $(getClassName(root));
    this.template = template;
    this.container = container;
  }

  remove() {
    renderDelClass(this.container)
  }

  render() {
    this.rootObj.append(this.template)
  }
}
