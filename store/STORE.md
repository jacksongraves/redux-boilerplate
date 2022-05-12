# Store Setup

The store should follow a Redux ducks / slices arrangement. If too many slices are required, lean on an `slices/index.ts` to re-export the slices.

The `useStore()` and `useActions()` hooks are useful for extracting state and actions as needed.

Unless there is an obvious use case for promises in the Redux store, do not use `redux-thunk` as it complicates things and tightly couples Redux with the APIs, rather, call the API, then invoke an action based on the result.

Persistence of the store should be handled **securely** by `redux-persist`, if we need persistence.
