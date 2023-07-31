<script setup lang="ts">
import apiClient from "@/api/ApiClient";
import { useRouter } from 'vue-router';
import type { UserFindRequest, UserFindResponse  } from '@models/v1/user/user_definitions_pb'
import { useDataFetcherFind } from "dash-kit/composables";
import LogoError from '@/assets/logo-error.svg'
import Button from 'primevue/button';

const { currentRoute } = useRouter();
const UserId = parseInt(currentRoute.value.params.id as string)
const { responseData, loading, error,fetchData } = useDataFetcherFind<UserFindRequest,UserFindResponse>(apiClient.userFind, {userId : UserId} as UserFindRequest);
// function deleteUser(id : number){
//     const request: UserDeleteRestoreRequest = new UserDeleteRestoreRequest({
//          userId : id
//     })
//     apiClient.userDeleteRestore(request).then(() => {
//         push('/users')
//     })
// }
// const { openDialog } = useAppDialog(() => deleteUser(UserId));
</script>
<template>
    <div v-if="error">
        <div class="error text-center">
            <logo-error class=" mt-4" />
            <h2 class="text-3xl"> {{ $t("list_error") }}</h2>
            <i class="pi pi-refresh text-3xl mt-4 cursor-pointer" @click="fetchData"></i>
        </div>
    </div>
    <div v-else-if="loading">
        <h1>Loading</h1>
    </div>
    <div v-else>
        <div class="my-3">
            <div class="w-full p-5 relative overflow-hidden border-round" style="background-image: linear-gradient(180deg, #c94b6287 0%, #ec4dbc84 100%); height: 30vh; border-bottom-left-radius: 0px !important; border-bottom-right-radius: 0px !important;">
                <img src="../assets/logo.svg" alt="" class="opacity-50 absolute" style="right: -20px; bottom: -15px; width: 12%;">
            </div>
            <div class="w-full border-round-bottom p-5 relative" style="background-color: var(--color-dialog);">
                <img src="@/assets/userImg.png" alt="profile pic" class="absolute w-1" style="top: -50px; left: 50px;">
                <div class="ml-4 pt-5 mt-2">
                    <h1 class="font-bold">{{ responseData?.user?.userName }}</h1>
                    <h3 class="py-1">{{ responseData?.user?.userEmail }}</h3>
                    <ul class="flex flex-row p-0 m-0" style="list-style: disc; color: #898989;">
                        <li class="list-none mr-3"><h3 class="text-white">{{ responseData?.user?.userPhone }}</h3></li>
                        <li v-for="role in responseData?.roles" class="mx-3"><h3 class="text-white">{{ role.roleName  }}</h3></li>
                        <li class="mx-2"><h3 class="text-white">Joined at {{ responseData?.user?.createdAt?.toDate().toDateString() }}</h3></li>
                    </ul>
                    <div class="py-4 flex buttons">
                        <router-link class="edit" :to="{ name: 'user_update', params: { id: UserId } }">
                            <Button label="Edit User" raised />
                        </router-link>
                        <Button label="Delete" class="mx-3" severity="Primary" raised @click="openDialog" />
                    </div>
                </div>
            </div>
        </div>
        <div class="border-round pt-5 p-4 relative my-3" style="background-color: var(--color-dialog);">
            <div class="absolute top-0 right-0 flex p-3">
                <router-link :to="{ name: 'user_update', params: { id: UserId } }">
                    <Button label="Add" class="px-3" icon="pi pi-plus" severity="success" raised/>
                </router-link>
                <router-link :to="{ name: 'user_update', params: { id: UserId } }">
                    <Button label="Delete" class="mx-2 px-3" icon="pi pi-plus" severity="Primary" raised/>
                </router-link>
            </div>
            <h1 class="font-bold px-2">Owned Roles</h1>
            <div class="w-7 flex flex-wrap my-2" v-if="responseData!.roles.length > 0">
                <h3 v-for="role in responseData?.roles" class="p-2 px-3 border-round my-1 mx-1" style="color: #256029; background-color: #c8e6c9d3;">{{ role.roleName }}</h3>
            </div>
            <div v-else>
                <h1 class="text-primary text-center p-2">There are no owned roles yet!</h1>
            </div>
        </div>
        <div class="border-round pt-5 p-4 relative" style="background-color: var(--color-dialog);">
            <div class="absolute top-0 right-0 flex p-3">
                <router-link :to="{ name: 'user_update', params: { id: UserId } }">
                    <Button label="Add" class="px-3" icon="pi pi-plus" severity="success" raised/>
                </router-link>
                <router-link :to="{ name: 'user_update', params: { id: UserId } }">
                    <Button label="Delete" class="mx-2 px-3" icon="pi pi-plus" severity="Primary" raised/>
                </router-link>
            </div>
            <h1 class="font-bold px-2">Granted Permissions</h1>
            <div class="w-8 flex flex-wrap my-2" v-if="responseData!.permissions.length > 0">
                <h3 v-for="permission in responseData?.permissions" class="p-2 px-4 border-round my-1 mx-1" style="color: #256029; background-color: #c8e6c9d3;">{{ permission.permissionName }}</h3>
            </div>
            <div v-else>
                <h1 class="text-primary text-center p-2">There are no owned permissions yet!</h1>
            </div>
        </div>
    </div>
</template>
<style>
.buttons .p-button{
    border: none;
    padding: 2vh 4vh;
}
.buttons .edit .p-button{
    background-color: #ffffff4e;
}
</style>