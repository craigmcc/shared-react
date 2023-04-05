# Shared React Components Library

This library contains a number of React components that I had shared across
multiple applications the old fashioned way (cut-n-paste).  It's time to make
them a separate thing that can be maintained and updated in one place.

## Installation

This library depends on the following peer dependencies, but is flexible about
which version is used.  Check the `peerDependencies` section of the
`package.json` file to see what minimum versions are required.

As needed, you can install the peer dependencies:
```shell
npm install bootstrap react react-bootstrap react-bootstrap-icons react-dom react-hook-form react-toastify
```

To install this library itself:
```shell
npm install @craigmcc/shared-react
```

### Styles for Bootstrap and React-Bootstrap

The components depend on `react-bootstrap` (and therefore `bootstrap` itself)
for styling, so somewhere in your application you will need to import the Bootstrap
styles.  The easiest way is to include the following in your outermost `App.tsx`
or `App.jsx` file:
```typescript
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Styles for React-Toastify

Likewise, you will need to import the *react-toastify* styles, along with the
declaration for the `<ToastContainer>` component.  Again, the easiest
way is to include the following in your outermost `App.tsx` or `App.jsx` file:
```typescript
import {ToastContainer} from 'react-toastify';
import `react-toastify/dist/ReactToastify.css`;
```
### Wrapper Container for React-Toastify

Finally, in your `App.tsx` or `App.jsx` file, include a `<ToastContainer>`
component, normally above and outside all of your application components.
This component is used to configure the default characteristics for all
toast notifications that your application produces -- see the react-toastify
documentation for details.

## Data Handler Types

The following function definitions are used to declare Typescript method signatures for functions
that respond to events:

```tsx
export type HandleAction = () => void;
export type HandleBoolean = (newBoolean: boolean) => void;
export type HandleValue = (newValue: string) => void;
```

## Component Documentation

A (still in progress) Style Guide for all included components can be found
[here](https://craigmcc.github.io/shared-react/).

## Included Components

The following general purpose components are provided by this library:

| Component Name            | Description                                                                                                                                   |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [AddButon](#AddButton)    | A stylized button with a "+" icon.                                                                                                            |
| [BackButon](#BackButton)  | A stylized button with a "<" icon.                                                                                                            |
| [Callout](#Callout)       | A text area with variant background colors, useful in documentation.                                                                          |
| [CheckBox](#CheckBox)     | A standalone checkbox input, with optional decorations.  Suitable for use cases where a form is overkill.                                     |
| [Pagination](#Pagination) | Very simple pagination controls when managing a multiple page table.                                                                          |
| [SearchBar](#SearchBar)   | General purpose search bar, with optional decorations.  You can choose to be notified on each keystroke, or only when the value is completed. |

In addition, the following components render a `<Form.Group>` element (from
react-bootstrap) that are useful in creating fields for an HTML form:

| Component Name                   | Description                           |
|----------------------------------|---------------------------------------|
| [CheckBoxField](#CheckBoxField)  | A form input element for a checkbox.  |
| [SelectField](#SelectField)      | A form element for a select dropdown. |
| [TextField](#TextField)          | A form element for a text input.      |

Also, the following components render a toast notification, while a fetching or mutating operation
is in progress.  They are typically used in conjunction with a corresponding React custom hook that
performs the requested function asynchronously, but this is not required.

| Component Name                    | Description                                                                                    |
| --------------------------------- |------------------------------------------------------------------------------------------------|
| [FetchingProgress](#FetchingProgress) | Display a toast while a "fetching" API call is in progress, or an error toast if it fails.     |
| [MutatingProgress](#MutatingProgress) | Display a toast while a "mutating" API call is in progress, or an error toast if it fails.     |                                                                   

### AddButton

#### Usage

Import this component in your using component module (either JSX or TSX):
```shell
import {AddButton, HandleAction} from "@craigmcc/shared-react";
```

Then use it in your rendered return value, in the usual way:
```tsx
<AddButton {AddButtonProps}/>
```

#### Supported Configuration Properties

| Name      | Data Type    | Required | Description                                     | Default Value  |
|-----------|--------------|----------|-------------------------------------------------|----------------|
| disabled  | boolean      | No       | Should the rendered element be marked disabled? | false          |
| handleAdd | HandleAction | No       | Function to handle button clicks                | no handler     |
| testId    | string       | No       | Optional "data-testid" value for tests          | no data-testid |

### BackButton

#### Usage

Import this component in your using component module (either JSX or TSX):
```shell
import {BackButton, HandleAction} from "@craigmcc/shared-react";
```

Then use it in your rendered return value, in the usual way:
```tsx
<BackButton {BackButtonProps}/>
```

#### Supported Configuration Properties

| Name       | Data Type    | Required | Description                                     | Default Value  |
|------------|--------------|----------|-------------------------------------------------|----------------|
| disabled   | boolean      | No       | Should the rendered element be marked disabled? | false          |
| handleBack | HandleAction | No       | Function to handle button clicks                | no handler     |
| testId     | string       | No       | Optional "data-testid" value for tests          | no data-testid |

### Callout

#### Usage

Import this component in your using component module (either JSX or TSX):
```shell
import {Callout} from "@craigmcc/shared-react";
```

Then use it in your rendered return value, in the usual way:
```tsx
<Callout {CalloutProps}/>
```

#### Supported Configuration Properties

| Name     | Data Type | Required | Description                                  | Default Value             |
|----------|-----------|----------|----------------------------------------------|---------------------------|
| children | ReactNode | Yes      | Text content to be rendered in this Callout  | NO DEFAULT                |
| icon     | boolean   | No       | Should a title icon be rendered?             | true (if title specified) |
| title    | string    | No       | Optional title (header) for this Callout     | no title                  |
| variant  | string    | No       | Bootstrap variant style for background color | info                      |

The variant values are the standard ones for Bootstrap:  primary, secondary, success, danger, warning,
info, light, and dark.  This chooses the color of the background for the callout, and also the
complementary color for the displayed text.

### CheckBox

#### Usage:

Import this component in your using component module (either JSX or TSX):
```shell
import {CheckBox, HandleBoolean} from '@craigmcc/shared-react';
```

Then use it in your rendered return value, in the usual way:
```tsx
<CheckBox {CheckBoxProps} />
```

#### Supported Configuration Properties:

| Name         | Data Type     | Required | Description                                     | Default Value |
|--------------|---------------|----------|-------------------------------------------------|---------------|
| autoFocus    | boolean       | No       | Should the rendered element receive autoFocus?  | false         |
| disabled     | boolean       | No       | Should the rendered element be marked disabled? | false         |
| handleChange | HandleBoolean | Yes      | Function to handle value changes                | NO DEFAULT    |
| label        | string        | Yes      | Element label                                   | NO DEFAULT    |
| name         | string        | No       | Input control name                              | checkBox      |
| value        | boolean       | No       | Initially rendered value                        | false         |

#### Examples:

<table border="1">
<tr>
<th>Source Code</th>
<th>Rendered HTML</th>
</tr>
<tr>
<td>

```tsx
<CheckBox
    handleChange={handleMagicChange}
    label="Enable the magic?"
    value={true}
