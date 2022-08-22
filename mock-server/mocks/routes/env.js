module.exports = [
  {
    id: "get-env",
    url: "/app/env",
    method: "GET",
    variants: [
      {
        id: "success",
        response: {
          status: 200,
          body: {
            env: "local",
            version: "0.0.0-devlocal",
          },
        },
      },
      {
        id: "error",
        response: {
          status: 500,
          body: {
            errorMessage: "Something went wrong",
          },
        },
      },
    ],
  },
];
