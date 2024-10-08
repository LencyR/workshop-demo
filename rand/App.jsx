import './index.css';

// complete
function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold ml-[-50px]">My Gallery</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-blue-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-300">About</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Gallery</h1> */}
        <div className="flex flex-wrap justify-between">
            <>
              {[...Array(4)].map((_, index) => (
                <div key={index} className="w-1/4 p-2">
                  <img
                    src={`https://picsum.photos/200/300?random=${index}`}
                    alt={`Random ${index}`}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              ))}
              <div className="flex flex-wrap w-full mt-4">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="w-1/3 p-2">
                    <img
                      src={`https://picsum.photos/200/300?random=${index + 4}`}
                      alt={`Random ${index + 4}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </>
        </div>
      </main>
    </div>
  );
}

export default App;