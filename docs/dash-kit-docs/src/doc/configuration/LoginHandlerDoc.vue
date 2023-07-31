<template>
    <DocSectionText v-bind="$attrs">
        <p>The LoginHandler in Dash-kit is a powerful feature that enables you to easily integrate and manage login
            functionality in your admin panel. By utilizing the ready-to-use login functionality, you can handle user
            authentication and authorization seamlessly. Let's explore the details of the LoginHandler configuration:</p>
    </DocSectionText>
    <h1>
        1. submit Function
    </h1>
    <p>
        The submit function is responsible for making the API call to login the user. It takes a request of type
        LoginRequest, which contains the userName and userPassword provided by the user during the login process. The
        response should include the following keys:
    </p>

    <DocSectionCode :code="requestResponseCode" importCode />
    <p>
        The permissions and sidebar keys in the LoginResponse hold the base64 values of the sidebar object and a
        comma-separated permissions string. These values will be added to the local storage by the login form, allowing the
        dashboard to automatically load the sidebar items based on user permissions.
    </p>
    <h1>
        2. errorHandler Configuration
    </h1>
    <p>
        The errorHandler object is used to handle errors gracefully and provide feedback to the user. It works with a hash
        map algorithm, where you can define different error messages based on the error received from the backend.

        For example, if the server responds with an incorrect_password error when the user enters an incorrect password
        during login, you can configure the errorHandler like this:
    </p>

    <DocSectionCode :code="errorHandlerFieldErrorsCode" importCode />
    <p>In this example, we define an error message to show under the userPassword input with the key
        "incorrect_password_error". By adding this key and its corresponding message to your locale files, you can
        automatically translate the error message for different languages.

        You can also handle global form errors by adding them to the globalErrors object:</p>
    <DocSectionCode :code="errorHandlerGlobalErrorsCode" importCode />

    <h1>
        3. redirectRoute
    </h1>
    <p>
        The redirectRoute specifies the route you want the user to be redirected to after a successful login. For example,
        you can set it to "dashboard_view" to navigate the user to the dashboard after logging in.
    </p>
    <h1>
        Putting It All Together
    </h1>
    <p>
        Once you have configured the submit function, errorHandler, and redirectRoute, you can combine them into the main
        LoginHandler configuration:
    </p>

    <DocSectionCode :code="summaryCode" importCode />

    <p>
        With this configuration, you can seamlessly integrate login functionality into your admin panel. The login form will
        handle API calls, error handling, and redirection after successful login, making it easy to implement authentication
        and authorization in your Vue.js application.

        By following the steps provided in the previous sections, setting up the LoginHandler, UploadHandler, and other
        configurations, you'll be able to create a feature-rich and efficient admin panel using Dash-kit with ease. Enjoy
        building your admin panel and leveraging the power of Dash-kit to streamline your development process!
    </p>
</template>

<script>
export default {
    data() {
        return {
            requestResponseCode: {
                basic: `export interface LoginRequest {
    userName: string;
    userPassword: string;
}

export interface LoginResponse {
    user: {
        userName: string;
        userPhone: string;
        userEmail: string;
    };
    loginInfo: {
        accessToken: string;
        refreshToken: string;
    };
    permissions: string;
    sidebar: string;
}
`,

            },
            errorHandlerFieldErrorsCode: {
                basic: `const loginErrorHandler: ErrorHandler = {
    fieldErrors: {
        'incorrect_password': {
            userPassword: "incorrect_password_error"
        }
    }
};
`,

            },
            errorHandlerGlobalErrorsCode: {
                basic: `const loginErrorHandler: ErrorHandler = {
    globalErrors: {
        "account_suspended_error": 'account_suspended_error',
    },
    fieldErrors: {
        'incorrect_password': {
            userPassword: "incorrect_password_error"
        }
    }
};
`,

            },
            summaryCode: {
                basic: `// dashkit.config.ts
import type { LoginHandler } from 'dash-kit/types';
import apiClient from './api/ApiClient'; // Replace with your API client

const loginErrorHandler: ErrorHandler = {
    globalErrors: {
        "account_suspended_error": 'account_suspended_error',
    },
    fieldErrors: {
        'incorrect_password': {
            userPassword: "incorrect_password_error"
        }
    }
};

const loginHandler: LoginHandler = {
    submit: apiClient.userLogin,
    redirectRoute: "dashboard_view",
    errorHandler: loginErrorHandler
};
`,

            },
        };
    }
};
</script>
