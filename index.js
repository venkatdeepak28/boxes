const Box = props => {
  //  Write your code here.
  const {className,name} = props
  return (
    <div className={className}>
      <p class="inner-heading">{name}</p>
    </div>
  )
}

const element = (
  //  Write your code here. 
  <div>
    <h1 class="main-heading">Boxes</h1>
    <div class="bg-container">
      <Box className="small-container" name="Small"/>
      <Box className="medium-container" name="Medium"/>
      <Box className="large-container" name="Large"/>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
