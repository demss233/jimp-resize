# Jimp Resize

This tool can resize any image from the internet and manipulates a variety of extensions, 
it uses jimp under the hood.

# How it works
### Input Image
![image](https://github.com/user-attachments/assets/95bb43a5-06d5-4490-8ca9-2c0b39223dc3)

### Output Image (saved.jpg)
![image](https://github.com/user-attachments/assets/7d323f2c-0615-4cb6-a16b-fb16d34c0047)

The format is pretty simple, <code>resize [url] [width] [height] [grayscale (1 or 0)] [name of the image to be saved (with extension)] </code>


# Global Access

To make it global, you can look for the use of .bin in /node_modules. Create an executable file and link it globally using <code>npm link</code>
