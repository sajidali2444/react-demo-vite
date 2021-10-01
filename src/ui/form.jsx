const Form = ({ children, ...options }) => {
  return <form {...options}>{children}</form>;
};
export default Form;

//post method transfer data in hidden form in the body of request.
//get method transfer data in url
