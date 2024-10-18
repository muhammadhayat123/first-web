export default function PageNotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-6">
        <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">
          Sorry for any inconvenience. The page you're looking for doesn't exist.
        </p>
        <a href="/" className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
          Go Back to Home
        </a>
      </div>
    );
  }
  