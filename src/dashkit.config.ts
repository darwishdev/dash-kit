import apiClient from './api/ApiMock'
import formKitConfig from './formkit.config'
import { DashKitConfig } from '@/types/types'


const config: DashKitConfig = {
    formKitConfig,
    loginApiCall: apiClient.login
}
export default config