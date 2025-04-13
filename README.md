
<h2>Technologies used in the project: </h2>

- [React](#) - Building user interfaces
- [Redux](#) - UI state management
- [scss](#) - For styling
- [Axios](#) - API requests to the TMDB API
- [React Router](#) - Navigation and routing within the application

<h3>🙏 Acknowledgments</h3>

In the development of Movix, we express our gratitude to the following third-party libraries and APIs that have significantly contributed to the application's functionality and user experience:

- **Redux Toolkit (`@reduxjs/toolkit`):** A comprehensive toolset for managing application state with Redux, streamlining state management and reducing boilerplate code.

- **Axios (`axios`):** A reliable and efficient HTTP client that seamlessly integrates with the TMDB API, enabling smooth data retrieval.

- **Day.js (`dayjs`):** A lightweight and versatile library for date and time manipulation, enhancing the application's date formatting capabilities.

- **React (`react`) and React DOM (`react-dom`):** The core libraries powering the dynamic user interface and rendering of React components.

- **React Circular Progressbar (`react-circular-progressbar`):** An eye-catching component that brings visually appealing circular progress bars to the application.

- **React Icons (`react-icons`):** A treasure trove of icons that adds visual charm and enhances the user interface with diverse iconography.

- **React Infinite Scroll Component (`react-infinite-scroll-component`):** Empowers infinite scrolling functionality, making content loading seamless and intuitive.

- **React Lazy Load Image Component (`react-lazy-load-image-component`):** Enhances performance by deferring image loading until needed, improving page loading times.

- **React Player (`react-player`):** Facilitates smooth integration of media players to showcase movie trailers and videos within the application.

- **React Redux (`react-redux`):** Seamlessly integrates Redux state management with React, providing predictable application state handling.

- **React Router DOM (`react-router-dom`):** Enables smooth and intuitive navigation and routing within the application.

- **React Select (`react-select`):** Provides customizable select dropdowns for better user interaction and search functionalities.

- **Sass (`sass`):** A powerful CSS preprocessor that streamlines and organizes styling, contributing to the overall visual aesthetics of the application.
### Frontend:
- **React.js**: The core library used to build the dynamic and interactive user interface. React's component-based architecture allows for modular development and reusability.
- **Redux**: Used for state management, ensuring consistent data flow across the application and providing a single source of truth for managing complex UI states.
- **Material-UI**: A popular React UI framework that provides pre-built, customizable components, helping create a modern and responsive design with minimal effort.
- **Axios**: A promise-based HTTP client used to handle API requests, enabling smooth communication with external APIs to fetch movie-related data.

### External API:
- **The Movie Database (TMDb) API**: Integrated to retrieve movie information such as details, reviews, and ratings, enhancing the app with real-time, up-to-date movie data.

### Hosting & Deployment:
- **Vercel/Netlify**: Deployed on Vercel or Netlify, offering continuous integration and seamless deployment from GitHub, ensuring the project is always accessible with fast load times and reliable hosting.

### Version Control:
- **Git/GitHub**: Git is used for version control, and GitHub hosts the project repository, enabling collaboration, issue tracking, and source code management.

---

## React Components Used in Movix

1. **App Component**:
   - **Purpose**: The root component of the application, responsible for rendering the overall structure and managing routes.
   - **Features**: 
     - Uses **React Router DOM** to handle navigation between different pages like the homepage, movie details, and search results.

2. **MovieList Component**:
   - **Purpose**: Displays a list of movies fetched from the TMDb API.
   - **Features**: 
     - Implements **React Infinite Scroll** to load more movies as the user scrolls, providing a seamless user experience.
     - Manages movie data and renders each movie as a card with basic details such as title and poster.

3. **MovieCard Component**:
   - **Purpose**: Renders individual movie details in the list, such as the movie poster, title, and release date.
   - **Features**: 
     - Optimizes image loading using the **React Lazy Load Image** component to ensure faster page loads and improved performance.

4. **MovieDetail Component**:
   - **Purpose**: Displays detailed information about a specific movie, including trailers, cast, and other metadata.
   - **Features**: 
     - Uses **React Player** to embed and play movie trailers, enhancing the user experience with video playback.
     - Fetches additional details from the TMDb API based on the movie ID passed via the router.

5. **SearchBar Component**:
   - **Purpose**: Allows users to search for movies by title.
   - **Features**: 
     - Captures user input and fetches search results from the API.
     - Provides real-time feedback as users type their queries.

6. **Navbar Component**:
   - **Purpose**: Provides navigation links to different sections of the app, such as Home, Popular Movies, and Search.
   - **Features**: 
     - Includes links to external pages (like your GitHub or LinkedIn profiles) for easy access to other projects.

7. **Loader Component**:
   - **Purpose**: Displays a loading spinner while waiting for API data to be fetched.
   - **Features**: 
     - Simple, reusable component that enhances user experience during data fetching processes.

---


## How to Run This Project

1. **Clone the repository**: 
   Begin by cloning this project to your local machine:
   ```bash
   git clone https://github.com/soura07/MOVIX-ENHANCED-MOVIE-RATINGS-AND-CAST-INSIGHTS.git
   ```

2. **Install dependencies**: 
   Navigate to the project directory and install all necessary dependencies by running:
   ```bash
   npm install
   ```

3. **Start the development server**:
   Once the dependencies are installed, you can run the project with the following command:
   ```bash
   npm run start
   ```
   This will start the app, and you can access it at `http://localhost:3000` in your browser.

**Note**: If you're experiencing issues accessing the website via the Reliance Jio network, it could be due to a temporary block on TMDb services. For uninterrupted access, we recommend using a Vodafone network or an alternative service provider.


# Home Page 🚀

![image](https://github.com/soura07/movix/assets/116977697/943f7f97-3e8e-43b9-b160-d481264e5328)


# Trending and Popular 👀
![image](https://github.com/soura07/movix/assets/116977697/1ddfb1c6-2e5e-4c00-a78b-9ca9e317d9e9)

# Movie overview 🐥
![image](https://github.com/soura07/movix/assets/116977697/33c5016a-9bc6-4684-833c-55287817896e)

# Recomendations 👻

![image](https://github.com/soura07/movix/assets/116977697/bcaf6167-51bb-4c08-bf92-16b925264b74)


# Fully Responsive 📱
![image](https://github.com/soura07/movix/assets/116977697/c458b904-c130-4a1f-bdcf-4a5b280b7a2d)
