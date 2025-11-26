# Pokédex Explorer 🎮

A retro-styled Pokémon encyclopedia web application showcasing all 151 original Generation 1 Pokémon from the Kanto region. Built with React and powered by the PokéAPI, this project combines nostalgic Game Boy aesthetics with modern web development.

![Press Start 2P](https://img.shields.io/badge/Font-Press%20Start%202P-blue)
![React](https://img.shields.io/badge/React-18.x-61dafb)
![React Router](https://img.shields.io/badge/React%20Router-6.x-red)

## 🌐 Live Demo

Check out the live version of the application: <a href="https://bouchardhenry.github.io/Pokemon-app-2/" target="_blank">Pokedex Explorer</a>

## ✨ Features

- **Complete Pokédex**: Browse all 151 original Pokémon with detailed information
- **Interactive Gallery**: Visual grid layout with animated sprites
- **Detailed Pokémon Pages**: View stats, types, abilities, height, and weight
- **Dropdown Search**: Quick navigation to any Pokémon via dropdown selector
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Retro Aesthetics**: Game Boy-inspired design with pixel art fonts and styling
- **Navigation Controls**: Previous/Next buttons on detail pages for easy browsing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd pokemon-explorer
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

### Navigation

- **Home**: Landing page with Masterball launcher and Kanto region map
- **Pokédex**: Main search page with dropdown selector
- **Gallery**: Grid view of all 151 Pokémon with sprites
- **About**: Information about the project and its creator

### Browsing Pokémon

1. Click the Masterball on the home page or navigate to "Pokedex"
2. Use the dropdown to select a specific Pokémon
3. Or visit the complete gallery to browse visually
4. Click on any Pokémon to view detailed information
5. Use the arrow buttons (< >) to navigate between adjacent Pokémon

## 🛠️ Built With

- **React** - Frontend framework
- **React Router** - Client-side routing
- **PokéAPI** - Pokémon data source
- **CSS Modules** - Component-scoped styling
- **Vite** - Build tool and development server

## 📁 Project Structure

```
src/
├── assets/              # Images and static files
├── components/          
│   ├── banner/         # Banner component
│   ├── footer/         # Footer with Mew easter egg
│   ├── navigation/     # Navigation bar
│   └── current-page-logger/  # Breadcrumb helper
├── pages/
│   ├── home/           # Landing page
│   ├── pokemons/       # Pokédex search page
│   ├── gallery/        # Grid gallery view
│   ├── pokemon-details/# Individual Pokémon pages
│   ├── about/          # About page
│   └── error/          # 404 error page
├── App.jsx             # Main app component with routing
└── main.jsx            # Application entry point
```

## 🎨 Design Features

- **Retro Typography**: Press Start 2P font for authentic Game Boy feel
- **Grid Background**: Subtle graph paper pattern
- **Game Boy Frame**: Card-style containers with pixel-perfect borders
- **Rainbow Hover Effects**: Colorful shadow effects on interactive elements
- **Animated Sprites**: GIF sprites from Pokémon Showdown
- **Responsive Grid**: Adapts from 5 columns to 2 columns on smaller screens

## 🔗 API Integration

This project uses the [PokéAPI](https://pokeapi.co/) to fetch:
- Pokémon basic information (name, ID)
- Detailed stats (height, weight)
- Types and abilities
- Sprite images from multiple sources

## 🌟 Easter Eggs

- Click the Pikachu logo to return home
- Hover over navigation elements for rainbow effects
- Find the shiny Mew in the footer (links to Mew's page)
- Masterball rotation animation on hover

## 📱 Responsive Breakpoints

- Desktop: 5-column grid (default)
- Tablet: 3-column grid (max-width: 1224px)
- Mobile: 2-column grid (max-width: 768px)

## 🤝 Contributing

This is a personal passion project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is for educational and fan purposes only. Pokémon and all related properties are owned by Nintendo, Game Freak, and The Pokémon Company.

## 👤 Author

**Henry**

A lifelong Pokémon fan combining nostalgia with modern web development. This project is a tribute to the franchise that sparked a childhood love of gaming and adventure.

## 🙏 Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing comprehensive Pokémon data
- Nintendo, Game Freak, and The Pokémon Company for creating Pokémon
- The Pokémon community for keeping the spirit alive

---

**Gotta Catch 'Em All!** ⭐
