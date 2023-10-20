import { useState } from "react";

export const useButtonRegister = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return{
        isHovered,
        handleMouseEnter,handleMouseLeave
    }
}