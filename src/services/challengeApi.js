import api from "./api.js";

export function createChallenge(payload) {
  // status hardcoded here (not exposed in the UI) since the schema
  // requires it but has no default value
  return api.post("/challenges", { ...payload, status: "PENDING" });
}

export function getChallenges(params = {}) {
  return api.get("/challenges", { params });
}

export function getChallengeById(id) {
  return api.get(`/challenges/${id}`);
}
