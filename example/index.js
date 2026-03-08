import { MCSetsAPI } from 'mcsets-js-sdk-client'
import dotenv from 'dotenv'

// Inject ENV vars from ENV file
dotenv.config({ quiet: true })

// Create constants with API keys from ENV vars
const enterpriseApiKey = process.env.ENTERPRISE_API_KEY
const setStorePluginApiKey = process.env.SETSTORE_PLUGIN_API_KEY
// const setStoreConnectionApiKey = process.env.SETSTORE_CONNECTION_API_KEY

// Base API required no auth so we will set the key to null
const baseApi = MCSetsAPI.from(null, 'base')

const enterpriseApi = MCSetsAPI.from(enterpriseApiKey, 'enterprise')

// Create two set store API instances with both API keys to support both auth methods
const setStorePluginApi = MCSetsAPI.from(setStorePluginApiKey, 'setstore')
// const setStoreConnectionApi = MCSetsAPI.from(setStoreConnectionApiKey, 'setstore')

/**
 * Example API calls are made below
 */

// Use base API to fetch health status (no auth required)
await baseApi.getHealth().then(console.log)

// Use the enterprise API to fetch products (requires enterprise API key, see ENV for key examples)
await enterpriseApi.getProducts().then(console.log)

// Use the set store plugin API to fetch pending delivery commands (requires set store plugin API key, see ENV for key examples)
await setStorePluginApi.fetchPendingDeliveryCommands().then(console.log)
