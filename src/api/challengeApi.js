import api from "./axios";

export const createChallenge = async (payload, image) => {
  const formData = new FormData();

  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("category", payload.category);
  formData.append("district", payload.district);
  formData.append("location", payload.location);

  if (image) {
    formData.append("image", image);
  }

  const res = await api.post("/challenges", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const getAllChallenges = async () => {
  const res = await api.get("/challenges");

  return res.data;
};