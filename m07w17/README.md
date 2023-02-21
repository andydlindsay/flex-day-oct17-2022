# M07W17 - Component-Based UI w/ React

### To Do

- [x] Review concepts from last week
- [x] Passing props with the spread operator
- [x] React Dev Tools
- [x] Lifting state up
- [x] Passing actions down as props
- [x] Storybook

```js
// ES6 object shorthand
const username = "alice";
const password = "1234";

const user = {
  username,
  password,
};
```

```js
App() {
  const data = {};

  Header() {
    console.log(data); // {}
  }
  Footer() {
    console.log(data); // reference error
  }
}
```

- App - state: todos[]
  - TodoList - props: todos
  - TodoForm - props: todos, state: form data
