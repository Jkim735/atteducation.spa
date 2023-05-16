const Label = ({ children, htmlFor, className }) => {
    return (
      <label
        htmlFor={htmlFor}
        className={
          'font-medium text-base mb-1 mt-2' +
          // 'font-semibold text-[16px] sm:text-[18px] lg:text-[20px] my-[20px] ' +
          className
        }
      >
        {children}
      </label>
    )
  }
  
  export default Label
  