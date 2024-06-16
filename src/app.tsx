import React from 'react';
import { MainLayout, ResumeStyle, ResumeContainerStyle } from './app.style';
import { Header } from './page/main/header';
import { Dashboard } from './page/main/dashboard';
import { Footer } from './page/main/footer';
import { SideBar } from './page/main/side_bar';
import { Modal } from './components/Modal';
import { ModalProvider } from './context/ModalContext';


export const App: React.FC<{}> = (props) => {
  return (
    <ResumeStyle>
      <ModalProvider>
        <ResumeContainerStyle> 
          <SideBar />
          

          <MainLayout>
            <Header />
            <Dashboard />
          </MainLayout>
        </ResumeContainerStyle>
        <Footer />
          <Modal />
      </ModalProvider>
    </ResumeStyle>
  );
}