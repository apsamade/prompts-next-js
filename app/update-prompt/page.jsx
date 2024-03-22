'use client'

import { useEffect, useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import Form from "@components/Form"

const EditPrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id')

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({ prompt: '', tag: '' })

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json()

            setPost({
                prompt: data.prompt,
                tag: data.tag
            })
        }
        if(promptId) getPromptDetails();
    }, [promptId])

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if(!promptId) return alert('Prompt ID non trouvé')

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })

            if (response.ok) {
                router.push("/profile")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }
    return (
        <Suspense fallback={<p>En attente du chargement du contenue ...</p>}>
            <Form
                type='Edit'
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updatePrompt}
            />
        </Suspense>
    )
}

export default EditPrompt