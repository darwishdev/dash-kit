`SubmittHandler` is an interface that defines a model for handling form submissions in a Vue application. It provides a set of properties and methods that allow you to customize the form submission process and handle the response and errors appropriately.

Here is the documentation for the `SubmittHandler` interface:

### SubmittHandler Interface

```typescript
export interface SubmittHandler<Request, TargetRequest, Response> {
  /**
   * Submits the form data to the server.
   * @param req - The target request object containing the form data to be submitted.
   * @returns A Promise that resolves to the server response.
   */
  submit: (req: TargetRequest) => Promise<Response>;

  /**
   * A callback function that will be called after the form submission is successful.
   * @param response - The server response returned from the submit function.
   * @returns Any value returned from this callback function.
   */
  submitCallBack?: (response: Response) => any;

  /**
   * The name of the property that serves as the unique identifier in the form data.
   * This is used to handle updates or deletions when necessary.
   */
  indentifierPropertyName?: string;

  /**
   * An object that defines error messages for different form fields.
   * The keys represent the form field names, and the values are the error messages.
   */
  errorHandler: Record<string, ErrorMessages>;

  /**
   * A function to map the original request object to the target request object.
   * This is useful when you need to transform the form data before submitting it to the server.
   * @param req - The original request object containing the form data.
   * @returns The transformed request object to be submitted to the server.
   */
  mapFunction?: (req: Request) => TargetRequest;

  /**
   * The route to redirect to after the form submission is successful.
   * This can be used to redirect the user to a different page upon successful form submission.
   */
  redirectRoute?: string;
}
```

#### Properties and Methods:

- `submit`: A function that should be implemented to submit the form data to the server. It takes the `TargetRequest` object containing the form data to be submitted and returns a `Promise` that resolves to the server response.

- `submitCallBack` (optional): A callback function that will be executed after the form submission is successful. You can use this callback to perform additional actions or logic based on the server response.

- `indentifierPropertyName` (optional): The name of the property that serves as the unique identifier in the form data. This is useful when you need to handle updates or deletions based on the unique identifier.

- `errorHandler`: An object that defines error messages for different form fields. The keys represent the form field names, and the values are the error messages associated with each field.

- `mapFunction` (optional): A function to map the original `Request` object to the `TargetRequest` object. This can be used to transform the form data before submitting it to the server.

- `redirectRoute` (optional): The route to redirect to after the form submission is successful. This can be used to redirect the user to a different page upon successful form submission.

### Type Parameters:

- `Request`: The type of the original request object containing the form data before transformation.
- `TargetRequest`: The type of the request object containing the form data after transformation (i.e., the form data to be submitted to the server).
- `Response`: The type of the server response received after form submission.

The `SubmittHandler` interface is intended to provide a flexible way to handle form submissions in your Vue application. By implementing this interface, you can customize the form submission process, handle responses and errors, and perform additional actions based on the submission result.
