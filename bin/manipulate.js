import { Jimp } from "jimp";

export async function manipulateImage({ uri, width, height, grey, out }) {
  if (
    !uri.endsWith(".jpg") &&
    !uri.endsWith(".png") &&
    !uri.endsWith(".jpeg")
  ) {
    throw new Error("Only .jpg, .jpeg, and .png files are supported.");
  }

  const image = await Jimp.read(uri);
  image.resize(width, height);

  if (grey) {
    image.greyscale();
  }

  await image.writeAsync(out);
}
