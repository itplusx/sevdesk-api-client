import 'dotenv/config'
import { SevdeskApiClient } from '../src'

const sevdeskApiClient = new SevdeskApiClient({ apiKey: process.env.SEVDESK_API_KEY })

const basics = await sevdeskApiClient.apis.basicsApi.bookkeepingSystemVersion()

console.log(basics)
