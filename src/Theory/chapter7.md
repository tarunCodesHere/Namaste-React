### 1. What are various ways to add images into our App? Explain with code examples

- Method 1
  - ```javascript
    use an <img> tag
    <img src={..path}/>
    ```
- Method 2

  - import the image using it's path at the top and use wherever you want to
  - ```javascript
    import LOGO from "..path";
    ```

### 2. What would happen if we do console.log(useState())?

- useState by default simply does one thing and one thing only, set the new state and cause a re-render of the function. It is asynchronous in nature so by default, methods running after it usually run.

- ```javascript
  console.log(useState());
  `function re-renders only when there is change in state or props .`;
  ```
- it will return undefined.
- it is asynchronous, `console.log will be called with the old state value`, i.e. undefined (`since you didn't set a value`. You should consider setting an initial state, if you want to)

- - ```javascript
    console.log(useState(2));
    `It will return two things. the initial value 2 and function to update the state varibale`;
    ```

  ```

  ```

- it returns an array [state variable, function to update the state variable]

### 3. How will useEffect behave if we don't add a dependency array ?

- ```javascript
  useEffect(()=>)
  ```
- if there is no dependency array, it run every time once the component renders.

### 4. What is SPA?

- A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run.

- Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.

- baanki dher saara component bana ke routing kardo

### 5. What is difference between Client Side Routing and Server Side Routing?

- Client Side Routing
  - everything is present in form of components
  - a button/link is routed to a component using router
  - as everything is present on one page , it dosen't reloads .
  - each component is routed using `<Link>` tag
- Server Side Routing
  - all our pages will come from server
  - therefore there will be laoding
  - `click -> browser makes network call -> goes to server ->downlaods all css and js -> fetch everything ->display on UI `
  - slow
