import Debouche from '../assets/images/Debouche.webp'
import { FaGraduationCap, FaUsers, FaMedal } from 'react-icons/fa';

const App = () => {
          return (
                    <div className='justify-center flex pt-10 gap-16 mt-10 items-center'>
                              <div className='flex gap-7 flex-col'>
                              <h1 className='text-4xl font-semibold text-[#001948] font-serif'>Quelques débouchés</h1>
                              <div className='flex flex-col gap-14'>
                                <div>
                                     
                                        <p className='text-[#001948] text-[14px]'>
                                        Formez-vous à une panoplie de métiers du numérique avec nous et venez <br />
                                        acquérir les fondements de la programmation (qui vous servira pour les <br /> 
                                        différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des <br /> 
                                        métiers du futur…
                                        </p>
                                 </div>
                                 <div>
                                     
                                        <p className='text-[#001948] text-[14px]'>
                                        Développeur back end, développeur front end, développeurs mobile, chefs de <br /> 
                                       projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique <br /> 
                                        SSI, auditeur organisationnel SSI, administrateur système et réseau, <br />
                                         développeur de sécurité…


                                        </p>
                                 </div> 

                              </div>
                              </div>
                              <img className='w-[25%] h-[8%]  ' src={Debouche} alt="" />

                    </div>
          );
}

export default App;