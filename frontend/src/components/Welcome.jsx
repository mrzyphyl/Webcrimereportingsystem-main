import React, { useEffect, useState } from "react";
import axios from "axios";

const Welcome = () => {
  const [name, setName] = useState("");
  const [images, setImages] = useState([
    { id: 1000, url: "https://media.istockphoto.com/id/1318531286/photo/police-lights.jpg?s=612x612&w=0&k=20&c=tZyAXVCp2W0O1Yo-B05oiYY9VDgNLdUVe4wtrk3NUik=" },
    { id: 1011, url: "https://media.istockphoto.com/id/1339879871/photo/police-car-lights-in-night-city-with-selective-focus-and-bokeh.jpg?s=612x612&w=0&k=20&c=bZJSdfZH0es2YfjC9_aFRW5blZZwJsoKrTBtTEu3Z0Q=" },
    { id: 102, url: "https://media.istockphoto.com/id/1328227973/photo/police-cars-at-night-police-car-chasing-a-car-at-night-with-fog-background-911-emergency.jpg?s=612x612&w=0&k=20&c=ECoqq2sEQKrsi457kTq7Q2Z4D2MhtN_WWiKtwgpB2KQ=" },
    { id: 103, url: "https://media.istockphoto.com/id/1307408243/photo/young-brunette-curly-woman-in-orange-suit-female-in-colorful-overalls-portrait.jpg?s=612x612&w=0&k=20&c=lNG53aNxDHfT_Dhnsrt1FLWlAFbU7-kmnIrvsNYZdNk=" }
  ]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:5000/api/user`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      const users = response.data.data.name;
      setName(users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="mt-4 justify-center text-white text-center">
      <table className="table-auto mx-auto mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Total Crimes Reported</th>
            <th className="px-4 py-2">Total Police Officer</th>
            <th className="px-4 py-2">Total Crimes Solved</th>
            <th className="px-4 py-2">Total Crimes Going</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{images[0].id}</td>
            <td className="border px-4 py-2">{images[1].id}</td>
            <td className="border px-4 py-2">{images[2].id}</td>
            <td className="border px-4 py-2">{images[3].id}</td>
          </tr>
        </tbody>
      </table>

      <div className="mx-6">
        <h1 className="text-3xl font-bold border-b-2 border-teal-500 pb-2">
          Hi there {name ? name : "User"}! Welcome to the Crime and Accident Data Website Dashboard
        </h1>
        <h5 className="mt-3 text-2xl">
          We are proud to present a platform specifically designed to provide up-to-date information on crime and accident data. Our goal is to provide easy and transparent access to relevant data, so you can understand and explore trends, patterns, and statistics related to crime and accidents.
        </h5>
        <h5 className="mt-3 text-2xl">
          Through this website, you can explore various types of crime, including street crime, robbery, theft, and more. We also provide information regarding traffic accidents, road incidents, and other accident data that can help you understand the factors that contribute to accidents and take appropriate preventive measures. 
        </h5>
        <h5 className="mt- text-2xl">
          We collect data from various reliable sources and continuously update the information to keep it accurate and useful. We hope that through easy access to this data, the public can raise awareness of the problem of crime and accidents and contribute to creating a safer and better environment for all.
        </h5>
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        {images.map((image) => (
          <a key={image.id} href={image.url} target="_blank" rel="noopener noreferrer" className="m-2">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="border-2 border-teal-200 rounded"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
