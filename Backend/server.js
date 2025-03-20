const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// const allowedOrigins = [
//     "https://jade-florentine-ba2c4a.netlify.app",
//     "https://peaceful-pony-df20f0.netlify.app",
// ];

app.use(cors(
//    {
//    origin:["https://deploy-mern-1whq.vercel.app"],
//    methods: ["GET", "POST"],
//    credentials: true
// }
));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, 
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes); // ✅ Fixed route path

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
