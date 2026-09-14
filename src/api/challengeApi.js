import api from "./axios";

<<<<<<< HEAD
export const createChallenge = async (payload, image) => {
=======
import axios from "axios";

const createChallenge = async (payload, image) => {
>>>>>>> 1517a43823615c01403c69246a86a511b6528f0e
  const formData = new FormData();

  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("category", payload.category);
  formData.append("district", payload.district);
  formData.append("location", payload.location);

  if (image) {
    formData.append("image", image);
  }

<<<<<<< HEAD
  const res = await api.post("/challenges", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
=======
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
>>>>>>> 1517a43823615c01403c69246a86a511b6528f0e

  return res.data;
};

<<<<<<< HEAD
export const getAllChallenges = async () => {
  const res = await api.get("/challenges");

  return res.data;
};
=======
export const getOneChallenge = async (id) => {
  const res = await axios.get(
    `http://localhost:3000/api/challenges/${id}`
  );

  return res.data;
};

export default createChallenge;

>>>>>>> 1517a43823615c01403c69246a86a511b6528f0e
