const H3 = ({ children, className }) => {
    return (
      <h3
        className={
          `${className} text-base font-medium text-center`
          // 'font-medium text-[16px] sm:text-[19px] xl:text-[22px] text-center ' +
        }
      >
        {children}
      </h3>
    )
  }
  
  export default H3
  