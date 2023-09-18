import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({ url, image, github, title, text }) => {
  return (
    <article className='bg-white rounded-lg shadown-md hover:shadow-xl duration-300'>
      <img
        src={image}
        alt={title}
        className='w-full object-cover rounded-t-lg h-64'
      />
      <div className='capitalize p-8 '>
        <h4 className='text-lg tracking-wide font-medium'>{title}</h4>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='hover:text-black duration-300 text-slate-500 h-9 w-8' />
          </a>
          <a href={github}>
            <FaGithubSquare className='hover:text-black duration-300 text-slate-500 h-9 w-8' />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
