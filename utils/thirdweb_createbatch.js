const basePath = process.cwd();
const { copy, mkdir, exists, removeSync, readdir } = require('fs-extra');
const { FileSplitToDirectory } = require('file-split-to-directory');
const logger = require(`${basePath}/modules/WarenLogger.js`)

// paths
const buildFolder = `${basePath}/build`;
const imageFolder = `${buildFolder}/images`;
const jsonFolder = `${buildFolder}/json`;
const thirdwebFolder = `${buildFolder}/thirdweb`;

// initialize FSTD
const fstd = new FileSplitToDirectory();

const batch = 2;

(async () => {

    let ImageArray = [];

    const createBatch = () => {

        readdir(imageFolder, async (err, files) => {
            if (err) throw err;
            files.forEach((file) => {
                ImageArray.push(file);
            });
            
            const countPerBatch = ImageArray.length / batch;
            fstd.directoryNameGenerator = (i) => `batch ${i + 1}`;
            fstd.runSync(imageFolder, countPerBatch, thirdwebFolder);
            fstd.runSync(jsonFolder, countPerBatch, thirdwebFolder);
            logger("done", "Batch created ✅");
        });

    }

    // check if thirdweb folder exists
    if (exists(thirdwebFolder)) {
        logger("done", "Folder detected ✅");
        createBatch();
    } else {        
        logger("done", "Folder doesn't exists ❎");
        remove(thirdwebFolder, (err) => {
            if (err) throw err;
            logger("done", "Folder deleted ✅");
        });
        // create thirdweb folder
        mkdir(thirdwebFolder, (err) => {
            if (err) throw err;
            logger("done", "Folder created ✅");
        });
        createBatch();
    }

    // const FSTD = new fstd.FileSplitToDirectory();
    // await FSTD.run(`${basePath}/build/images`, 15);
})();
