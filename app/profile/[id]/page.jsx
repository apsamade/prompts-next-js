'use client'

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"

import Profile from "@components/Profile"

const GET = () => {
    const [profileId, setProfileId] = useState([])
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id')

    useEffect(()=>{
        const fetchProfile = async () =>{
            const response = await fetch(`/api/users/${promptId}/posts`)
            const data = await response.json()

            setProfileId(data)
        }
        if(promptId) fetchProfile()
    }, [promptId])
    console.log(profileId.find(p => p.creator.username))


    return (
        <section className="w-full">
            {profileId.length > 0 && (
                <Profile 
                    name={profileId[0].creator.username}
                    desc="Bienvenue sur ma page personnalisée"
                    data={profileId}
                />
            )}
        </section>
    )
}
const profileId = () => {
    return(
        <Suspense fallback={<p>Loading ...</p>}>
            <GET />
        </Suspense>
    )
}
export default profileId