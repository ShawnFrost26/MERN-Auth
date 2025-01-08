const LoadingSpinner = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-teal-900 flex items-center justify-center relative overflow-hidden">
        <div className="w-16 h-16 border-4 border-t-4 border-t-cyan-500 border-cyan-200 rounded-full animate-spin"></div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  