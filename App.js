import React from "react";
import AppRoutes from "./routes/app.routes";

export default function App() {
  return <AppRoutes />;
}

// Usuário toca na tela
//         ↓
// Screen (MovieList)
//         ↓
// Hook (useMovies)
//         ↓
// Service (movieService)
//         ↓
// API (api.js / servidor)
//         ↓
// Service retorna dados
//         ↓
// Hook atualiza estado
//         ↓
// Screen renderiza componentes