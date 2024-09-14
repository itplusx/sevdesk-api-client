import {
  expect,
  describe,
  test,
} from 'vitest'

import {
  apis,
  SevdeskApiClient
} from '.'

const sevdeskApiClient = new SevdeskApiClient({ apiKey: 'some-key' })

describe('SevdeskApiClient', () => {
  test('should contain an instance of AccountingContactApi', () => {
    expect(sevdeskApiClient.apis.accountingContactApi).toBeInstanceOf(apis.AccountingContactApi)
  })

  test('should contain an instance of BasicsApi', () => {
    expect(sevdeskApiClient.apis.basicsApi).toBeInstanceOf(apis.BasicsApi)
  })

  test('should contain an instance of CheckAccountApi', () => {
    expect(sevdeskApiClient.apis.checkAccountApi).toBeInstanceOf(apis.CheckAccountApi)
  })

  test('should contain an instance of CheckAccountTransactionApi', () => {
    expect(sevdeskApiClient.apis.checkAccountTransactionApi).toBeInstanceOf(apis.CheckAccountTransactionApi)
  })

  test('should contain an instance of CommunicationWayApi', () => {
    expect(sevdeskApiClient.apis.communicationWayApi).toBeInstanceOf(apis.CommunicationWayApi)
  })

  test('should contain an instance of ContactApi', () => {
    expect(sevdeskApiClient.apis.contactApi).toBeInstanceOf(apis.ContactApi)
  })

  test('should contain an instance of ContactAddressApi', () => {
    expect(sevdeskApiClient.apis.contactAddressApi).toBeInstanceOf(apis.ContactAddressApi)
  })

  test('should contain an instance of ContactFieldApi', () => {
    expect(sevdeskApiClient.apis.contactFieldApi).toBeInstanceOf(apis.ContactFieldApi)
  })

  test('should contain an instance of CreditNoteApi', () => {
    expect(sevdeskApiClient.apis.creditNoteApi).toBeInstanceOf(apis.CreditNoteApi)
  })

  test('should contain an instance of CreditNotePosApi', () => {
    expect(sevdeskApiClient.apis.creditNotePosApi).toBeInstanceOf(apis.CreditNotePosApi)
  })

  test('should contain an instance of ExportApi', () => {
    expect(sevdeskApiClient.apis.exportApi).toBeInstanceOf(apis.ExportApi)
  })

  test('should contain an instance of InvoiceApi', () => {
    expect(sevdeskApiClient.apis.invoiceApi).toBeInstanceOf(apis.InvoiceApi)
  })

  test('should contain an instance of InvoicePosApi', () => {
    expect(sevdeskApiClient.apis.invoicePosApi).toBeInstanceOf(apis.InvoicePosApi)
  })

  test('should contain an instance of LayoutApi', () => {
    expect(sevdeskApiClient.apis.layoutApi).toBeInstanceOf(apis.LayoutApi)
  })

  test('should contain an instance of OrderApi', () => {
    expect(sevdeskApiClient.apis.orderApi).toBeInstanceOf(apis.OrderApi)
  })

  test('should contain an instance of OrderPosApi', () => {
    expect(sevdeskApiClient.apis.orderPosApi).toBeInstanceOf(apis.OrderPosApi)
  })

  test('should contain an instance of PartApi', () => {
    expect(sevdeskApiClient.apis.partApi).toBeInstanceOf(apis.PartApi)
  })

  test('should contain an instance of ReportApi', () => {
    expect(sevdeskApiClient.apis.reportApi).toBeInstanceOf(apis.ReportApi)
  })

  test('should contain an instance of TagApi', () => {
    expect(sevdeskApiClient.apis.tagApi).toBeInstanceOf(apis.TagApi)
  })

  test('should contain an instance of VoucherApi', () => {
    expect(sevdeskApiClient.apis.voucherApi).toBeInstanceOf(apis.VoucherApi)
  })

  test('should contain an instance of VoucherPosApi', () => {
    expect(sevdeskApiClient.apis.voucherPosApi).toBeInstanceOf(apis.VoucherPosApi)
  })
})
