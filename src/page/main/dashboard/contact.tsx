import { ContactContainer, ContactDataContainer, ContactFormContainer, TitleStyle, ContactMapContainer } from './dashboard.style';
import { ContactInfo } from './contactInfo';
import { ContactForm } from './contactForm';


export const Contact: React.FC<{}> = (props) => {
    return (
        <ContactContainer>
            <ContactDataContainer>
                <ContactForm />
                <ContactInfo />
            </ContactDataContainer>
            <ContactMapContainer>
                <TitleStyle>
                    Contact Map
                </TitleStyle>
            </ContactMapContainer>
        </ContactContainer>
    );
}