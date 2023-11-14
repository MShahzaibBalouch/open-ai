const OpenAI = require("openai");
const express = require("express");
const router = express.Router();

const openai = new OpenAI({
  apikey:process.env.OPENAI_KEY
});
router.get("/api", async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  // res.json(completion.choices[0]);
  res.json({key:process.env.OPENAI_KEY});
});


module.exports = router;