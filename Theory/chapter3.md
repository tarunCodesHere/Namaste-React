1. what is JSX?
- javascript xml, jsx--React.createElement--object--HTML--dom
-helps to write html in React, JSX is not exactly HTML it's just html like syntax .

2.Superpowers of jsx?
-helps to write html like syntax 
-JSX will be converted into js by Babel
-JSX is not at a package, it's just a syntax.

3. role of 'type' attribute in script tag? what else could be used there?
-type of script presented
-examples- 1. module , 2. importmap , 3. blocking

4.Benefits of JSX?
-provides HTML like synatx in js
-cleaner code
-improves readability
-we don't need to write React.createElement much often

5. babel and parcel role in JSX?
-babel is a comipler which comes with parcel, present in node-modules.
-babel helps to convert jsx into React.createElement and saves a lot of time and hardwork.

6.Functional component?
-React function jo JSX ka value return karega ya react return karega.

            --- "react element"                           --- "react(Functional componenet)
            ---const hd=(                                 ---const HeaderComponent=()=>{
            ---<h1 key="dsfl">hellow</h1>                 ---return(
            ---)                                          ---<h1 key="dsfl">hellow</h1>  
            ---                                           ---)}



            ---to render react element                     ---to render Functinal componenet
            ---root.render(hd)                             ---root.render(<FunctinalComponent/>)

7. to call inside FunctionalComponenet

            --- "react element"                           --- "react(Functional componenet)
            ---{hd}                                       ---{FunctionalComponent()} or {FunctionalComponenet /} 

8. different ways of calling FunctionalComponenet inside functional componenet.

It's called as composition of componenet

*********************************COMPOSITION OF COMPONENT************************************
            - {Title()}             -- as function
            - {<Title/>}            -- as self closing HTML tag
            - {<Title></Title>}     -- as HTML tag with a closing tag
