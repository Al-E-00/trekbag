# TrekBag

TrekBag is a modern, intuitive, and user-friendly application built with React. It's designed to help users manage their packing list for their next adventure. The application is built with the latest technologies and follows best practices for web development.

# Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Running the Project](#running-the-project)
5. [Linting](#linting)
6. [Preview](#preview)
7. [Contributing](#contributing)
8. [Open Source](#open-source)

## Features

- **Add Items**: Users can add items to their packing list. Each item is added with a unique ID and an initial status of 'unpacked'.
- **Delete Items**: Users can delete items from their packing list.
- **Toggle Items**: Users can toggle the status of items between 'packed' and 'unpacked'.
- **Sort Items**: Users can sort items based on their status. The sorting options include 'default', 'unpacked', and 'packed'.
- **Counter**: The application includes a counter that displays the total number of items and the number of packed items.
- **Notifications**: The application uses 'react-hot-toast' for displaying notifications to the user.

## Technologies Used

- **React**: The application is built with React, a popular JavaScript library for building user interfaces.
- **Vite**: The application uses Vite for a faster and leaner development experience.
- **Zustand**: Zustand is used for state management in the application.
- **React Select**: React Select is used for the sorting feature in the application.
- **ESLint**: The application uses ESLint for maintaining code quality.

## Project Structure

The application follows a modular structure with separate components for each part of the application. Here are some of the main components:

- **App.jsx**: This is the main component of the application. It includes the BackgroundHeading, Header, ItemList, Sidebar, and Footer components.
- **BackgroundHeading.jsx**: This component displays the heading of the application.
- **Header.jsx**: This component includes the Logo and Counter components.
- **ItemList.jsx**: This component displays the list of items. It includes the Item component for each item.
- **Sidebar.jsx**: This component includes the AddItemForm component for adding new items.
- **Footer.jsx**: This component displays the footer of the application.

## Running the Project

To run the project, use the following command:

```sh
npm run dev
```

To build the project, use the following command:

```sh
npm run build
```

Linting
The project uses ESLint for linting. To run the linter, use the following command:

```sh
npm run lint
```

Preview
To preview the built application, use the following command:

```sh
npm run preview
```

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## Open Source

This project is open source. Feel free to use, modify, and distribute the code as you see fit. Please consider giving credit to the original [author](https://github.com/ByteGrad) if you find this project useful.