/>
```

</td>
<td>

```html
<form class="align-items-center">
    <div id="checkBoxGroup">
        <input type="checkbox" id="checkBox" class="form-check-input" checked>
        <label for="checkBox" class="ms-2 form-check-label">Enable the magic?</label>
    </div>
</form>
```

</td>
</tr>
<tr>
<td>

```tsx
<CheckBox
    disabled={true}
    handleChange={handleActiveChange}
    label="Active items only?"
    name="active"
/>
```

</td>
<td>

```html
<form class="align-items-center">
    <div id="activeGroup">
        <input disabled type="checkbox" id="active" class="form-check-input">
        <label for="active" class="ms-2 form-check-label">Active items only?</label>
    </div>
</form>
```

</td>
</tr>

</table>

#### Behavior Notes:
* The `handleChange` function will be called whenever the checkbox is checked or unchecked.

### CheckBoxField

#### Usage:

Import this component in your using component module (either JSX or TSX):

```typescript
import {CheckBoxField} from "@craigmcc/shared-react";
```

Then use in your rendered return value (within a `<Form>` component from react-boostrap)
in the usual way:

```tsx
<CheckBoxField {CheckBoxFieldProps}/>
```

#### Supported Configuration Properties

| Name      | Data Type       | Required | Description                                                     | Default Value |
|-----------|-----------------|----------|-----------------------------------------------------------------|---------------|
| as        | ElementType     | No       | Render the `<Form.Group>` as a component of this type.          | Col           |
| autoFocus | boolean         | No       | Should this field receive autoFocus?                            | false         |
| className | string          | No       | CSS style class names (space separated) for the `<Form.Group>`. | none          |
| disabled  | boolean         | No       | Should this field be disabled?                                  | false         |
| error     | FieldError      | No       | FieldError object for this field (if any).                      | no error      |
| invalid?  | string          | No       | Error message if input is invalid                               | no message    |
| label     | string          | Yes      | Field label.                                                    | NO DEFAULT    |
| name      | string          | Yes      | Name of this field (must be unique in a form).                  | NO DEFAULT    |
| readOnly  | boolean         | No       | Should this field be marked as read only?                       | false         |
| register  | UseFormRegister | Yes      | `register` object from `useForm()`.                             | NO DEFAULT    |
| type      | string          | No       | Input control type ("checkbox" or "radio").                     | checkbox      |

#### Behavior Notes
* The field label will appear *after* the checkbox, in the usual react-bootstrap style.

### FetchingProgress

#### Usage:

Import this component in your using component module (either JSX or TSX):
```typescript
import {FetchingProgress} from '@craigmcc/shared-react';
```

Then, render this component somewhere in your component's output.  The actual
location of the rendered toast is based on the settings you configured in the
`<ToastContainer>` component described earlier.

#### Supported Configuration Properties

| Name      | Data Type       | Required | Description                                                           | Default Value                   |
|-----------|-----------------|----------|-----------------------------------------------------------------------|---------------------------------|
| duration  | number          | No       | Number of ms to display this toast if not cleared (0=forever)         | Default from `<ToastContainer>` |
| error     | Error or null   | No       | Error thrown by fetch logic (typically from a custom hook)            | No notification                 |
| loading   | boolean         | No       | Flag indicating a fetch is in progress (typically from a custom hook) | No notification                 |
| message   | string          | Yes      | Message displayed in this toast while loading is in progress          | NO DEFAULT                      |

#### Example:

Assume you have a custom hook that performs a fetch, and returns (among other things):
* error: Error | null - Javascript error thrown by the fetch operation.
* loading: boolean - Flag indicating that the fetch operation is in progress.

Then, you might include a progress component like this:

```typescript jsx
<FetchingProgress
    error={customHook.error}
    loading={customHook.loading}
    message="Fetching selected customers"
