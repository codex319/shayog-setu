import axios from "axios";

export const createChallenge = async (payload) => {
  const res = await axios.post("http://localhost:3000/api/challenges", {
    title: payload.title,
    description: payload.description,
    category: payload.category,
    district: payload.district,
    location: payload.location,
  });

  return res.data;
};

export const getAllChallenges = async () => {
  const res = await axios.get("http://localhost:3000/api/challenges");

  return res.data;
};

export const getOneChallenge = async (id) => {
  const res = await axios.get(
    `http://localhost:3000/api/challenges/${id}`
  );

  return res.data;
};