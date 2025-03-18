# NestJS JWT Authentication API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A RESTful API built with NestJS for user authentication using JSON Web Tokens (JWT). This API provides a secure and scalable solution for managing user authentication in your applications.

## Features

-   User login with email and password.
-   JWT-based authentication for protected routes.
-   User profile retrieval with token validation.
-   Secure password hashing using bcrypt.
-   Easy to integrate into your NestJS projects.

## Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/emmaddo/nestjs-jwt-authentication-api.git](https://github.com/emmaddo/nestjs-jwt-authentication-api.git)
    ```

2.  Navigate to the project directory:

    ```bash
    cd nestjs-jwt-authentication-api
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Create a `.env.development` file in the root directory and configure your database and JWT secret:

    ```ini
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_USERNAME=your_db_username
    DB_PASSWORD=your_db_password
    DB_DATABASE=your_db_name
    JWT_SECRET=your_jwt_secret
    NODE_ENV=development
    ```

    * **Note:** Replace `your_db_username`, `your_db_password`, `your_db_name`, and `your_jwt_secret` with your actual values.
    * **Important:** Never commit your `.env` file to a public repository.

5.  Run database migrations or create the `users` table manually.

    * If using typeorm migrations, run `npm run typeorm:run-migrations`
    * If creating manually, the users table should have `id`, `email`, `password`, `username` and `role` columns.

6.  Start the application:

    ```bash
    npm run start:dev
    ```

## API Endpoints

### Login

-   **Endpoint:** `POST /auth/login`
-   **Request Body:**

    ```json
    {
      "email": "[email address removed]",
      "password": "password"
    }
    ```

-   **Response (200 OK):**

    ```json
    {
      "access_token": "your_jwt_token",
      "user": {
        "id": 1,
        "username": "exampleUser",
        "email": "[email address removed]"
      }
    }
    ```

### Profile

-   **Endpoint:** `GET /auth/profile`
-   **Headers:**
    -   `Authorization: Bearer your_jwt_token`
-   **Response (200 OK):**

    ```json
    {
      "id": 1,
      "username": "exampleUser",
      "email": "[email address removed]"
    }
    ```

## Usage

1.  Send a `POST` request to `/auth/login` with your email and password to obtain an `access_token`.
2.  Include the `access_token` in the `Authorization` header of subsequent requests to protected endpoints.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

* Addo - [Your GitHub Profile](https://github.com/emmaddo)

## Support

If you have any questions or issues, please open an issue on GitHub.