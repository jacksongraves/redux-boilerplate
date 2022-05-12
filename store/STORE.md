# Store Setup

The store should follow a Redux ducks / slices arrangement. If too many slices are required, lean on an `slices/index.ts` to re-export the slices.

The `useStore()` and `useActions()` hooks are useful for extracting state and actions as needed.

Unless there is an obvious use case for promises in the Redux store, do not use `redux-thunk` as it complicates things and tightly couples Redux with the APIs, rather, call the API, then invoke an action based on the result.

Persistence of the store should be handled **securely** by `redux-persist`, if we need persistence.

## useStore()

Assuming we have a store that has slices and state like so:

```javascript
const store = {
	slice1: {
		variable1: true,
		variable2: false,
	},
	slice2: {
		variable3: true,
		variable4: false,
	},
};
```

We could use the `useStore()` hook to access state slices as below:

```javascript
const Component = () => {
	const { slice1, slice2 } = useStore();

	return <div>{slice1.variable1}</div>;
};
```

## useActions()

Assuming the same store as above, and a set of actions like so:

```javascript
const actions = {
	setVariable1,
	setVariable2,
	setVariable3,
	setVariable4,
};
```

We can access the actions directly (without needing to split apart slices) from the `useActions()` hook:

```javascript
const Component = () => {
	const { slice1, slice2 } = useStore();
	const { setVariable1 } = useActions();

	useEffect(() => {
		setVariable1(false);
	}, []);

	return <div>{slice1.variable1}</div>;
};
```
