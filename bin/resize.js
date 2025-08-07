#!/usr/bin/env node
import fs from "fs";
import path from "path";
import sharp from "sharp";
import ora from "ora";
import { fileURLToPath } from "url";
import yargs from "yargs";
import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const argv = yargs(process.argv.slice(2))
  .option("uri", { type: "string", demandOption: true, describe: "Image URL" })
  .option("width", {
    type: "number",
    demandOption: true,
    describe: "Width in px",
  })
  .option("height", {
    type: "number",
    demandOption: true,
    describe: "Height in px",
  })
  .option("grey", {
    type: "boolean",
    default: false,
    describe: "Apply greyscale",
  })
  .option("out", {
    type: "string",
    demandOption: true,
    describe: "Output file path",
  })
  .help().argv;

const spinner = ora("Processing image...").start();

try {
  const response = await fetch(argv.uri);
  if (!response.ok)
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  const buffer = Buffer.from(await response.arrayBuffer());

  let img = sharp(buffer).resize(argv.width, argv.height);
  if (argv.grey) img = img.greyscale();

  await img.toFile(argv.out);

  spinner.succeed(`Image saved to ${argv.out}`);
} catch (err) {
  spinner.fail("Failed to process image.");
  console.error(err.message);
}
