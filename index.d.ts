/// <reference types="node" />

declare module 'mcsets-js-sdk-client' {
  export class Options {
    maxRetries?: Number
  }

  export class MCSetsAPI {
    constructor(api_key: string, platform: 'setstore' | 'enterprise', options?: Options)

    static from(api_key: string, platform: 'setstore' | 'enterprise', options?: Options): SetStorePluginAPI | EnterpriseAPI
  }

  export class SetStorePluginAPI extends MCSetsAPI {
  }

  export class EnterpriseAPI extends MCSetsAPI {
  }
}