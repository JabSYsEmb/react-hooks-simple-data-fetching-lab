import axios from "axios";

const randomImageGenerator = "https://dog.ceo/api/breeds/image/random";

const getRandomImage = () => {
  return axios
    .get(randomImageGenerator)
    .then((response) => response.data)
    .catch((erorr) => console.log(erorr))
    .finally(() => console.log("getImage called"));
};

export default getRandomImage;
