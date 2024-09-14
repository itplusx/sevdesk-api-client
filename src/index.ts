import {
  type ConfigurationParameters,
  Configuration
} from './generated'

import * as apis from './generated/apis'
import * as models from './generated/models'

// eslint-disable-next-line unicorn/prefer-export-from
export { apis, models }

export class SevdeskApiClient {
  public config: Configuration

  /**
   * Configured instances of all apis.
   */
  public apis: {
    accountingContactApi: apis.AccountingContactApi
    basicsApi: apis.BasicsApi
    checkAccountApi: apis.CheckAccountApi
    checkAccountTransactionApi: apis.CheckAccountTransactionApi
    communicationWayApi: apis.CommunicationWayApi
    contactApi: apis.ContactApi
    contactAddressApi: apis.ContactAddressApi
    contactFieldApi: apis.ContactFieldApi
    creditNoteApi: apis.CreditNoteApi
    creditNotePosApi: apis.CreditNotePosApi
    exportApi: apis.ExportApi
    invoiceApi: apis.InvoiceApi
    invoicePosApi: apis.InvoicePosApi
    layoutApi: apis.LayoutApi
    orderApi: apis.OrderApi
    orderPosApi: apis.OrderPosApi
    partApi: apis.PartApi
    reportApi: apis.ReportApi
    tagApi: apis.TagApi
    voucherApi: apis.VoucherApi
    voucherPosApi: apis.VoucherPosApi
  }

  constructor(config: ConfigurationParameters) {
    this.config = new Configuration(config)
    this.apis = {
      accountingContactApi: new apis.AccountingContactApi(this.config),
      basicsApi: new apis.BasicsApi(this.config),
      checkAccountApi: new apis.CheckAccountApi(this.config),
      checkAccountTransactionApi: new apis.CheckAccountTransactionApi(this.config),
      communicationWayApi: new apis.CommunicationWayApi(this.config),
      contactApi: new apis.ContactApi(this.config),
      contactAddressApi: new apis.ContactAddressApi(this.config),
      contactFieldApi: new apis.ContactFieldApi(this.config),
      creditNoteApi: new apis.CreditNoteApi(this.config),
      creditNotePosApi: new apis.CreditNotePosApi(this.config),
      exportApi: new apis.ExportApi(this.config),
      invoiceApi: new apis.InvoiceApi(this.config),
      invoicePosApi: new apis.InvoicePosApi(this.config),
      layoutApi: new apis.LayoutApi(this.config),
      orderApi: new apis.OrderApi(this.config),
      orderPosApi: new apis.OrderPosApi(this.config),
      partApi: new apis.PartApi(this.config),
      reportApi: new apis.ReportApi(this.config),
      tagApi: new apis.TagApi(this.config),
      voucherApi: new apis.VoucherApi(this.config),
      voucherPosApi: new apis.VoucherPosApi(this.config)
    }
  }
}
