# Project Overview

This project is a frontend test for Popsa.com, developed by Arthur Fincham using React and Typescript. The goal of this project is to recreate a Popsa feature which allows users to drag and drop images and arrange a printable photo book.

## Project Structure

The project follows a standard React project structure with the following key directories and files:

- `components/`: React components.
- `pages/`: Page components for different routes.
- `styles/`: CSS and styling files.
- `utils/`: Utility functions and helpers.
- `public/`: Static assets like images and icons.
- `README.md`: Project documentation.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Typescript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Node.js**: JavaScript runtime for server-side development.
- **npm**: Package manager for managing project dependencies.
- **Dnd Kit**: A modern, lightweight, performant, accessible and extensible drag & drop toolkit for React.
- **Styled Components**: A library for writing CSS-in-JS.

## Notes

- **Typescript** Typescript has been used for files that were edited. I installed TS to improve the dev experience in files I edited. It was helpful with complicated data structures and state management. If I had more time I would have migrated the whole project to Typescript.
- **Animations** The drop animation could be better. I found it difficult to recreate the spec animation perfectly; this is my best attempt!

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

```bash
  git clone https://github.com/arthurfincham/popsa-tech-test.git
  cd popsa-tech-test
```

2. Use the specified Node version:

   ```bash
   nvm use 20.10.0
   ```

3. Install the project dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Testing

To run the tests for the project, use the following command:

```bash
npm test
# or
yarn test
```

## Deployment

To deploy the application, build the project using:

```bash
npm run build
# or
yarn build
```

Then, follow your preferred deployment method to host the built files.
