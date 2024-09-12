import axios from "axios";

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  attacks: {
    fast: Attack[];
    special: Attack[];
  };
  evolutions?: Evolution[];
  evolutionRequirements?: EvolutionRequirement;
  image: string;
}

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface Evolution {
  id: string;
  name: string;
}

export interface EvolutionRequirement {
  amount: number;
  name: string;
}

export const getPokemonList = async (
  limit: number = 18
): Promise<Pokemon[]> => {
  const query = `
   {
    pokemons(first: ${limit}) {
      id            
      number        
      name          
      weight {
        minimum     
        maximum     
      }
      height {
        minimum     
        maximum     
      }
      classification 
      types         
      resistant     
      weaknesses    
      fleeRate      
      maxCP         
      maxHP         
      attacks {
        fast {      
          name
          type
          damage
        }
        special {   
          name
          type
          damage
        }
      }
      evolutions {  
        id
        name
      }
      evolutionRequirements { 
        amount
        name
      }
      image         
    }
  }`;
  try {
    const response = await axios({
      url: "https://graphql-pokemon2.vercel.app/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        query,
      }),
    });

    return response.data.data.pokemons;
  } catch (error) {
    throw error;
  }
};
