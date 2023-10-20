import { useState } from "react";

export const useCharacterContainerInput = () => {
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