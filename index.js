/* @hzaharr: Basic Puppeteer Setup to Scrape Internet Data */

const puppeteer = require("puppeteer");

const snapPage = async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto("https://github.com/h-zahar");

    await page.setViewport({ width: 1200, height: 760 });

    // Code Here

    // An Example: Getting a Snapshot of the Page
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        const file = await page.screenshot({ path: "hzaharr.png" });
        if (
          typeof file === "object" &&
          file.toJSON().hasOwnProperty("type") &&
          file.toJSON()["type"] === "Buffer"
        ) {
          console.log("Screenshot taken!\n", file.toJSON());
          resolve();
        } else {
          reject();
        }
      }, 10000);
    });

    // End of Code

    await browser.close();
  } catch (error) {
    console.error("Something went wrong!\n", error);
  }
};

snapPage();
