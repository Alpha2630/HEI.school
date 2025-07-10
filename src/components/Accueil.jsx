export default function Accueil(){
    return(
        <div class="relative h-screen">

        <div class="absolute inset-0 bg-black/30"></div>
    

        {/* <div 
            class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style="background-image: url('./')"
        ></div> */}
    
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
                Haute école d'informatique
            </h1>
        
        <div class="max-w-2xl mx-auto">  
            <h3 class="text-xl md:text-2xl text-white leading-relaxed drop-shadow-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur non ducimus autem dignissimos nihil? Sequi quia, dolores odio similique minus dolor...
            </h3>
        </div>
    </div>
</div>
    );
}