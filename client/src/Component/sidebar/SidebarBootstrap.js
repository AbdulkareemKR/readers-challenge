import { slide as Menu } from "react-burger-menu";
import "./sidebarStyle.css";
import React, { useState } from "react";
import RegistrationModal from "../registrationModal/RegistrationModal";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { BsGraphUp } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function SidebarBootstrap() {
  const [showModal, setModal] = useState(false);
  const [logIn, setLogIn] = useState(true);
  const [page, setPage] = useState("home");
  // const [show, setShow] = useState(false);
  let navigate = useNavigate();

  const fireModal = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };
  const handleLogIn = () => {
    setLogIn(true);
  };
  const handleLogOut = () => {
    setLogIn(false);
  };

  const pageClick = (page) => {
    if (page !== "") {
      console.log(page);
      setPage(page);
      navigate(page);
    }
  };

  // const handleCloseSidebar = () => setShow(false);
  // const handleShowSidebar = () => setShow(true);

  return (
    <div id="outer-container">
      {/* <Button variant="primary" onClick={handleShowSidebar}>
        Launch
      </Button>
      <Offcanvas
        placement="end"
        scroll={true}
        show={show}
        onHide={handleCloseSidebar}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <main id="page-wrap">
          <Button
            id="/"
            className={`menu-item ${page === "/" ? "acitve" : ""}`}
            onClick={(e) => pageClick(e.target.id)}
          >
            <FaHome className="fa fa-home" />
            <br />
            الرئيسية
          </Button>
          <Button
            id="programs"
            className={`menu-item ${page === "programs" ? "acitve" : ""}`}
            onClick={(e) => pageClick(e.target.id)}
          >
            <TiGroup
              onClick={() => pageClick("programs")}
              className="fa fa-users"
            />
            <br />
            الانجاز
          </Button>
          <Button
            id="statistics"
            className={`menu-item ${page === "statistics" ? "acitve" : ""}`}
            onClick={(e) => pageClick(e.target.id)}
          >
            <BsGraphUp onClick={() => pageClick("statistics")} className="fa" />
            <br />
            الاحصائيات 
          </Button>
          <Button
            id="announcement"
            className={`menu-item ${page === "announcement" ? "acitve" : ""}`}
            onClick={(e) => pageClick(e.target.id)}
          >
            <HiSpeakerphone
              onClick={() => pageClick("announcement")}
              className="fa fa-phone"
              aria-hidden="true"
            />
            <br />
            المراجعات
          </Button>
        </main>
      </Menu>
      <RegistrationModal
        showModal={showModal}
        logIn={logIn}
        handleClose={handleClose}
        handleLogIn={handleLogIn}
        handleLogOut={handleLogOut}
      />
    </div>
  );
}

export default SidebarBootstrap;
