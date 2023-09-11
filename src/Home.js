import { useState } from "react"

const Home = () => {
  const [Title, setTitle] = useState('are you a sinner !!')
  const chageState = () => {
    setTitle('jesus loves you')
  }
  // const handleClik = (e) => {
  //   console.log("hello " + name + e);
  // }
  // const name = prompt("what is ur name");
  return (
    <div className="home">
      <h2>Homepage</h2>
      <h3>{Title}</h3>
      <button onClick={chageState}></button>
    </div>
  );
}

export default Home;