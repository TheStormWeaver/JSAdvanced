//@ts-check
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const mockData = require("./mock-data.json");

function json(data){
    return{
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
}

let browser;
let context;
let page;

describe('E2E tests', function () {
    this.timeout(6000);

    before(async () => {
        // browser = await chromium.launch({ headless: false, slowMo: 500 });
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();

        // block intensive resources and external calls (page routes take precedence)
        await context.route('**/*.{png,jpg,jpeg}', route => route.abort());

        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });
    
    describe("catalog", () => {
        it("loads and displays recipes", async () => {
            await page.route("**/data/recipes*", (request) => request.fulfill(json(mockData.list)))

            await page.goto("http://127.0.0.1:5500/")

            await page.waitForSelector("article")

            const titles = await page.$$eval('article.preview h2', t => t.map(s => s.textContent))
            expect(titles[0]).to.contains("Easy Lasagna")
            expect(titles[1]).to.contains("Grilled Duck Fillet")
            expect(titles[2]).to.contains("Roast Trout")
        })
    })

    describe("Authentication", () => {
        it.only("register sends correct request", async () => {
            await page.route("**/users/register", route => route.fulfill(json({_id: "0001", email, acessToken: "AAAA"})))
            const email = "jhon@abv.bg"
            const password = "123123"

            await page.goto("http://127.0.0.1:5500/")
            await page.click("text=Register")

            await page.waitForSelector("form")
            await page.fill('[name="email"]', email)
            await page.fill('[name="password"]', password)
            await page.fill('[name="rePass"]', password)

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes("/users/register") && request.method() == "POST"),
                page.click('[type="submit"]')
            ])
            const postData = JSON.parse(request.postData())
            expect(postData.email).to.equal(email)
            expect(postData.password).to.equal(password)
        })

        it.only("login sends correct request", async () => {
            await page.route("**/users/login", route => route.fulfill(json({_id: "0001", email, acessToken: "AAAA"})))
            const email = "jhon@abv.bg"
            const password = "123123"

            await page.goto("http://127.0.0.1:5500/")
            await page.click("text=Login")

            await page.waitForSelector("form")
            await page.fill('[name="email"]', email)
            await page.fill('[name="password"]', password)

            const [request] = await Promise.all([   
                page.waitForRequest(request => request.url().includes("/users/login") && request.method() == "POST"),
                page.click('[type="submit"]')
            ])
            const postData = JSON.parse(request.postData())
            expect(postData.email).to.equal(email)
            expect(postData.password).to.equal(password)
        })
    })
});
