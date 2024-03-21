import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";

export const POST = async (request)=> {
    const { userId, prompt, tag } = await request.json()

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save()
        return new Response(JSON.strongify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Échec lors de la création du prompt.", { status : 500 })
    }
}