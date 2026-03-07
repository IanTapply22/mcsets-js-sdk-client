/// <reference types="node" />

declare module 'mcsets-js-sdk-client' {
  export class Options {
    maxRetries?: Number
  }

  export class MCSetsAPI {
    constructor(apiKey: string | null, platform: 'base' | 'setstore' | 'enterprise', options?: Options)

    static from(apiKey: string | null, platform: 'base' | 'setstore' | 'enterprise', options?: Options): BaseAPI | SetStoreAPI | EnterpriseAPI
  }

  export class BaseAPI extends MCSetsAPI {
    getHealth(): Promise<Health>
  }

  export class SetStoreAPI extends MCSetsAPI {
    registerGameServerConnection(): Promise<>

    fetchPendingDeliveryCommands(): Promise<>
    deliverCommand(): Promise<>

    setOnlinePlayers(): Promise<>
    sendServerHeartbeat(): Promise<>

    verifyPlayerIdentity(): Promise<>
    getPlayerIdentityVerification(): Promise<>

    syncLuckPermsRanks(): Promise<>

    getRecentDonations(): Promise<>
    getActiveDonationGoal(): Promise<>
    markActiveDonationGoalComplete(): Promise<>
    resetActiveDonationGoal(): Promise<>

    getCoupons(): Promise<>
    createCoupon(): Promise<>
    getCoupon(couponCode: string): Promise<>
    updateCoupon(couponCode: string): Promise<>
    deleteCoupon(couponCode: string): Promise<>

    getFlashSales(): Promise<>
    createFlashSale(): Promise<>
    getFlashSale(saleId: string): Promise<>
    updateFlashSale(saleId: string): Promise<>
    deleteFlashSale(saleId: string): Promise<>
  }

  export class EnterpriseAPI extends MCSetsAPI {
    createCheckoutSession(): Promise<>
    getCheckoutSessions(): Promise<>
    getCheckoutSession(): Promise<>
    cancelCheckoutSession(): Promise<>

    createCheckoutLink(): Promise<>
    getCheckoutLinks(): Promise<>
    updateCheckoutLink(): Promise<>
    getCheckoutLink(): Promise<>
    deactivateCheckoutLink(): Promise<>

    createProduct(): Promise<>
    getProducts(): Promise<>
    getProduct(): Promise<>
    updateProduct(): Promise<>
    deleteProduct(): Promise<>

    createPrice(): Promise<>
    getPrices(): Promise<>
    getPrice(): Promise<>
    updatePrice(): Promise<>

    createCustomer(): Promise<>
    getCustomers(): Promise<>
    getCustomer(): Promise<>
    updateCustomer(): Promise<>
    deleteCustomer(): Promise<>

    createRefund(): Promise<>
    getRefunds(): Promise<>
    getRefund(): Promise<>

    getWebhookEvents(): Promise<>
    createWebhookEndpoint(): Promise<>
    getWebhookEndpoints(): Promise<>
    getWebhookEndpoint(): Promise<>
    updateWebhookEndpoint(): Promise<>
    deleteWebhookEndpoint(): Promise<>
    rotateWebhookSigningSecret(): Promise<>

    getAccountStatistics(): Promise<>

    createConnectedUser(): Promise<>
    getConnectedUsers(): Promise<>
    getConnectedUser(): Promise<>
    updateConnecteduser(): Promise<>
    deleteConnectedUser(): Promise<>
    creditConnectedUserBalance(): Promise<>
    debitConnectedUserBalance(): Promise<>
    generateConnectedUserLoginLink(): Promise<>
    payoutConnectedUser(): Promise<>

    getWithdrawls(): Promise<>
    getWithdrawl(): Promise<>
    approveWithdrawlRequest(): Promise<>
    rejectWithdrawlRequest(): Promise<>

    getConnectSettings(): Promise<>
    updateConnectSettings(): Promise<>
  }

  /**
   * Shared types
   */
  type ISODateString = string;

  /**
   * Base types
   */
  export interface Health {
    success: boolean,
    status: 'healthy' | '???', // TODO: Get possible options for this
    timestamp: ISODateString // ex. 2026-03-07T21:19:41+00:00
  }

  /**
   * SetStore types
   */

  /**
   * Enterprise types
   */

  /**
   * A wrapper interface that intake a data type of T
   */
  export interface PaginatedResponse<T> {
    success: boolean,
    data: T[],
    meta: {
        current_page: number,
        last_page: number,
        per_page: number,
        total: number
    }
  }
}