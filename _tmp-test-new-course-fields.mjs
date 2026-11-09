import { chromium } from "playwright-core";

const executablePath = process.env.CHROMIUM_PATH;

const browser = await chromium.launch({
  headless: true,
  executablePath,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
const logs = [];
page.on("console", (msg) => logs.push(`[console:${msg.type()}] ${msg.text()}`));
page.on("pageerror", (err) => logs.push(`[pageerror] ${err.message}`));

await page.goto("http://localhost:3000/dashboard", { waitUntil: "networkidle" });
await page.waitForSelector("#wd-dashboard-courses");

await page.fill("#wd-course-name", "Smoke Test Course");
await page.fill("#wd-course-description", "Added via smoke test to confirm number/startDate carry through.");
await page.fill("#wd-course-number", "RS9999");
await page.fill("#wd-course-start-date", "2025-02-14");
await page.click("#wd-add-new-course-click");

await page.waitForFunction(
  () => Array.from(document.querySelectorAll(".wd-dashboard-course-title")).some(
    (el) => el.textContent?.trim() === "Smoke Test Course",
  ),
);
console.log("CARD_ADDED: true");

// Click Edit on the new card to confirm number/startDate round-tripped through the store
const newCard = page.locator(".wd-dashboard-course").filter({
  has: page.locator(".wd-dashboard-course-title", { hasText: /^Smoke Test Course$/ }),
});
await newCard.getByRole("button", { name: "Edit" }).click();

const numberValue = await page.inputValue("#wd-course-number");
const startDateValue = await page.inputValue("#wd-course-start-date");
console.log("NUMBER_AFTER_EDIT:", JSON.stringify(numberValue));
console.log("START_DATE_AFTER_EDIT:", JSON.stringify(startDateValue));

console.log("CONSOLE_LOGS:", JSON.stringify(logs));

await browser.close();
