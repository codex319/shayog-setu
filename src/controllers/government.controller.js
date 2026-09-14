const Challenge = require("../models/Challenge.js");

// ========================================
// START VERIFICATION
// SUBMITTED → UNDER_VERIFICATION
// ========================================
const startVerification = async (req, res) => {
  try {
    const { id } = req.params;

    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return res.status(404).json({
        message: "Challenge not found",
      });
    }

    if (challenge.status !== "SUBMITTED") {
      return res.status(400).json({
        message: `Challenge cannot start verification from ${challenge.status} status`,
      });
    }

    challenge.status = "UNDER_VERIFICATION";

    await challenge.save();

    res.status(200).json({
      message: "Challenge verification started",
      challenge,
    });
  } catch (error) {
    console.error("START VERIFICATION ERROR:", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// ========================================
// VERIFY CHALLENGE
// UNDER_VERIFICATION → VERIFIED
// ========================================
const verifyChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const { remarks } = req.body;

    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return res.status(404).json({
        message: "Challenge not found",
      });
    }

    if (challenge.status !== "UNDER_VERIFICATION") {
      return res.status(400).json({
        message: `Challenge cannot be verified from ${challenge.status} status`,
      });
    }

    challenge.status = "VERIFIED";

    challenge.verification = {
      verifiedBy: req.user ? req.user._id : null,
      verifiedAt: new Date(),
      remarks: remarks || "",
    };

    await challenge.save();

    res.status(200).json({
      message: "Challenge verified successfully",
      challenge,
    });
  } catch (error) {
    console.error("VERIFY CHALLENGE ERROR:", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// ========================================
// REJECT CHALLENGE
// UNDER_VERIFICATION → REJECTED
// ========================================
const rejectChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const { remarks } = req.body;

    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return res.status(404).json({
        message: "Challenge not found",
      });
    }

    if (challenge.status !== "UNDER_VERIFICATION") {
      return res.status(400).json({
        message: `Challenge cannot be rejected from ${challenge.status} status`,
      });
    }

    challenge.status = "REJECTED";

    challenge.verification = {
      verifiedBy: req.user ? req.user._id : null,
      verifiedAt: new Date(),
      remarks: remarks || "",
    };

    await challenge.save();

    res.status(200).json({
      message: "Challenge rejected successfully",
      challenge,
    });
  } catch (error) {
    console.error("REJECT CHALLENGE ERROR:", error);

    res.status(500).json({
      message: "Challenge rejected",
      error: error.message,
    });
  }
};

// ========================================
// GET GOVERNMENT CHALLENGES
//
// Filters:
// ?status=VERIFIED
// ?district=Ranchi
// ?category=Healthcare
// ?search=water
//
// Pagination:
// ?page=1
// ?page=2
//
// 30 challenges per page
// ========================================
const getGovernmentChallenges = async (req, res) => {
  try {
    const {
      status,
      district,
      category,
      search,
      page = 1,
    } = req.query;

    // Fixed page size
    const limit = 30;

    // Convert page to number
    const currentPage = Math.max(parseInt(page) || 1, 1);

    const allowedStatuses = [
      "SUBMITTED",
      "UNDER_VERIFICATION",
      "VERIFIED",
      "REJECTED",
      "ASSIGNED",
      "IN_PROGRESS",
      "PILOT",
      "DEPLOYED",
      "COMPLETED",
    ];

    const allowedCategories = [
      "Water & Sanitation",
      "Roads & Transport",
      "Electricity",
      "Healthcare",
      "Education",
      "Environment",
      "Public Safety",
      "Other",
    ];

    // Validate status
    if (status && !allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid status filter",
      });
    }

    // Validate category
    if (category && !allowedCategories.includes(category)) {
      return res.status(400).json({
        message: "Invalid category filter",
      });
    }

    // Build MongoDB filter
    const filter = {};

    if (status) {
      filter.status = status;
    }

    if (district) {
      filter.district = district;
    }

    if (category) {
      filter.category = category;
    }

    // Search title and description
    if (search) {
      filter.$or = [
        {
          title: {
            $regex: search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    // Total matching challenges
    const totalChallenges = await Challenge.countDocuments(filter);

    // Calculate how many documents to skip
    const skip = (currentPage - 1) * limit;

    // Get 30 challenges for current page
    const challenges = await Challenge.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Calculate total pages
    const totalPages = Math.ceil(totalChallenges / limit);

    res.status(200).json({
      message: "Government challenges fetched successfully",

      list: challenges,

      pagination: {
        currentPage,
        limit,
        totalChallenges,
        totalPages,
        hasNextPage: currentPage < totalPages,
        hasPreviousPage: currentPage > 1,
      },
    });
  } catch (error) {
    console.error("GET GOVERNMENT CHALLENGES ERROR:", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};  

// ========================================
// GET GOVERNMENT CHALLENGES
// BY Id
// ========================================

const getGovernmentChallengeById = async (req, res) => {
  try {
    const { id } = req.params;

    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return res.status(404).json({
        message: "Challenge not found",
      });
    }

    res.status(200).json({
      message: "Government challenge fetched successfully",
      challenge,
    });
  } catch (error) {
    console.error("GET GOVERNMENT CHALLENGE ERROR:", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

 // Convert aggregation result into an easier object

const getGovernmentDashboardStats = async (req, res) => {
  try {
    const result = await Challenge.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);


 const stats = {
      totalChallenges: 0,
      pendingVerification: 0,
      verified: 0,
      rejected: 0,
      assigned: 0,
    };

    result.forEach((item) => {
      stats.totalChallenges += item.count;

      if (
        item._id === "SUBMITTED" ||
        item._id === "UNDER_VERIFICATION"
      ) {
        stats.pendingVerification += item.count;
      }

      if (item._id === "VERIFIED") {
        stats.verified = item.count;
      }

      if (item._id === "REJECTED") {
        stats.rejected = item.count;
      }

      if (item._id === "ASSIGNED") {
        stats.assigned = item.count;
      }
    });

    res.status(200).json({
      message: "Government dashboard statistics fetched successfully",
      stats,
    });
  } catch (error) {
    console.error("GET GOVERNMENT DASHBOARD STATS ERROR:", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = {
  startVerification,
  verifyChallenge,
  rejectChallenge,
  getGovernmentChallenges,
  getGovernmentChallengeById,
  getGovernmentDashboardStats

};