/>
```

### MutatingProgress

#### Usage:

Import this component in your using component module (either JSX or TSX):
```typescript
import {MutatingProgress} from '@craigmcc/shared-react';
```

Then, render this component somewhere in your component's output.  The actual
location of the rendered toast is based on the settings you configured in the
`<ToastContainer>` component described earlier.

#### Supported Configuration Properties

| Name      | Data Type       | Required | Description                                                              | Default Value                   |
|-----------|-----------------|----------|--------------------------------------------------------------------------|---------------------------------|
| duration  | number          | No       | Number of ms to display this toast if not cleared (0=forever)            | Default from `<ToastContainer>` |
| error     | Error or null   | No       | Error thrown by mutating logic (typically from a custom hook)            | No notification                 |
| executing | boolean         | No       | Flag indicating a mutation is in progress (typically from a custom hook) | No notification                 |
| message   | string          | Yes      | Message displayed in this toast while mutation is in progress            | NO DEFAULT                      |

#### Example:

Assume you have a custom hook that performs a mutation, and returns (among other things):
* error: Error | null - Javascript error thrown by the mutation operation.
* executing: boolean - Flag indicating that the mutation operation is in progress.

Then, you might include a progress component like this:

```typescript jsx
<MutatingProgress
    error={customHook.error}
    executing={customHook.executing}
    message="Updating the selected order"
