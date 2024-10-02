import styled from "styled-components";
import DotsDesktopDefault from "./../assets/DotsDesktopDefault.svg";
import DotsDesktopHover from "./../assets/DotsDesktopHover.svg";
import DotsDesktopTap from "./../assets/DotsDesktopTap.svg";
import DotsMobileDefault from "./../assets/DotsMobileDefault.svg";
import DotsMobileTap from "./../assets/DotsMobileTap.svg";
import { useEffect, useState } from "react";

const Button = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  width: 24px;
  height: 24px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface DropdownButton {
  onClick: (e: React.MouseEvent) => void;
}

export default function DropdownButton({ onClick }: DropdownButton) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 400px)");

    const handleScreenSizeChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleScreenSizeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenSizeChange);
    };
  }, []);

  const getCurrentIcon = () => {
    if (isClicked) {
      return isMobile ? DotsMobileTap : DotsDesktopTap;
    }
    if (isHovered) {
      return isMobile ? DotsMobileDefault : DotsDesktopHover;
    }
    return isMobile ? DotsMobileDefault : DotsDesktopDefault;
  };

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      <img src={getCurrentIcon()} />
    </Button>
  );
}
