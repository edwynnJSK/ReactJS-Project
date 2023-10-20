import { CharacterContainer } from "../../components/CharacterContainer/CharacterContainer";
import { useDashboard } from "./state/useDashboard";


export const Dashboard = () => {
    const {listCharacters,infoCharacters,setInfoUrl} = useDashboard();

    return(
        <>
            <CharacterContainer  listCharacters={listCharacters}
                                 infoCharacters={infoCharacters}
                                 setInfoUrl={setInfoUrl}
                                />
        </>
    );
};