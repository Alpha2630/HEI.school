 import Java from '../assets/images/Java.png'
 import C from '../assets/images/C.png'
 import Python from '../assets/images/python.png'
 import Javascript from '../assets/images/JS.png'
 import Ts from '../assets/images/TS.png'
 import Doker from '../assets/images/docker.png';
 import Next from '../assets/images/next.png';
 import Aws from '../assets/images/aws.png';
 import Serverless from '../assets/images/serverless.png';
 import React from '../assets/images/react.png';
 import Openapi from '../assets/images/openapi.png';
 const Techno = () => {
          return ( 
                    <div>
                      <div className="flex flex-col text-center mt-7 bg-gray-300 p-10">
                         <h1 className="text-[#001948] text-3xl font-bold">Les technos et langages utilisées</h1>
                         <p className="text-[#001948]">Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent <br />
                         une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les <br />
                         développeurs à travers le monde.
                         </p>
                         <div className='flex items-center gap-15 text-center ml-96 mt-5'>
                             <img className='w-[8%]  ' src={Java} alt="" /> 
                             <img className='w-[8%]  'src={Python} alt="" />
                             <img className='w-[8%]  'src={Javascript} alt="" />
                             <img className='w-[8%]  'src={C} alt="" />
                             <img className='w-[8%]  'src={Ts} alt="" />
                         </div>
                         <div className='flex items-center gap-15 text-center ml-72 mt-5'>
                             <img className='w-[10%]  ' src={Doker} alt="" /> 
                             <img className='w-[7%]  'src={Next} alt="" />
                             <img className='w-[6%]  'src={Aws} alt="" />
                             <img className='w-[14%]  'src={Serverless} alt="" />
                             <img className='w-[10%]  'src={React} alt="" />
                             <img className='w-[10%]  'src={Openapi} alt="" />
                         </div>
                       </div>
                    </div>
           );
}
 
export default Techno;