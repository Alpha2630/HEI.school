import Logo from '../assets/images/logo-hei.png';
import { IoLogoFacebook } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
          return ( 
                    <div className='bg-[#001948] flex justify-center p-4 gap-28'>
                         <div className='flex flex-col gap-7 items-center'>
                              <img className='w-[35%]' src={Logo} alt="" />
                              <p className='text-white text-[14px]'>Formation habilitée par <br />L'Etat suivant le système <br />LMD</p>
                              <p className='text-white text-[14px]'>Habilitation MESupRes <br />n°31309/2023</p>
                         </div> 
                            <div className='flex flex-col gap-4 mt-20'>
                               <h3 className='font-bold text-[18px] text-white font-serif'>Adresse</h3>
                               <p className='text-white text-[14px]'>II J 161 R Ambodivoanjo</p>
                               <p className='text-white text-[14px]'>Ivandry Antananarivo</p>
                               <p className='text-white text-[14px]'>101, Madagascar</p>
                          </div> 
                              <div className='flex flex-col gap-4 mt-20'>
                               <h3 className='font-bold text-[18px] text-white font-serif'>Navigation</h3>
                               <div className='flex flex-col gap-2'>
                                        <a href="#" className='text-[12px] text-[#DFA408] font-bold cursor-pointer'>Accueil</a>
                                        <a href="#" className='text-[12px] text-white font-bold cursor-pointer hover:text-[#DFA408] transition duration-300 ease-in-out'>Actualité</a>
                                        <a href="#" className='text-[12px] text-white font-bold cursor-pointer hover:text-[#DFA408] transition duration-300 ease-in-out'>Bourse d'étude</a>
                                        <a href="#" className='text-[12px] text-white font-bold cursor-pointer hover:text-[#DFA408] transition duration-300 ease-in-out'>Inscription</a>
                                </div>
                          </div> 
                            <div className='flex flex-col gap-4 mt-20'>
                               <h3 className='font-bold text-[18px] text-white font-serif'>Médias sociaux</h3>
                               <div className='flex gap-3'>
                                        <IoLogoFacebook className='bg-[#DFA408] text-white p-2 rounded-full text-4xl cursor-pointer'/>
                                        <FaLinkedin  className='bg-[#DFA408] text-white p-2 rounded-full text-4xl cursor-pointer'/>
                                        <FaInstagram className='bg-[#DFA408] text-white p-2 rounded-full text-4xl cursor-pointer'/>
                               </div>
                              
                          </div> 
                                
                    </div>
           );
}
 
export default Footer;