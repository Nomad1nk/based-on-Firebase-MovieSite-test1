# FireMovie

FireMovie is a React-based web application that leverages Firebase for authentication and storage. It allows users to register, login, and view movies stored in Firebase Storage.

## Features

- **User Authentication**: Secure registration and login using Firebase Auth.
- **Movie Streaming**: Stream movies directly from Firebase Storage.
- **Protected Routes**: Secure navigation ensuring only authenticated users can access movie content.
- **Responsive Design**: Built with React for a dynamic user interface.

## Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/) (v19)
  - [React Router](https://reactrouter.com/) (v7)
  - [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)
- **Backend / Services**:
  - [Firebase Authentication](https://firebase.google.com/docs/auth)
  - [Firebase Firestore](https://firebase.google.com/docs/firestore)
  - [Firebase Storage](https://firebase.google.com/docs/storage)
- **Tools**:
  - [Create React App](https://create-react-app.dev/)
  - [npm](https://www.npmjs.com/)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **npm**: Usually comes with Node.js.

## Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Nomad1nk/based-on-Firebase-MovieSite-test1.git
    cd firemovie
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Configuration**:
    Create a `.env` file in the root directory and add your Firebase configuration keys:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

## Usage

To run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## License

This project is open source and available under the [MIT License](LICENSE).
