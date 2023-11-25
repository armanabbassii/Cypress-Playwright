const playwright = require("playwright");
const {
  PASSWORD,
  USERNAME,
  BASE_URL,
  ENTERWITHUSERNAME,
  ENTER,
} = require("./constants");

module.exports = {
  async captureAndSetCookies() {
    let cookies = [];
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    try {
      const page = await context.newPage();
      await page.goto(BASE_URL);
      await page.getByText(ENTERWITHUSERNAME).click();

      await page.waitForTimeout(5000);

      const pages = context.pages();
      const newPage = pages[1];

      await newPage.fill("#authIdentity-inp", USERNAME);
      await newPage.fill("#authPassword-inp", PASSWORD);

      await newPage.getByRole("button", { name: ENTER }).click();

      await newPage.waitForTimeout(5000);
      // Get cookies from the current context
      cookies = await context.cookies();
      console.log("Cookies after logging in:", cookies);
    } catch (err) {
      await browser.close();
      throw new Error(err.message);
    }

    return cookies;
  },
};
