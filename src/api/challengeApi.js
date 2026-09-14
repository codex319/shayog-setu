export const createChallenge = async (payload) => {
  const res = await api.post("/challenges", {
    title: payload.title,
    description: payload.description,
    category: payload.category,
    district: payload.district,
    location: payload.location,
  });

  return res.data;
};

export default createChallenge;