export interface NavBarProps {
    prev: any;
    next: string;
    setInfoUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const NavBar = ({prev,next,setInfoUrl}:NavBarProps) => {

    const handlePrevious = () => {
        setInfoUrl(prev);
    }

    const handleNext = () => {
        setInfoUrl(next); 
    }

    return(
        <>
            <nav style={{display:"flex", justifyItems:"center"}}>
                <ul style={{display:"flex", alignItems:"center"}}>
                    {prev?<li style={{display:"flex"}}><button style={{marginLeft:"-38px", width:"80px", padding:"3px"}} onClick={handlePrevious}>Previous</button></li>:null}
                    {next?<li style={{display:"flex"}}><button style={{marginLeft:"20px", width:"80px", padding:"3px"}} onClick={handleNext}>Next</button></li>:null}
                </ul>
            </nav>  
        </>
    )
}
