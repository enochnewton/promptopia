import { Feed } from "@components";

const Home = () => {
  return (
    <section className='w-full flex-col flex-center'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient'>AI-Powered Prompts</span>
      </h1>

      <p className='desc text-center'>
        Promptia is an open-source AI prompting tool that helps you discover,
        share, and create prompts for your next writing project.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
