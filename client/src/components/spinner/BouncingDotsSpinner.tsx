const BouncingDotsSpinner = () => {
    return (
      <div className="flex justify-center items-center space-x-2 mt-1.5">
        <div className="w-2 h-2 bg-black rounded-full animate-bounce-[-50%] animation-delay-0"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-bounce-[-50%] animation-delay-150"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-bounce-[-50%] animation-delay-300"></div>
      </div>
    );
  };
  
  export default BouncingDotsSpinner;