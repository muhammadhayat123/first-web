export default function Contact() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
        <h1 className="text-2xl font-bold text-red-500 mb-2">Contact Us</h1>
        <p className="text-base text-center mb-4">
          We'd love to hear from you! Please reach out.
        </p>
        <div className="flex flex-col space-y-2 w-full max-w-md">
          <input 
            type="text" 
            placeholder="YOUR NAME..?" 
            className="p-2 border border-gray-300"
          />
          <input 
            type="email" 
            placeholder="Your Email..?" 
            className="p-2 border border-gray-300"
          />
          <textarea 
            placeholder="Your Message..?" 
            className="p-2 border border-gray-300 h-20"
          />
          <button className="bg-green-500 text-white py-1">
            Send
          </button>
        </div>
      </div>
    );
  }
  