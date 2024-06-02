# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  # Task Board Application

This is a Task Board application built with React. It allows users to manage tasks across different categories such as "Backlog Tasks", "To Do", "In Process", and "Done". Users can add new tasks, delete tasks (except in the "Done" category), and filter tasks using a search bar.

## Features

- Add new tasks with a title and description.
- Delete tasks (except in the "Done" category).
- Search and filter tasks by title or description.
- Responsive design for different screen sizes.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn (version 1 or higher)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jyotimishra05/Task-Board-application.git
cd task-board
```

2. Install the dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### Running the Application

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173/`.

### Folder Structure

```
task-board/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Board.js
│   │   └── ...
│   ├── pages/
│   │   ├── BoardPage.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

### Components

- **Board.js**: The main component that manages task categories and tasks.
- **BoardPage.js**: The page component that includes the search bar and renders the Board component.

### Customizing

You can customize the initial task categories and tasks in the `Board.js` component. Adjust the `initialTaskCategories` array to fit your needs.

### Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)




