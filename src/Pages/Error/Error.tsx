export const ErrorWindow = () => {
    return(
        <>
            <div style={{backgroundColor: "#000",
                         color: "#fff",
                         fontFamily: "'Arial', sans-serif",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         justifyContent: "center",
                         height: "100vh",
                         margin: "0",}}>
                <h1 style={{fontSize: "4em",
                            margin: "0",}}>Error 404</h1>
                 <p style={{fontSize: "1.5em",}}>¡Wubba Lubba Dub Dub! Parece que te perdiste en el multiverso.</p>
                 <img style={{width: "300px",
                              marginTop: "20px"}} src="https://i.imgur.com/s7Kwat7.png"/>
            </div>
        </>
    );
};