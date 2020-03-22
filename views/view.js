class View {
  constructor(root, template) {
    this.root = root;
    this.template = template;
  }

  render() {
    let root = $(getClassName(this.root))

    root.html(this.template)
  }
}
