const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema(
  {
    // =========================
    // BASIC PROBLEM INFORMATION
    // =========================

    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 150,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },

    // =========================
    // CATEGORY
    // =========================

    category: {
      type: String,
      enum: [
        "Water & Sanitation",
        "Roads & Transport",
        "Electricity",
        "Healthcare",
        "Education",
        "Environment",
        "Public Safety",
        "Other",
      ],
      required: true,
    },

    // =========================
    // LOCATION
    // =========================

    district: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300,
    },

    // =========================
    // MEDIA / PHOTO EVIDENCE
    // =========================

    media: [
      {
        url: {
          type: String,
          required: true,
        },

        publicId: {
          type: String,
        },
      },
    ],

    // =========================
    // CHALLENGE STATUS
    // =========================

    status: {
      type: String,
      enum: [
        "SUBMITTED",
        "UNDER_VERIFICATION",
        "VERIFIED",
        "REJECTED",
        "ASSIGNED",
        "IN_PROGRESS",
        "PILOT",
        "DEPLOYED",
        "COMPLETED",
      ],
      default: "SUBMITTED",
    },

    // =========================
    // WHO SUBMITTED THE PROBLEM
    // =========================

    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    // =========================
// GOVERNMENT VERIFICATION
// =========================

      verification: {
        verifiedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },

        verifiedAt: {
          type: Date,
        },

        remarks: {
          type: String,
          trim: true,
          maxlength: 1000,
        },
      },


  },
  {
    timestamps: true,
  }
);

// =========================
// INDEXES
// =========================

challengeSchema.index({ district: 1 });
challengeSchema.index({ category: 1 });
challengeSchema.index({ status: 1 });
challengeSchema.index({ createdAt: -1 });
challengeSchema.index({ district: 1, category: 1 });
challengeSchema.index({ status: 1, createdAt: -1 });

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;