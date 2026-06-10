import { useState } from "react";

function Gallery() {
  var [images, setImages] = useState([
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Deepika_Padukone_2025_%281%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Deepika_Padukone_promoting_Chhapaak.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Deepika_Padukone_Cannes_2018_%28cropped%29.jpg",
  ]);
  var [i, setI] = useState(0);
  function nexImg() {
    if (i == 2) {
      setI(0);
    } else {
      setI(i + 1);
    }
  }
  function prevImg() {
    // i--;
    if (i == 0) {
      setI(2);
    } else {
      setI(i - 1);
    }
  }
  return (
    <div className="mybox">
      <h5>Gallery</h5>
      <img src={images[i]} width="100px" alt="" />
      <br />
      <button
        onClick={() => {
          prevImg();
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          nexImg();
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Gallery;
// state
//action
//ui
