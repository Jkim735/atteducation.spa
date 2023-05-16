const Circle = ({ className }) => {
    return (
      <div
        className={`w-full h-[50px] flex justify-center items-center ${className}`}
      >
        <svg className="animate-spin h-[30px] mr-3" viewBox="0 0 24 24">
          <i className="text-[#1d4ed8] font-bold fa-solid fa-circle-notch "></i>
        </svg>
      </div>
    )
  }
  
  export default Circle
  