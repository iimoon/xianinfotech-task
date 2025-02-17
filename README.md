# User Registration and Admin Dashboard
This project consists of a **User Registration page** with form validation and a **User List page** for admins to view registered users. The application is built using **Node.js** for the backend and **React** for the frontend. The frontend UI has been designed to be pixel-perfect, following the Figma design specifications.

<img src="./client/src/assets/images/readme/register.png">
<img src="./client/src/assets/images/readme/panel.png">


## Features

### 1. **Registration Page**
- Allows new users to register with necessary details.
- Includes form validation checks to ensure that all fields are filled correctly.
- All input data is sent to the backend and stored in the connected **MongoDB database**.
- Validates fields such as:
  - First name
  - Last name
  - Contact number
  - WhatsApp number
  - Email
  - State
  - Referral code
  - Password
  - Status (active/inactive with default value `active`)

### 2. **Admin User List Page**
- Allows admins to view all registered users.
- Displays user details such as name, email, phone, and status.
- Provides a search bar to filter users by name, email, or phone.
- Admins can see a list of users in a table format with a **View** button for additional details.
- Built with pixel-perfect UI matching the Figma design.

### 3. **Backend**
- The backend is built using **Node.js** with **Express** to handle API requests.
- **MongoDB** is used for storing user data.
- The backend is connected to the database, and it provides endpoints for user registration and fetching users.
- Implements error handling, response formatting, and validation for input fields.

## Front-End Routes
- Register Page : http://localhost:5173/
- User List (admin page) : http://localhost:5173/admin/user-list

## API Routes
- Post Users : localhost:8080/users/saveUsers
- Get Users : localhost:8080/users/getUsers