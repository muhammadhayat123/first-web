export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-2">Welcome to the Home Page</h1>
      <p className="text-lg mb-4">Discover amazing products and services that cater to your needs.</p>
      <a 
        href="/services" 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Explore Services
      </a>
    </div>
  );
}
