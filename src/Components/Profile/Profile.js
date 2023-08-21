import Image from "../Image/Image";
import Name from "../Name/Name";

function Profile({name,image}) {
  return (
    <>
      <h1>Profile</h1>
      <Name myName={name} />
      <Image image={image} />
    </>
  );
}

export default Profile;
