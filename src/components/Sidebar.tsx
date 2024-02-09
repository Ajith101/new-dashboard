import logo from "../assets/Briefcase.png";
import StatBoard from "../assets/StatBoard.png";
import { NavLink } from "react-router-dom";
import { NavLinksType, navLinks } from "../Service/data";
import { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setMobileView(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <>
      <aside
        style={
          mobileView
            ? {
                width: "16rem",
                position: "fixed",
                height: "100vh",
                top: "0",
                left: showNav ? "0" : "-16rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <div className="logo">
          <img src={logo} alt="logo" />
          <img src={StatBoard} alt="StatBoard" />
        </div>
        <div className="nav-bar">
          <ul>
            {navLinks.map((item) => (
              <Li
                key={item.title}
                img={item.img}
                title={item.title}
                url={item.url}
              />
            ))}
          </ul>
        </div>
        <div>
          <button onClick={() => (mobileView ? setShowNav(false) : null)}>
            Logout <AiOutlineLogout />
          </button>
        </div>
        {mobileView && (
          <span onClick={() => setShowNav(false)}>
            <GrClose size={19} />
          </span>
        )}
      </aside>
      {mobileView && (
        <button id="hamburger" onClick={() => setShowNav(true)}>
          <RiMenu2Line size={16} />
        </button>
      )}
    </>
  );
};

const Li = ({ url, title, img }: NavLinksType) => {
  return (
    <li>
      <NavLink
        to={url}
        style={({ isActive }) => ({
          color: isActive ? "rgb(23 37 84)" : "white",
          backgroundColor: isActive ? "white" : "rgb(3 7 18)",
        })}
      >
        <span>
          <img src={img} alt="dashboard" />
        </span>
        {title}
      </NavLink>
    </li>
  );
};

export default Sidebar;
