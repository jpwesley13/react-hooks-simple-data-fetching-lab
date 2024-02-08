import React, {useState, useEffect} from "react";

function App() {
const [image, setImage] = useState(null)
const [loaded, setLoaded] = useState(false)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {setImage(data.message);
        setLoaded(true);
    });
}, []);

if (!loaded) return <p>Loading...</p>;

return <img src={image} alt="A Random Dog" />
}

export default App