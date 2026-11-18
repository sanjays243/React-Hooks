import { useRef } from "react";

function ImageChange() {
  const imageRef = useRef(null);

  const changeImage = () => {
    imageRef.current.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10";
  };

  return (
    <div>
      <h2>Image Change using useRef</h2>
      <img ref={imageRef} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzo4TL-XQQ8nLnziziTGXUchKDjEDHj4NNIcqGbx0pQ&s=10" alt="Sample" width="300" />
      <br /><br />
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
}

export default ImageChange;
