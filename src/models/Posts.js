export default class Posts {
  constructor(title, img) {
    this.title = title;
    this.date = new Date().toJSON();
    this.img = img;
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date,
      img: this.img,
    }, null, 2)
  }
};


