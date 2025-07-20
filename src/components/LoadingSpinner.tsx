const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-16" role="status">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-50" />
        <p className="text-gray-600 font-medium">Loading movies...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
