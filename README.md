# Habbit Hole UI

The frontend of the **Habbit Hole** habit tracker application, built with **React** and **TypeScript**.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Demo

 To do Add a link to your deployed frontend if available.

---

## Features

- User authentication (login/register) with JWT
- Track habits daily, weekly, monthly, yearly
- Habit completion with streak tracking
- Responsive and clean UI

---

## Technologies

- **React 18**
- **TypeScript**
- **React Router**
- **Fetch API** for interacting with the backend
- **JWT authentication**

---

## Setup

1. Clone the repository:

```bash
git clone https://github.com/irizaika/habbit-hole-ui.git
cd habbit-hole-ui
```

2. Install dependencies:
```
npm install
```
3. Create .env file in the root and set your API URL:
```
REACT_APP_API_URL=https://localhost:7057
```
4. Start the development server:
```
npm start
```

5. Open http://localhost:3000 to view the app in your browser.

### Available Scripts

In the project directory, you can run:
- npm start — Runs the app in development mode.
- npm run build — Builds the app for production.
- npm test — Runs the test suite (if any).
- npm run lint — Lints the project files.

## Folder Structure

habbit-hole-ui/
├── public/             # Static assets
├── src/                # Source code
│   ├── components/     # Reusable components,  CSS files (todo, move styles )
│   ├── hooks/          # Custom React hooks
│   ├── services/       # Services
│   ├── App.tsx         # Main app component
│   └── index.tsx       # Entry point
├── apiClient.ts        # Generated API client
├── package.json
├── tsconfig.json
└── README.md

## License

This project is licensed under the MIT License.