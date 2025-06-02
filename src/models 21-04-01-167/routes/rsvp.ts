import express, { Request, Response } from 'express';
import RSVP, { IRSVP } from '../models/rsvp';

const router = express.Router();

// POST kirim RSVP
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, attending, message } = req.body;
    const newRSVP = new RSVP({ name, attending, message });
    await newRSVP.save();
    res.status(201).json({ message: 'RSVP berhasil dikirim' });
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengirim RSVP' });
  }
});

// GET semua RSVP
router.get('/', async (req: Request, res: Response) => {
  try {
    const rsvps: IRSVP[] = await RSVP.find().sort({ createdAt: -1 });
    res.json(rsvps);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil RSVP' });
  }
});

export default router;
