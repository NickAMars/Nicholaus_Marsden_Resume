import React from 'react';
import { LayoutStyle, MainLayout, ResumeStyle } from './app.style';
import { Header } from './page/header';
import { Dashboard } from './page/dashboard';
import { Footer } from './page/footer';
import { SideBar } from './page/side_bar';


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