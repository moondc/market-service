import { AxiosResponse } from "axios";
import axiosWrapper from "./core/api/axiosWrapper";
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    axiosWrapper.get<string>("https://facebook.com").subscribe((response: string) => {
        res.send(response);
    })
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;