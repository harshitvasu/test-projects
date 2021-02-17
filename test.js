let webdriver = require('selenium-webdriver');
let username = process.env.BROWSERSTACK_USERNAME;
let accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
let buildName = process.env.BROWSERSTACK_BUILD_NAME;
let browserstackLocal = process.env.BROWSERSTACK_LOCAL;
let browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;


const runTest = async ()=>{
  let capabilities = {
    "os" : "Windows",
    "os_version" : "10",
    "browserName" : "chrome",
    "browser_version" : "latest",
    "name": "BStack -[Jenkins] Sample Test", // test name
    "build" : buildName, // CI/CD job name using BROWSERSTACK_BUILD_NAME env letiable
    "browserstack.local" : browserstackLocal,
    "browserstack.localIdentifier" : browserstackLocalIdentifier,
    "browserstack.user" : username,
    "browserstack.key" : accessKey
  };
  let driver = new webdriver.Builder().
    usingServer("https://hub-cloud.browserstack.com/wd/hub").
    withCapabilities(capabilities).
    build();
  await driver.get('https://www.google.com');
  console.log(await driver.getTitle());
  await driver.get('https://localhost:4445');
  console.log(await driver.getTitle());
  await driver.quit();
}
runTest();
