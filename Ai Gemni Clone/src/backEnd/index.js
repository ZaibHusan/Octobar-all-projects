const data = [
  { question: "What is your name?", answer: "I am MiniAI, your simple assistant." },
  { question: "How are you?", answer: "I am doing well! How can I help you?" },
  { question: "What is AI?", answer: "AI stands for Artificial Intelligence." },
  { question: "What is Node.js?", answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine." },
  { question: "What is JavaScript?", answer: "JavaScript is a programming language used for web development." },
  { question: "What is HTML?", answer: "HTML is the standard markup language for creating web pages." },
  { question: "What is CSS?", answer: "CSS is used to style HTML elements on a web page." },
  { question: "Who created JavaScript?", answer: "JavaScript was created by Brendan Eich in 1995." },
  { question: "What is a function?", answer: "A function is a block of code designed to perform a task." },
  { question: "What is a variable?", answer: "A variable stores data values in programming." },
  { question: "What is a string?", answer: "A string is a sequence of characters." },
  { question: "What is a number?", answer: "A number is a data type representing numeric values." },
  { question: "What is an array?", answer: "An array is a collection of items stored in a single variable." },
  { question: "What is an object?", answer: "An object is a collection of key-value pairs." },
  { question: "What is a loop?", answer: "A loop repeats a block of code multiple times." },
  { question: "What is a condition?", answer: "A condition checks if something is true or false." },
  { question: "What is a boolean?", answer: "A boolean is a data type that can be true or false." },
  { question: "What is JSON?", answer: "JSON is a format for storing and exchanging data." },
  { question: "What is an API?", answer: "An API allows software to communicate with other software." },
  { question: "What is a server?", answer: "A server provides data or services to clients over a network." },
  { question: "What is a client?", answer: "A client requests data or services from a server." },
  { question: "What is Git?", answer: "Git is a version control system for tracking code changes." },
  { question: "What is GitHub?", answer: "GitHub is a platform for hosting and collaborating on Git repositories." },
  { question: "What is a database?", answer: "A database stores structured data for easy access." },
  { question: "What is SQL?", answer: "SQL is a language used to manage and query databases." },
  { question: "What is NoSQL?", answer: "NoSQL databases store data in non-tabular formats." },
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "What is a component?", answer: "A component is a reusable piece of UI in frameworks like React." },
  { question: "What is state?", answer: "State is data that determines how a component renders." },
  { question: "What is a prop?", answer: "Props are inputs passed to components in React." },
  { question: "What is a class?", answer: "A class is a blueprint for creating objects." },
  { question: "What is inheritance?", answer: "Inheritance allows a class to use properties and methods of another class." },
  { question: "What is encapsulation?", answer: "Encapsulation restricts access to some components of an object." },
  { question: "What is polymorphism?", answer: "Polymorphism allows objects to take many forms." },
  { question: "What is abstraction?", answer: "Abstraction hides complex details while exposing essential features." },
  { question: "What is a module?", answer: "A module is a file containing code that can be reused in other files." },
  { question: "What is debugging?", answer: "Debugging is finding and fixing errors in code." },
  { question: "What is a loop in programming?", answer: "A loop executes a block of code repeatedly." },
  { question: "What is an IDE?", answer: "An IDE is an Integrated Development Environment for coding." },
  { question: "What is a compiler?", answer: "A compiler converts code from one language to another, typically to machine code." },
  { question: "What is an interpreter?", answer: "An interpreter executes code line by line." },
  { question: "What is a framework?", answer: "A framework provides pre-written code and tools for building applications." },
  { question: "What is a library?", answer: "A library is a collection of reusable functions or modules." },
  { question: "What is debugging?", answer: "Debugging is the process of finding and fixing errors in code." },
  { question: "What is an event?", answer: "An event is an action or occurrence detected by a program." },
  { question: "What is a callback?", answer: "A callback is a function passed into another function to be executed later." },
  { question: "What is asynchronous programming?", answer: "It allows code to run without waiting for other operations to complete." },
  { question: "What is synchronous programming?", answer: "It executes code in sequence, one operation at a time." },
  { question: "What is a promise?", answer: "A promise represents a value that may be available in the future." },
  { question: "What is REST?", answer: "REST is an architectural style for designing networked applications." },
  { question: "What is HTTP?", answer: "HTTP is a protocol for transferring data over the web." },
  { question: "What is HTTPS?", answer: "HTTPS is a secure version of HTTP using encryption." }
];



let Reply = (input) => {
  for (let a = 0; a < data.length; a++) {
    let object = data[a];
    let inputM = input.toLowerCase().trim();
    if (inputM === object["question"].toLowerCase().trim()) {
      return object.answer
    }
 }
 return "DATA NOT FOUND"

}

export default Reply;
