import Cloud from '../assets/images/Cloud-et-cybersecurite.png';
import Intelligence from '../assets/images/Intelligence-artificielle.png';
import Ingenirie from '../assets/images/Ingenierie-logicielle.png';
const Domaine = () => {
          return ( 
                    <div className="text-center mt-5 flex flex-col gap-6 bg-gray-100 p-7">
                              <h1 className="text-[#001948] font-bold font-serif text-4xl">Domaines</h1>
                              <p className="text-[14px] text-[#001948]">Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
                              <div className='flex justify-center mt-5 gap-6'>
                                        <div className='bg-white rounded-lg shadow w-[19%] p-6 flex-col gap-4 flex items-center'>
                                        <img className='w-[60%]' src={Cloud} alt="" />
                                        <div>
                                                  <h3 className='text-[#DFA408] font-bold'>Cloud et cybersécurité</h3>
                                                  <p className='text-[#001948] text-[14px]'>
                                                            Maîtrisez les engrenages des outils en 
                                                            ligne interconnectés sur les nuages 
                                                            (comme sur AWS). Ou encore, devenez
                                                             maître de la sécurisation des données
                                                              en ligne ou des programmes et
                                                               applications contre les cybermenaces.
                                                                Chez HEI, vous allez vous former dans
                                                                 le domaine du cloud et de la 
                                                                 cybersécurité.
                                                  </p>
                                        </div>

                                        </div>

                                        <div className='bg-white rounded-lg shadow w-[19%] p-6 flex-col gap-4 flex items-center'>
                                        <img className='w-[60%]' src={Intelligence} alt="" />
                                        <div className='flex flex-col gap-3'>
                                                  <h3 className='text-[#DFA408] font-bold'>Intelligence artificielle</h3>
                                                  <p className='text-[#001948] text-[14px]'>
                                                          Le monde de la reconnaissance faciale ou la
                                                           détection d’obstacles par les voitures semi-autonomes
                                                            vous fascinent ? Ce n’est pas sorcier, cela s’apprend.
                                                             Apprenez les bases de l’intelligence artificielle lors
                                                              de vos cours chez HEI.
                                                  </p>
                                        </div>

                                        </div>   
                                        
                                        <div className='bg-white rounded-lg shadow w-[19%] p-6 flex-col gap-4 flex items-center'>
                                        <img className='w-[60%]' src={Ingenirie} alt="" />
                                        <div>
                                                  <h3 className='text-[#DFA408] font-bold'>Ingénierie logicielle</h3>
                                                  <p className='text-[#001948] text-[14px]'>
                                                            Apprenez les principes de la conception
                                                             ou le développement de programmes et d’applications
                                                            web et mobile et explorez le monde fascinant des “codes”.
                                                             A la fin de votre formation, vous serez aptes à proposer
                                                            des solutions pratiques, créatives et innovantes à des
                                                             particuliers ou des entreprises pour leurs besoins numériques.


                                                  </p>
                                        </div>

                                        </div>



                                        {/* <img src={Intelligence} alt="" />
                                        <img src={Ingenirie} alt="" /> */}
                              </div>
                    </div>
           );
}
 
export default Domaine;