import profile from '../../Images/Foto.png';
const AboutMe = () => {
  return (
    <>
    <h2 className='flex justify-center text-white text-[30px] font-text font-bold mb-5'>
      About me
    </h2>
    <div className='flex flex-row justify-evenly items-center gap-[25px] pl-2 pr-2'>
      <img src={profile} alt='profile' 
      className='w-[362px] h-[450px] rounded-[40px]'/>  
      <div>
        <p className='text-white text-[19px] font-text max-w-[680px]'>
        I am a web developer specialized in Frontend. I have always been passionate about all things computer and website building, which is why I pursue them as a career.
        <br/><br/>
        I have more than a year of experience in web development. I am competent to work effectively in a team.
        </p>
        <ul className='flex flex-row justify-evenly mt-[30px]'>
          <li>
            <a href='https://www.linkedin.com/in/aledjv/' target='_blank'>
              <img src='https://acortar.link/linkedinSVG' 
              className='h-[40px] w-[40px]' alt='LinkedIn-icon' />
            </a>
          </li>
          <li>
            <a href='https://github.com/aledjv22' target='_blank'>
              <img src='https://acortar.link/githubSVG' 
              alt='GitHub-icon' className='h-[40px] w-[40px]' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/v_alediaz_' target='_blank'>
              <img src='https://acortar.link/twitterSVG' 
              alt='Twitter-icon' className='h-[40px] w-[40px]' />
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default AboutMe;