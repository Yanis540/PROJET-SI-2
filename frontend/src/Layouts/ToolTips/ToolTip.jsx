
function ToolTip({  children ,Class=null}) {
  const defaultClass="relative flex flex-col items-center group"
  return (
    <div className={!Class?defaultClass:Class} >
      {children}
    </div>
  )
}

export default ToolTip