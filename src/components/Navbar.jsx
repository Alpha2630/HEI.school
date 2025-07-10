import "./Navbar.css"
export default function Navbar() {
    return(
        <nav class="bg-blue-900 h-20 flex items-center justify-around">
            <div class="logo">
                <img src= ""alt="Logo HEI" class="h-12" />
            </div>
    
            <div class="flex gap-6">
                <a href="#" class="text-white text-xl hover:text-yellow-400 transition duration-300 ease-in-out">Accueil</a>
                <a href="#" class="text-white text-xl hover:text-yellow-400 transition duration-300 ease-in-out">Actualité</a>
                <a href="#" class="text-white text-xl hover:text-yellow-400 transition duration-300 ease-in-out">Bourse d'études</a>
                <a href="#" class="text-white text-xl hover:text-yellow-400 transition duration-300 ease-in-out">Inscription</a>
                <button class="bg-yellow-300/80 w-24 h-10 rounded-md cursor-pointer hover:bg-yellow-300 hover:-translate-y-1 hover:text-black transition-all duration-300 ease-in-out border-none">Intranet</button>
            </div>
        </nav>
    )

}