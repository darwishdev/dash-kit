<template>
    <DocSectionText v-bind="$attrs">
        <p>The uploadHandler allows you to utilize the custom FileUpload input provided by Dash-kit. It consists of three
            functions:</p>


        <h3>
            3.1 fileUpload
        </h3>
        <p>
            This function makes an API call to upload a new file to the server. It takes a request of type FileUploadRequest
            containing the fileName and fileData (the file as a Uint8Array). The response will be of type
            FileUploadResponse,
            which contains the fileName of the uploaded file on the server.
        </p>
        <h3>
            3.2 fileRemove
        </h3>
        <p>
            The fileRemove function is responsible for deleting a file from the server by its path. It takes a request of
            type
            FileRemoveRequest, and the response can be of any type (e.g., FileRemoveResponse). This function will be called
            when
            the user removes a file from the FileUpload input.
        </p>
        <h3>
            3.3 baseImageUrl
        </h3>
        <p>
            The baseImageUrl is the base URL used to load images dynamically from any server or CDN. It provides the root
            path
            for loading images when using the FileUpload input.
        </p>

        <p>
            Here's how you can set up the uploadHandler in the dashkit.config.ts file:
        </p>
    </DocSectionText>


    <DocSectionCode :code="uploadCode" importCode />
</template>

<script>
export default {
    data() {
        return {

            uploadCode: {
                basic: `// dashkit.config.ts
import type { UploadHandler } from 'dash-kit/types';
import apiClient from './api/ApiClient'; // Replace with your API client

const uploadHandler: UploadHandler = {
    fileUpload: apiClient.fileUpload,
    fileRemove: apiClient.fileRemove,
    baseImageUrl: import.meta.env.VITE_IMG_URL, // Replace with the appropriate base image URL
};
`
            }
        };
    }
};
</script>
