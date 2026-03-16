import logoImage from "./assets/fire-bowl-logo.jpeg";

export default class Home {
  buildLogo() {
    const logoElement = document.createElement("img");
    logoElement.src = logoImage;
    logoElement.alt = "Fire Bowl Logo";
    logoElement.height = "192";
    logoElement.width = "192";
    return logoElement;
  }

  // I know this is not the best way to do this
  // I just wanted to use pure js fully verbose for one
  // I'll just use innerHtml for the rest
  buildDescription() {
    const section = document.createElement("section");
    const header = document.createElement("h1");

    const strong1 = document.createElement("strong");
    strong1.textContent = "Fire Bowl";
    const strong2 = document.createElement("strong");
    strong2.textContent = "Fire Bowl Express";
    header.textContent = "Description";
    const paragraph1 = document.createElement("p");
    paragraph1.append(
      strong1,
      document.createTextNode(
        " is a fusion Asian restaurant located in West Hazleton, Pennsylvania. From pho to fried rice to egg rolls, we have it all. We're also the only location in the area where you can get boba milk tea (a.k.a. bubble tea) and fruit tea! Not only that, we also have ",
      ),
      strong2,
      document.createTextNode(
        ", our new buffet bar where you can pick out fast and tasty food and be out the door in two minutes flat! ",
      ),
    );

    const paragraph2 = document.createElement("p");
    paragraph2.textContent =
      "You can dine in, grab food from the Fire Bowl Express buffet bar, pick up after ordering, get your food delivered straight to your door! We support ordering in person, by phone, or online.";

    section.append(header);
    section.append(paragraph1);
    section.append(paragraph2);
    return section;
  }

  buildHours() {
    const section = document.createElement("section");
    section.innerHTML = `
      <h1>Hours</h1>
      <ul>
        <li>Sunday: 11 AM – 9 PM</li>
        <li>Monday: 11 AM – 9:30 PM</li>
        <li>Tuesday: Closed</li>
        <li>Wednesday: 11 AM – 9:30 PM</li>
        <li>Thursday: 11 AM – 9 PM</li>
        <li>Friday: 11 AM – 9:30 PM</li>
        <li>Saturday: 11 AM – 9:30 PM</li>
      </ul>
    `;
    return section;
  }

  buildAddress() {
    const section = document.createElement("section");
    section.innerHTML = `
      <h1>Address</h1>
      <p>301 E Broad St, West Hazleton, PA 18202</p>
    `;
    return section;
  }

  render(element) {
    element.append(
      this.buildLogo(),
      this.buildDescription(),
      this.buildHours(),
      this.buildAddress(),
    );
  }
}
