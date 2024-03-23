import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";

export const GET = async (req, res) =>{
    try {
        await connectToDB();

        const prompts = await Prompt.find().populate('creator');

        return res.send(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return res.send("Échec lors du fetch all des prompts.", { status: 500 })
    }
}