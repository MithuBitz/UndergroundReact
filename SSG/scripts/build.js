import ReactDOMServer from "react-dom/server";
import fs from "fs-extra";
import path from "path";
import React from "react";
import { fileURLToPath } from "url";

import { criketers } from "../src/data.js";
import App from "../src/App.js";

// ReactDOMServer.renderToStaticMarkup(React.createElement(App, {cricketers}));

// Below two line is to get the path of current directory in case of module js.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// get the reference of path Where the output will be stored
const outputDir = path.resolve(__dirname, "../dist");

// get the reference of path of template
const htmlTampletePath = path.resolve(__dirname, "../src/template.html");

// get the reference of path of output html where the html file will be generated
const outputHtmlPath = path.resolve(outputDir, "index.html");

const template = await fs.readFile(htmlTampletePath, "utf-8");

const appHtml = ReactDOMServer.renderToStaticMarkup(
  React.createElement(App, { criketers })
);

// replace the <!--app--> with appHtml
const finalHtml = template.replace("<!--app-->", appHtml);

// Now write the final html to the dist folder
await fs.ensureDir(outputDir);
await fs.writeFile(outputHtmlPath, finalHtml);
