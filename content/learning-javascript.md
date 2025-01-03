---
title: Learning Javascript as a C developer
description: Stepping into web development
tags: ['post']
date: 2020-09-29
layout: post.njk
---
# Getting started with Web Development

This present website was completely implemented by me, with self-taught concepts on HTML, CSS and Javascript. And this is how I was told one develops website a few years ago. I actually enrolled on a short, introductory course in HTML and CSS in my first year of university, so I knew where to get started when I continued learning it by myself.

Nowadays there are several frameworks for web development (Angular, React, VueJS are widely known even to non-web developers like me). I've been meaning to develop and deploy a nicer website for a while, so I decided to dig deeper into one of these frameworks and see how it goes.

### Javascript for C/C++ developers

For someone working in the embedded systems sector (or, as I think of it, the other side of the fence from web and app development), I've seen a growing demand for Javascript developers. There is a lot of buzz and hype about many different frameworks (which seem to me to have very similar purposes), but the common factor across all of these is its compatibility or dependency within Javascript. Even the front end design is now mostly Javascript (the popular frameworks seem to have changed traditional web design). So, learning Javascript is fairly essential to unlocking the potential behind web technologies.

#### Dynamically typed language

Javascript is not a compiled language, which is perhaps the biggest (and to me, a bit worrying) difference from C and C++. I will attempt to explain the technical implications of this aspect at some point later on, but for now this is simply a note to self that, Javascript will not detect issues until the very end, but at the same time I am not as worried about variables declarations and garbage collection.

#### Object-oriented but also functional

I've read from authors claiming that Javascript lends itself well for both practices. Even though I am excited to experiment with functional programming, I will be aiming to mostly use Javascript in an "object-oriented" inspired way. If anything, I will be tending to the procedural practices of C more than to functional simply because this is what I am used to.

#### Types of data types/objects

So far, I have mostly seen that Javascript uses "let" as a means to avoid having to define a specific data type. Very broadly, Javascript will categorise the variables declared into: Number, Boolean, String, Arrays or Objects.

When it comes to numbers, Javascript is agnostic to integers, float, double, long double, it's all a "Number". I'm very onboard with this. The numerical operators work in similar ways to C and C++ (or when differently, in simpler ways). The operational precedence follows the actual math rules (multiply and divide before addition and subtraction) and parentheses will be considered before anything. Apart from that, Javascript has dedicated methods for each data type, which are particularly useful for "strings" and "arrays". To identify the data type, the function "typeof()" will provide the answer.

#### Conditionals and loops

With regards to syntax and usage, Javascript employs similar conditionals (if/else, switch/break statements) as well as loops (for, while, do while). It has a few other loops, such as for...in and for...of and the labeled statement. Apart from that, the syntax and behaviours are as one would expect. I suppose the discerning part is the usage they employ but so far so good.

#### Functions

One different thing from C or C++, or less usual, is that there is such a thing as an "anonymous function" that essentially doesn't require a declaraction per se. It won't act as a function unless it is called by something, most likely an event handler or defined as a variable which is later called. I'll add an example here soon.

#### Scope

Functions have their own local scope and whatever is outside a function is in a global scope. Take caution because loops and conditionals are not considered functions and therefore these scoping rules do not apply. Take further caution with functions within functions, these will not have access to the variables of the "parent" function since it is outside scope, in order to bypass this, the "child" function should have that variable passed as an argument.

### Using built-in function handlers

A basic function script example includes function calls such as:

    document.querySelector('html') - To store a reference to html in a constant.
    document.createElement('div') - To create a new element within the DOM and store a reference to it.
    Element.setAttribute() - To set attribute (i.e. class) to a new element.
    Node.appendChild() - To associate the a new element to a parent node.
    Node.textContent() - To fill in the object with some text.
    GlobalEventHandlers.onclick() - To set a function call upon an user action. The onclick property is available to any element on the page. The property is set to a function to specify what code to run when the button (or element) is clicked.
    Node.removeChild() - Same thing as appendChild but to remove it from the page.

