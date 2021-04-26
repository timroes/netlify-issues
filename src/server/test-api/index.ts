import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  console.log('foo');
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
