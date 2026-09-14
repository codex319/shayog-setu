import React, { createContext, useContext, useEffect, useState } from "react";
import { MOCK_PROBLEMS } from "../data/problemsMockData";

const ProblemsContext = createContext(null);
const STORAGE_KEY = "samadhan_setu_submitted_problems";

export function ProblemsProvider({ children }) {
  const [submitted, setSubmitted] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [upvotedIds, setUpvotedIds] = useState(() => new Set());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submitted));
  }, [submitted]);

  // Citizen-submitted problems show up first, then the seeded reference dataset.
  const problems = [...submitted, ...MOCK_PROBLEMS];

  const addProblem = (problem) => {
    setSubmitted((prev) => [problem, ...prev]);
  };

  const upvoteProblem = (problemId) => {
    setUpvotedIds((prev) => {
      const next = new Set(prev);
      if (next.has(problemId)) next.delete(problemId);
      else next.add(problemId);
      return next;
    });
  };

  const getProblemById = (id) => problems.find((p) => p.id === id);

  return (
    <ProblemsContext.Provider
      value={{ problems, addProblem, upvoteProblem, upvotedIds, getProblemById }}
    >
      {children}
    </ProblemsContext.Provider>
  );
}

export function useProblems() {
  const ctx = useContext(ProblemsContext);
  if (!ctx) throw new Error("useProblems must be used within ProblemsProvider");
  return ctx;
}