#### Calling the function

When calling a function in the javascript file, if it is followed the by the parantheses (e.g. "displayMessage()") it will be called immediately and only once. Even if written after an onclick handler, the function will only run once even if the button is clicked on multiple times. It should be declared without the parentheses so that the function is called only when the button is clicked.

When calling a function with multiple parameters, in order to prevent it from running immediately, we can't call it directly. Instead we should write the function call with the desired parameters under an anonymous function. This way, it will be within that function's scope and won't be called immediately when the file is run.

## Events

First thing to note is that, event calls and event handlers don't work equally across all Javascript usages. In other words, in the web environment, event calls work as it is interpreted by looking at the code but for instance, in Node.js which is based on Javascript, event handlers work in a sligthly different method. Similarly for web extensions, event handlers have to be managed a bit differently. I'm not sure it's very relevent at the moment but it's nice to know.

A few of the more recurrent event handlers are:

    btn.onfocus and btn.onblur
    btn.ondblclick
    window.onkeypress, window.onkeydown, window.onkeyup
    btn.onmouseover, btn.onmouseout

Some are available to any element (e.g. onclick) and some to a specific element (window.onkeypress).

### HTML inline event handlers

Don't use event handlers in an html file. Put all the JS code in one file and that can easily be applied to several elements and to several HTML files. Especially like so: buttons= document.querySelectorAll('button');
And can then be easily used, like so: " buttons.forEach(function(button) "

### DOM 2 Level Events

This is a different way of registering an event that we want to handle and to specify how to do so.

"Inside the addEventListener() function, we specify two parameters — the name of the event we want to register this handler for, and the code that comprises the handler function we want to run in response to it."

The added advantage is that we can clear up the defined event listeners with the antagonistic function call removeEventListener(). This could improve efficiency as we clear memory from previous (maybe unused) event handlers, and also allows for reusing buttons for different actions, we just need to ensure that the associated events registered with them are removed. This method also lets us register multiple handlers to one listener; ie. the same button can lead to two different function calls on being clicked. Whereas with btn.onclick() the last function handlers would override any previous handlers declared.

Whilst this method has more power and options, the downsides are that these can get a bit more complex and less well supported (e.g. not compatible across different browsers) compared to the event handler properties.

### Event objects

