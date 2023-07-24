import { LoginRequest, LoginResponse } from '@/api/ApiTypes'
import { FormKitSchemaNode } from '@formkit/core'
import type { ErrorMessages } from "@formkit/core"
import type { DefaultConfigOptions } from '@formkit/vue'

export interface DashKitConfig {
    formKitConfig?: DefaultConfigOptions
    uploadHandler?: UploadHandler
    loginHandler?: LoginHandler
}
export interface ToastHandler {
    hideToast?: boolean
    title?: String
    message?: String
}



export interface Permission {
    permission_id: number
    permission_name: string
    permission_function: string
    permission_description: string
}

export interface PermissionsListRow {
    group: string

    permissions: Permission[]

}
export interface PermissionsListResponse {
    permissions: PermissionsListRow[],
    permissionsIds: number[]

}
export type ErrorHandler = {
    globalErrors?: ErrorMessages
    fieldErrors?: Record<string, ErrorMessages>
}
export interface SubmitHandler<Request, TargetRequest, Response> {
    submit: (req: TargetRequest) => Promise<Response>
    submitCallBack?: (response: Response) => any
    indentifierPropertyName?: string
    errorHandler: ErrorHandler
    mapFunction?: (req: Request) => TargetRequest
    redirectRoute?: string
}
export interface FormOptions {
    id: String
    title: string
    withBackground?: boolean
    withHeader?: boolean
    allowBulkCreate?: boolean
    showHeaderSubmit?: boolean
}

export type FormSeciton = Record<string, FormKitSchemaNode[]>
export type FileUploadRequest = {
    fileName: string
    fileData: Uint8Array
}
export type FileUploadResponse = {
    fileName: string
}
export type FileRemoveRequest = {
    fileName: string
}
export type FileRemoveRespone = {}

export type UploadHandler = {
    fileUpload: (reuest: FileUploadRequest) => Promise<FileUploadResponse>
    fileRemove: (reuest: FileRemoveRequest) => Promise<void>
    baseImageUrl: string
}

export type LoginHandler = {
    submit: (req: LoginRequest) => Promise<LoginResponse>
    errorHandler: ErrorHandler
    redirectRoute: string
}