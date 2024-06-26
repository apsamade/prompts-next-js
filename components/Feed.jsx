'use client'

import { useState, useEffect } from "react"

import PromptCard from "./PromptCard"

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {

    const [searchText, setSearchText] = useState('')
    const [post, setPost] = useState([])

    const handleSearchChange = (e) => {

    }

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt', {
                next: { revalidate: 2 }, // Seconds
            })
            const data = await response.json()

            setPost(data)
        }

        fetchPosts();

    }, []);
    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Recherche pour un tag ou un pseudo"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            <PromptCardList
                data={post}
                handleTagClick={() => { }}
            />
        </section>
    )
}

export default Feed
