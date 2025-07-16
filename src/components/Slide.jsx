import { useState } from 'react';
function Slide() {


 const [count, setcount] = useState(0);

  function handleCount() {
    const newCount = count + 1;
    alert("Button clicked", newCount);
    setcount(newCount);
  }
    return (



        <div className="flex items-center justify-center w-full min-h-screen bg-black ">
            <div className="bg-amber-100 shadow-lg rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4">Slide Component</h2>
                <p className="text-gray-700 text-center mb-6">
                    This is a simple slide component that can be used to display content in a sliding manner.
                </p>
              <button
      onClick={handleCount}
      className="py-2 px-4 bg-amber-900 text-white rounded hover:bg-amber-950 transition duration-300"
    >
      Click Me
    </button>
            </div>
         </div>       
    );
}
export default Slide;












