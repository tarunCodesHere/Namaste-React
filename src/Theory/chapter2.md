### 1. What is `NPM`?

- Node package manager
  `humare project me bahut saara packages hai jisko install,
manage aur use karne ke liye PACKAGE MANAGER CHAHIYE . npm  & yarn are such `

  #### TOOL KIT ME

  1. package manager -(npm or yarn) `manages 3rd party libraries`
  2. bundler -(parcel,webPack) - `for modularity and budling`
  3. complier -(Babel) - `transpiler -converts code into js`

### - What is `Parcel/Webpack`? Why do we need it?

- Parcel/webPack is a bundler. which helps us to minify ,optimise our code
- helps in writing modular code & bundle it together into small packages to `optimize the load time`
- takes care of image optimization using **SHARP NODE MODULE**
- parcel does caching for us

  `Parcel caches everything it builds to disk. If you restart the dev server,
Parcel will only rebuild files that have changed since the last time it ran
by default yeh .parcel-cache me store rehta hai`

- compatible with older version of browser
  `browser-list me saara info store rahega ki kitna versions se compatilbe rehna chhaiye`

- manages your port number

  - By default, it starts a server at `http://localhost:1234`. If port 1234 is already in use,
    then a fallback port will be used. After Parcel starts,
    the location where the dev server is listening will be printed to the terminal.
    - Agar default local host use me ho to ek naya local host create kar dega

- even provides https support
  `npx parcel index.html --https`

- zero configuration bundler (`lazy loading | dynamic bundling | chunking | code splitting | on demand loading `)

- khudse koi configuration nai karna hota hai auto sab hojaega
  sirf apne ko entry-point daalne ka hai

        Parcel supports zero configuration code splitting out of the box.
        This allows you to split your application code into separate bundles which can be loaded on demand,
        resulting in smaller initial bundle sizes and faster load times.

  ```jaavscript
  const About =()=> import('path')

  ```

- HMR `hot module replacement`

  - HMR improves the development experience by updating modules in the browser at
    runtime without needing a whole page refresh. This means that application state
    can be retained as you change small things in your code.

    - bas jo component me changes aaye(state ya props) sirf wae wapis se render hoga poora SPA nahi

- `file watching algorithm`- in C++

  - To support an optimal caching and development experience Parcel utilizes a
    very `fast watcher written in C++` .
  - It integrates with low-level file
    watching functionality of each operating system. Using this watcher
    Parcel watches every file in your project root

- MINIFICATION

  - Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box.
  - Minification
    reduces the file size of your output bundles by removing whitespace, renaming variables
    to shorter names, and many other optimizations.
  - By default, minification is enabled when using the parcel build command.
    You can use the `--no-optimize` CLI flag to disable minification and other optimizations if needed.
    Parcel uses terser to minify JavaScript, lightningcss for CSS, htmlnano for HTML, and svgo for SVG.

- image optimization
- caching while development
- compression
  `Parcel supports compressing bundles using Gzip and Brotli.`
- compatible with older version of browsers
- uses consistent hashing algorithm --- integrity -SHA512

### What is `.parcel-cache` and dist folder?

- Parcel caches everything it builds to disk. If you restart the dev server,
  Parcel will only rebuild files that have changed since the last time it ran.
- Parcel automatically tracks all of the files, configuration, plugins, and dev
  dependencies that are involved in your build, and granularly invalidates the cache
  when something changes.

  - For example, if you change a configuration file,
    all of the source files that rely on that configuration will be rebuilt.

- By default, the cache is stored in the .parcel-cache folder inside your project.

- You should add this folder to your .gitignore (or equivalent) so that it is not
  committed in your repo. You can also override the location of the cache using the
  `--cache-dir` CLI option. `package-lock.json wapis se bana dega server me`

- Caching can also be disabled using the `--no-cache flag`.
  `Note that this only  disables reading from the cache – a .parcel-cache folder
will still be created.`

