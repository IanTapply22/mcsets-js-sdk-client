/// <reference types="node" />

declare module 'mcsets-js-sdk-client' {
  export class Options {
    maxRetries?: Number
  }

  export class MCSetsAPI {
    constructor(authSource: string, platform: 'base' | 'setstore' | 'enterprise', options?: Options)

    static from(authSource: string, platform: 'base' | 'setstore' | 'enterprise', options?: Options): BaseAPI | SetStoreAPI | EnterpriseAPI
  }

  export class BaseAPI extends MCSetsAPI {
  }

  export class SetStoreAPI extends MCSetsAPI {
  }

  export class EnterpriseAPI extends MCSetsAPI {
  }
}