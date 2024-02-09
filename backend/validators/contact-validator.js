const { z } = require("zod");

const contactSchema = z.object({
    firstName : z
    .string({required_error:"first name is required"})
    .trim()
    .min(3,{message: "first name should at least consist 3 characters"})
    .max(255,{message: "first name should at least consist 255 characters"}),
    lastName : z
    .string({required_error:"last name is required"})
    .trim()
    .min(3,{message: "last name should at least consist 3 characters"})
    .max(255,{message: "last name should at least consist 255 characters"}),
    email : z
    .string({message : "email is required"})
    .trim()
    .email({message : "enter a valid email address"}),
    message : z
    .string({msg : "drop any message"})
    .trim()
    .max(255,{message : "the field should not exceed 255 characters"}),
});

module.exports = contactSchema;