# Dash Kit

[![npm version](https://img.shields.io/npm/v/dash-kit.svg)](https://www.npmjs.com/package/dash-kit)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Dash Kit is an npm package that provides a comprehensive set of tools and components to quickly implement dashboard features in your web applications. It takes care of common functionalities like login, API calls, form generation, base components, sidebar, internalization, caching, and more, allowing you to focus on building your dashboard's unique features.

## Features

- Easy setup and configuration.
- Backend-agnostic design.
- Integration with primevue for stylish and responsive UI components.
- Integration with formkit for efficient form handling, including form generation, API calls, file uploads, loading/error states, and toast notifications on success.
- Integration with formkit-builder for advanced form options, such as headless submits, form factory, and helper components.
- Custom inputs, including permissions input and file upload input.
- Formkit plugins to enhance form functionality, such as showing abstract on required fields and scrolling to errors.

## Installation

To install Dash Kit, use npm:

```bash
npm install dash-kit
```

## Usage

1. Import the necessary components and styles in your project:

```javascript
import Vue from "vue";
import DashKit from "dash-kit";
import "dash-kit/dist/dash-kit.css";

Vue.use(DashKit);
```

2. Set up the main layout component as the parent route for your dashboard:

```vue
<template>
  <div>
    <router-view v-if="!$route.meta.requiresAuth || isLoggedIn" />
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      // Implement your login check logic here
      return false;
    },
  },
};
</script>
```

3. Import the login component inside the login view and pass the login endpoint as a prop:

```vue
<template>
  <div>
    <login-component :loginEndpoint="apiEndpoints.login" />
  </div>
</template>

<script>
import LoginComponent from "dash-kit";

export default {
  components: {
    LoginComponent,
  },
  data() {
    return {
      apiEndpoints: {
        login: "/api/login",
      },
    };
  },
};
</script>
```

Please refer to the [documentation](link-to-documentation) for detailed usage instructions, component descriptions, and customization options.

## Contributing

We welcome contributions to Dash Kit! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request in the [GitHub repository](link-to-repo).

## License

Dash Kit is [MIT licensed](https://opensource.org/licenses/MIT).

---

This is a basic version of the README file that provides an overview of your project, installation instructions, usage examples, and information on contributing and licensing. Feel free to customize it further based on your project's specific needs.

Let me know if there's anything else I can assist you with!
