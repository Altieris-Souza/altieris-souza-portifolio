import { FaLinkedin } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { FaSlack } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './App.css';
import { useState } from "react";



function App() {
  
  const [lineWidthSobre, setLineWidthSobre] = useState(40);
  const [colorSobre, setColorSobre] = useState(0.9);
  const [lineWidthExperiencias, setLineWidthExperiencias] = useState(40);
  const [colorProjetos, setColorProjetos] = useState(0.9);
  const [lineWidthProjetos, setLineWidthProjetos] = useState(40);
  const [colorExp, setColoExp] = useState(0.9);

  const handleMouseEnterSobre = () => {
    setLineWidthSobre(80);
    setColorSobre(0.9)
  };
  
  const handleMouseLeaveSobre = () => {
    setLineWidthSobre(40);
    setColorSobre(0.3)
  };

  const handleMouseEnterExperiencias = () => {
    setLineWidthExperiencias(80);
    setColoExp(0.9)
  };
  
  const handleMouseLeaveExperiencias = () => {
    setLineWidthExperiencias(40);
    setColoExp(0.3)
  };

  const handleMouseEnterProjetos = () => {
    setLineWidthProjetos(80);
    setColorProjetos(0.9)
  };
  
  const handleMouseLeaveProjetos = () => {
    setLineWidthProjetos(40);
    setColorProjetos(0.3)
  };
  return (
    <div className="App">
      <header className='ContainerOne'>
        
        <div className='PersonalData'>
          <h1>Altieris Souza</h1>
          <h2>Desenvolvedor Full-Stack</h2>
          <p>Eu crio experiências digitais perfeitas em pixels, envolventes e acessíveis.</p>
        </div>


        <div className='Menu'>
          <div className='ContainerMenu' onMouseEnter={handleMouseEnterSobre} onMouseLeave={handleMouseLeaveSobre} style={{opacity: `${colorSobre}`}}>
            <a href=""><span className='Line' style={{ width: `${lineWidthSobre}px`}}></span><span className='Text'>Sobre</span></a>
          </div>
          <div className='ContainerMenu' onMouseEnter={handleMouseEnterExperiencias} onMouseLeave={handleMouseLeaveExperiencias} style={{opacity: `${colorExp}`}}>
            <a href=""><span className='Line' style={{ width: `${lineWidthExperiencias}px` }}></span><span className='Text'>Experiências</span></a>
          </div>
          <div className='ContainerMenu' onMouseEnter={handleMouseEnterProjetos} onMouseLeave={handleMouseLeaveProjetos} style={{opacity: `${colorProjetos}`}}>
            <a href=""><span className='Line' style={{ width: `${lineWidthProjetos}px` }}></span><span className='Text'>Projetos</span></a>
          </div>
        </div>

        <div className='SocialMedia'>
          <FaLinkedin style={{ width: '22px', height: '22px' }}/>
          <SlSocialGithub style={{ width: '22px', height: '22px' }}/>
          <SlSocialInstagram style={{ width: '22px', height: '22px' }}/>
          <FaSlack style={{ width: '22px', height: '22px' }}/>
          <SiGmail style={{ width: '22px', height: '22px' }}/>
        </div>


      </header>
      <main className='ContainerTwo'>
        <div className='Content'>
          <h3>Sobre</h3>
          <div className='ContentAbout'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan velit in justo dapibus, at posuere nisi condimentum. Integer vel urna eu nibh efficitur vehicula. Maecenas consequat mauris ut justo cursus, id tempor leo imperdiet. Phasellus mattis, elit ac interdum consectetur, nunc ipsum feugiat est, nec aliquet lacus magna sit amet risus. Vivamus luctus, lorem sed tincidunt vehicula, elit turpis consectetur eros, vel suscipit nunc velit sed nunc. Vivamus nec turpis nec metus venenatis volutpat. Sed at tortor vel est vehicula fringilla sit amet id ipsum. Sed id urna ac dolor faucibus tincidunt. Ut quis sem id libero luctus commodo. Suspendisse potenti. Nam vitae ullamcorper mi. Sed tincidunt gravida lectus, a convallis eros facilisis a. Nullam feugiat feugiat justo, sed luctus mi efficitur in.</p>
          </div>

          <h3>Experiências</h3>
          <div className='ContentAbout'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan velit in justo dapibus, at posuere nisi condimentum. Integer vel urna eu nibh efficitur vehicula. Maecenas consequat mauris ut justo cursus, id tempor leo imperdiet. Phasellus mattis, elit ac interdum consectetur, nunc ipsum feugiat est, nec aliquet lacus magna sit amet risus. Vivamus luctus, lorem sed tincidunt vehicula, elit turpis consectetur eros, vel suscipit nunc velit sed nunc. Vivamus nec turpis nec metus venenatis volutpat. Sed at tortor vel est vehicula fringilla sit amet id ipsum. Sed id urna ac dolor faucibus tincidunt. Ut quis sem id libero luctus commodo. Suspendisse potenti. Nam vitae ullamcorper mi. Sed tincidunt gravida lectus, a convallis eros facilisis a. Nullam feugiat feugiat justo, sed luctus mi efficitur in.</p>
          </div>

          <h3>Projetos</h3>
          <div className='ContentAbout'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan velit in justo dapibus, at posuere nisi condimentum. Integer vel urna eu nibh efficitur vehicula. Maecenas consequat mauris ut justo cursus, id tempor leo imperdiet. Phasellus mattis, elit ac interdum consectetur, nunc ipsum feugiat est, nec aliquet lacus magna sit amet risus. Vivamus luctus, lorem sed tincidunt vehicula, elit turpis consectetur eros, vel suscipit nunc velit sed nunc. Vivamus nec turpis nec metus venenatis volutpat. Sed at tortor vel est vehicula fringilla sit amet id ipsum. Sed id urna ac dolor faucibus tincidunt. Ut quis sem id libero luctus commodo. Suspendisse potenti. Nam vitae ullamcorper mi. Sed tincidunt gravida lectus, a convallis eros facilisis a. Nullam feugiat feugiat justo, sed luctus mi efficitur in.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
