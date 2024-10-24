import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-6 bg-indigo-700 text-white shadow-lg">
      <nav className="flex justify-between">
        <h1 className="text-2xl font-bold">🎬 Movie Explorer</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/favorites" className="hover:underline">Favorites</Link>
        </div>
      </nav>
    </header>
  );
}
