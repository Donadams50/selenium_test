const dotenv=require('dotenv');
dotenv.config();


const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();




const postDeviceToken = async()=>{
            try{
                await  driver.get('https://bulk.astrapay.com.ng')
                username= await driver.findElement(By.id("username"));
                password=  await driver.findElement(By.id("password"));
                login= await driver.findElement(By.id("signIn"));
                await username.sendKeys(process.env.username);
                await password.sendKeys(process.env.password);
                await  login.click();
                
                elementval = await  driver.findElement(By.id("groupCount")).getAttribute("value");
                console.log(elementval)
            }catch(err){
                console.log(err)      
            }
 }

 postDeviceToken()
            



  
