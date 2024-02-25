import { FaLinkedin } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { FaSlack } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='ContainerOne'>
        
        <div className='PersonalData'>
          <h1>Altieris Souza</h1>
          <h2>Desenvolvedor Full-Stack</h2>
          <p>Eu crio experiências digitais perfeitas em pixels, envolventes e acessíveis.</p>
        </div>


        <div className='Menu'>
          <div className='ContainerMenu'>
            <a href=""><span className='Line'></span><span className='Text'>Sobre</span></a>
          </div>
          <div className='ContainerMenu'>
            <a href=""><span className='Line'></span><span className='Text'>Experiências</span></a>
          </div>
          <div className='ContainerMenu'>
            <a href=""><span className='Line'></span><span className='Text'>Projetos</span></a>
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
