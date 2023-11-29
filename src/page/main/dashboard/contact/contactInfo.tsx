import { GroupContentStyle, LabelStyle, ParagraphStyle } from '../dashboard.style'
import { ContactInfoContainer, ContactTitleHeader } from './contact.style';
export const ContactInfo : React.FC<{}> = (props) => {
  return (
    <ContactInfoContainer>
        <ContactTitleHeader>Contact Informations</ContactTitleHeader>
        <GroupContentStyle>
            <LabelStyle>Address:</LabelStyle>
            <ParagraphStyle>Atlanta, Georgia</ParagraphStyle>
        </GroupContentStyle>
        <GroupContentStyle>
            <LabelStyle>Phone:</LabelStyle>
            <ParagraphStyle>+1 470-288-2317</ParagraphStyle>
        </GroupContentStyle>
        <GroupContentStyle>
            <LabelStyle>Job:</LabelStyle>
            <ParagraphStyle>Full Stack Software Developer</ParagraphStyle>,
            <ParagraphStyle>Software Engineer</ParagraphStyle>,
            <ParagraphStyle>Front-End Developer</ParagraphStyle>,
            <ParagraphStyle>Back-End Developer</ParagraphStyle>
        </GroupContentStyle>
        <GroupContentStyle>
            <LabelStyle>E-mail:</LabelStyle>
            <ParagraphStyle>nicholausa.marsden@gmail.com</ParagraphStyle>
        </GroupContentStyle>
    </ContactInfoContainer>
  )
}
