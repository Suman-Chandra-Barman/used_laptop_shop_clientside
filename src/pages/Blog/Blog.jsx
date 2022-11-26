import React from "react";

const Blog = () => {
  return (
    <div className="my-20">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          1.What are the different ways to manage a state in a React
          application?
        </div>
        <div className="collapse-content">
          <h3>The Four Kinds of React State to Manage</h3>
          <ul className="list-decimal px-8">
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ul>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          2.How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          3. What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            A unit test is a way of testing a unit - the smallest piece of code
            that can be logically isolated in a system. In most programming
            languages, that is a function, a subroutine, a method or property.
            The isolated part of the definition is important.
          </p>
          <p className="mt-5">
            They enable you to catch bugs early in the development process.
            Automated unit tests help a great deal with regression testing. They
            detect code smells in your codebase. For example, if you're having a
            hard time writing unit tests for a piece of code, it might be a sign
            that your function is too complex
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          4.React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <h5 className="text-xl">React</h5>
          <p>
            Facebook released React.js in March 2013 as a JavaScript library.
            Because React just provides one view, it is not appropriate for
            building an MVC architecture: you must solve the model and
            controller yourself. Besides this, there are only advantages and
            lots of advantages. One of the biggest of them is that React.js uses
            a virtual DOM that only compares the previous HTML code differences
            and only loads the different parts. This significantly impacts the
            loading times. In a positive way, of course. With React.js, you
            handle the markup and the logic in the same file, which means you
            can output variables in a view component (JSX). React offers a type
            of mobile solutions for applications called React-Native.
          </p>
          <h3 className="text-xl mt-5">Vue</h3>

          <p>
            Vue.js is a JavaScript-based progressive framework for creating
            single-page applications. It was created with scalability and
            incrementality in mind, as well as ease of integration with other
            view layer frameworks. Vue is built from the bottom up to be
            progressively adaptable, unlike other monolithic frameworks. The
            core library focuses solely on the view layer, and it’s simple to
            use and connect with other libraries or applications. This
            framework’s fast learning angle is almost a trademark. It’s a
            flexible framework that may be used as a library or a full-fledged
            framework for developing large web applications. Vue.js combines the
            useful principles of the Angular and React frameworks and presents
            them in a minimalistic modern style. Web developers use Vue.js to
            create frontend user interfaces for web-based and hybrid mobile
            applications.
          </p>

          <h3 className="text-xl mt-5">Angular</h3>
          <p>
            AngularJS was developed in 2009 by Google. The first version was
            Angular.JS. Angular is currently known as a JavaScript framework.
            Obviously, all significant Google projects have been developed with
            Angular. Angular.js is an MVC framework. A major disadvantage of
            Angular is that it uses a regular DOM, and thus, the entire tree
            structure of the HTML tags is updated, which massively impacts the
            loading time. Angular.js has its Ionic framework for mobile
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
