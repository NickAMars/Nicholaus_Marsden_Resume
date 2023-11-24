import styled from "styled-components";
import Work from '@assets/work.jpg';

const SideBarStyle = styled.div`
  width: 25%;
  height: 60rem;
  background-color: ${(props)=> props.theme.light.secondary};
  margin-right: 5px;
  border-radius: 5px;
`;
const HeaderContainer = styled.div`
  padding: 1rem 0.5rem;
`;
const PrimaryHeader = styled.h1`
  font-size: 1.7rem;
`;
const SeconderyHeader = styled.span`
  font-size: 1.2rem;
`;
const ProfileImage = styled.img`
  width: 100%;
  clip-path: polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%);
  margin: 1.5rem 0;
  height: 35%;
`;
export const SideBar: React.FC<{}> = (props) => {
    return (
      <SideBarStyle> 
        <HeaderContainer>
          <PrimaryHeader>
            Nicholaus Marsden
          </PrimaryHeader>
          <SeconderyHeader>
            Software Engineer
          </SeconderyHeader>
        </HeaderContainer>
        <ProfileImage src={Work} alt="tree" />
      </SideBarStyle>
    );
  }