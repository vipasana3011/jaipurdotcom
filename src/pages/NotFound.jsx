import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-display gradient-text">404</h1>
        <p className="mt-4 text-neutral-400">This corner of Jaipur isn't on the map.</p>
        <Link to="/" className="mt-8 inline-block px-6 py-3 rounded-full gradient-bg text-black font-medium">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
