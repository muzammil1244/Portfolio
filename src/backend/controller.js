import express from "express";
import { DATA } from "./module.js";
import multer from "multer";

export const router = express();

// Use multer with memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route for posting data with image
router.post("/postDATA", upload.single("image"), async (req, res) => {
    console.log("Route hit!");

    const { name, paragraph } = req.body;
    const file = req.file;

    try {
        const saveData = new DATA({
            name,
            paragraph,
            image: {
                data: file.buffer,
                contentType: file.mimetype,
            }
        });

        const saved = await saveData.save();
        console.log("Data stored:", saved);
        res.status(200).json({ message: "Blog uploaded successfully", id: saved._id });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Route to show image
// GET route to send all blogs to frontend
router.get("/Users", async (req, res) => {
    try {
      const allBlogs = await DATA.find();
      res.status(200).json(allBlogs);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch blogs" });
    }
  });
  
