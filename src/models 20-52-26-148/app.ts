import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import commentsRouter from './routes/comments';
import rsvpRouter from './routes/rsvp';

dotenv.config(); // <- load isi file .env

const app: Application = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';

if (!MONGO_URI) {
  console.error('MONGO_URI belum diset di .env');
  process.exit(1); // keluar kalau tidak ada koneksi database
}

// Middleware
app.use(cors());
app.use(express.json());

// Koneksi MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Terhubung ke MongoDB'))
  .catch((error) => console.error('Gagal konek ke MongoDB:', error));

// Routing
app.use('/api/comments', commentsRouter);
app.use('/api/rsvp', rsvpRouter);

// Endpoint test
app.get('/', (req: Request, res: Response) => {
  res.send('API Buku Tamu & RSVP aktif!');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
