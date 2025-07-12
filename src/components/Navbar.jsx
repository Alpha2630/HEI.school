 import Logo from '../assets/images/logo-hei.png'
 export default function Navbar() {
    return(
        <nav class="bg-[#001948] h-20 flex items-center justify-around">
            <div class="logo">
                <img src={Logo} alt="Logo HEI" class="h-15 cursor-pointer hover:opacity-90 transition-all" />
            </div>
    
            <div class="flex gap-6 items-center">
                <a href="#" class="text-[#DFA408] text-[16px] font-bold cursor-pointer transition duration-300 ease-in-out">ACCUEIL</a>
                <a href="#" class="text-white text-[16px] hover:text-[#DFA408] font-bold cursor-pointer transition duration-300 ease-in-out">ACTUALITÉ</a>
                <a href="#" class="text-white text-[16px] hover:text-[#DFA408] cursor-pointer font-bold transition duration-300 ease-in-out">BOURSE D'ÉTUDES</a>
                <a href="#" class="text-white text-[16px] hover:text-[#DFA408] cursor-pointer font-bold transition duration-300 ease-in-out">INSCRIPTION</a>
                <button class="bg-[#DFA408] transition-all py-2 px-4 rounded-md cursor-pointer hover:text-[#001948] hover:-translate-y-1  text-white font-bold duration-300 ease-in-out border-none text-[16px]">INTRANET</button>
            </div>
            {/* bg-[#DFA408] */}
            {/* text-[#001948] */}
        </nav>
    )

}