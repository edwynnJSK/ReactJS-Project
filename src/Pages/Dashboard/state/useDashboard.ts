import { useEffect, useState } from "react";
import { CharacterAPIInfoInterface, CharacterAPIResultInterface } from "../interfaces/Dashboard.interfaces";

export const useDashboard = () => {

    const [listCharacters, setListCharacters] = useState<CharacterAPIResultInterface[]>([]);
    const [infoCharacters, setInfoCharacters] = useState<CharacterAPIInfoInterface>({count:0,pages:0,next:"",prev:""});
    const [infoUrl,setInfoUrl] = useState<string>("");

    useEffect(() => {
        if(infoUrl===""){
            const getCharacters = async () => {
                const reponse = await fetch(
                  `${import.meta.env.VITE_RICKANDMORTY_API_BASE_PATH}/character/?page=1`
                );
                
    
            const responseBody = await reponse.json();
    
            setListCharacters(responseBody.results)
            setInfoCharacters(responseBody.info)
            };

            getCharacters();
        }else{
            const getCharacters = async () => {
                const reponse = await fetch(
                    infoUrl
                );
                
    
            const responseBody = await reponse.json();
    
            setListCharacters(responseBody.results)
            setInfoCharacters(responseBody.info)
            };

            getCharacters();
        }

    },[infoUrl]);
    
    return {listCharacters,infoCharacters,setInfoUrl};
};