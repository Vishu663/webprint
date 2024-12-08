// proxy.js
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const app = express();
app.use(cors());

// Set CORS headers for all routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  next();
});

// Define your proxy route
app.use('/printers', createProxyMiddleware({
  target: 'http://192.168.137.91', // Replace with the actual IP address of the printer
  changeOrigin: true,
}));

// Start the proxy server
const port = 5001; // Choose any available port
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
