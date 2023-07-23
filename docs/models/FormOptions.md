`FormOptions` is an interface that defines a model for configuring form options in a Vue application. It provides properties that allow you to customize the behavior and appearance of a form.

Here is the documentation for the `FormOptions` interface:

### FormOptions Interface

```typescript
export interface FormOptions {
  /**
   * The title of the form.
   * This is displayed as the main heading or title of the form.
   */
  title: string;

  /**

    Optional flag to enable bulk delete functionality.
    When set to true, the bulk delete feature allows users to select and delete
    multiple items in the form at once. After a successful submission with bulk delete enabled,
    the user remains on the same page, allowing them to continue working with the form.
    */
  allowBulkDelete?: boolean;

  /**
   * Optional flag to show the submit button in the form header.
   * If set to true, it displays the submit button in the form header.
   * By default, the submit button is shown at the bottom of the form.
   */
  showHeaderSubmit?: boolean;
}
```
