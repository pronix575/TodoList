class View {
  constructor(root, template, container) {
    this.root = root;
    this.template = template;
    this.container = container;
  }

  remove() {
    renderDelClass(this.container)
  }

  render() {
    $(getClassName(this.root)).append(this.template)
  }
}
