import { useState } from "react";

export const useCharacterContainerStatusFiltera = () => {
    const [isHovered1, setIsHovered] = useState(false);

    const handleMouseEnter1 = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave1 = () => {
      setIsHovered(false);
    };

    return{
        isHovered1,
        handleMouseEnter1,handleMouseLeave1
    }
}