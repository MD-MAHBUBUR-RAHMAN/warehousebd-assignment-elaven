import React from "react";

const Blog = () => {
  return (
    <div className="text-center">
      <h3 className="text-xl md:text-3xl text-red-400 font-bold">
        Here are some questions and answers!!!
      </h3>
      <h3 className="my-5 text-xl text-blue-400 font-bold">
        Difference between JavaScript And nodeJs?
      </h3>
      <div className="w-3/4 mx-auto grid grid-cols-2">
        <div className="row">
          <div className="bg-slate-500 text-white text-2xl ">Javascript</div>
          <ul className="list-decimal">
            <li className="ml-5 mb-5">
              JavaScript is a lightweight, cross-platform, interpreted scripting
              programming language that is primarily used for client-side.
            </li>
            <li className="ml-5 mb-5">
              Javascript is capable enough to add HTML and play with the DOM.
            </li>
            <li className="ml-5 mb-5">
              It is basically used on the client-side.
            </li>
            <li className="ml-5 mb-5">
              Javascript can only be run in the browsers.
            </li>
            <li className="ml-5 mb-5">
              Javascript can run in any browser engine as like JS core in safari
              and Spidermonkey in Firefox.
            </li>
            <li className="ml-5 mb-5">
              It is the upgraded version of ECMA script that uses Chrome’s V8
              engine written in C++.
            </li>
            <li className="ml-5 mb-5">
              Some of the javascript frameworks are RamdaJS, TypedJS, etc.
            </li>
            <li className="ml-5 mb-5">
              Javascript is used in frontend development.
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="bg-slate-600 text-white text-2xl">NodeJS</div>
          <ul className="list-decimal">
            <li className="ml-10 mb-5">
              Node. js is a server-side scripting language based on the Google
              Chrome V8 engine.
            </li>
            <li className="ml-10 mb-5">
              Nodejs does not have capability to add HTML tags.
            </li>
            <li className="ml-10 mb-5">
              It is mostly used on the server-side.
            </li>
            <li className="ml-10 mb-5">
              We can run Javascript outside the browser with the help of NodeJS.
            </li>
            <li className="ml-10 mb-5">
              V8 is the Javascript engine inside of node.js that parses and runs
              Javascript.
            </li>
            <li className="ml-10 mb-5">
              Nodejs is written in C, C++ and Javascript.
            </li>
            <li className="ml-10 mb-5">
              Some of the Nodejs modules are Lodash, express etc. These modules
              are to be imported from npm.
            </li>
            <li className="ml-10 mb-5">
              Nodejs is used in server-side development.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 py-10">
        <h3 className="text-lg p-2 md:text-xl text-blue-400 font-bold">
          When should we use nodeJs and when we use mongoDB?
        </h3>
        <div className="w-3/4 mx-auto text-left">
          <h5 className="text-2xl font-semibold text-red-400  underline ">
            Node.js
          </h5>
          <p className="md:text-xl">
            Node.js is an open-source, Javascript runtime environment that lets
            you effortlessly develop scalable web applications.
          </p>
          <p className="text-xl text-red-400  underline">When node.js used :</p>
          <ul className="list-decimal md:text-xl">
            <li>For Developing Data Streaming Applications</li>
            <li>For Developing Effective Microservices</li>
            <li>
              Node.js is the most trusted platform for IoT app development
              because it works effectively with write and readable channels and
              streams.
            </li>
            <li>
              Node.js is used for applications that are expected to experience
              high-peak loads and scalability.
            </li>
            <li>
              To interact with databases or other external services, nearly all
              web applications require a back-end.
            </li>
            <li>
              Node.js is the greatest choice for SPA development because of its
              asynchronous back-end data flow quality.
            </li>
          </ul>
        </div>
        <div className="w-3/4 mx-auto text-left">
          <h5 className="text-2xl font-semibold text-red-400  underline ">
            MongoDB :
          </h5>
          <p className="md:text-xl">
            MongoDB, the most popular NoSQL database, is an open-source
            document-oriented database. The term ‘NoSQL’ means ‘non-relational’.
            It means that MongoDB isn’t based on the table-like relational
            database structure but provides an altogether different mechanism
            for storage and retrieval of data. This format of storage is called
            BSON ( similar to JSON format)
          </p>
          <p className="text-xl text-red-400  underline">When mongoDB used :</p>
          <ul className="list-decimal md:text-xl">
            <li>
              {" "}
              If you have huge amount of data to be stored in tables, think of
              MongoDB before RDBMS databases. MongoDB has built-in solution for
              partitioning and sharding your database.
            </li>
            <li>
              Adding a new column in RDBMS is hard whereas MongoDB is
              schema-less. Adding a new field does not effect old documents and
              will be very easy.
            </li>
            <li>
              Since multiple copies of data are stored across different servers,
              recovery of data is instant and safe even if there is a hardware
              failure.
            </li>
          </ul>
        </div>
      </div>
      <h3 className="my-5 text-lg p-2 md:text-xl text-blue-400 font-bold">
        Difference between SQL and noSQL?
      </h3>
      <div className="w-3/4 mx-auto text-left mb-10">
        <p className="md:text-xl">
          There are some difference between SQl and NoSQL database systrm.{" "}
          <span className="text-bold text-red-400  underline">
            Following difference are exist SQL and NoSQL database we found:
          </span>{" "}
        </p>
        <ul className="md:text-xl list-decimal">
          <li>
            SQL is a Relational Databse Management System where NoSQl is
            Non-relational or distrobuted Database system.
          </li>
          <li>
            SQL database have fixed or pridefined schema on the otherhand NoSQl
            have dynamic schema
          </li>
          <li>
            SQL databases are best suited for complex queries, however NoSQL
            databases are not so good for complex queries
          </li>
          <li>
            SQL databases are not suited for hierarchical data storage, in
            contrast NoSQl databases are best suited for hierarchical data
            storage.
          </li>
          <li>
            SQL Vertically Scalable,on the contrary NoSQL Horizontally scalable
          </li>
          <li>
            SQL Follows ACID(Atomicity, Consistency, Isolation, and Durability)
            property,rather NoSQL Follows CAP(consistency, availability,
            partition tolerance)
          </li>
        </ul>
      </div>
      <div className="bg-gray-100 py-10 text-left">
        <h3 className="text-lg p-2 md:text-xl text-blue-400 font-bold text-center">
          What is purpose of JWT and how does it work?
        </h3>
        <div className="w-3/4 mx-auto">
          <h3 className="text-xl text-red-400  underline"> Purpose of JWT</h3>
          <p className="md:text-xl mb-4">
            JSON Web Tokens (JWT) is a JSON-encoded representation of a claim or
            claims that can be transferred between two parties.
          </p>
          <p className="md:text-xl mb-4">
            A JWT is a mechanism to verify the owner of some JSON data. It's an
            encoded, URL-safe string that can contain an unlimited amount of
            data and is cryptographically signed. When a server receives a JWT,
            it can guarantee the data it contains can be trusted because it's
            signed by the source.JWT is a particularly useful technology for API
            authentication and server-to-server authorization.
          </p>
          <h3 className="text-xl text-red-400  underline mb-4">
            Hoe does JWT work?
          </h3>
          <p className="md:text-xl mb-4">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. A JSON Web Token
            consists of 3 parts separated by a period, header.payload.signature
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
