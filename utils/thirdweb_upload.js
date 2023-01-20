const { ThirdwebStorage } = require("@thirdweb-dev/storage");
const { readFileSync, readdirSync } = require("fs-extra");

const storage = new ThirdwebStorage();
const images = readdirSync("./build/images");

const thirdwebUpload = async() => {
    // const uri = await storage.upload(images);
    // console.log("Uploaded Base URI: " + uri);
    console.log(await images);
}

thirdwebUpload();
