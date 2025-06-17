import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/Footer.css";
import linktreeLogo from "../assets/images/linktree-logo-icon.png";

export const Footer = () => {
  return (
    <footer className="navbar navbar-expand-lg fixed-bottom navbar-footer">
      <div className="container justify-content-between">
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://instagram.com/yosoycarlamasi"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} size="xl" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="http://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="xl" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://linktr.ee/teacompanoaSER?utm_source=linktree_profile_share&ltsid=6ea05379-ba52-40f7-9a71-a4a651f5e78f"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linktreeLogo} alt="Linktree" width={21} height={22} />
            </a>
          </li>
        </ul>
        <p className="fs-6">© 2024 Antonella Masi.</p>
      </div>
    </footer>
  );
};
