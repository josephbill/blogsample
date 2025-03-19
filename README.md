### How does the web work 
works by connecting clients (browsers) and servers over the
internet, using requests and responses to deliver web pages and 
applications 

frontend (interface (HTML, CSS, JS))
Middlewares (intermediaries between the frontend and backend(API's , web services))
Backend (server side (databases, server scripting files to process requests from the client))

### HTML (hyper text mark up language)
1. HTML ELEMENTS : creation of structures of a page 
   Types of elements: 
     a. Block Level elements : occupies the entire row section  i.e. <p> , <div> , <section>
     b. Inline elements : occupy what the element requires i.e. <a> <img>

Syntax 
<> content </>


### CSS (Cascading style sheets)
1. Styles out of html elements 
2. Responsiveness / Layouts 

When writing CSS we have 3 modes of styling HTML elements using CSS 
a. Inline styling = use of style attribute to include our css styling 
b. Internal styling = use of style element in the head section to write our CSS 
c. External styling = link our html to an external css file.

Syntax 
selector {
    property : value
}

selector specificity {
    property : value
}

The main selectors when using css are as follows
a. id attribute : identification -> to identify the element to be styled 
b. class attribute : group stylings to be implemented to a group of elements with 
the same class name. 
c. tag selector : when you stipulate the html element to style in CSS , any element without an id or a class attribute will receive the same styling 


### HTML SEMANTICS 
HTML Semantics clearly describe the meaning and role to both 
browsers and developers 
 #### Why ? 
 - Improves SEO  (search engine optimization)
 - Code Readablity 

 <div> place html </div> 


 Tag	     Purpose
<header>	Represents the page header or section header
<nav>	    Contains navigation links
<main>	    Main content of the page (only one per page)
<section>	A section of content (with a heading)
<article>	An independent piece of content (e.g., blog post)
<aside>	    Side content, like ads or a sidebar
<footer>	Bottom part of the page, often for copyright & links
<figure> & <figcaption>	Groups an image with a caption
<mark>	    Highlights text for importance
<time>	    Represents a date or time


### CSS POSITIONING VALUES 
1. static (default) :: the default position of elements. They follow the normal document flow 
2. relative :: moves an element relative to its normal position 
3. absolute :: the element is removed from the normal document flow and positioned relatively to the nearest element/ ancestor 
4. fixed :: the element stays in position even on scrolling 
5. sticky :: the element acts like its in a relative position until scrolled past then it sticks.

- Margin : creates margins between elements
- Padding:  space inside the element between its content and border 

### CSS GRID SYSTEM 
### KEY CONCEPTS IN THE GRID SYSTEM 
1. grid-container : the parent element where the grid is defined : display : grid;
2. grid-items : the child inside the grid container / partions of my page 
3. grid areas : a group of grid items that define the partions 
5. grid-template-columns : define column sizes 
6. grid-template-rows : define row sizes 
7. grid-template-areas : define named regions in the grid 


                           navbar
menu A                     menu B                       menu C 
                           form 
        video 1                                       video2
                           footer


### FUNDAMENTALS OF PROGRAMMING 
Programming is a process of writing instructions for a computer to execute 
These instructions are written via programming languages like JS, Python, Java , C++ 

#### Key Concepts 
1. Algorithms and Logic writing 
2. Variables and Data Types 
3. Control Structures (Flow of Execution)
    a/ conditional statements 
    b/ loops
4. Functions 
5. OOP (Object Oriented Programming) / DOM 
6. Error handling and Debugging 


### JAVASCRIPT 
1. Dynamic : no need to specify the data type 
2. Interpreted : runs directly in browsers without compilation 
3. Event-Driven : responds to user actions 
4. Versatile : Works on both front end and backend(nodeJS)

function nameoffunction(){
    <!-- logic function -->
}


### VARIABLES 
variables store data (what is the data types?)

- Declaring variables 
  a. var (old way , function-scoped)
  b. let (modern, block-scoped) : mutable : allowing change 
  c. const (constant , variable cannot be reassigned)

- Scope refers to the accessibility of the variable 


### JAVASCRIPT SCOPE : understanding a variable visibility and lifetime 
 scopes determine the visibility of your variables / functions / objects in different parts of 
 your code 

#### 4 types of scope 
1. Global scope 
2. Local/Function scope 
3. Block Scope 
4. Lexical (closure scope)

#### Conditional statements 
conditional statements allow us to control the flow of programs based of conditions 

1. if statement (else if and else )


### Functions 
- reusable blocks of code , that can take input , process it and return a desired output. 

1. Function declarations : when you need that can be hoisted 
what is hoisting ? a function is accessible before its declaration in code 
2. Function expressions : variable values are actual functions 
When we need a function that should not be hoisted 
3. Arrow functions 

### DATA STRUCTURES 
DS, is a way of organizing , storing and managing data.

1. Primitive data structures : data types resulting to single values 
let name = "Joseph"
name.toUpperCase()
let x = 80 
let y = true
let z; 
let a = null
Non-primitives 
2. Linear data structures :: collection of items :: ordered collection of items 
store elements sequentially 
- Arrays : collections of elements stored in an indexed order 
when we need fast access to the elements in the collection via the index 
- Linked Lists 
- Stacks 
- Queues 
3. Non-Linear data structures :: storage of data is complex, 
- Trees : DOM in webpages 
- Graphs : 
- Hash Tables 

## Objects 
Objects is a collection of key and pair values normally referencing a single entity. 


#### DOM : Document Object Model 
This is a programming interface for web documents 
Represents the structure of our HTML as a tree of objects 
Any element within a html docs is called a node 
       html

head        body 
        header  main footer 
                article

DOM allows JS to manipulate(create elements) , modify and update the content , structure and styling of a webpage 
<div>
<p>This is a paragraph</p>
</div>


### KEY CONCEPTS IN DOM 
1. Understand the DOM tree Structure 
- Document Node : !Doctype - represents the whole tree as a HTML document 
- Element Nodes : HTML elements 
- Text Nodes : actual text inside an element /content 
- Attribute Nodes : represents attributes used in the elements id, class , src, alt 
- comment nodes : comments 
2. Accessing Elements in DOM Javascript 
- document.getElementById("id of the element")
- document.getElementsByClassName("class name of the element") # selects all elements with the classname 
- document.getElementsbyTagName("p") # selects all the tags that match/ that do not have a class or id 
- document.querySelector("class name of the element/ tag name") # select the first element in the collection
- document.querySelectorAll("class name / tag name") # selects all elements matching the query.
3. Creating and Removing Elements :: create/ remove HTML elements dynamically 
4. Modifying Elements :: change text, attributes , styles dynamically 
5. Event handling :: respond to users events i.e. click , submit , mouseover , hover , scroll , page load 

### DEPLOYING TO GH PAGES 
1. push work to repository 
2. Have an idea of the working branch 
3. go to repo on github 
4. go to settings 
5. Go to the menu section code and automation and select pages.
6. give active branch and save to deploy

### Structuring of the readme 

### Author Name 
Joseph Mbugua 

### Running Instructions 
1. https://josephbill.github.io/blogsample/
2. npm install 
/// instructions to run the project 

### Concepts 
1. HtmL 
2. Css 
3. Bootstrap 
4. Javascript 

### AOB 
kfldfldklfdlfkldfkldkfdlkf 
- media query : responsiveness set at width 780px;


### BREAK OUT ROOM SESSION QUESTION 
write a function called FizzBuzz that prints the numbers 1 to 10 based off the following conditions 

1. If a number is divisible 3 , print 'Fizz' instead of the number 
2. If a number is divisible by 5 , print 'buzz' instead of the number 
3. If a number is divisible by both 3 and 5 , print "Fizzbuzz' instead of the number 
4. Otherwise print the number itself 

1
2
Fizz 
4
Buzz
6 ... 10 

### COMMUNICATING WITH THE SERVER 
frontend(client, HTML , CSS , JS DOM, ReactJS)  => middlewares(a function or a set of functions that sits btw the client REQUEST and the servers response) => backend(server end (databases, server scripts(python, nodejs + express ))) 

### APIS (APPLICATION PROGRAMMING INTERFACE)
Is a set of rules that allows different software apps to communicate with each other

### Think of an API as a waiter in a restaurant
1. You(Frontend/client) make an order(request)
2. The waiter(API) takes the request to the kitchen(server/backend)
3. The kitchen(server) prepares the food(process the request)
4. The waiter(API) brings back the meal(response) to you

### TYPES OF APIS
1. REST API => Uses HTTP methods ::
  - GET :: use this to request data from servers (default)
  - POST :: use this to save or send data to servers
  - PUT :: use this to update on data on servers
  - PATCH :: use this to update only a section of your data
  - DELETE :: use this to remove data from your servers
2. GraphQL API => Allows clients/frontend to access data only when needed
3. SOAP API => Uses XML methods / older (secure)
4. WebSocket API => Enable real time data transfer (chat applications)

### JSON(JAVASCRIPT OBJECT NOTATION)
- lightweight data format used for exchanging and storing records. 
- It is human readable 
- .json file / json-server 

### JSON syntax 
Json is written as key-value pairs 
  = keys are always strings 
  = values can be of any other data type 

example 
JSON object 
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "skills": ["JavaScript", "Python", "React"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}
JSON Array 
[
   {},
   {},
]