# React Team Directory

A responsive team directory built with **React 19, Vite, and Tailwind CSS**. This project demonstrates reusable React components, props, destructuring, array methods, and component composition.

## Project Overview

The Team Directory displays four team members with their names, professional roles, locations, skills, and availability status.

Users can click the View button on each member card to log the selected team member's name in the browser console.

## Features

- Displays four team members.
- Shows each member's name, role, city, and skills.
- Displays Available or Busy status badges.
- Responsive two-column member grid on medium and larger screens.
- View buttons for selecting team members.
- Displays the total number of members and available members.
- Shows an empty-state message when there are no team members.

## Technologies Used

- React 19
- Vite
- JavaScript (JSX)
- Tailwind CSS
- HTML5

## Project Structure

```text
team-directory/
├── public/
├── src/
│   ├── components/
│   │   ├── MemberCard.jsx
│   │   ├── MemberGrid.jsx
│   │   ├── Panel.jsx
│   │   └── StatusBadge.jsx
│   ├── data/
│   │   └── team.js
│   ├── pages/
│   │   └── TeamDirectory.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd team-directory
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## React Concepts Practiced

- **Components:** Building reusable UI components.
- **Props:** Passing data between parent and child components.
- **Destructuring:** Extracting values from objects and props.
- **Array map():** Rendering team member cards dynamically.
- **Array filter():** Counting available team members.
- **Conditional rendering:** Displaying availability badges and empty states.
- **Event handling:** Handling clicks with callback functions.
- **Keys:** Using unique member IDs when rendering lists.

## Team Members

| Name | Role | Location | Availability |
|---|---|---|---|
| Aline Uwase | Frontend Developer | Kigali | Available |
| Eric Mugabo | Backend Developer | Huye | Busy |
| Grace Umutoni | UI Designer | Kigali | Available |
| Kevin Ndayisaba | QA Engineer | Musanze | Available |

## Note

This project does not use React state. It focuses on reusable components, props, data flow, and event handling.

---

**Project:** React Team Directory  
**Status:** Completed