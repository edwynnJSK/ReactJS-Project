import { useState } from "react";

export const useCharacterContainerStatusFilterde = () => {
    const [isHovered3, setIsHovered] = useState(false);

    const handleMouseEnter3 = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave3 = () => {
      setIsHovered(false);
    };

    return{
        isHovered3,
        handleMouseEnter3,handleMouseLeave3
    }
}