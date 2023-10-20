import { useEffect, useState } from "react";
import { CharacterAPIResultInterface } from "../../../Pages/Dashboard/interfaces/Dashboard.interfaces";


export const useCharacterContainer = (listCharacter: CharacterAPIResultInterface[]) => {

    const [characterList, setCharacterList] = useState<CharacterAPIResultInterface[]>(listCharacter);
    const [filter, setFilter] = useState<string>("");
    const statusCharacter = ["all","alive","dead","unknown"]
    
    useEffect(()=>{  
        const filterCharacter = (type : string) : CharacterAPIResultInterface[] => {
            if(statusCharacter.includes(type)){
               if(type === "all"){
                    return listCharacter;
                }
                return listCharacter.filter((character)=>{ return character.status.toLowerCase() === type});
            }
            

            return listCharacter.filter((character)=>{
                const nameCharacterMayus = character.name.toUpperCase();
                
                return nameCharacterMayus.includes(type.toUpperCase()); 
            });
        }

        if(characterList.length === 0 && filter === ""){
            setCharacterList(listCharacter);
        }

        if( filter === ""){
            setCharacterList(listCharacter);
        }

        if(filter !== ""){
            setCharacterList(filterCharacter(filter));
        }
    },[,filter]);

    useEffect(()=>{
        setCharacterList(listCharacter);
        setFilter("");
    },[listCharacter])
    
    return {
        characterList,
        setFilter
    }
};