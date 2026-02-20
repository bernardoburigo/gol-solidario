import { Home } from "./Pages/Home";
import { Github, Instagram } from "lucide-react";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Conteúdo principal */}
      <div className="grow">
        <Home />
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-yellow-300 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <strong className="text-lg">⚽ Gol Solidário ⚽</strong>

          <div className="flex items-center gap-4 text-xs">
            <span>
              Desenvolvido por Bernardo Búrigo
            </span>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/bernardoburigo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 hover:scale-110 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>

              <a
                href="https://instagram.com/bernardoburigo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
