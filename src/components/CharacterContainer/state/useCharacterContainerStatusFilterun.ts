import { useState } from "react";

export const useCharacterContainerStatusFilterun = () => {
    const [isHovered4, setIsHovered] = useState(false);

    const handleMouseEnter4 = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave4 = () => {
      setIsHovered(false);
    };

    return{
        isHovered4,
        handleMouseEnter4,handleMouseLeave4
    }
}