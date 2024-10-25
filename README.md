# Product API

A simple API built with Node.js and Express that receives a list of product objects and returns the total value of all products.

## Features

- Accepts a list of products with name, price, and quality.
- Returns the total value of all products.

## Tech Stack

- **Backend**: Node.js, Express

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Setup Instructions

1. **Clone the repository** or create a new sandbox in CodeSandbox.

2. **Install Dependencies**:
   ```bash
   npm install express body-parser cors
3. Run the Server:
   node index.js
4. Test the API:

  You can use tools like Postman or curl to test the endpoint.
  Example request: POST http://localhost:3001/api/products/total-value
   Content-Type: application/json

  {
  "products": [
    { "name": "Product 1", "price": 100, "quality": "high" },
    { "name": "Product 2", "price": 150, "quality": "medium" },
    { "name": "Product 3", "price": 200, "quality": "low" }
  ]
}
Expected response:
json

{
  "totalValue": 450
}   


### Step 5: Testing the API

You can test your API using **Postman** or any other API client:

1. Set the request type to **POST**.
2. Use the endpoint: `http://localhost:3001/api/products/total-value`.
3. In the request body, send a JSON array of products as shown in the README example.

---

### Final Notes

1. **CORS**: If you plan to access this API from a frontend application, ensure CORS is properly configured.
2. **Validation**: The API includes basic validation for product price and checks for the input type.
3. **Deploy**: You can deploy this API using platforms like Heroku, Vercel, or Render for broader access.

This setup provides a complete backend API that meets the specified requirements, and the `README.md` gives clear instructions on how to use the API. Feel free to reach out if you have any questions or need further modifications!

