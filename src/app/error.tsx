
"use client"
export default function CustomErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-6">
        <h1 className="text-5xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-6">We couldn’t find the page you’re looking for.</p>
        <a href="/" className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
          Go Back to Home
        </a>
      </div>
    );
  }
  