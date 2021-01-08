## Omise.js double request
This repo is meant to be reproducible of Omise.js CDN double requests of [reported issue in Omise.js repo](https://github.com/omise/omise.js/issues/90).

## Gettings start
1. Clone repo
```bash
git clone https://github.com/SaltyAom/omise-js-double-request && cd omise-js-double-request
```

2. Install Module
```bash
npm install

// Or using yarn
yarn
```

3. Start development environment
```bash
npm run dev

// or using yarn
yarn dev
```

4. Navigate to `localhost:3000` and toggle developer tool > network.
You should see something like this.
![Preview](https://user-images.githubusercontent.com/35027979/103778968-a419b800-5065-11eb-8c40-a23fdaf4b485.png)

### Extra Node
Since I'm not sure if I should put Omise key as public, if you wanted to reproduce working form, you have to create `.env.json` as same level as `package.json` with content of:
```json
{
    "OMISE_PUBLIC_KEY": "omise_public_key",
    "OMISE_PRIVATE_KEY": "omise_private_key"
}
```
