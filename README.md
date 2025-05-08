
# V-Notes Application

**V-Notes** is a secure, full-stack note management application built using **Spring Boot (Spring Security 6)** and **ReactJS**. This project focuses on high-level security features including **OAuth2.0 login**, **multi-factor authentication (MFA)**, and robust **role-based access control**, tailored for both end users and administrators.

## 🚀 Live Frontend Deployment
[https://v-notes-iota.vercel.app/](https://v-notes-iota.vercel.app/)

## 🐳 Backend Docker Image
```
docker pull vaibhav990/v-notes
```
![image](https://github.com/user-attachments/assets/596e39ff-290b-402b-bc97-4d4fe9d37383)


---

## 🔐 Key Features

### 1. **User Authentication**
- Traditional login/signup with secure password hashing.
- OAuth2.0 based login with **Google** and **GitHub** accounts.
- MFA support using an **Authenticator App** via the following dependency:

```xml
<dependency>
    <groupId>com.warrenstrange</groupId>
    <artifactId>googleauth</artifactId>
    <version>1.4.0</version>
</dependency>
```

### 2. **Secure Note Management**
- Users can **create**, **read**, **update**, and **delete** personal notes.
- Notes are securely tied to the authenticated user's account.

### 3. **Password Reset Functionality**
- Supports secure password recovery.
- Sends reset link via email with a secure token.

### 4. **Multi-Factor Authentication (MFA)**
- Optional MFA using Google Authenticator.
- Configurable from the user dashboard.

### 5. **Role-Based Access Control**
- Roles: **Admin**, **User**.
- Admins can manage users and audit logs.

### 6. **Admin Panel**
- View and manage users.
- Access audit logs for user actions.

### 7. **JWT-Based Authentication**
- Stateless authentication via JWTs.
- Secure API access for frontend and backend communication.

### 8. **CSRF and CORS Protection**
- CSRF protection implemented with Spring Security.
- CORS setup allows secure frontend-backend communication.

---

## 📦 Backend – Spring Boot (Spring Security 6)
- Spring Security for OAuth2.0, JWT, CSRF.
- REST API design using controllers and services.
- MySQL database with Spring Data JPA.

### 🔁 API Endpoints

#### Notes API
- `GET /api/notes` - Fetch all notes
- `POST /api/notes` - Create note
- `PUT /api/notes/{noteId}` - Update note
- `DELETE /api/notes/{noteId}` - Delete note

#### Authentication API
- `POST /api/auth/public/signup` - Register
- `POST /api/auth/public/signin` - Login
- `POST /api/auth/public/forgot-password` - Request reset
- `POST /api/auth/public/reset-password` - Reset password
- `POST /api/auth/verify-2fa` - Verify MFA
- `POST /api/auth/public/verify-2fa-login` - MFA login
- `POST /api/auth/enable-2fa` - Enable MFA
- `POST /api/auth/disable-2fa` - Disable MFA
- `GET /api/auth/user` - Get user info

#### Admin API
- `GET /api/admin/getusers` - List all users
- `PUT /api/admin/update-role` - Change user roles
- `PUT /api/admin/update-lock-status` - Lock account
- `GET /api/admin/user/{id}` - Get user by ID
- `GET /api/admin/roles` - Get all roles

#### Audit Logs API
- `GET /api/audit` - View logs
- `GET /api/audit/note/{id}` - View logs per note

---

## 🌐 Frontend – ReactJS
- Built using **ReactJS**, styled with modern libraries.
- Secure JWT-based authentication flow.
- Pages include:
  - Sign up / Login with 2FA
  - Note Dashboard (CRUD)
  - Admin Console (for admins)
- State management using local storage/context.
- API requests made using Axios.

---

## 📁 Schemas (DTOs/Entities)
- `User`, `UserDTO`
- `Note`
- `Role`
- `AuditLog`
- `SignupRequest`, `LoginRequest`, `CsrfToken`

---

## 🛡️ Security
- Built with **Spring Security 6**
- CSRF tokens and CORS setup
- OAuth2.0 integration
- MFA with TOTP via Authenticator apps
- JWT for stateless sessions

---

## 📦 Tech Stack

### 🧩 Backend
- Java 17
- Spring Boot 3
- Spring Security + JWT + OAuth2.0
- PostgreSQL (or any preferred DB)
- Dockerized deployment

### 💻 Frontend
- React.js (Vite)
- Tailwind CSS for styling
- Axios for API integration

### 🔐 Security
- JWT Authentication
- OAuth2.0 (Google, GitHub)
- Multi-Factor Authentication (MFA)
- CSRF protection

---

## 👨‍💻 Developed By

**Vaibhav Sharma**  
🔗 [GitHub](https://github.com/Vaibhav4228) | [LeetCode](https://leetcode.com/u/vaibhav990/) | [Instagram](https://www.instagram.com/vaibhav_sharmatic9?igsh=dXA4aGNvcmJyMW56)

---


## 📄 License
MIT License - Feel free to use this as a template for secure note apps.