/>
```

### Pagination

#### Usage:

Import this component in your using component module (either JSX or TSX):
```shell
import {Pagination, HandleAction} from '@craigmcc/shared-react';
```

Then use it in your rendered return value, in the usual way:
```tsx
<Pagination {PaginationProps} />
```

#### Supported Configuration Properties:

| Name           | Data Type    | Required | Description                                     | Default Value     |
|----------------|--------------|----------|-------------------------------------------------|-------------------|
| currentPage    | number       | Yes      | One-relative current page number                | NO DEFAULT        |
| handleNext     | HandleAction | No       | Function to handle "next" button clicks         | No handler        |
| handlePrevious | HandleAction | No       | Function to handle "previous" button clicks     | No handler        |
| lastPage       | boolean      | Yes      | Is this the last page (disables "Next")?        | NO DEFAULT        |
| variant        | string       | No       | Bootstrap variant style for buttons             | outline-secondary |

#### Examples:

<table border="1">
<tr>
<th>Source Code</th>
<th>Rendered HTML</th>
</tr>
<tr>
<td>

```tsx
<Pagination
    handleNext={handlePaginationNext}
    handlePrevious={handlePaginationPrevious}
    lastPage={false}
    variant="secondary"
/>
```

</td>
<td>

```html
<button type="button" class="me-1 btn btn-secondary">&lt;</button>
<button type="button" disabled class="me-1 btn btn-secondary">2</button>
<button type="button" class="btn btn-secondary">&gt;</button>
```

</td>
</tr>

</table>

#### Behavior Notes:
* Previous Page control (`<`) will be disabled on the first page, and enabled otherwise.
* Current page number will always be disabled.  It is styled as a button for visual consistency only.
* Next Page control ('>') will be disabled if `lastPage` is set to true.

### SearchBar

#### Usage:

Import this component in your using component module (either JSX or TSX):
```shell
import {SearchBar, HandleValue} from '@craigmcc/shared-react';
```

Then use it in your rendered return value, in the usual way:
```tsx
<SearchBar {SearchBarProps} />
```

#### Supported Configuration Properties:

| Name         | Data Type   | Required | Description                                        | Default Value |
|--------------|-------------|----------|----------------------------------------------------|---------------|
| autoFocus    | boolean     | No       | Should the rendered element receive autoFocus?     | false         |
| disabled     | boolean     | No       | Should the rendered element be marked disabled?    | false         |
| handleChange | HandleValue | No       | Function to handle value changes on each keystroke | No handler    |
| handleValue  | HandleValue | No       | Function to handle value on enter/tab              | No handler    |
| htmlSize     | number      | No       | Number of characters hint for input control        | Not set       |
| label        | string      | No       | Element label                                      | "Search For:" |
| name         | string      | No       | Input control name                                 | searchBar     |
| placeholder  | string      | No       | Placeholder text                                   | Not set       |
| value        | boolean     | No       | Initially rendered value                           | ""            |

#### Examples:

<table border="1">
<tr>
<th>Source Code</th>
<th>Rendered HTML</th>
</tr>
<tr>
<td>

```tsx
<SearchBar
    handleChange={handleSearchBarChange}
    handleValue={handleSearchBarValue}
    label="Select Customer:"
    name="selectCustomer"
    placeholder="Specify all or part of the customer name"
