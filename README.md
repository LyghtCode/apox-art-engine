# Apox Art Engine (Legacy) used for Evil VCs Generative NFT Collection 

> **Note**: I'm gonna archive and close this project as I'm working on a new version of it complete from scratch using the Art Engine v2 by HashLips Labs.
>


The forked version of [HashLips Art Engine](https://github.com/HashLips/hashlips_art_engine) ([v1.1.2-patch-6](https://github.com/HashLips/hashlips_art_engine/commits/v1.1.2_patch_v6)) with better features and compatibility with [thirdweb](https://thirdweb.com).

## 🦄 Command Workflow

1. Generate the assets.

    ```bash
    yarn build
    ```

2. Generate preview image.

    ```bash
    yarn preview
    ```

3. Generate preview GIF.

    ```bash
    yarn preview:gif
    ```

4. Upload to IPFS your images. (optional)

    ```bash
    yarn thirdweb:upload
    ```

    > **Note**: You can undo this by using `yarn meta:reset` but you can't reset it once you use the `yarn thirdweb:createbatch` command.

5. Prepare the thirdweb folder.

    ```bash
    yarn thirweb
    ```

    It will create a folder called **thirdweb** folder which you can use to upload to the thirdweb dashboard by doing drag and drop.

6. Wanna upload them by batch? I got you! (optional)

    ```bash
    yarn thirdweb:createbatch
    ```

    It will ask you how many batch of folder you want to create based on your generated assets.

    > **Warning**: This action cannot be undone once executed so be sure to backup your image assets before using this command.

## ⚡ Instant Setup

Let's get started with the instant setup and build. Proceed to the requirements below.

### 📋 Requirements

- A [GitHub Account](https://github.com/signup).
- A [Gitpod Account](https://gitpod.io). (sign up with GitHub)
- Image layers for your NFTs.

[![open in gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/warengonzaga/thirdweb-art-engine-legacy)

## 🤔 What's New

These are the few important improvements to the forked version of art engine that will work 100% with thirdweb NFT project deployments.

### ✅ New Script Command

New script command for common art engine utilities.

#### 📜 Preview GIF

Before: `$ yarn preview_gif` **Now**: `$ yarn preview:gif`

#### 📜 Update Info

Before: `$ yarn update_info` **Now**: `$ yarn meta:update`

### ✅ Upload Images to IPFS

You can now upload your generated image assets directly to IPFS and add your CID directly to your existing metadata. So all you have to do is to upload your `_metadata.json` file to the thirdweb dashboard. That's it! _(25GB Upload Limit Size)_

```bash
yarn thirdweb:upload
```

### ✅ Metadata Reset

You can now reset the metadata (specifically the `image` property) if you use the command for uploading your image assets to the IPFS.

```bash
yarn meta:reset
```

### ✅ Generate thirdweb Folder

You can now generate a folder where you can use to drag and drop it to the thirdweb dashboard. You can only run this after you generated your arts using `yarn build` or `yarn generate` command. Use the command below to generate a folder for you prepare to use in thirdweb dashboard.

```bash
yarn thirdweb
```

or

```bash
yarn thirdweb:prepare
```

If you want to generate the art and create a folder for thirdweb at the same time follow the command below.

```bash
yarn generate && yarn thirdweb
```

> **Why not add this to script command?**
> For some reason it is not working on my end, need to update this and bind it on the `yarn generate` script.
> For now, you can use the command above. ✌️

If you want to create a folder by number of batch you can use the following command below.

```bash
yarn thirdweb:createbatch
```

> **Warning**: This action cannot be undone once executed so be sure to backup your image assets before using this command.

### ✅ Start Count From

You can define your own start count upon generation. Default count is 0. This is to match the default minting token ID with thirdweb.

By default it is `0`.

```js
const startCountFrom = 0;
```

### ✅ Local File Mapping

You can define your own file mapping, you can choose between local file mapping or use the existing pre-uploaded file on IPFS. Make sure to make the `hasBaseUri` to `true` so that the engine will use the defined `baseUri` in the config file.

By default it is `false`.

```js
const hasBaseUri = false;
const baseUri = "ipfs://cid-here";
```

If set to `false` the output would be...

```json
"image": "0.png",
```

If set to `true` the output would be...

```json
"image": "ipfs://<cid-here>/0.png",
```

### ✅ Case Sensitivity

Use only this option if you want to make your layer image filename to case sensitive as trait value or case insentive and make your layer image filename to capitalize instead. By default, set to `false`.

```js
const isLayerNameFileNameAsIs = false;
```

#### Case Sensitive Example

> input: "**AWESOME**#1.png" as layer image filename.
> output: "_AWESOME_" as trait value.

#### Case Insensitive Example

> input: "**AWESOME**#1.png" as layer image filename.
> output: "_Awesome_" as trait value.

### ✅ Reset Build/Generation

Added the script command to reset the tool. It removes only the build and temp folders.

```bash
yarn reset
```

## 📃 License

The thirdweb Art Engine (Legacy) is licensed under [The MIT License](https://opensource.org/licenses/MIT).


## 📝 Author

The Apox Art Engine (Legacy) is forked and maintained by **[Lyghtcode](https://github.com/lyghtcode)**, with the help of awesome [contributors](https://github.com/warengonzaga/thirdweb-art-engine-legacy/graphs/contributors).
