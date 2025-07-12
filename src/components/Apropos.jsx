import Apropos from '../assets/images/A-propos-left-1.webp'
import { FaGraduationCap, FaUsers, FaMedal } from 'react-icons/fa';

const App = () => {
          return (
                    <div className='justify-center flex pt-10 gap-8 mt-10'>
                              <img className='w-[30%] h-[10%]' src={Apropos} alt="" />
                              <div className='flex gap-7 flex-col'>
                              <h1 className='text-4xl font-semibold text-[#001948]'>À propos de nous</h1>
                              <div className='flex flex-col gap-14'>
                                <div>
                                        <div className='flex gap-3 items-center'>
                                        <FaGraduationCap className="text-yellow-500 text-5xl mt-1" />
                                        <p className='font-bold text-2xl text-[#001948]'>+3ans</p>
                                        </div>
                                        <p className='text-[#001948] text-[14px]'>
                                        Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers <br />
                                        de l’informatique. Nous sommes un groupe d’experts, de <br /> 
                                        professionnels et des passionnés de l’informatique de Madagascar <br /> 
                                        et du monde entier.
                                        </p>
                                 </div>
                                 <div>
                                        <div className='flex gap-3 items-center'>
                                        <FaUsers className="text-yellow-500 text-3xl mt-1" />
                                        <p className='font-bold text-2xl text-[#001948]'>+250 étudiants</p>
                                        </div>
                                        <p className='text-[#001948] text-[14px]'>
                                        Plus de 250 étudiants et plus d’une dizaine d’entreprises ont <br /> 
                                        déjà fait confiance à notre formation habilitée par l’État <br /> 
                                        malgache. Avec eux tous, nous sommes fiers de pouvoir parler <br />
                                         de la “grande famille HEI”.
                                        </p>
                                 </div> 
                                   <div>
                                        <div className='flex gap-3 items-center'>
                                        <FaMedal className="text-yellow-500 text-3xl mt-1" />
                                        <p className='font-bold text-2xl text-[#001948]'>Notre Mission</p>
                                        </div>
                                        <p className='text-[#001948] text-[14px]'>
                                        Notre mission est d’amener des jeunes malgaches sur des <br /> 
                                        domaines porteurs comme l’intelligence artificielle, la <br /> 
                                        cybersécurité ou la programmation afin de favoriser leur <br />
                                         employabilité et le développement de Madagascar.
                                        </p>
                                 </div>

                              </div>
                              </div>
                    </div>
          );
}

export default App;