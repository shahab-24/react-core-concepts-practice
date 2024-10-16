

const User = ({user}) => {
  const {name, email, phone, username} = user;
  console.log(user);
  return (
    <div className="box">
    <h2>User name: {username}</h2>
    <h3>Name: {name}</h3>
    <p>Phone: {phone}</p>
    <p>Email: {email}</p>
      
    </div>
  );
};

export default User;