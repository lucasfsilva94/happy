import Image from "../models/Image";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://172.19.40.231:3333/uploads/${image.path}`
    };
  },

  renderMany(image: Image[]) {
    return image.map((image) => this.render(image));
  },
};
