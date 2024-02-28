"use client";

import { useState } from "react";
import { NavWrapper, NavContent, Logo, Menu, MenuList, MenuListItem, MenuLink, BurgerBtn, BurgerWrapper, MobileMenuWrapper, MobileMenuList, MobileMenuListItem, MobileMenuLink } from "./Nav.style";

const Nav = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBurgerClick = () => {
    setActiveBurger(((state) => !state));
  };

  const menuList = [
    { title: "Home", link: '#home' },
    { title: "About", link: '#about' },
    { title: "Team", link: '#team' },
  ];

  return (
    <>
      <NavWrapper>
        <NavContent>
          <BurgerWrapper>
            <BurgerBtn onClick={handleBurgerClick} className={activeBurger ? 'active' : 'unactive'}><span></span></BurgerBtn>
            <Logo src="/assets/logo.gif" alt="Logo" width={200} height={66.66} className="object-contain w-1/2 lg:w-1/3" />
          </BurgerWrapper>

          <Menu>
            <MenuList>
              {menuList.map((item, index) => (
                <MenuListItem key={index}>
                  <MenuLink
                    index={index}
                    setActiveIndex={setActiveIndex}
                    className={activeIndex === index ? "active" : "unactive"}
                    href={item.link}
                  >
                    {item.title}
                  </MenuLink>
                </MenuListItem>
              ))}
            </MenuList>
          </Menu>
        </NavContent>
      </NavWrapper>
      <MobileMenuWrapper className={activeBurger ? 'active' : 'unactive'}>
        <MobileMenuList>
          {menuList.map((item, index) => (
            <MobileMenuListItem key={index}>
              <MobileMenuLink
                index={index}
                setActiveIndex={setActiveIndex}
                className={activeIndex === index ? "active" : "unactive"}
                href={item.link}
              >
                {item.link}
              </MobileMenuLink>
            </MobileMenuListItem>
          ))}
        </MobileMenuList>
      </MobileMenuWrapper>
    </>
  );
};

export default Nav;;