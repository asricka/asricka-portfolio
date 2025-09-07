import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Abdel Asricka
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Software Engineer | Investment Banking Technology
          </p>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Portfolio Coming Soon
            </h2>
            <p className="text-blue-100">
              Building a modern React portfolio to showcase projects and skills for investment banking technology roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
