import { CharacterAPIResultInterface } from "../../Pages/Dashboard/interfaces/Dashboard.interfaces";
import {CardStyle, CharacterGenderSectionStyle, CharacterIDSectionStyle, 
        CharacterNameSectionStyle, CharacterPropertyStyle, ImgSrcStyle, 
        ImgStyle, SectionH2Style, SectionPStyle, 
        SectionSpanNameStatusStyle, SectionSpanNameStyle, SectionSpanStyle} from "./styles/CharacterCard.Styles";

export const CharacterCard = (character:CharacterAPIResultInterface) => {


    const getColor = (status:string):string => {
        switch(status){
            case "alive":
                return "#55CC44";
            case "dead":
                return "#D63D2E";
            case "unknow":
                return "#A428D5"
            default:
                return "#F8ED3B";
        }
    };

    return (
            <div style={CardStyle}>
                <div style={ImgStyle}>
                <img  style={ImgSrcStyle} src={character.image} />
                </div>
                <div style={CharacterPropertyStyle}>
                    <section style={CharacterNameSectionStyle}>
                        <h2 style={SectionH2Style}>{character.name}</h2>
                        <span style={SectionSpanNameStyle}>
                        <span style={{...SectionSpanNameStatusStyle,background : getColor(character.status.toLowerCase())}}></span>
                              {character.status} - {character.species}
                        </span>
                    </section >

                    <section style={CharacterIDSectionStyle}>
                        <span style={SectionSpanStyle}>Character's ID:</span>
                        <p style={SectionPStyle}>{character.id}</p>
                    </section>

                    <section style={CharacterGenderSectionStyle}>
                        <span style={SectionSpanStyle}>Character's gender:</span>
                        <p style={SectionPStyle}>{character.gender}</p>
                    </section>
                </div>
            </div>
    );
};