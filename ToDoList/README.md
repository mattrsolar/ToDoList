# ToDoList

A simple ToDo List application developed with modern technologies to demonstrate good frontend development practices.

## Technology Stack

- **React 19**: Main library for building the user interface, using functional components and hooks.
- **TypeScript**: Programming language that adds static typing to JavaScript, improving code robustness and maintainability.
- **Vite**: Fast and modern build tool for frontend development.
- **Tailwind CSS**: Utility-first CSS framework for rapid and consistent styling.
- **React Router**: Library for routing management in the application.
- **use-local-storage-state**: Custom hook for data persistence in the browser's localStorage.

## Frameworks and Libraries Used

- **React**: For creating reusable components and state management.
- **Vite**: For development, build, and preview of the application.
- **Tailwind CSS**: For styling with utility classes.
- **React Router**: For navigation between pages.
- **TypeScript**: For typing and better DX (developer experience).

## How to Run the Project

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ToDoList
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running in Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite's default port).


### Preview the Build

To view the production build locally:
```bash
npm run preview
```

## Practices Used

### 1. **Custom Hooks Usage**
   - **`useTasks`**: Hook to manage tasks state, including localStorage reading, total count, and completed tasks count.
   - **`useTask`**: Hook for new task creation operations, using temporary states (CREATING) for better UX.

### 2. **Separation of Concerns**
   - **Models**: TypeScript interfaces and enums definitions (e.g., `Task`, `TaskState`) for consistent typing.
   - **Hooks**: Business logic isolated in reusable hooks.
   - **Components**: Modular and reusable UI components, divided into `components` (generic) and `core-components` (application-specific).
   - **Pages**: Page structure with main layout.

### 3. **Data Persistence**
   - Use of localStorage to store tasks, ensuring data persists between browser sessions.
   - `use-local-storage-state` library to facilitate state management synchronized with localStorage.

### 4. **Component-Based Architecture**
   - Small components focused on a single responsibility.
   - Use of props and children for flexibility and reusability.
   - Clear separation between presentation (UI) and logic (hooks).

### 5. **TypeScript for Type Safety**
   - Interfaces and enums to define data contracts.
   - Explicit typing in functions, props, and states.
   - Better autocomplete and error detection during development.

### 6. **Styling with Tailwind CSS**
   - Utility classes for rapid styling.
   - Consistent design system through base components (Button, Card, etc.).
   - Built-in responsiveness and accessibility.

### 7. **React Compiler**
   - React Compiler enabled for automatic component optimization.
   - Performance improvement without manual code changes.


## Project Structure

```
src/
├── components/          # Generic UI components
├── core-components/     # Application-specific components
├── hooks/              # Custom hooks
├── models/             # Type and interface definitions
├── pages/              # Application pages
├── assets/             # Images and icons
├── App.tsx             # Root component
└── main.tsx            # Entry point
```

## Features

- ✅ Create new tasks
- ✅ Mark tasks as completed
- ✅ Automatic persistence in the browser
- ✅ Responsive interface
- ✅ Navigation with React Router

## Contributing

Feel free to open issues and pull requests for improvements or fixes.
