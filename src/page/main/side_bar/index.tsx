import styled from "styled-components";
import Work from '@assets/work.jpg';
import { TimeLine } from "./AboutTimeLine";
import { Button, Typography } from "@mui/material";
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import NICHOLAUS_MARSDEN_RESUME from '@assets/NICHOLAUS_MARSDEN_RESUME.pdf';

const SideBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 60rem;
  background-color: ${(props)=> props.theme.palette.secondary.main};
  margin-right: 5px;
  border-radius: 5px;
  @media only screen and (max-width: 47em){
    display: none;
  }
`;
const HeaderContainer = styled.div`
  padding: 1rem 0.5rem;
`;
const PrimaryHeader = styled(Typography)`
  font-weight: 900;
  font-size: 1.7rem;
`;
const ProfileImage = styled.img`
  width: 100%;
  clip-path: polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%);
  margin: 1.5rem 0;
  height: 35%;
`;
const SubText = styled(Typography)`
  font-size: 1.3rem;
`;

const DownLoadButton = styled(Button)`
    width: 15rem;
    align-self: center;
    border-radius: 26px;
    text-transform: none;
`;

const DownloadIcon = styled(DownloadForOfflineRoundedIcon)`
  color: #FFF;
`;


const handleDownload = () => {
  console.log('Downloading file...');
  const pdfUrl = NICHOLAUS_MARSDEN_RESUME;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "NICHOLAUS_MARSDEN_RESUME.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const SideBar: React.FC<{}> = (props) => {
    return (
      <SideBarStyle> 
        <HeaderContainer>
          <PrimaryHeader variant="h4">Nicholaus Marsden</PrimaryHeader>
          <SubText variant="h6" >Software Engineer</SubText>
        </HeaderContainer>
        <ProfileImage src={Work} alt="work" />
        <TimeLine />
        <DownLoadButton
          variant="contained"
          color="primary"
          endIcon={<DownloadIcon />}
          onClick={handleDownload}
        >
          <SubText>Download Cv</SubText>
        </DownLoadButton>
      </SideBarStyle>
    );
  }