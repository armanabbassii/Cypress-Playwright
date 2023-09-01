const playwright = require("playwright");

const USERNAME = "Armanabbasi";
const PASSWORD = "a@123456";

module.exports = {
  async getLoggedInSession() {
    let cookies = [];
    const chrome = await playwright.chromium.launch({ headless: false });
    const context = await chrome.newContext();
    try {
      const page = await context.newPage();
      await page.goto("http://dev.cms.test/");
      await page.getByText("ورود با نام کاربری").click();

      console.log(`clicked link`);
      // const [newPage] = await Promise.all([
      //   page.waitForEvent("popup"),
      //   page.waitForTimeout(5000), // Adjust the timeout as needed
      // ]);
      await page.waitForTimeout(5000);
      console.log(`waited`);

      const pages = context.pages();
      const newPage = pages[1];

      await newPage.type("#authIdentity-inp", USERNAME);
      await newPage.type("#authPassword-inp", PASSWORD);

      await newPage.getByRole("button", { name: "ورود" }).click();
      await newPage.getByRole("button", { name: "ورود" }).click();

      await newPage.waitForTimeout(10_000);
      // Capture cookies from the current context

      cookies = await page.context().cookies();
      // await chrome.close();
    } catch (err) {
      await chrome.close();
      throw new Error(err.message);
    }

    return cookies;
  },
};
