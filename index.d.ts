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
    getCheckoutSession(sessionId: string): Promise<>
    cancelCheckoutSession(sessionId: string): Promise<>

    createCheckoutLink(): Promise<>
    getCheckoutLinks(): Promise<>
    updateCheckoutLink(linkId: string): Promise<>
    getCheckoutLink(linkId: string): Promise<>
    deactivateCheckoutLink(linkId: string): Promise<>

    createProduct(): Promise<>
    getProducts(): Promise<>
    getProduct(productId: string): Promise<>
    updateProduct(productId: string): Promise<>
    deleteProduct(productId: string): Promise<>

    createPrice(): Promise<>
    getPrices(): Promise<>
    getPrice(priceId: string): Promise<>
    updatePrice(priceId: string): Promise<>

    createCustomer(): Promise<>
    getCustomers(): Promise<>
    getCustomer(customerId: string): Promise<>
    updateCustomer(customerId: string): Promise<>
    deleteCustomer(customerId: string): Promise<>

    createRefund(): Promise<>
    getRefunds(): Promise<>
    getRefund(refundId: string): Promise<>

    getWebhookEvents(): Promise<>
    createWebhookEndpoint(): Promise<>
    getWebhookEndpoints(): Promise<>
    getWebhookEndpoint(webhookId: string): Promise<>
    updateWebhookEndpoint(webhookId: string): Promise<>
    deleteWebhookEndpoint(webhookId: string): Promise<>
    rotateWebhookSigningSecret(webhookId: string): Promise<>

    getAccountStatistics(): Promise<>

    createConnectedUser(): Promise<>
    getConnectedUsers(): Promise<>
    getConnectedUser(connectedUserId: string): Promise<>
    updateConnecteduser(connectedUserId: string): Promise<>
    deleteConnectedUser(connectedUserId: string): Promise<>
    creditConnectedUserBalance(connectedUserId: string): Promise<>
    debitConnectedUserBalance(connectedUserId: string): Promise<>
    generateConnectedUserLoginLink(connectedUserId: string): Promise<>
    payoutConnectedUser(connectedUserId: string): Promise<>

    getWithdrawls(): Promise<>
    getWithdrawl(withdrawlId: string): Promise<>
    approveWithdrawlRequest(withdrawlId: string): Promise<>
    rejectWithdrawlRequest(withdrawlId: string): Promise<>

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