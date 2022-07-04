import { ContainerSocial } from "./styles";

export const ContactSocialMedia = () => {
  return (
    <ContainerSocial>
      <div className="effect varrius">
        <div className="buttons">
          <a
            href="https://www.linkedin.com/in/victorncosta/"
            className="in"
            target="_blank"
            rel="noreferrer"
            title="Join me on Linked In"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/victornunesc"
            target="_blank"
            rel="noreferrer"
            title="Join me on Github"
          >
            <i className="fa fa-github"></i>
          </a>

          <button
            className="g-plus"
            title="victornunesc95@gmail.com"
            onClick={() =>
              navigator.clipboard.writeText("victornunesc95@gmail.com")
            }
          >
            <i className="fa fa-google-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </ContainerSocial>
  );
};

export default ContactSocialMedia;
