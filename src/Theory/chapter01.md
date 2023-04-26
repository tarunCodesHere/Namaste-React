### What is Emmet?

- Emmet is a set of plug-ins for text editors that allow for high-speed coding
  and editing in HTML, XML, XSLT, and other structured code formats via content assist
  `basically dher sara HTML code kuch hi short-keywords use karke likh sakte hai`

### Difference between a Library and Framework?

- The technical difference between a framework and library lies in a term called inversion of control.
  When you use a library, you are in charge of the flow of the application.
  You are choosing when and where to call the library. When you use a framework,
  the framework is in charge of the flow.
  It provides some places for you to plug in your code, but it calls the code you plugged in as needed.
  **Library ko hum apne isharo pe nacha sakte hai,framework humein pane isharo pe nachaega**

### What is CDN? Why do we use it?

- CONTENT DELIVERY NETWORK. also called a content distribution network,
  is a group of geographically distributed and interconnected servers.
  They provide cached internet content from a network location closest to a user to speed up its delivery.
  The primary goal of a CDN is to improve web performance by reducing the time needed to
  send content and rich media to users.
  `jar(starting) se leke ped ke har jagah tak content pahuchana wo bhi fast kaam hai CDN ka`

### What is caching and how it works?

Caching is the process of storing copies of files in a cache, or temporary storage location,
so that they can be accessed more quickly
`cached memory super fast memroy hoti hai jisse turant retrive kar sakte hai`

### Why is React known as React?

- React is named React because of its ability to react to changes in data.
  When the data `(state or props changes)`in a React component changes, React will automatically re-render
  the component so that it reflects the new data. This makes it easy to create performant
  user interfaces that always look up-to-date.
  `site me kuch bhi changes ho to poori site relaod na ho bas change hi reflect kare`

### What is crossorigin in script tag? What is CORS?

- The purpose of crossorigin attribute is used to share the resources from one domain to another domain.
  Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks
  whether it is safe to allow for sharing the resources from other domains.
  1. Cross-origin resource sharing (CORS) is a mechanism that allows
     restricted resources on a web page to be requested from another
     domain outside the domain from which the first resource was served.
     `A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos`

### What is diference between React and ReactDOM?

- React and ReactDOM were only recently split into two different libraries. Prior to v0.14, all ReactDOM functionality was part of React.

- the react package is required to create and use components and hooks,
- react-dom contains react-dom/client and react-dom/server to render you app in the browser's DOM or inside a string (or a stream) on the server

- ReactDOM library is responsible to actually render UI in the browser

### What is difference between react.development.js and react.production.js files via CDN?

                           - The development build is used - as the name suggests -
                            for development reasons. You have Source Maps, debugging
                            and often times hot reloading ability in those builds

                           - The production build, on the other hand, runs in production mode
                            which means this is the code running on your client's machine.
                            The production build runs uglify and builds your source files
                            into one or multiple minimized files. It also extracts CSS and
                            images and of course any other sources you're loading with Webpack

### What is async and defer?

- `dono ko head me likhenge as humein script ko fetch aur execute HTML jab parse ho raha ho tabhi karna hai`

- `ASYNC`

  - script is fetched asynchronously and executed immediately without waiting
    for HTML to be parsed
  - async me DOMContentLoaded script ke load hone ka wait nahi karega
  - script kis order me execute hogi eski gurantee nahi hai - for 3rd party apps. jisse humare code ko interact nahi karn hai `example fetching API`

- `DEFER`
  - fetched synchronously and excetued after hTML is parsed completely
  - DOMContentLoaded defer ke script load hone ke baad fire hoga
  - best for use

