// #!/usr/bin/env node
const { Jimp } = require("jimp");

const manipulateImage = async () => {
  const args = process.argv.slice(2);
  const [uri, width, height, grey, rename] = args;
  if (args.length != 5) {
    console.error("5 arguments expected!");
  } else {
    try {
      const image = await Jimp.read(uri);
      image.resize({ w: parseInt(width), h: parseInt(height) });
      if (parseInt(grey)) {
        image.greyscale();
      }
      await image.write(`${rename}`);
    } catch (msg) {
      console.error(
        "Make sure that you are trying to resize the image to a practical width and height, \nalso make sure the uri is an image!"
      );
      console.error(
        "Type [uri] [width] [height] [grayscale: 1 or 0] [new name (with extension)]"
      );
    }
  }
};

manipulateImage();
