import aboutImg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutImg} alt='about' className='w-full h-64' />
        <article>
          <SectionTitle text='Someone who likes coffee' />
        </article>
        <p className='text-slate-600 mt-08 leading-loose'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          officia similique maiores nihil error laudantium corrupti quidem,
          nesciunt laboriosam, illum quam rerum ullam laborum sunt. Dignissimos,
          aliquid! Illum, corrupti saepe!
        </p>
      </div>
    </section>
  );
};

export default About;
