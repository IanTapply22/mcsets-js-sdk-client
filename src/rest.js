const debug = require('debug')('mcsets-rest')
const fetch = require('node-fetch')

const constants = require('./constants')

module.exports = class Rest {
  constructor (apiKey, platform = 'base', options = {}) {
    this.options = options
    this.platform = platform
    const hostEntry = constants[platform] || constants.base
    this.host = hostEntry.host
    this.userAgent = options.userAgent || 'mcsets-js-sdk-client/1.0.0'
    this.maxRetries = options.maxRetries ?? 4

    if (platform === 'enterprise') {
      this.getAuth = async () => {
        if (!apiKey) throw new Error('Enterprise API requires an API key')
        if (typeof apiKey === 'string') return ['Authorization', `Bearer ${apiKey}`]
        if (typeof apiKey.getKey === 'function') {
          const key = await apiKey.getKey()
          return ['Authorization', `Bearer ${key}`]
        }
        throw new Error('Unsupported authSource for enterprise platform')
      }
    } else if (platform === 'setstore') {
      this.getAuth = async () => {
        if (!apiKey) throw new Error('SetStore API requires an API key')
        if (typeof apiKey === 'string') return ['X-API-Key', apiKey]
        if (typeof apiKey.getKey === 'function') {
          const key = await apiKey.getKey()
          return ['X-API-Key', key]
        }
        throw new Error('Unsupported authSource for setstore platform')
      }
    } else {
      this.getAuth = async () => null
    }
  }

  get (route, options = {}) {
    return this.prepareRequest({ ...options, route, method: 'GET' })
  }

  post (route, options = {}) {
    return this.prepareRequest({ ...options, route, method: 'POST' })
  }

  put (route, options = {}) {
    return this.prepareRequest({ ...options, route, method: 'PUT' })
  }

  delete (route, options = {}) {
    return this.prepareRequest({ ...options, route, method: 'DELETE' })
  }

  async prepareRequest (request) {
    const url = `${this.host}${request.route}`

    const headers = {
      'Accept': 'application/json',
      'User-Agent': this.userAgent
    }

    if (!this.options.skipAuth) {
      const auth = await this.getAuth()
      if (auth && Array.isArray(auth)) {
        const [key, value] = auth
        headers[key] = value
      }
    }

    let body
    if (request.body != null) {
      body = JSON.stringify(request.body)
      headers['Content-Type'] = 'application/json'
    }

    const fetchOptions = {
      method: request.method,
      body,
      headers: { ...headers, ...request.headers }
    }

    return this.execRequest(url, fetchOptions)
  }

  async execRequest (url, options, retries = 0) {
    const response = await fetch(url, options)

    if (response.ok) {
      const ct = response.headers.get('Content-Type') || ''
      if (ct.startsWith('application/json')) return response.json()
      return response.text()
    }

    debug('Request failed', response.status, response.statusText)

    if (response.status >= 500 && response.status < 600 && retries < this.maxRetries) {
      const delay = Math.pow(2, retries) * 1000
      await new Promise(resolve => setTimeout(resolve, delay))
      return this.execRequest(url, options, retries + 1)
    }

    let bodyText = ''
    try { bodyText = await response.text() } catch (e) {}
    throw new Error(`${response.status} ${response.statusText} ${bodyText}`)
  }
}