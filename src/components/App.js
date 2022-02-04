import React, { useEffect, useState } from "react";
import getRandomImage from "./utils";

const App = () => {
  const [image, setImage] = useState({ message: "", status: "" });

  useEffect(() => {
    getRandomImage()
      .then((promise) => {
        setImage(() => ({ ...promise }));
      })
      .catch(() => console.log("Image wasn't able to be fetched"));
  }, []);

  return (
    <div>
      {image.message === "" ? (
        <p>Loading...</p>
      ) : (
        <img src={image.message} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