/>
```

</td>
<td>

```html
<form class="align-items-center">
    <div id="selectCustomerGroup" class="row">
        <label for="selectCustomer" class="form-label col-auto">Select Customer:</label>
        <div class="col-auto">
            <input placeholder="Specify all or part of customer name" id="selectCustomer" class="form-control form-control-sm" value>
        </div>
    </div>
</form>
```

</td>
</tr>

</table>

#### Behavior Notes:
* The `handleChange` function (if any) will be called on each keystroke.
* The `handleValue` function (if any) will be called when *Enter* or *Tab* is pressed.

### SelectField

#### Usage:

Import this component in your using component module (either JSX or TSX):

```typescript
import {SelectField} from "@craigmcc/shared-react";
```

Then use in your rendered return value (within a `<Form>` component from react-boostrap)
in the usual way:

```tsx
<SelectField {SelectFieldProps}/>
```

#### Supported Configuration Properties

| Name      | Data Type       | Required | Description                                                     | Default Value |
|-----------|-----------------|----------|-----------------------------------------------------------------|---------------|
| as        | ElementType     | No       | Render the `<Form.Group>` as a component of this type.          | Col           |
| autoFocus | boolean         | No       | Should this field receive autoFocus?                            | false         |
| className | string          | No       | CSS style class names (space separated) for the `<Form.Group>`. | none          |
| disabled  | boolean         | No       | Should this field be disabled?                                  | false         |
| error     | FieldError      | No       | FieldError object for this field (if any).                      | no error      |
| header    | SelectOption    | No       | Optional placeholder rendered above the options list.           | none          |
| label     | string          | Yes      | Field label.                                                    | NO DEFAULT    |
| name      | string          | Yes      | Name of this field (must be unique in a form).                  | NO DEFAULT    |
| options   | SelectOption[]  | Yes      | Array of select options with *label* and *value* properties.    | NO DEFAULT    |
| readOnly  | boolean         | No       | Should this field be marked as read only?                       | false         |
| register  | UseFormRegister | Yes      | `register` object from `useForm()`.                             | NO DEFAULT    |
| valid     | string          | No       | Help message for valid input                                    | none          |

#### Behavior Notes
* The field label will appear *above* the select field, in the usual react-bootstrap style.

### TextField

#### Usage:

Import this component in your using component module (either JSX or TSX):

```typescript
import {TextField} from "@craigmcc/shared-react";
```

Then use in your rendered return value (within a `<Form>` component from react-boostrap)
in the usual way:

```tsx
<TextField {TextFieldProps}/>
```

#### Supported Configuration Properties

| Name        | Data Type       | Required | Description                                                     | Default Value |
|-------------|-----------------|----------|-----------------------------------------------------------------|---------------|
| as          | ElementType     | No       | Render the `<Form.Group>` as a component of this type.          | Col           |
| autoFocus   | boolean         | No       | Should this field receive autoFocus?                            | false         |
| className   | string          | No       | CSS style class names (space separated) for the `<Form.Group>`. | none          |
| disabled    | boolean         | No       | Should this field be disabled?                                  | false         |
| error       | FieldError      | No       | FieldError object for this field (if any).                      | no error      |
| htmlSize    | number          | No       | HTML size of text field.                                        | none          |
| label       | string          | Yes      | Field label.                                                    | NO DEFAULT    |
| name        | string          | Yes      | Name of this field (must be unique in a form).                  | NO DEFAULT    |
| placeholder | string          | No       | Placeholder text when the field has no value.                   | none          |
| readOnly    | boolean         | No       | Should this field be marked as read only?                       | false         |
| register    | UseFormRegister | Yes      | `register` object from `useForm()`.                             | NO DEFAULT    |
| type        | string          | No       | Input field type (date                                          | hidden        |month|number|password|text|time). | text
| valid       | string          | No       | Help message for valid input                                    | none          |

#### Behavior Notes
* The field label will appear *above* the text field, in the usual react-bootstrap style.

