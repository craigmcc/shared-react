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

Import this component in your using component module (either JSX or TSX):
```shell
import {CheckBox} from '@craigmcc/shared-react';
```

Then use it in your rendered return value, in the usual way:
```tsx
<CheckBox properties... />
```

Supported Configuration Properties:

| Name         | Data Type     | Required | Description | Default Value |
|--------------|---------------|----------|-------------|---------------|
| autoFocus    | boolean       | No       | Should the rendered element include autoFocus?  | false |
| disabled     | boolean       | No       | Should the rendered element be marked disabled? | false |
| handleChange | HandleBoolean | Yes      | Function to handle value changes                | NO DEFAULT |
| label        | string        | Yes      | Element label                                   | NO DEFAULT |
| name         | string        | No       | Input control name                              | checkBox |
| value        | boolean       | No       | Initially rendered value                        | false |

Examples:

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

### Pagination

TODO - Pagination component documentation.

### SearchBar

TODO - Search bar component documentation.
