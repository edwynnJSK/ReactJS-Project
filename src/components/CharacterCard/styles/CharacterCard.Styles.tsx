import React from "react";

export const CardStyle: React.CSSProperties = {
    width:"550px",
    height:"195px",
    display: "flex",
    backgroundColor: "rgb(60, 62, 68)",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    margin: "0.65rem",
};

export const CharacterPropertyStyle: React.CSSProperties = {
    flex: "3 1 0%",
    position: "relative",
    padding: "0.75rem",
    color: "rgb(255, 255, 255)",
    display: "flex",
    flexDirection: "column",
};

export const ImgStyle: React.CSSProperties = {
    flex: "2 1 0%",
    width: "100%",
};

export const ImgSrcStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    margin: "0px",
    opacity: "1",
    transition: "opacity 0.5s ease 0s",
    objectPosition: "center",
    objectFit: "cover",
};

export const CharacterNameSectionStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: "0px",
    padding: "0px",
};

export const SectionH2Style: React.CSSProperties = {
    margin: "0px", 
    padding: "0px",
    display: "flex",
    justifyContent: "flex-start",
    fontSize:"20px"
};

export const SectionSpanNameStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight:"500",
};

export const SectionSpanNameStatusStyle: React.CSSProperties = {
    display: "flex",
    height: "0.5rem",
    width: "0.5rem",
    marginRight: "5px",
    borderRadius: "50%",
};

export const CharacterIDSectionStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: "0px",
    marginTop: "0px",
};

export const CharacterGenderSectionStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: "0px",
    padding: "0px",
};

export const SectionSpanStyle: React.CSSProperties = {
    color: "rgb(158, 158, 158)",
    fontSize: "16px",
    fontWeight:"500",
    padding: "0px", 
    display:"flex",
};

export const SectionPStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight:"500",
    margin: "0px",
    padding: "0px", 
    display:"flex",
};