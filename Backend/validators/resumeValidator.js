import Joi from "joi";

const resumeSchema = Joi.object({
  userId: Joi.string().required(),
  job: Joi.string().min(3).max(50).required(),
  projectName: Joi.string().min(3).max(30).required(),
  occupation: Joi.string().min(3).max(30).required().allow(""),
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  address: Joi.string().min(10).max(100).required(),
  phone: Joi.string().pattern(new RegExp("^[0-9]{10,15}$")).required(),
  country: Joi.string().min(3).max(50).required(),
  city: Joi.string().min(3).max(30).required().allow(""),
  linkedIn: Joi.string().uri().required().allow(""),
  website: Joi.string().uri().required().allow(""),
  message: Joi.string().min(6).max(500).required(),
  educations: Joi.string().required(),
  experiences: Joi.string().required(),
  skills: Joi.string().required(),
  languages: Joi.string().required(),
  interests: Joi.string().required(),
});
export default resumeSchema;
