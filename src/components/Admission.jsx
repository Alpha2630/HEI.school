import { FaArrowRight } from 'react-icons/fa';const Admission = () => {
          return ( 
           <div className="bg-[#6586C7] text-white py-12 px-4 text-center mt-11">
      <h2 className="text-3xl font-bold mb-4 font-serif">Admission</h2>
      <p className="mb-8 max-w-3xl mx-auto">
   Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau : <br />
   une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. 
      </p> 

      <div className='flex text-center justify-center'>
          <div className='bg-[#FCDFB5] p-7 flex flex-col gap-3 w-[25%]'>
                    <h1 className='text-5xl text-left font-bold'>01</h1>
                    <div className='flex items-center gap-10'>
                    <p className='text-[#001948] text-[14px] text-left'> <span className='font-bold text-[#001948] text-[16px]'>Dépot de dossiers :</span> pour les<br /> bacheliers de toutes séries sans <br />limite d'âge</p>
                    <FaArrowRight className=' text-4xl font-bold ml-10'/>

                    </div>
          </div>  
          <div className='bg-[#F7D090] p-7 flex flex-col gap-3 w-[25%]'>
                    <h1 className='text-5xl text-left font-bold'>02</h1>
                    <div className='flex items-center gap-10'>
                    <p className='text-[#001948] text-[14px] text-left'> <span className='font-bold text-[#001948] text-[16px]'>Teste de niveau :</span> composé d'une<br /> épreuve de français niveau B2 et <br />d'une épreuve mathématiques <br />niveau Terminale D</p>
                    <FaArrowRight className=' text-4xl font-bold ml-6'/>

                    </div>
          </div>  
          <div className='bg-[#F1C16B] p-7 flex flex-col gap-3 w-[25%]'>
                    <h1 className='text-5xl text-left font-bold'>03</h1>
                    <div className='flex items-center gap-10'>
                    <p className='text-[#001948] text-[14px]'> <span className='font-bold text-[#001948] text-[16px]'>Inscription définitive </span>(si teste réussi)</p>
                    </div>
          </div>
      </div>
      <div className='mt-10 flex gap-3 justify-center '>
          <button className='text-white font-bold text-[16px] p-2 border-[3px] rounded-lg hover:bg-[#001948] transition-all hover:border-[#001948]'> 
          Inscrivez-vous ici
          </button>
           <button className='text-white bg-[#001948] font-bold text-[16px] p-2 border-[3px] border-[#001948] rounded-lg hover:text-[#001948] hover:bg-white transition-all hover:border-white'> 
          Résultat concours
          </button>
     </div>   
               
            </div>
           );
}
 
export default Admission;