import { Resume } from "../models";
import multer from "multer";
import path from "path";
import fs from "fs";
import CustomErrorHandler from "../services/CustomErrorHandler";
import resumeSchema from "../validators/resumeValidator";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;

    cb(null, uniqueName);
  },
});
const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single("image"); // 5MB

const resumeController = {
  createResume(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }

      if (!req.file) {
        return next(new Error("Image not found."));
      }

      const filePath = req.file.path;

      const { error } = resumeSchema.validate(req.body);
      if (error) {
        fs.unlink(`${appRoot}/${filePath}`, (err) => {
          if (err) {
            return next(CustomErrorHandler.serverError(err.message));
          }
        });
        return next(error);
      }
      const {
        userId,
        job,
        projectName,
        occupation,
        name,
        email,
        address,
        phone,
        country,
        city,
        linkedIn,
        website,
        message,
        educations,
        experiences,
        skills,
        languages,
        interests,
      } = req.body;
      let document;
      try {
        document = await Resume.create({
          userId,
          job,
          projectName,
          occupation,
          name,
          email,
          address,
          phone,
          country,
          city,
          linkedIn,
          website,
          message,
          image: filePath,
          educations: JSON.parse(educations),
          experiences: JSON.parse(experiences),
          skills: JSON.parse(skills),
          languages: JSON.parse(languages),
          interests: JSON.parse(interests),
        });
      } catch (err) {
        return next(err);
      }
      res.status(201).json(document);
    });
  },
  updateResume(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
      let filePath;
      if (req.file) {
        filePath = req.file.path;
      }
      const { error } = resumeSchema.validate(req.body);
      if (error) {
        if (req.file) {
          fs.unlink(`${appRoot}/${filePath}`, (err) => {
            if (err) {
              return next(CustomErrorHandler.serverError(err.message));
            }
          });
        }
        return next(error);
      }
      const {
        userId,
        job,
        projectName,
        occupation,
        name,
        email,
        address,
        phone,
        country,
        city,
        linkedIn,
        website,
        message,
        educations,
        experiences,
        skills,
        languages,
        interests,
      } = req.body;
      let document;
      try {
        document = await Resume.findOneAndUpdate(
          { _id: req.params.id },
          {
            userId,
            job,
            projectName,
            occupation,
            name,
            email,
            address,
            phone,
            country,
            city,
            linkedIn,
            website,
            message,
            educations: JSON.parse(educations),
            experiences: JSON.parse(experiences),
            skills: JSON.parse(skills),
            languages: JSON.parse(languages),
            interests: JSON.parse(interests),
            ...(req.file && { image: filePath }),
          },
          { new: true }
        );
      } catch (err) {
        return next(err);
      }
      res.status(201).json(document);
    });
  },
  async userResume(req, res, next) {
    let document;
    try {
      document = await Resume.find({ userId: req.params.userId })
        .select("-__v")
        .sort({ updatedAt: -1 });
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }

    return res.json(document);
  },

  async deleteResume(req, res, next) {
    const document = await Resume.findOneAndRemove({ _id: req.params.id });
    if (!document) {
      return next(new Error("Nothing to delete."));
    }
    const imagePath = document._doc.image;
    fs.unlink(`${appRoot}/${imagePath}`, (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError());
      }
    });
    res.json(document);
  },
  async searchResume(req, res, next) {
    let document;
    try {
      document = await Resume.find({
        projectName: { $regex: req.params.projectName, $options: "i" },
      }).select("-__v");
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(document);
  },
};
export default resumeController;
