const challenge = require("../models/Challenge.js");
const { uploadToCloudinary } = require("../services/upload.service.js");

async function userChallenge(req, res) {
    try {
        const { title, description, category, district, location } = req.body;

        let media = [];

        if (req.file) {
            const uploadedImage = await uploadToCloudinary(req.file.buffer);

            media.push({
                url: uploadedImage.url,
                publicId: uploadedImage.publicId,
            });
        }

        const newChallenge = await challenge.create({
            title,
            description,
            category,
            district,
            location,
            media,
        });

        res.status(201).json({
            message: "the challenge is submitted successfully",
            challenge: newChallenge,
        });

    } catch (error) {
       

        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
}

async function getAllChallenges(req, res) {
    const allChallenges = await challenge.find();

    res.status(200).json({
        message: "the list is founded",
        list: allChallenges,
    });
}

async function getOneChallenges(req, res) {
    const { id } = req.params;

    const oneChallenge = await challenge.findById(id);

    res.status(200).json({
        message: "Single list is founded",
        singleList: oneChallenge,
    });
}

module.exports = {
    userChallenge,
    getAllChallenges,
    getOneChallenges,
};