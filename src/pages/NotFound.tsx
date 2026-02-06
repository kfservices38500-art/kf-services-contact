import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-muted">
      <div className="text-center px-4">
        <h1 className="text-6xl font-black text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-8">Oops! Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
