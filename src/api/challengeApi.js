
import axios from "axios";

const createChallenge = async (payload, image) => {
  const formData = new FormData();

  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("category", payload.category);
  formData.append("district", payload.district);
  formData.append("location", payload.location);

  if (image) {
    formData.append("image", image);
  }

  const res = await axios.post(
    "http://localhost:3000/api/challenges",
    formData
  );

  return res.data;
};

export const getAllChallenges = async () => {
  const res = await axios.get(
    "http://localhost:3000/api/challenges"
  );

  return res.data;
};

export const getOneChallenge = async (id) => {
  const res = await axios.get(
    `http://localhost:3000/api/challenges/${id}`
  );

  return res.data;
};

export default createChallenge;

