import express from "express"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
import { connectDB } from "./services/db.js"; 
import productRoutes from "./src/controllers/productRoutes.js"; 

dotenv.config(); 
const app = express(); 

app.use(cors({
  origin: "*" 
}));

app.use(express.json()); 

app.use("/api/products", productRoutes); 

const dbURI = process.env.MONGO_URI; 
connectDB(dbURI); 

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));