 import Nexta from '../assets/images/LOGO-NEXTA.webp';
 import Passerelles from '../assets/images/PN_Logo_baseline_color_ENG.png';
 import Yooz from '../assets/images/Yooz-2023-Logo-2.webp';
 import Etech from '../assets/images/logo-etech.png';
 import Emit from '../assets/images/logo_emit.png';
 import Numer from '../assets/images/Logo-Numer-vf.png';
 import Bpartner from '../assets/images/bp-logo-full-2048x663.webp';
 import Youth from '../assets/images/YIF_LOGO_512x512_BL_on_WH-1.webp';
 import Kanteco from '../assets/images/logo-kante-company-1.png';
  
 const Techno = () => {
          return ( 
                    <div>
                      <div className="flex flex-col text-center mt-7 ">
                         <h1 className="text-[#001948] text-3xl font-bold">Nos partenaires</h1>
                         <p className="text-[#001948]">L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps <br />
                         enseignant mais aussi du soutien et la collaboration des entreprises partenaires
                         </p>
                         <div className='flex items-center gap-15 text-center ml-96 mt-5'>
                             <img className='w-[9%]  ' src={Nexta} alt="" /> 
                             <img className='w-[12%]  'src={Passerelles} alt="" />
                             <img className='w-[10%]  'src={Yooz} alt="" />
                             <img className='w-[10%]  'src={Etech} alt="" />
                             <img className='w-[9%]  'src={Emit} alt="" />
                         </div>
                          <div className='flex items-center gap-15 text-center ml-96 mt-5'>
                             <img className='w-[8%]  ' src={Numer} alt="" /> 
                             <img className='w-[12%]  'src={Bpartner} alt="" />
                             <img className='w-[8%]  'src={Youth} alt="" />
                             <img className='w-[8%]  'src={Kanteco} alt="" />
                          </div>
                      
                       </div>
                    </div>
           );
}
 
export default Techno;