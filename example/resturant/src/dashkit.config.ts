import apiClient from './api/ApiClient'
import formKitConfig from './formkit.config'
import type { DashKitConfig } from 'dash-kit/types'


const config: DashKitConfig = {
    formKitConfig,
    loginApiCall: apiClient.userLogin
}
export default config