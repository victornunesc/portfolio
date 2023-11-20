import { useTranslation } from "react-i18next";
import { Container } from "./styles"

const Footer = () => {
    const { t } = useTranslation();

    return (
    <Container>
        <p>{t("footer.text")}</p>
    </Container>
    )
}

export default Footer