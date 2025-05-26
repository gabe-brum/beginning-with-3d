const Button = ({ name, isBeam = false, containerClass = '' }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative size-3 flex">
          <span className="btn-ping" /> 
          <span className="btn-ping_dot" /> 
        </span>
      )}
      {name}
    </button>
  )
}

export default Button