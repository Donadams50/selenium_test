const dotenv=require('dotenv');
dotenv.config();


const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

 driver.get('https://bulk.astrapay.com.ng').then(function(){
  username= driver.findElement(By.id("username"));
  password= driver.findElement(By.id("password"));
  login= driver.findElement(By.id("signIn"));
  username.sendKeys(process.env.username);
  password.sendKeys(process.env.password);
  login.click();

   actualUrl=driver.getCurrentUrl();

   console.log(actualUrl)
// driver.findElement(webdriver.By.name('q')).sendKeys('webdriver\n').then(function(){
//     driver.getTitle().then(function(title) {
//       console.log(title)
//       if(title === 'webdriver - Google Search') {
//          console.log('Test passed');
//       } else {
//          console.log('Test failed');
//       }
//      //driver.quit();
//     });
//   });
});