import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Blog, Items, Pokemon, Pokemons, About, Article, ArticlesList} from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/article-list" element={<ArticlesList />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/items" element={<Items />} />
          <Route path="/" element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
