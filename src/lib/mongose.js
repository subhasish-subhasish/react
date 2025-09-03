import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !email.includes('@') || !message) {
            return res.status(422).json({ message: 'Invalid input.' });
        }

        // Connect to the database
        const { db } = await connectToDatabase();

        // Create the new message object
        const newMessage = {
            name,
            email,
            message,
            createdAt: new Date(),
        };

        // Insert into the 'messages' collection
        const result = await db.collection('messages').insertOne(newMessage);

        // Send a success response
        res.status(201).json({ message: 'Message stored successfully!', messageId: result.insertedId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Could not connect to the database or save message.' });
    }
}