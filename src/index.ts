import app from './app'; // Mengimpor aplikasi dari app.ts

const PORT = process.env.PORT || 3000;

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
