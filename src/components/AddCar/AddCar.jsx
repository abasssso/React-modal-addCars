import React, { useState } from "react";

const AddCar = () => {
  const [image, setImage] = useState("link");
  const [model, setModel] = useState("mashina");
  function save() {
    let newCar = {
      model: "",
      image: "",
      id: Date.now,
    };
  }
  console.log(model, "console model");
  console.log(image, "console image");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "green",
      }}>
      <input
        placeholder="Model"
        type="text"
        value={model}
        onChange={e => setModel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
    </div>
  );
};

export default AddCar;
