# jimp-resize

A simple Node.js utility to resize images using [Jimp](https://github.com/jimp-dev/jimp).  
Supports local image files and URLs. Can also be extended to store and manage image data in MongoDB.

## Features
- Resize images to custom dimensions.
- Works with both local files and remote URLs.
- Optional MongoDB integration for storing image metadata.
- Simple, lightweight, and fast.

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/jimp-resize.git
cd jimp-resize
npm install
npm install -g .
```

## Usage

Resize an image from the internet or local storage.

### Basic Example
```bash
node resize.js --uri "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s" --width 200 --height 200 --grey 1 --out "output.png"

