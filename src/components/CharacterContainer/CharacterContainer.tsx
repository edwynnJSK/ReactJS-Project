import { ChangeEvent} from "react";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { useCharacterContainer } from "./state/useCharacterContainer";
import { useCharacterContainerInput } from "./state/useCharacterContainerInput";
import { CharacterContainerButtonStyles, CharacterContainerInputStyles, CharacterContainerNameFilterStyles, CharacterContaineraStyles, CharacterContaineriStyles } from "./styles/CharacterContainer.Styles";
import { useCharacterContainerStatusFiltera } from "./state/useCharacterContainerStatusFiltera";
import { useCharacterContainerStatusFilteral } from "./state/useCharacterContainerStatusFilteral";
import { useCharacterContainerStatusFilterde } from "./state/useCharacterContainerStatusFilterde";
import { useCharacterContainerStatusFilterun } from "./state/useCharacterContainerStatusFilterun";
import { CharacterAPIInfoInterface, CharacterAPIResultInterface } from "../../Pages/Dashboard/interfaces/Dashboard.interfaces";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export interface ICharacterContainerProps {
    listCharacters: CharacterAPIResultInterface[];
    infoCharacters: CharacterAPIInfoInterface;
    setInfoUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const CharacterContainer = ({listCharacters,infoCharacters,setInfoUrl}:ICharacterContainerProps) => {

    const {characterList, setFilter} = useCharacterContainer(listCharacters);
    const {isHovered,handleMouseEnter,handleMouseLeave} = useCharacterContainerInput();
    const {isHovered1,handleMouseEnter1,handleMouseLeave1} = useCharacterContainerStatusFiltera();
    const {isHovered2,handleMouseEnter2,handleMouseLeave2} = useCharacterContainerStatusFilteral();
    const {isHovered3,handleMouseEnter3,handleMouseLeave3} = useCharacterContainerStatusFilterde();
    const {isHovered4,handleMouseEnter4,handleMouseLeave4} = useCharacterContainerStatusFilterun();

    return (
            <>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{backgroundColor:"#202329", width:"12%",height:"2380px"}}>
                    <div style={{display: "flex", flexDirection:"column" ,alignItems: "center", marginTop:"10px"}}>
                        <img width="75px" height="75px" src="https://i.imgur.com/s7Kwat7.png"/>
                    </div>
                    <div style={{color:"white", fontSize:"15px", display:"flex", flexDirection:"column", textAlign:"center",marginTop:"10px"}}>
                        <h3 style={{color:"rgb(158, 158, 158)", }}>Status filter</h3>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                            <a onMouseEnter={handleMouseEnter1} 
                                onMouseLeave={handleMouseLeave1} 
                                onClick={() => {setFilter("all")}}  
                                style={{...CharacterContaineraStyles, background:isHovered1?"rgb(255, 152, 0)":"white", color:isHovered1?"white":"black"}}>All</a>
                            <a onMouseEnter={handleMouseEnter2} 
                                onMouseLeave={handleMouseLeave2} 
                                onClick={() => {setFilter("alive")}} 
                                style={{...CharacterContaineraStyles, background:isHovered2?"rgb(255, 152, 0)":"white", color:isHovered2?"white":"black"}}>Alive</a>
                            <a onMouseEnter={handleMouseEnter3} 
                                onMouseLeave={handleMouseLeave3} 
                                onClick={() => {setFilter("dead")}} 
                                style={{...CharacterContaineraStyles, background:isHovered3?"rgb(255, 152, 0)":"white", color:isHovered3?"white":"black"}}>Dead</a>
                            <a onMouseEnter={handleMouseEnter4} 
                                onMouseLeave={handleMouseLeave4}  
                                onClick={() => {setFilter("unknown")}} 
                                style={{...CharacterContaineraStyles, background:isHovered4?"rgb(255, 152, 0)":"white", color:isHovered4?"white":"black"}}>Unknown</a>
                        </div>                          
                    </div>
                </div>
                <div style={{ display: "flex",flexDirection:"column",justifyContent:"flex-start", width:"88%",height:"2380px", background:"#272b33"}}>
                    <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <div style={CharacterContainerNameFilterStyles}>
                                <input  onMouseEnter={handleMouseEnter} 
                                        onMouseLeave={handleMouseLeave}  
                                                style={{...CharacterContainerInputStyles, width: isHovered? "300px": "0px",}} 
                                                type="text" 
                                                placeholder="Buscar Personaje"
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => {setFilter(e.target.value)}}/>
                                <div style={{...CharacterContainerButtonStyles, background:isHovered?"#3c3e44":"rgb(158, 158, 158"}}>
                                    <i onMouseEnter={handleMouseEnter} 
                                        onMouseLeave={handleMouseLeave}  
                                        style={CharacterContaineriStyles}><img width="40px" height="40px" src="https://www.pngall.com/wp-content/uploads/8/Magnifying-Glass-Search-PNG-Clipart.png"/></i>
                                </div>
                        </div>
                        <div style={{marginRight:"30px", marginTop:"20px"}}>
                            <Link to="/login" style={{color:"rgb(158, 158, 158)", textDecoration:"none"}}><h3>Log out</h3></Link>
                        </div>
                    </div>    
                    
                    <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center", background:"#272b33",marginTop:"40px"}}>
                        {characterList.length!==0 ? characterList.map((character) => (
                                <CharacterCard {...character}/>))
                        :<h1 style={{marginTop:"110px",color:"rgb(158, 158, 158",}}>No se encontraron resultados</h1>}
                    </div>     
                        {characterList.length!==0 ? 
                        <>
                            <div style={{display:"flex", justifyContent:"center", marginTop:"6px"}}>
                            <NavBar prev={infoCharacters.prev}
                                next={infoCharacters.next}
                                setInfoUrl={setInfoUrl}
                                />
                            </div>
                        </>
                        :null}
                    </div>                             
            </div>
                
            </>
    );
};