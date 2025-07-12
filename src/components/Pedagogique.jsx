import Photos1 from '../assets/images/photo1.webp';
import Mask1 from '../assets/images/Mask-group-1.webp'
import Mask2 from '../assets/images/Mask-group-2.webp'
import Mask3 from '../assets/images/Mask-group-3.webp'
const Pedagogique = () => {
          return (
                    <>
                              <div className='justify-center flex pt-10 gap-16 mt-10 ml-56'>
                                        <div className='flex gap-6 items-center'>
                                                  <img className='w-[30%] h-[100%]' src={Photos1} alt="" />
                                                  <div className='flex flex-col gap-10'>
                                                            <h1 className='text-4xl font-semibold text-[#001948]'>Le programme pédagogique</h1>
                                                            <p className='text-[#001948]'>
                                                                      Suivant le système LMD, jusqu’au Master, notre formation repose sur un <br />
                                                                      programme pédagogique conçu en adéquation avec les attentes du marché. La <br />
                                                                      formation est sanctionnée par  un diplôme de Licence et de Master en <br />
                                                                      Informatique reconnu par le MESupRes de Madagascar.
                                                            </p>
                                                            <button className='text-[#001948] p-2 rounded-lg border-2 cursor-pointer hover:text-white hover:bg-[#001948] font-bold transition-all w-52'>Notre Programme</button>
                                                  </div>
                                        </div>
                              </div>
                              <div className='flex items-center gap-7 ml-56 mt-14'>
                                        <div className='px-12 py-6 bg-red-100 flex flex-col w-64 rounded-lg'>
                                                  <h2 className='text-[#DFA408] font-bold text-4xl'>25%</h2>
                                                  <p className='text-[#001948] font-bold text-[18px]'>Apprentissage <br />théoriques <br />en présentiel</p>
                                        </div>
                                        <div className='px-12 py-7 bg-red-100 flex flex-col w-64 rounded-lg'>
                                                  <h2 className='text-[#DFA408] font-bold text-4xl'>25%</h2>
                                                  <p className='text-[#001948] font-bold text-[18px]'>Apprentissage sur<br />support <br />numériques</p>
                                        </div>
                                        <div className='px-12 py-8 bg-red-100 flex flex-col w-64 rounded-lg'>
                                                  <h2 className='text-[#DFA408] font-bold text-4xl'>25%</h2>
                                                  <p className='text-[#001948] font-bold text-[18px]'>Travaux <br />individuels <br />de l'étudiant</p>
                                        </div>
                                        <div className='px-12 py-10 bg-red-100 flex flex-col w-64 rounded-lg'>
                                                  <h2 className='text-[#DFA408] font-bold text-4xl'>25%</h2>
                                                  <p className='text-[#001948] font-bold text-[18px]'>Apprentissage <br /> en entreprise</p>
                                        </div>
                              </div>
                              <div className='flex items-center gap-7 mt-4 ml-56'>
                                        <img className='w-[27%] h-[10%]' src={Mask1} alt="" />
                                        <img className='w-[27%] h-[22%]' src={Mask2} alt="" />
                                        <img className='w-[27%] h-[22%]' src={Mask3} alt="" />
                              </div>
                    </>
          );
}

export default Pedagogique;