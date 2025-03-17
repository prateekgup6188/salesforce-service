# **Backend Application with PostgreSQL and Render**

This is a backend application built with **Node.js**, **Express.js**, and **PostgreSQL**. It includes user authentication (JWT), Salesforce integration, and is designed to be deployed on **Render**.

---

## **Table of Contents**
1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Setup](#setup)
4. [Deployment](#deployment)

---

## **Features**
- User authentication (JWT).
- Secure storage of user credentials.
- Integration with Salesforce using OAuth 2.0.
- Fetch and display Salesforce account details.
- Deployed on Render with PostgreSQL.

---

## **Prerequisites**
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v14 or higher)
- Git
- A [Render](https://render.com/) account
- A [Salesforce](https://www.salesforce.com/) account (for integration)

---

## **Setup**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/prateekgup6188/salesforce-service.git
2. RUN `npm install`
3. Set up the environment variables

---

## **Deployment**
Deploy to Render

Create a PostgreSQL Database on Render:
Go to the Render dashboard and create a new PostgreSQL database.
Copy the Internal Database URL.
Create a Web Service:
Connect your GitHub repository to Render.
Set the appropriate environment variables in the Render dashboard

Deploy:

Render will automatically deploy your application.
Access Your Application:
Once deployed, Render will provide a URL for your backend.

Live Backend URL - `https://salesforce-service.onrender.com/`
