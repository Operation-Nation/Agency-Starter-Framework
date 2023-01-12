import { ButtonProps } from "../../components/buttons/Button";
import { BREAKPOINTS, useBreakpoint } from "../../hooks/useBreakpoint";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { LanguageType } from "../../languages";
import { MobileNav } from "./MobileNav";
import { TopNav } from "./TopNav";
import React, { useEffect, useRef, useState } from "react";

export type NavItem = {
  label?: string;
  href?: string;
  current?: boolean;
  language?: LanguageType;
  children?: {
    label?: string;
    href?: string;
    description?: string;
    current?: boolean;
    language?: LanguageType;
  }[];
};

export type NavProps = {
  showSearch?: boolean;
  items: NavItem[];
  buttons: ButtonProps[];
};

export const Nav = ({ items, buttons, showSearch }: NavProps) => {
  // const router = useRouter();
  const { screenWidth, breakpoint } = useBreakpoint();
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  const showNav = scrollDirection === "up" || scrollPosition !== "middle";

  const navRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState<number>(70);

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

  /**
   * Measure nav and create a spacer of equal height
   */

  useEffect(() => {
    if (!navRef.current) return;
    const navHeight = navRef.current.getBoundingClientRect().height;
    setSpacerHeight(navHeight);
  }, [navRef.current, breakpoint]);

  const onHamburgerClick = () => {
    setMobileNavIsOpen(true);
  };

  // useEffect(() => {
  //   function onRouteChange() {
  //     setMobileNavIsOpen(false);
  //   }

  //   router.events.on("routeChangeStart", onRouteChange);
  //   () => router.events.off("routeChangeStart", onRouteChange);
  // }, []);

  return (
    <div>
      <div style={{ height: spacerHeight }} className="invisible" />

      <TopNav
        items={items}
        buttons={buttons}
        onHamburgerClick={onHamburgerClick}
        showNav={showNav}
        ref={navRef}
        navHeight={spacerHeight}
      />

      {screenWidth < BREAKPOINTS.lg && (
        <MobileNav
          items={items}
          buttons={buttons}
          open={mobileNavIsOpen}
          onOpenChange={setMobileNavIsOpen}
        />
      )}
    </div>
  );
};
