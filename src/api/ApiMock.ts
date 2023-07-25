// @ts-ignore
import type {
    FileUploadRequest, FileUploadResponse, FileRemoveRequest, PermissionsListResponse
} from '@/types/types'
import permissions from '@/api/permissions'

import type {
    RolesListResponse,
    RoleDeleteRestoreRequest,
    RoleCreateResponse, RoleCreateRequest, RoleBulkCreateRequest, RoleBulkCreateResponse, RoleUpdateRequest, RoleUpdateResponse, RoleFindRequest, RoleFindResponse,
    UserCreateResponse, ApiClient, UserCreateRequest, UserUpdateRequest, UserUpdateResponse, UserFindRequest, UserFindResponse, LoginRequest, LoginResponse
} from './ApiTypes'
export const userCreateRequest: UserCreateRequest = {
    userName: "admin",
    userPhone: "010202000200",
    userEmail: "admin@mln.com",
    userPassword: "123456789",
    userRoles: [1, 2, 3]
};
export const userCreateResponse: UserCreateResponse = {
    user: {
        userId: 1,
        userName: "admin",
        userPhone: "010202000200",
        userEmail: "admin@mln.com",
        userPassword: "123456789",
        userRoles: [1, 2, 3]
    }

};


const loginResponse: LoginResponse = {
    user: {
        userName: 'ahmeddarwish',
        userPhone: '01022052546',
        userEmail: 'ahmed@mln.com',
    },
    permissions: "e0Rhc2hib2FyZFZpZXcsTWVudUZpbmQsT3JkZXJDcmVhdGUsUm9sZUNyZWF0ZSxSb2xlRGVsZXRlUmVzdG9yZSxSb2xlRmluZCxSb2xlc0xpc3QsUm9sZVVwZGF0ZSxVc2VyQ3JlYXRlLFVzZXJEZWxldGVSZXN0b3JlLFVzZXJGaW5kLFVzZXJSb2xlc1Blcm1pc3Npb25zVXBkYXRlLFVzZXJzTGlzdCxVc2VyVXBkYXRlfQ==",
    loginInfo: {
        access_token: "asdkjfyhkjdfgakfgsakfgasjkghasdfkjg",
        refresh_token: "asdl'asiedyrf9pw8e6r8q7we6q5876we547",
    },

    sidebar: "W3sia2V5IjoiMCIsImxhYmVsIjoiZGFzaGJvYXJkIiwiaWNvbiI6eyJTdHJpbmciOiJwaSBwaS1mdyBwaS1jaGFydC1iYXIiLCJWYWxpZCI6dHJ1ZX0sInRvIjp7IlN0cmluZyI6ImRhc2hib2FyZF92aWV3IiwiVmFsaWQiOnRydWV9LCJpdGVtcyI6Int9In0seyJrZXkiOiIxIiwibGFiZWwiOiJ1c2VycyIsImljb24iOnsiU3RyaW5nIjoicGkgcGktZncgcGktdXNlciIsIlZhbGlkIjp0cnVlfSwidG8iOnsiU3RyaW5nIjoiIiwiVmFsaWQiOmZhbHNlfSwiaXRlbXMiOiJbe1widG9cIjogXCJyb2xlc19saXN0XCIsIFwia2V5XCI6IFwiMV8wXCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWxpc3RcIiwgXCJsYWJlbFwiOiBcInJvbGVzX2xpc3RcIn0sIHtcInRvXCI6IFwidXNlcnNfbGlzdFwiLCBcImtleVwiOiBcIjFfMVwiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1saXN0XCIsIFwibGFiZWxcIjogXCJ1c2Vyc19saXN0XCJ9XSJ9XQ=="

}
export const userUpdateRequest: UserUpdateRequest = {
    userId: 1,
    userName: "admin2",
    userPhone: "010202000210",
    userEmail: "admin@mln.com",
    userPassword: "123456789",
    userRoles: [1, 2, 3, 4]



};
export const userUpdateResponse: UserUpdateResponse = {
    user: {
        userId: 1,
        userName: "admin2",
        userPhone: "010202000210",
        userEmail: "admin@mln.com",
        userPassword: "123456789",
        userRoles: [1, 2, 3, 4]

    }

};


export const userFindRequest: UserFindRequest = {
    userId: 1,
};
export const userFindResponse: UserFindResponse = {
    userId: 1,
    userName: "admin2",
    userPhone: "010202000210",
    userEmail: "admin@mln.com",
    userPassword: "123456789",
    userRoles: [1, 2, 3, 4]
};

export const roleCreateRequest: RoleCreateRequest = {
    roleName: "head chef",
    roleDescription: "head chef role",
    permissions: [1, 2, 3, 4, 5]
};
export const roleCreateResponse: RoleCreateResponse = {
    role: {
        roleId: 1,
        roleName: "head chef",
        roleDescription: "head chef role"
    }

};

