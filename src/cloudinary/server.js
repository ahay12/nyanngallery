// server.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/get-images", async (req, res) => {
  const { folderPath } = req.body;
  const cloudName = process.env.CLOUD_NAME;
  const apiKey = process.env.API_KEY;
  const apiSecret = process.env.API_SECRET;
  // console.log(cloudName, apiKey, apiSecret);
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      { expression: `folder:${folderPath}` },
      {
        auth: {
          username: apiKey,
          password: apiSecret,
        },
      }
    );

    res.json(response.data.resources);
  } catch (error) {
    console.error(
      "Error fetching images from Cloudinary:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
