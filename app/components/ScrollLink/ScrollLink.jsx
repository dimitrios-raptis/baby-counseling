"use client";

import Link from 'next/link';

const ScrollLink = ({ children, index, setActiveIndex, ...props }) => {

  const handleScroll = (e) => {
    e.preventDefault();

    if (index && setActiveIndex) {
      setActiveIndex(index);
    }

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Link onClick={handleScroll} scroll={false} {...props}>
      {children}
    </Link>
  );
};

export default ScrollLink;