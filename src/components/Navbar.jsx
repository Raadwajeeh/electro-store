import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-zinc-900 text-white px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold text-blue-500">
          Electro Store
        </Link>

        <ul className="hidden md:flex gap-6">
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
            <Link to="/" className="hover:text-blue-400">
              Categories
            </Link>
          </li>

          <li>
            <Link to="/cart" className="hover:text-blue-400">
              Cart ({cartCount})
            </Link>
          </li>
        </ul>

        <button className="md:hidden text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;