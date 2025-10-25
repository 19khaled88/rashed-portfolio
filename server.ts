import express, { Request, Response } from 'express';
import next from 'next';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files
  server.use('/_next', express.static(path.join(__dirname, '.next')));
  server.use('/public', express.static(path.join(__dirname, 'public')));

  // Handle everything else
  server.all('*', (req:Request, res:Response) => handle(req, res));

  server.listen(port, (err?:Error) => {
    if (err) throw err;
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
});