export const roleBulkCreateRequest: RoleBulkCreateRequest = {
    roles: [
        {
            roleName: "head chef",
            roleDescription: "head chef role",
            permissions: [1, 2, 3, 4, 5]
        }
    ]
};

export const roleBulkCreateResponse: RoleBulkCreateResponse = {
    roles: [
        {
            roleId: 1,
            roleName: "head chef",
            roleDescription: "head chef role",
        },
    ],

}
export const roleUpdateRequest: RoleUpdateRequest = {
    roleId: 1,
    roleName: "head chef",
    roleDescription: "head chef role",
    permissions: [1, 2, 3, 4, 5]



};
export const roleUpdateResponse: RoleUpdateResponse = {
    role: {
        roleId: 1,
        roleName: "head chef",
        roleDescription: "head chef role",

    }

};

export const roleFindRequest: RoleFindRequest = {
    roleId: 1,



};
export const roleFindResponse: RoleFindResponse = {
    roleName: "head chef",
    roleDescription: "head chef role",
    permissions: [1, 2, 3, 4, 5],
    roleId: 1,
    roleUsers: 0,
    rolePermissions: 5
};


export const rolesListResponse: RolesListResponse = {
    roles: [
        {
            roleId: 1,
            roleName: "Admin",
            roleUsers: 10,
            rolePermissions: 20
        },
        {
            roleId: 2,
            roleName: "User",
            roleUsers: 50,
            rolePermissions: 30
        }
    ],
    deleteRoles: [
        {
            roleId: 3,
            roleName: "Guest",
            roleUsers: 5,
            rolePermissions: 10
        }
    ]
};

export const fileUploadResponse: FileUploadResponse = {
    fileName: "dashboard_07182023092203PM.png"
}

const apiClient: ApiClient = {
    fileUpload: async (_req: FileUploadRequest): Promise<FileUploadResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return fileUploadResponse;
    },
    fileRemove: async (_req: FileRemoveRequest): Promise<FileUploadResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {} as FileUploadResponse
    },
    login: async (_req: LoginRequest): Promise<LoginResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return loginResponse;
    },
    permissionsList: async (): Promise<PermissionsListResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return permissions;
    },
    userCreate: async (_req: UserCreateRequest): Promise<UserCreateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return userCreateResponse;
    },
    userCreateWithErr: async (_req: UserCreateRequest): Promise<UserCreateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("already_exists unique_constraint_users_user_name_key")
    },
    userCreateWithGlobalErr: async (_req: UserCreateRequest): Promise<UserCreateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("internal internalServerError")
    },
    userUpdate: async (_req: UserUpdateRequest): Promise<UserUpdateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return userUpdateResponse;
    },
    userUpdateWithErr: async (_req: UserUpdateRequest): Promise<UserUpdateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("already_exists unique_constraint_users_user_name_key")
    },
    userUpdateWithGlobalErr: async (_req: UserUpdateRequest): Promise<UserUpdateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("internal internalServerError")
    },

    userFind: async (_req: UserFindRequest): Promise<UserFindResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return userFindResponse;
    },
    userFindWithErr: async (_req: UserFindRequest): Promise<UserFindResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("error finding the user")
    },
    rolesList: async (): Promise<RolesListResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return rolesListResponse;
    },
    rolesListWithErr: async (): Promise<RolesListResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        throw new Error('Failed to fetch roles list');
    },
    roleDeleteRestore: async (_req: RoleDeleteRestoreRequest): Promise<void> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

    },
    roleCreate: async (_req: RoleCreateRequest): Promise<RoleCreateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return roleCreateResponse;
    },
    roleBulkCreate: async (_req: RoleBulkCreateRequest): Promise<RoleBulkCreateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return roleBulkCreateResponse;
    },

    roleCreateWithErr: async (_req: RoleCreateRequest): Promise<RoleCreateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("already_exists unique_constraint_roles_role_name_key")
    },
    roleCreateWithGlobalErr: async (_req: RoleCreateRequest): Promise<RoleCreateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("internal internalServerError")
    },
    roleUpdate: async (_req: RoleUpdateRequest): Promise<RoleUpdateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return roleUpdateResponse;
    },
    roleUpdateWithErr: async (_req: RoleUpdateRequest): Promise<RoleUpdateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("already_exists unique_constraint_roles_role_name_key")
    },
    loginWithPwErr: async (_req: LoginRequest): Promise<LoginResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("wrong_password")
    },
    roleUpdateWithGlobalErr: async (_req: RoleUpdateRequest): Promise<RoleUpdateResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("internal internalServerError")
    },
    roleFind: async (_req: RoleFindRequest): Promise<RoleFindResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return roleFindResponse;
    },
    roleFindWithErr: async (_req: RoleFindRequest): Promise<RoleFindResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error("error finding the role")
    }
};

export default apiClient;
