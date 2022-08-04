import toast from "react-hot-toast";
import { ContainerSocial } from "./styles";

const SocialMedia = () => {
  const copy = () => {
    navigator.clipboard.writeText("victornunesc95@gmail.com");

    toast.success("Copiado!", { position: "top-center" });
  };

  return (
    <>
      <ContainerSocial>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/victorncosta/"
              target="_blank"
              rel="noreferrer"
              title="Join me on Linked In"
            >
              Linkedin <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/victornunesc"
              target="_blank"
              rel="noreferrer"
              title="Join me on Github"
            >
              Github <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <button
              href="3"
              className="g-plus"
              title="victornunesc95@gmail.com"
              onClick={() => copy()}
            >
              E-mail <i className="fa fa-envelope" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </ContainerSocial>
    </>
  );
};

export default SocialMedia;
