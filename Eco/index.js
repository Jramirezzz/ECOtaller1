

const productsContainerDiv = document.getElementById("grid")
const getData = async () => {
try {

       
    const data = []
    
    for (let i = 1; i < 10; i++) {
        
while (i <= 7 ) {
    console.log(i)
    i= 3 + i
    
        const pokemon = await fetch ("https://pokeapi.co/api/v2/pokemon/"+i);
    const data = await pokemon.json();
    
    

    data.forms.forEach(information => {
       
        document.getElementById("grid").innerHTML += `
        <h1>${information.name}</h1>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${+i}.png" alt="${information.name}">
        <button>Evolucionar</button>
        
        `
      })
       
      const button = document.querySelector('button'); 
      button.addEventListener('click', () => Evolucionar());
      
      function Evolucionar(){
        if (i % 3 === 1) {
            document.getElementById("grid").innerHTML += `
            
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${+i+1}.png">
            `  
        } else{
            alert(`No se puede evolucionar`)

        } 
        const h1 = document.querySelector("h1")
      h1.addEventListener('click', () => name())
        function name(){
            if (i % 3 === 1) {
                document.getElementById("grid").innerHTML += `
                <h1>${data.name}</h1>
                
                `  
            } else{
                alert(`No se puede evolucionar`)
    
            } 
    
            
            
        console.log("Evoluciona")
        
      }
      }
      
                    
    console.log(data);

    }
}
    return data
} catch (error) {
    console.error(error)
} 

};

getData();