- `dist folder`
  -keeps all the files minified for us

### - What is `npx` ?

- to start parcel we use npx parcel
  `it means execute using npm`

### - What is difference between `dependencies` vs `devDependencies`?

- dependencies

  - Dependencies that `your project needs to run`, like a library that
    provides functions that you call from your code.
  - They are installed transitively
  - (if A depends on B depends on C, npm install on A will install B and C).
    ` Example: lodash: your project calls some lodash functions.`

- devDependencies
  - Dependencies you` only need during development` or releasing,
    like compilers that take your code and compile it into javascript,
    test frameworks or documentation generators.
  - They are not installed transitively
    (if A depends on B dev-depends on C, npm install on A will install B only).
    `Example: grunt: your project uses grunt to build itself.`

### - What is Tree Shaking?

- When we import and export modules in JavaScript,
  most of the time there is unused code floating around.
- `Tree shaking or dead code elimination` means that unused modules
  will not be included in the bundle during the build process.
- Tools like webpack/parcel will detect dead code and mark it as
  “unused module” but it won’t remove the code.
- Webpack relies on
  minifiers to cleanup dead code, one of them is `UglifyJS` plugin,
  which will eliminate the dead code from the bundle.

### - What is Hot Module Replacement?

- As you make changes to your code, Parcel automatically rebuilds the
  changed files and updates your app in the browser.
- By default, Parcel
  fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR).
- HMR improves the development experience by updating modules in the browser at runtime
  without needing a whole page refresh. This means that application state can be
  retained as you change small things in your code.
  - `sirf component ko render karne ka khela when kuch changes aaye toh `

### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your

own words.

- HMR
- sirf component ko render karne ka khela when kuch changes aaye toh
- Image optimization
- caching
- compatibility with older browser
- browserlist in package.json tells about compatibility\*\*
- https support

### - What is `.gitignore`? What should we add and not add into it?

- The .gitignore file is a text file that tells Git which files or folders to ignore in a project.
- `we should add all those file to our .gitignore which we can generate on server`

### - What is the difference between `package.json` and `package-lock.json`

- package.json

  - It contains basic information about the project.
  - It is mandatory for every project.
  - It records important metadata about the project.
  - It contains information such as name, description, author, script, and dependencies

- package-lock.json

  - It describes the exact tree that was generated to allow subsequent installs to have the identical tree.
  - It is automatically generated for those operations where npm
    modifies either node_modules tree or package.json.
  - It allows future devs to install the same dependencies in the project.
  - It contains the name, dependencies, and locked version of the project.

### - Why should I not modify **package-lock.json**?

- It stores an exact, versioned dependency tree . This means you can guarantee the dependencies
  for other developers or prod releases, etc.
- It also has a mechanism to lock the
  tree but generally will regenerate if package.json changes.
  `agar change kiye to production me kaam nahi karega`

### - What is `node_modules` ? Is it a good idea to push that on git?

- You can think of the node_modules folder like a cache for the external modules that your project depends upon.
- When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node.- - js is trained to look for them there when you import them (without a specific path).

`nahi daalo git me....warna website ko slow down kar dega`

### - What is the `dist` folder?

- The /dist stands for distributable.
- The /dist folder contains the minimized version of the source code.
- The code present in the /dist folder is actually the code which is used on production web applications.
- Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be
  used with other systems.
- It is easier to add files to the /dist folder as it is an automatic process.
  `All the files are automatically copied to the dist folder on save.`

### - What is `browserlists`

- node_modules me yeh folder me rehta hai kis kis browser se comptible rahega code

### Read about: ^ - caret and ~ - tilda

- `^`

  - “Compatible with version”, will update you to all future minor/patch versions,
    without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.

- `~`
  - “Approximately equivalent to version”, will update you to all future patch versions,
    without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

### Script types in html

- The type attribute of the <script> element indicates the type of script represented by the element:
  a classic script, a JavaScript module, an import map, or a data block.
