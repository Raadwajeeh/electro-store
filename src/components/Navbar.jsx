import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-zinc-900 text-white px-4 md:px-8 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl md:text-2xl font-bold text-blue-500"
          >
            Electro Store
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-blue-400">
                Products
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-blue-400">
                Cart ({cartCount})
              </Link>
            </li>
          </ul>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-lg border border-zinc-700 px-3 py-2 text-2xl leading-none hover:bg-zinc-800"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-2 border-t border-zinc-700 pt-4">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 hover:bg-zinc-800 hover:text-blue-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 hover:bg-zinc-800 hover:text-blue-400"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 hover:bg-zinc-800 hover:text-blue-400"
              >
                Cart ({cartCount})
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
