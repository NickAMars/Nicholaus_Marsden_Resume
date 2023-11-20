import React from 'react';
import { LayoutStyle, MainLayout, ResumeStyle } from './app.style';
import { Header } from './page/header/header';
import { Dashboard } from './page/dashboard/dashboard';
import { Footer } from './page/footer/footer';
import { SideBar } from './page/side_bar/side_bar';


export const App: React.FC<{}> = (props) => {
  return (
    <ResumeStyle> 
      <LayoutStyle>
        
        <SideBar />

        <MainLayout>
          <Header />
          <Dashboard />
          <Footer />
        </MainLayout>

      </LayoutStyle>
    </ResumeStyle>
  );
}