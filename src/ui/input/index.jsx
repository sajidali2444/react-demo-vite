/*
  id="firstName"
  placeholder="First Name"
  style={{ ...labelFormat, width: "250px", height: "50px" }}
*/

const Input = ({
  inputType = "text",
  placeholderText = "Place Holder Message",
  ...otherOptions
}) => {
  return (
    <input
      type={inputType}
      placeholder={placeholderText}
      style={{ width: "200px", height: "25px" }}
      {...otherOptions}
    />
  );
};
/*
//msg100
function print(input1 = "default value", ...rest) {
  console.clear();
  console.log(input1, ...rest);
}
print("my message 1", "my message 2", "sdsdfg", "sdgsdfsfdsdfgsd");
*/

export default Input;
