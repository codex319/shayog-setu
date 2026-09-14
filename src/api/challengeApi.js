<<<<<<< HEAD
export const createChallenge = async (payload) => {
  const res = await api.post("/challenges", {
    title: payload.title,
    description: payload.description,
    category: payload.category,
    district: payload.district,
    location: payload.location,
  });
=======

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
>>>>>>> 198fb6fb86f50a902a81359f78e7c16bafbfedc9

  return res.data;
};

<<<<<<< HEAD
export default createChallenge;
=======
export const getAllChallenges = async () => {
  const res = await axios.get("http://localhost:3000/api/challenges");

  return res.data;
};

export default createChallenge;

>>>>>>> 198fb6fb86f50a902a81359f78e7c16bafbfedc9
