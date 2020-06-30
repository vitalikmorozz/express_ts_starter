import express from 'express';
import { Request, Response } from 'express';

const PORT = process.env.PORT || 3000;

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
	res.send('hello world');
});

app.listen(PORT, () => {
	console.log(`Application is listening on port ${PORT}`);
});
