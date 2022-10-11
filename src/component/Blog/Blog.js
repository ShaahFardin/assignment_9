import React from "react";

const Blog = () => {
  return (
    <div className="">
      <h1 className="text-5xl my-10 text-slate-500">Blog </h1>
      <div className="text-start container mx-auto mt-10">
        <div className="border rounded-xl my-10 shadow-lg p-5">
          <h1 className="text-2xl font-medium py-2">
            What is the purpose of react router?
          </h1>
          <p className="text-slate-500 p-3">
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.
          </p>
        </div>
        <div className="border rounded-xl my-10 shadow-xl p-5">
          <h1 className="text-2xl font-medium py-2">
            How does context api works?
          </h1>
          <p className="text-slate-500 p-3">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
        </div>
        <div className="border rounded-xl my-10 shadow-xl p-5">
          <h1 className="text-2xl font-medium py-2">Describe useRef hook</h1>
          <p className="text-slate-500 p-3">
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
