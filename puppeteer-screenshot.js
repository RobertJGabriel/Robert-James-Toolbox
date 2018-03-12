const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://robertgabriel.ninja');
    await page.screenshot({
        path: 'homepage.png'
    });

    await browser.close();
})();