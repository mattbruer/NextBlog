import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';

interface Message {
  id: ObjectId;
  email: string;
  name: string;
  message: string;
}
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() == '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newMessage: Message = {
      email,
      name,
      message,
      id: new ObjectId(),
    };

    let client;
    try {
      client = await MongoClient.connect(process.env.DATABASE_URL!);
    } catch (error) {
      return res.status(500).json({ msg: "something's wrong" });
    }

    const db = client.db();

    let result;
    try {
      result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      return res.status(500).json({ msg: "something's wrong storing message" });
    }
    client.close();

    res.status(201).json({ message: 'Successfully stored message' });
  }
}

export default handler;
