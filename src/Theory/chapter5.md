`always group files by features`

### 1. What is the difference between **Named** Export , **Default** export and \* **as** export?

1. `Named Export` - when a export a file while declaring it at the initialization
   ```javascript
   export const File1 = {
     //some data
   };
   ```
   - to import such files use
   ```javascript
    import {File1} from ./src/File1
   ```
2. `Defualt export` - when a file is exported at the with a keyword default

   1.

   ```javascript
   const File1 = {
     //some data
   };
   export File1;

   ```

   2.

   ```javascript
   const File2={
    //some data(functional depenency)
   }
    const File1 = {
     //some data
     {< File2/>}
   };
   export File1
   ```

   - to import this default type use

   ```javascript
   import File1 from ./src/File1
   ```

3. `* as` when there is multiple exports in a single file

```javascript
export const File2 = {
  //some data
};
export const File1 = {
  //some data
};
```

- to import this type of multiple exports we'll use \* as

```javascript
 import  * as XY from ./src/FileName
```

- fir XY ko as object use kar sakte ho
  - `XY.File1` to get File1 or `XY.File2` to get File2

`importing and exporting me . lagake extension bataana jaruri nahi hai`

### 2. What is the importance of config.js file?

- `config.js` or `constant.js` files contains all the hard-coded data
  1. we don't need to re-write every single link again and again
  2. it's makes our code much more readable
  3. thus it helps in maintaining the code

### 3. What are React Hooks?

- react hooks are basically JavaScript function which have some specific purpose
- They let you use state and other React features without writing a class.

### 4. Why do we need a useState Hook? Describe about state varibale.

```javascript
import { useState } from "react";
```

- React uses one way data binding. If we want to render component in react we'll need to use useState() hooks as it provides us the `state variable` .
  > React says that if we want to be in-sync with UI we need to use state varibale
- local variable dosent retain data between renders.
  > when react renders a component for second time it re-renders it from scratch therefore dosen't consider any changes to the local variable. as usme kuch change nahi hoga
- `state` is termed as component's memory in react and determines component's current situation
  > it actually lives in react itself
- When react calls the component,it gives ss of the state for that particular render .
  - when it re-renders , your component returns a ss of UI with fresh set of props & event handlers in it's JSX. `ALL CALCULATED USING STATE VALUES FROM THAT RENDER`

`important info below`

- In order to update a component with new data, two things is needed

  1. regain data b/w renders - `done by state variable`
  2. trigger react to re-render with new data - `done by set function of state varibale`

```javascript
[searchText, setSearchText] = useState();
//searchText-state variable name
//setSsearchText- function to update the state variable
```

- React keeps a track of all state varibale (local ka nahi). When state variable gets updated, whole component is re-renderd.( triggered by the set function of state varibale)

### 5. When does component re-renders?

1. when there is a change in state.
2. when the props(`properites or value that we have passed`) changes.
