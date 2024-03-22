'use client'

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"


const MyProfile = () => {
    const router = useRouter()
    const {data: session} = useSession()
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await response.json()

            setPosts(data)

        }
        
        if(session?.user.id) fetchPosts();
    }, []);
    
    console.log(posts)
    
    const handleEdit = async (post)=>{
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post)=>{
        const hasConfirmed = confirm("T'es sur de vouloir supprimer ce prompt petit noob ?")

        if(hasConfirmed){
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE'
                });

                const filteredPosts = posts.filter((p) => p._id.toString() !== post._id.toString())
                setPosts(filteredPosts)
                console.log("prompt supprimé !")

            } catch (error) {
                
            }
        }
    }

    return (
        <Profile 
            name="My"
            desc="Bienvenue sur ma page personnalisé"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile