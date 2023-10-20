import { useState } from "react";

export const useCharacterContainerStatusFilteral = () => {
    const [isHovered2, setIsHovered] = useState(false);

    const handleMouseEnter2 = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave2 = () => {
      setIsHovered(false);
    };

    return{
        isHovered2,
        handleMouseEnter2,handleMouseLeave2
    }
}