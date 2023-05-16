const H1 = ({ children, className }) => {
    return (
      <h1
        className={'text-xl my-[10px] mx-auto font-bold text-center ' + className}
      >
        {children}
      </h1>
    )
  }
  
  export default H1
  