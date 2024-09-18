# @itplusx/sevdesk-api-ts-client

![NPM Version](https://img.shields.io/npm/v/%40itplusx%2Fsevdesk-api-ts-client)
![NPM License](https://img.shields.io/npm/l/%40itplusx%2Fsevdesk-api-ts-client)
![NPM Downloads](https://img.shields.io/npm/dm/%40itplusx%2Fsevdesk-api-ts-client)

TypeScript Client for [sevdesk API (2.0.0)](https://api.sevdesk.de/)

## Usage

Install package:

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install @itplusx/sevdesk-api-ts-client

# npm
npm install @itplusx/sevdesk-api-ts-client

# yarn
yarn add @itplusx/sevdesk-api-ts-client

# pnpm
pnpm add @itplusx/sevdesk-api-ts-client

# bun
bun install @itplusx/sevdesk-api-ts-client
```

<!-- /automd -->

Usage:

<!-- automd:jsimport cjs cdn name="pkg" -->

**ESM** (Node.js, Bun)

```js
import { SevdeskApiClient } from '@itplusx/sevdesk-api-ts-client'

const sevdeskApiClient = new SevdeskApiClient({ apiKey: 'your-secret-api-key' })
const basics = await sevdeskApiClient.apis.basicsApi.bookkeepingSystemVersion()

console.log(basics)
```

**CommonJS** (Legacy Node.js)

```js
const { SevdeskApiClient } = require('@itplusx/sevdesk-api-ts-client')

const sevdeskApiClient = new SevdeskApiClient({ apiKey: 'your-secret-api-key' })
const basics = await sevdeskApiClient.apis.basicsApi.bookkeepingSystemVersion()

console.log(basics)
```

<!-- /automd -->

## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Add `SEVDESK_API_KEY=replace-with-your-secret-api-key` to `.env` file in project root
- Run playground using `pnpm play`
- Run interactive tests using `pnpm dev`

</details>

## License

<!-- automd:contributors license=MIT -->

Published under the [MIT](https://github.com/itplusx/sevdesk-api-ts-client/blob/main/LICENSE) license.
Made by [community](https://github.com/itplusx/sevdesk-api-ts-client/graphs/contributors) 💛
<br><br>
<a href="https://github.com/itplusx/sevdesk-api-ts-client/graphs/contributors">
<img src="https://contrib.rocks/image?repo=itplusx/sevdesk-api-ts-client" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
