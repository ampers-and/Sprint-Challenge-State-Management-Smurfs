1. What problem does the context API help solve?

    It stops the need for 'props drilling' - passing props component to component. Context API stores data on a context object, and the data can be accessed by components from the context object, not props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: an action is an object with up to two properties - type and payload. Actions tell the reducer how to (and with what) to update state but cannot update state by itself.

    Reducers:  a reducer is a function which takes two arguments, the state and an action and returns the updated state by executing the action.

    Store: The store is a single js object that contains the state. The state in the store is never mutated; it is cloned and then replaced with the modified clone.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    An application state is a state used and accessible application-wide. Component states exist within the component and cannot be shared/ called unless they are passed as props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    When an action creator is called, redux-thunk intercepts it. If an action is returned, it forwards it to the reducer. However, if a function is returned, then it will invoke the function and pass dispatch in as an argument of this function. This allows us to run async functions.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    Even though I hardly get it, I do like using redux. It is a very powerful tool.