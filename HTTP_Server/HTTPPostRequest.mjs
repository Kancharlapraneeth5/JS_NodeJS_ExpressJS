// In the below code we used https.request ( ) method for the POST request because in nodejs we have only https.get () handy
// method for all the other we have https.request ( ) method (which supports all HTTP methods like GET, POST, PUT, DELETE, etc.)
// The below is one way to write the code for making a POST request in Node.js using the https module.
// The other and actual way is to use the Options object to specify the method and headers.

// What is this options object?????

// Syntax:
// http.request(options[, callback]) [ONE WAY]
// http.request(url, options[, callback]) [ANOTHER WAY]

// 🧱 What can options contain?

// Here are the most common fields you can set:

// Option	        Type	                          Description

// hostname	       string	The server’s hostname (e.g., "example.com")
// port	           number	The port (default is 80 for HTTP, 443 for HTTPS)
// path	           string	The path of the resource (e.g., "/api/user")
// method	       string	HTTP method like "GET", "POST", "PUT", "DELETE"
// headers	       object	Key-value pairs of headers (e.g., Content-Type, Authorization)
// auth	           string	Basic authentication ('username:password')
// timeout	       number	Timeout in milliseconds
// agent	       object	Optional custom agent for connection reuse

// Sample code:

// const options = {
//   hostname: 'example.com',
//   port: 443,
//   path: '/api/data',
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//   },
// };

// const req = https.request(options, (res) => {
//   // handle response
// });

import https from "https";

const req_body = {
  firstname: "Jim",
  lastname: "Brown",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  },
  additionalneeds: "Breakfast",
};

const jsonBody = JSON.stringify(req_body);

const req = https.request(
  "https://restful-booker.herokuapp.com/booking",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(jsonBody),
      Accept: "application/json",
    },
  },
  (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk.toString(); // Convert Buffer to string
    });

    res.on("end", () => {
      console.log("Response received:");
      console.log(data);
    });
  }
);

req.on("error", (err) => {
  console.error("Error making request:", err.message);
});

req.write(jsonBody); // ✅ This actually sends the body
req.end(); // ✅ Ends the request