Allow us to refer to the object with which the event handler is registered to. For instance, if we want to change the background color of a button when it is clicked we could use "e.target.style.backgroundColor = purple;". Using e.target (or evt/event) is a really useful way to refer to the object listening to the event (in a way, it's a bit like the "self" keyword in C++ for dealing with the class object that we are using).

e.preventDefault() is used as a way to catch an exception

e.stopPropagation() will prevent the event handlers of parent nodes to be activated when an event is registered to a child node (e.g. an event registered with a video inside a div).
Object-oriented Javascript

# Creating objects

The form of an object in Javascript is pretty simple. In essence, the variables associated with the object are referred to as the object's "properties" and the functions associated with the object are referred to as the "methods" of said object. The definition of an object is relatively interchangeable with the definition of a class in C++, except a bit easier in the syntax and code maintainability.

## Constructors

There seems to be a few ways to allocate memory to create an object.

    A constructor that takes parameters: A simple function that will allocate the parameters to the properties/methods of the object.
    The Object() constructor: This is Javascript's built-in method to allocate memory and store it under the name of the variable used by the programmer. Then, the properties and methods given will add the real value to the instance of the object created.
    The create() method: This replicates an existing instance of the object and stores it under the name of the new variable.

## Object prototypes

From Mozilla reference page: "To provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.". In essence, any instance of a user-created object will have access to the methods and properties inhereted from the Object prototype. It is not all of the methods and properties defined within Object that are available, only those defined within the method "prototype". In other words, "prototype" will encapsulate all of the properties or methods that children objects may inherit.

When a method from an instance of an object is called, the browser will check if it is defined within its constructor, if it isn´t, the browser will check if it is available in it, as defined in its constructor. If that's not the case, it will check the object prototype of this object, and if that doesn't have it, then it will look at the object prototype's object prototype, which will have it. In essence, it goes up in this "chain" of object prototypes until it either finds the method, or runs out of properties and quits.

Here we see that, actually the create() method is simply using an object prototype to create a second instance of the object. From Mozilla reference page: "create() creates a new object from a specified prototype object."

"Every constructor function has a prototype property whose value is an object containing a constructor property. This constructor property points to the original constructor function." In other words, every object can create another instance of the same object with the constructor method available to it by the object's prototype.

It is possible to modify the object's prototype by adding methods and properties to it. This can provide some added flexibility, since the object was initially created with less content and can be added more things to it. However, adding properties may not prove very sensible since it giving the same value to all the instances of the object may not be the desired outcome. Equally with methods that use the element "this" outside a function, then it will be referencing the global scope, not a function scope. Calling this property would return undefined. Using "this" worked fine on the when it is defined inside a function scope, which will be transferred successfully to the object instance scope.

As stated in Mozilla's reference page: "a fairly common pattern for more object definitions is to define the properties inside the constructor, and the methods on the prototype. This makes the code easier to read, as the constructor only contains the property definitions, and the methods are split off into separate blocks." Which makes sense to me.

## Object member summary

Depending on the origin, there are four types of properties and methods that an instance of an object may have:

    Those defined inside a constructor function that are given to object instances.
    Those defined directly on the constructor themselves, that are available only on the constructor. These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, not an instance. For example, Object.keys(). These are also known as static properties/methods.
    Those defined in the constructor's prototype, which are available to all instances of the object, and inheriting objects.
    Those defined as part of the instance definition. For example: "let person1 = new Person('Chris');". In this case, Chris was defined just for this instance of the object.

## ECMAScript 2015 Classes

There's an easier way to define objects by way of using a new syntax that borrows from C++ and Java by defining objects as classes. And here was I thinking that Javascript was ahead by keeping things really flexible. I suppose the concept of Class may make some other things easier to implement, for instance for polymorphism and abstraction.

To create inheritance using the Class functionality. We would say: "class Teacher extends Person". And inside the constructor we need to call the super() operator to get a reference to an instance of a person object in memory. This would then allow us to fill this instance with the parameters for teacher.

### Getters and Setters

Javascript has an interesting way to define the helper functions within classes, when comparing it with the C++ syntax and structure. By naming a function after the "get" and "set" keywords to label the functions that "get" or "set" property dynamically. The underlying principle behind these functions is of course the same as in C++'s OOP.

A note from Mozilla's page: "the sharing of functionality between objects is often called delegation. Specialized objects delegate functionality to a generic object type."
Objects practice run

## Asynchronous Javascript

Javascript is single-threaded by nature, so external functionality needs to be used to establish Asynchronous code. There two ways of calling asynchronous code.

### Async callbacks

These are the more outdated method of performoing asynchronous programming in Javascript but can still be found in commonly used but older APIs. It manifests itself, for instance, when callback functions are used as parameters of functions. In these cases, we are only passing a reference to the function, for it to be run later (asynchronously) somewhere in the function's body. Note that, not all callback functions will run asynchronously (e.g. the forEach() function).
Promises

Some types of functions (e.g. fetch()) are asynchronous functions and let you attach a chain of .then() code to it. This will essentially create a block of asynchronous code, that will run depending on the resources available to it (e.g. if making an HTTP request then its completion time may depend on internet bandwith). This block of asynchronous code does not prevent the completion of the remaining synchronous code in the javascript file. For this reason, if we're attempting to reach a file in cloud storage, the asynchronous nature of that request, will still allow for the rest of the page to render while the file is being requested.

# GatsbyJS
The modern way to build a website

I'm still only getting started but I'm getting promising results with Gatsby. It's a very dynamic environment so it's very nice to prototype in. However, it is also a bit tricky to setup because there are several things to join up together and making sure that I understand what each little bit does it's still taking me a while. I'll post more progress here soon.
