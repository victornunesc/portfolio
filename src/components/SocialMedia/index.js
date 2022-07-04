import { ContainerSocial } from "./styles";

const SocialMedia = () => {
  return (
    <>
      <link
        href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <ContainerSocial>
        <ul>
          {/* <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              Twitter <i class="fa fa-twitter"></i>
            </a>
          </li> */}
          <li>
            <a
              href="https://github.com/victornunesc"
              target="_blank"
              rel="noreferrer"
            >
              Github <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/victorncosta/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </ContainerSocial>
    </>
  );
};

export default SocialMedia;
