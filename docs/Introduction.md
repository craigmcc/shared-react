This library contains a number of React components that I had shared across
multiple applications the old fashioned way (cut-n-paste).  It's time to make
them a separate thing that can be maintained and updated in one place.

## Installation

This library depends on the following peer dependencies, but is flexible about
which version is used.  Check the `peerDependencies` section of the
`package.json` file to see what minimum versions are required.

As needed, you can install the peer dependencies:
```text
npm install bootstrap react react-bootstrap react-bootstrap-icons react-dom react-hook-form react-toastify
```
To install this library itself:
```text
npm install @craigmcc/shared-react
```
### Styles for Bootstrap and React-Bootstrap

The components depend on `react-bootstrap` (and therefore `bootstrap` itself)
for styling, so somewhere in your application you will need to import the Bootstrap
styles.  The easiest way is to include the following in your outermost `App.tsx`
or `App.jsx` file:
```text
import 'bootstrap/dist/css/bootstrap.min.css';
```
### Styles for React-Toastify

Likewise, you will need to import the *react-toastify* styles, along with the
declaration for the `<ToastContainer>` component.  Again, the easiest
way is to include the following in your outermost `App.tsx` or `App.jsx` file:
```text
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

```text
export type HandleAction = () => void;
export type HandleBoolean = (newBoolean: boolean) => void;
export type HandleValue = (newValue: string) => void;
```
## Included Components

Each included component is described in the sections below.  Click on the
category or the individual component that you are interested in.

