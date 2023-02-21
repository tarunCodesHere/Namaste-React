1. is JSX mandatory?
   -no, we can even use html
   -Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children).
   So, anything you can do with JSX can also be done with just plain JavaScript.

   2.Is ES6 mandatory for React?
   -Normally you would define a React component as a plain JavaScript class.
   -If you don’t use ES6 yet, you may use the create-react-class module instead.

2. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
   -{TitleComponent} --- to call react element in a funcitonal componenet
   -{<TitleComponent/>} --- composition of component -- to call a componenet in a component with self closing tag
   -{<TitleComponent></TitleComponent>} --- to call a component inside another componenet with closing tag
   ---composition of component

3. How can I write comments in JSX?

- to write comments in JSX we need to write it in { //single line} {/_multi line comment_/}

5. What is <React.Fragment></React.Fragment> and <></> ?

- Any piece of JSX can have only one parent.
- therefore to remove extra div we'll write in under
  -it's root element
  -provided by react library
  <React.Fragment>

                                                      </React.Fragment>

                                                      -<></> is just a shortform of above syntax
                                                      -basically means empty tag

6. What is Virtual DOM?
   -representation of DOM
   -virtual representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
   This process is called reconciliation.
   -This approach enables the declarative API of React:
   You tell React what state you want the UI to be in, and it makes sure the DOM matches that state

7. What is Reconciliation in React?(diffing Algorithm)
   -It's an algo that react uses to DIFF one tree from other & it determines what needs to be changed in UI &
   whats's not needed to be changed.

- i. two different element will produce two different tree.
- ii. if same type of elemenet exists and some new is added ,we need to provide it with a props called
  "key" to uniquely access it.
- search for UI which needs to be updated and then updates only that portion
- re-render that portion not the whole app.
- uses diffing algorithm
  -React supports a key attribute. When children have keys, React uses the key to match children in the original
  tree with children in the subsequent tree. And ab jo bachega usko update kar dega.

8. What is React Fiber?
   -React Fiber is an ongoing reimplementation of React's core algorithm
   -The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature
   is `incremental rendering`: the ability to split rendering work into chunks and spread it out over multiple frames.

9. Why we need keys in React? When do we need keys in React?
   -key is props in react .
   -it's used in reconsciliation to uniquely determine whicch child needs to be updated  
   -React uses the key to match children in the original tree with children in the subsequent tree.
   And ab jo bachega usko update kar dega.

10. Can we use index as keys in React?
    -NO key<<<<<<<<< index as key(Last option) <<< unique key
    -It may break your application and display wrong data! - a key is the only thing React uses to identify DOM elements. What happens if
    you push an item to the list or remove something in the middle? If the key is same as
    before React assumes that the DOM element represents the same component as before. But that is no longer true.

11. What is props in React?
    -basically these are arguments of functional componenet .
    -passing argument jaisa hogay yeh
    -properties

12. What is a Config Driven UI ?
    -dynamic UI
