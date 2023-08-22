const playwright = require("playwright");

const USERNAME = "Armanabbasi";
const PASSWORD = "armandillo1995";

module.exports = {
  async getLoggedInSession() {
    let cookies = [];
    const chrome = await playwright.chromium.launch({ headless: false });
    try {
      const page = await chrome.newPage();
      await page.goto("http://dev.cms.test/");
      await page.getByText("ورود با نام کاربری").click();

      const [newPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.waitForTimeout(5000), // Adjust the timeout as needed
      ]);

      await newPage.type("#authIdentity-inp", USERNAME);
      await newPage.type("#authPassword-inp", PASSWORD);

      await newPage.getByRole("button", { name: "ورود" }).click();
      await newPage.getByRole("button", { name: "ورود" }).click();

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
