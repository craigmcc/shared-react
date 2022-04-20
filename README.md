# Shared React Components Library

This module contains a number of React components that I have shared across
multiple applications the old fashioned way (cut-n-paste).  It's time to make
them a separate thing that can be maintained and updated in one place.

## Installation

This library depends on the following peer dependencies, but is flexible about
which version is used.  Check the `peerDependencies` section of the
`package.json` file to see what minimum versions are required.

If needed, you can install the peer dependencies:
```shell
npm install bootstrap react react-bootstrap react-dom
```

To install this library itself:
```shell
npm install @craigmcc/shared-react
```

The components depend on `react-bootstrap` (and therefore `bootstrap` itself)
for styling, so somewhere in your application you will need to import the Bootstrap
styles.  The easiest way is to include the following in your outermost `App.tsx`
or `App.jsx` file:
```typescript
import 'bootstrap/dist/css/bootstrap-min.css';
```

## Data Handler Types

The following function definitions are used to declare Typescript method signatures for functions
that respond to events:

```tsx
export type HandleAction = () => void;
export type HandleBoolean = (newBoolean: boolean) => void;
export type HandleValue = (newValue: string) => void;
```

## Included Components

The following components are provided by this library:

| Component Name            | Description                                                                                                                                   |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [CheckBox](#CheckBox)     | A standalone checkbox input, with optional decorations.  Suitable for use cases where a form is overkill.                                     |
| [Pagination](#Pagination) | Very simple pagination controls when managing a multiple page table.                                                                          |
| [SearchBar](#SearchBar)   | General purpose search bar, with optional decorations.  You can choose to be notified on each keystroke, or only when the value is completed. |

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

