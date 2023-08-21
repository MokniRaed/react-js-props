import Profile from "./Components/Profile/Profile";

function App() {
  const users = [
    {
      name: "Khouloud",
      image : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80'
    },
    {
      name: "Abdou",
    },
    {
      name: "Jihed",
      image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Yasine",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
    },
  ];

  return (
    <>
      {users.map((user) => (
        <Profile name={user.name} image={user.image} />
      ))}
    </>
  );
}

export default App;
