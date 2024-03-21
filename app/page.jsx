import Feed from '@components/Feed'

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Découvrir & Partager
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae accusamus quo accusantium dolore, excepturi repudiandae voluptatum nam saepe impedit at. In, sit accusantium perspiciatis saepe quas corrupti minima quos ratione.
            </p>

            <Feed />
        </section>
    )
}

export default Home
