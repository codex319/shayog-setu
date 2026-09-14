import axios from "axios";

const API_URL = "http://localhost:3000/api/government";

// Get government challenges
export const getGovernmentChallenges = async (params = {}) => {
  const res = await axios.get(`${API_URL}/challenges`, {
    params,
  });

  return res.data;
};

// Get one government challenge
export const getGovernmentChallengeById = async (id) => {
  const res = await axios.get(`${API_URL}/challenges/${id}`);

  return res.data;
};

// Get dashboard statistics
export const getGovernmentDashboardStats = async () => {
  const res = await axios.get(`${API_URL}/dashboard`);

  return res.data;
};

// Start verification
export const startVerification = async (id) => {
  const res = await axios.post(
    `${API_URL}/challenges/${id}/start-verification`
  );

  return res.data;
};

// Verify challenge
export const verifyChallenge = async (id, remarks = "") => {
  const res = await axios.post(
    `${API_URL}/challenges/${id}/verify`,
    { remarks }
  );

  return res.data;
};

// Reject challenge
export const rejectChallenge = async (id, remarks = "") => {
  const res = await axios.post(
    `${API_URL}/challenges/${id}/reject`,
    { remarks }
  );

  return res.data;
};