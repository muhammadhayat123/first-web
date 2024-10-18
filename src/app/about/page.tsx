export default async function About() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-2">Welcome to the About Page</h1>
      <p className="text-lg text-center">
        Our mission is to provide high-quality products and services that meet the diverse needs of our customers.
      </p>
    </div>
  );
}
