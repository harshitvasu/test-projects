let webdriver = require('selenium-webdriver');
let username = process.env.BROWSERSTACK_USERNAME;
let accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
let buildName = process.env.BROWSERSTACK_BUILD_NAME;
let browserstackLocal = process.env.BROWSERSTACK_LOCAL;
let browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;

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

driver.get('https://www.google.com').then(function(){
  driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title);
      driver.quit();
    });
  });
}); 