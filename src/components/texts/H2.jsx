const H2 = ({ children, className }) => {
    return (
      <h1 className={'text-xl font-semibold text-center ' + className}>
        {children}
      </h1>
    )
  }
  
  export default H2
  