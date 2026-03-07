# mcsets-js-sdk-client
Library to manage and interact with MCSets API's

## Installation (NPM)
```sh
npm install mcsets-js-sdk-client
```

## Usage
### MCSetsAPI
#### .from(apiKey: string | null, platform: 'base' | 'setstore' | 'enterprise', options: Options)
The only platform that can be used with a null API key is the `base` platform. For the instance where a key is provided for the base platform, it will be disregarded and not inserted into the headers. In the case that no API key is provided when providing either `setstore` or `enterprise` and error will arise alerting of the empty API key parameter.

This functiion will take an API key provded and insert it into the proper authentication header based on the provided platform. See documentation on auth headers [here.](https://docs.mcsets.com/developers/authentication)

### Example
```js
const { MCSetsAPI } = require('mcsets-js-sdk-client')

const apiKey = 'ent_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

const api = MCSetsAPI.from(apiKey, 'enterprise') // other platform options: 'base' or 'setstore'

// Returns a list of products for the authenticated enterprise account
await api.getProducts().then(console.log)
```

## Documentation
For more information on the available functions and endpoints for the MCSets API, please see the [API Documentation](./API.md) for more details.