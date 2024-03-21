import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Post</span>
            </h1>
            <p className="desc text-left max-w-md">
                {type} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sit dignissimos, magni neque laboriosam, eaque repudiandae natus voluptas atque, culpa voluptates perferendis eligendi modi!
            </p>

            <form 
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-grey-700">
                        Ton IA Prompt
                    </span>

                    <textarea
                        value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value})}
                        placeholder="Écris ton prompt ici ..."
                        required
                        className="form_textarea shadow-2xl border-solid border-2 border-sky-500"
                    />
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-grey-700">
                        Tag
                    </span>

                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value})}
                        placeholder="#sport #nourriture #natation #LOL"
                        required
                        className="form_input shadow-2xl border-solid border-2 border-gray-400"
                    />
                </label>

                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link
                        href="/"
                        className="text-gray-500 text-sm"
                    >
                        Retour
                    </Link>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                    >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form