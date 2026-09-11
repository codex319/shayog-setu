import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Unauthorized from "./pages/Unauthorized.jsx";

import CitizenLayout from "./layouts/CitizenLayout.jsx";
import CitizenDashboard from "./pages/citizen/Dashboard.jsx";
import NewChallenge from "./pages/citizen/NewChallenge.jsx";
import CitizenChallenges from "./pages/citizen/Challenges.jsx";
import CitizenChallengeDetail from "./pages/citizen/ChallengeDetail.jsx";

import GovernmentLayout from "./layouts/GovernmentLayout.jsx";
import GovernmentDashboard from "./pages/government/Dashboard.jsx";
import PendingChallenges from "./pages/government/PendingChallenges.jsx";
import ReviewChallenge from "./pages/government/ReviewChallenge.jsx";

import UniversityLayout from "./layouts/UniversityLayout.jsx";
import UniversityDashboard from "./pages/university/Dashboard.jsx";
import UniversityChallenges from "./pages/university/Challenges.jsx";

import IndustryLayout from "./layouts/IndustryLayout.jsx";
import IndustryDashboard from "./pages/industry/Dashboard.jsx";
import IndustryChallenges from "./pages/industry/Challenges.jsx";

import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/Dashboard.jsx";
import AdminUsers from "./pages/admin/Users.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route
        path="/citizen"
        element={
          <ProtectedRoute allowedRoles={["citizen"]}>
            <CitizenLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<CitizenDashboard />} />
        <Route path="challenges/new" element={<NewChallenge />} />
        <Route path="challenges" element={<CitizenChallenges />} />
        <Route path="challenges/:id" element={<CitizenChallengeDetail />} />
      </Route>

      <Route
        path="/government"
        element={
          <ProtectedRoute allowedRoles={["government"]}>
            <GovernmentLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<GovernmentDashboard />} />
        <Route path="challenges/pending" element={<PendingChallenges />} />
        <Route path="challenges/:id/review" element={<ReviewChallenge />} />
      </Route>

      <Route
        path="/university"
        element={
          <ProtectedRoute allowedRoles={["university", "faculty", "student"]}>
            <UniversityLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<UniversityDashboard />} />
        <Route path="challenges" element={<UniversityChallenges />} />
      </Route>

      <Route
        path="/industry"
        element={
          <ProtectedRoute allowedRoles={["industry"]}>
            <IndustryLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<IndustryDashboard />} />
        <Route path="challenges" element={<IndustryChallenges />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}