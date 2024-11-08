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

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setFadeState("fade-out"); // Trigger fade-out
      setTimeout(() => {
        // After fade-out finishes, change the text and trigger fade-in
        setExample(placeholderExamples[index]);
        index = (index + 1) % placeholderExamples.length;
        setFadeState("fade-in"); // Trigger fade-in
      }, 500); // Wait for fade-out duration (e.g., 500ms)
    }, 6000);

    return () => clearInterval(interval);
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
