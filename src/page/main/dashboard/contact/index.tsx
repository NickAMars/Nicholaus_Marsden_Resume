import { ContactTitleHeader ,ContactContainer, ContactDataContainer, ContactMapContainer } from './contact.style';
import { ContactInfo } from './contactInfo';
import { ContactForm } from './contactForm';
import { ContactMap } from './contactMap';


export const Contact: React.FC<{}> = (props) => {
    return (
        <ContactContainer>
            <ContactDataContainer>
                <ContactForm />
                <ContactInfo />
            </ContactDataContainer>
            <ContactMapContainer>
                <ContactTitleHeader>
                    Contact Map
                </ContactTitleHeader>
                <ContactMap />
            </ContactMapContainer>
        </ContactContainer>
    );
}