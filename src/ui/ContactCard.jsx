import Button from "./button";
import profilePicture from "../images/profiel1.jpg";
const container = {
  width: "300px",
  height: "300px",
  border: "5px solid gray",
  borderRadius: "15px",
  margin: "10px",
  padding: "15px",
};

// const mainContainer = {
//   display: "grid",
//   gridTemplateRows: "repeat(3,1fr)",
//   gridTemplateColumns: "repeat(3,1fr)",
// };
const profilePhotoStyle = {
  objectFit: "cover",
  width: "80px",
  height: "100px",
};

const ContactCard = ({ name, email, phone, address }) => {
  const { street, suite, city, zipcode } = address;
  return (
    // <div style={mainContainer}>
    <div style={container}>
      <h3>Name: {name}</h3>
      <div>
        <img
          src={profilePicture}
          style={profilePhotoStyle}
          alt="if no src found msg"
        />
      </div>
      <div>
        <div>
          <b>Email:</b> {email}
        </div>
        <div>
          <b>Address:</b> {street}, {suite}, {city}, {zipcode}
        </div>
      </div>
      <div>
        <Button onClick={() => alert(name)} text="Visit Profile" />
      </div>
    </div>
    // </div>
  );
};

export default ContactCard;
