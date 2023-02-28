# M07W18 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Rules for Hooks
* They cannot be called conditionally
* They have to be called by a React function
* Every hook has to start with `use`

### Pure Function
* no side effects
* it returns the same value given the same arguments

```js
let addition = 10;
let count = 0;

const addTwo = (num) => {
  count += 1;
  const result = num + addition;
  return result;
};
```

### Common Side Effects
* modifying the DOM directly
* setting timers and intervals
* establishing socket connections
* data fectching / AJAX

```js
useEffect(() => {}); // will be called on EVERY render
useEffect(() => {}, [username]); // will be called on initial render and then only if username changes
useEffect(() => {}, []); // will be called on initial render and then never again
```


/api/appointments 2s
/api/days 3s
/api/interviewers 4s


Promise.all([]).then()


```js
const count = 0;
setCount(count + 1); // 1
setCount((theLatestValueForCount) => theLatestValueForCount + 1); // 2
setCount((prev) => prev + 1); // 3
setCount(count + 1); // 1
```







