import { useState, useEffect } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [example, setExample] = useState("get your brakes changed");
  const [fadeState, setFadeState] = useState("fade-in");

  const handleClick = () => {
    setName("luigi");
  };

  const placeholderExamples = [
    "get your brakes changed",
    "get your clutch changed",
    "get your windscreen changed",
  ];

  // useEffect (() => {intervalLogic, TIME}, []);

  useEffect(() => {
    let index = 0;
    const placeholder = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setExample(placeholderExamples[index]);
        index = (index + 1) % placeholderExamples.length;
        setFadeState("fade-in");
      }, 500);
    }, 6000);

    return () => clearInterval(placeholder);
  }, []);

  return (
    <div className="home">
      <h2>Homepage</h2>
      <input
        placeholder={example}
        className={`placeholder-text ${fadeState}`} // Apply fade effect based on state
      />
    </div>
  );
};

export default Home;
