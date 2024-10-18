export default function Loading() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce delay-200"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce delay-400"></div>
        </div>
        <h1 className="text-xl font-semibold text-gray-700">Loading, please wait...</h1>
      </div>
    );
  }
  