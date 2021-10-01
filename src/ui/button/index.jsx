//state management.
// useState
// useEffect
// useMemo
//other things
// css class
const buttonStyle = {
  width: "150px",
  height: "30px",
  background: "#4299e1",
  margin: "10px",
};
const Button = ({ type = "button", text = "button text", ...options }) => {
  return (
    <button type={type} style={buttonStyle} {...options}>
      {text}
    </button>
  );
};

export default Button;
