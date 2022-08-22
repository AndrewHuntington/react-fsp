const applications = require("../stubs/applications.js");

module.exports = [
  {
    id: "get-applications", //route id
    url: "/api/applications", // url in express format
    method: "GET", // HTTP methods
    variants: [
      {
        id: "success", // variant id
        response: {
          status: 200,
          body: applications,
        },
      },
      {
        id: "error", // variant id
        response: {
          status: 500,
          body: {
            errorCode: 5001,
            errorMessage: "Something went wrong",
          },
        },
      },
    ],
  },
  {
    id: "get-application",
    url: "/api/applications/:id",
    method: "GET",
    variants: [
      {
        id: "success", // variant id
        response: {
          status: 200,
          body: "hello world from application route",
        },
      },
      {
        id: "error", // variant id
        response: {
          status: 500,
          body: {
            errorCode: 4400,
            errorMessage: "Something went wrong",
          },
        },
      },
    ],
  },
];
