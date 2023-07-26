# Dash-kit

Dash-kit is an npm package that provides a comprehensive set of tools and components to quickly implement dashboard features in your web applications. It takes care of common functionalities like login, API calls, form generation, base components, sidebar, internalization, caching, and more, allowing you to focus on building your dashboard's unique features.

## Prerequisites

The Dash-kit plugin relies on [primevue library ↗](https://primevue.org/installation) and [formkit library ↗](https://formkit.com/getting-started/what-is-formkit) so they should be pre-installed to use our package.

## Installation

You can install the package using the following command:

```
npm install dash-kit
```

## Configuration

The `Dash-kit` plugin is imported and used as a third-party Vue.js plugin that provides a set of UI components and tools for building dashboards. The `DashKit` plugin is installed using the `use` function provided by Vue.js. The `dashkitConfig` object is passed as an argument to the `use` function, which sets up the default configuration for the `DashKit` plugin.

The `use` function is a Vue.js method that allows developers to install and use Vue.js plugins within their applications. When a plugin is installed using the `use` function, it adds additional functionality or components to the Vue.js application. In this case, `DashKit` is a plugin that adds UI components and tools for building dashboards.

After installing the `DashKit` plugin, the `router` is also installed using the `use` function. The `router` is a Vue.js plugin that provides routing functionality for the application, allowing users to navigate between different pages or views within the application.

Overall, this code sets up a Vue.js application with the `DashKit` and `router` plugins installed, and configures the default settings for the `DashKit` plugin using the `dashkitConfig` object.

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import DashKit from 'dash-kit'
import router from './router'
import 'dash-kit/style'
import dashkitConfig from './dashkit.config'

const app = createApp(App)
app.use(DashKit, dashkitConfig).use(router)
app.mount('#app')
```

## Configuration File

The `dashkit.config.js` file contains the configuration for the `DashKit` plugin. This file is used to define important settings for the plugin, such as the login handler and upload handler.

### Login Handler

The login handler is an essential part of the `DashKit` plugin, as it is responsible for creating a full ready login page that can be easily used across the application. The `loginHandler` object contains the following properties:

- `submit`: This property defines the API function that will be used across the application in the login feature. When the user submits the login form, this function will be called to authenticate the user.
- `redirectRoute`: This property specifies the route that the user should be redirected to after successfully logging in using valid credentials.
- `errorHandler`: This property is an object that maps server errors to the corresponding fields in the login form and translates the server errors with user-friendly text. This helps to provide a better user experience for users who encounter errors during the login process.

### Upload Handler

The upload handler is another important part of the `DashKit` plugin, as it is responsible for handling file uploads and removals across the application. The `uploadHandler` object contains the following properties:

- `fileUpload`: This property is a function that is called when the user uploads a file. This function is responsible for sending the file to the server for processing. The function should accept the file as a parameter and return a Promise that resolves to the response from the server.
- `fileRemove`: This property defines the API function that will be used to remove images from the server.
- `baseImageUrl`: This property specifies the base URL for uploaded images. This URL is used to construct the full URL for the uploaded image. For example, if the baseImageUrl is set to https://example.com/images/, and the user uploads an image called my-image.jpg, the full URL for the uploaded image would be https://example.com/images/my-image.jpg.

### Other Configurations

The `dashkit.config.js` file also includes other important configurations, such as the `formKitConfig` object, which is used to configure the behavior of the `formKit` component provided by the `DashKit` plugin. Additionally, translations are provided for both English (`en`) and Arabic (`ar`).

To use this configuration in your application, import the `dashkit.config.js` file and use the exported `config` object. For example:

Here is an example of the `dashkit.config.js` file:

```javascript
import apiClient from './api/ApiClient'
import formKitConfig from './formkit.config'
import type { DashKitConfig, ErrorHandler, LoginHandler, UploadHandler } from 'dash-kit/types'
import en from '@/locales/en.json'
import ar from '@/locales/ar.json'

const loginErrorHandler: ErrorHandler = {
    globalErrors: {
        "pass_loginApiCall": 'pass_loginApiCall',
    },
    fieldErrors: {
        'user_not_found': {
            userName: "user_not_found"
        },
        'user_name_invalid': {
            userName: "user_name_invalid"
        },
        'incorrect_password': {
            userPassword: "incorrect_password"
        }
    }
}

const loginHandler: LoginHandler = {
    submit: apiClient.userLogin,
    redirectRoute: "dashboard_view",
    errorHandler: loginErrorHandler
}

const uploadHandler: UploadHandler = {
    fileUpload: apiClient.fileUpload,
    fileRemove: apiClient.fileRemove,
    baseImageUrl: import.meta.env.VITE_IMG_URL
}

const config: DashKitConfig = {
    formKitConfig,
    loginHandler,
    uploadHandler,
    translations: {
        en,
        ar
    },
}

export default config
```

## Router Configuration

The `router/index.ts` file contains the configuration for the `vue-router` package, which is used to manage the routing within the application. This file is essential for working with the `DashKit` package properly, as it defines the routes for the application and integrates the `DashKit` components.

### App Layout

The `AppLayout` component provided by the `DashKit` package is used as the base layout for the application. All other routes should be children of this component. This is done by defining a `children` array within the route that uses the `AppLayout` component as its `component`. This ensures that the `AppLayout` component is always rendered, and that the other routes are rendered within it.

### Views

The `DashKit` package provides several views that are used for common tasks, such as logging in, viewing the user profile, and handling unauthorized access. These views should be imported from the `dash-kit/views` module and used as the `component` for the corresponding routes.

- `LoginView`: This view is used for logging in to the application.
- `ProfileView`: This view is used for viewing and editing the user profile.
- `UnauthorizedView`: This view is used for handling unauthorized access to the application.

### Routes

The routes for the application are defined within the `routes` array passed to the `createRouter` function. Each route is defined as an object with the following properties:

- `path`: The URL path for the route.
- `component`: The component to be rendered for the route.
- `name`: The name of the route.
- `meta`: Additional metadata for the route, such as breadcrumbs or permissions.

### Middleware

The `router.beforeEach` function is used to define middleware functions that are executed before each route change. In this example, two middleware functions are defined:

- A redirection middleware that redirects the user to the `dashboard_view` route if they try to access the root URL (`/`).
- An authentication middleware that checks if the user is authenticated before allowing them to access any route. This middleware is defined in the `dash-kit/helpers` module and is used to restrict access to routes based on the user's permissions.

To use this configuration in your application, import the `vue-router` package and the required `DashKit` components and middleware functions, and create a new router instance by calling the `createRouter` function with the desired configuration options. Then, export the router instance so that it can be used throughout the application.

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import { AppLayout } from 'dash-kit/base';
import { LoginView, ProfileView, UnauthorizedView } from 'dash-kit/views';
import DashboardView from '../views/DashboardView.vue';
import administration from '../views/AdministrationView.vue';
import RolesListView from '../views/RolesListView.vue';
import UsersListView from '../views/UsersListView.vue';
import { authMiddleware } from 'dash-kit/helpers';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/dashboard',
          meta: { permissions: ['dashboardView'] },
          name: 'dashboard_view',
          component: DashboardView
        },
        {
          path: '/profile',
          name: 'profile_view',
          meta: { breadCrumbs: [{ label: "profile" }] },
          component: ProfileView
        },
        {
          path: '/roles',
          name: 'roles_list',
          meta: { breadCrumbs: [{ label: "roles" }] },
          component: RolesListView
        },
        {
          path: '/administration',
          name: 'administration',
          meta: { breadCrumbs: [{ label: "administration" }] },
          component: administration
        },
        {
          path: '/users',
          name: 'users_list',
          meta: { breadCrumbs: [{ label: "users" }] },
          component: UsersListView
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: UnauthorizedView
    },
  ]
});

router.beforeEach((to, _, next) => {
  if (to.fullPath == '/') {
    next({ name: 'dashboard_view' })
  }
  next()
});

router.beforeEach(authMiddleware);

export default router;
```

In this example, we import the necessary modules and components, create a new router instance with the desired configuration options, and define the necessary middleware functions. We then export the router instance so that it can be used throughout the application.

## Conclusion

That's it! You should now have a better understanding of how to install and configure the Dash-kit package in your Vue.js application. If you have any questions or issues with the package, please refer to the [official documentation ↗](https://github.com/darwishdev/dash-kit/blob/1f82b72e86e856422fb2190dd4dc3f00beabd22c/README.md) or reach out to the package maintainers for support.
