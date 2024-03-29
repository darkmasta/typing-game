import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const endpoint = 'https://api.quotable.io/random';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const response = await axios.get(endpoint);
        const data = response.data;
        res.status(200).json(data);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
