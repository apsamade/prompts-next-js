'use client'

import { useState, useEffect, Suspense } from "react"

import Profile from "@components/Profile"

const GET = ( {params} ) => {
    const [profileId, setProfileId] = useState([])

    useEffect(()=>{
        const fetchProfile = async () =>{
            const response = await fetch(`/api/users/${params.id}/posts`)
            const data = await response.json()

            setProfileId(data)
        }
        if(params.id) fetchProfile()
    }, [params.id])
    console.log('params : ', params.id)


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
const profileId = ({params}) => {
    console.log('this params : ', params)
    return(
        <Suspense fallback={<p>Loading ...</p>}>
            <GET 
                params={params}
            />
        </Suspense>
    )
}
export default profileId