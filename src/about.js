export default class About {
  buildAbout() {
    const section = document.createElement("section");
    section.innerHTML = `
      <h1>About</h1>
      <p>Hello, I'm not sure what to write in this part.</p>
      <p>I'll just leave this like this.</p>
    `;
    return section;
  }

  render() {
    const div = document.createElement("div");
    div.append(this.buildAbout());
    return div;
  }
}
