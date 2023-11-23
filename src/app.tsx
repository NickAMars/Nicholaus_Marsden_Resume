import React from 'react';
import { MainLayout, ResumeStyle } from './app.style';
import { Header } from './page/main/header';
import { Dashboard } from './page/main/dashboard';
import { Footer } from './page/main/footer';
import { SideBar } from './page/main/side_bar';


export const App: React.FC<{}> = (props) => {
  return (
    <ResumeStyle> 
        <SideBar />
        

        <MainLayout>
          <Header />
          <Dashboard />
          <Footer />
        </MainLayout>
    </ResumeStyle>
  );
}