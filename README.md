# 13820802720


The Number Management Service is an HTTP microservice that retrieves numbers from multiple URLs, removes duplicates, and returns the numbers in ascending order. It exposes a GET REST API "/numbers" to handle the functionality.

## Requirements

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd number-management-service
npm install
node app.js

Example API request:
http://localhost:8008/numbers?url=http://20.244.56.144/numbers/primes&url=http://20.244.56.144/numbers/fibo&&url=http://20.244.56.144/numbers/odd

Example API response:
{
  "numbers": [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
}
