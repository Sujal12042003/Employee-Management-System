# Employee Management System (EMS)

## Default Users (Local Storage)

### Admins
- **Email:** sujal.patel@example.com  
  **Password:** 123

### Employees
- **Email:** john.doe@example.com  
  **Password:** 123
- **Email:** jane.smith@example.com  
  **Password:** 123
- **Email:** alice.jones@example.com  
  **Password:** 123
- **Email:** bob.brown@example.com  
  **Password:** 123
- **Email:** carol.white@example.com  
  **Password:** 123

---

A modern Employee Management System built with React and Vite. This project provides a simple and efficient way to manage employee and admin tasks, featuring:

- **Role-based dashboards** for Admin and Employee
- **Secure login authentication**
- **Task management** with status tracking
- **Responsive and clean UI** using Tailwind CSS
- **Fast build and development** powered by Vite

## Features
- Login page for both Admin and Employee
- Admin dashboard for managing tasks and employees
- Employee dashboard for viewing and updating assigned tasks
- Persistent authentication using local storage
- Modern React best practices and context API for state management

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Open the app:**
   - For development: Visit the local server URL shown in your terminal.
   - For production: Open `index.html` in your browser (see below).

## Static Build Usage
- After building, open `index.html` in the EMS root folder. All assets are loaded from the `dist` directory.

## Project Structure
- `src/components/` — React components for authentication, dashboards, and tasks
- `src/context/` — Context API for authentication state
- `src/utils/` — Utility functions
- `dist/` — Production build output

## Technologies Used
- React
- Vite
- Tailwind CSS
- React Context API

## Credits
- Developed by Sujal Patel
- Special thanks to all open-source libraries and the React community.

## License
This project is for educational purposes only. Not for commercial use.
