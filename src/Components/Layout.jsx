import classes from '../Styles/layout.module.css'
import { AppShell } from '@mantine/core';
import HeaderContent from './HeaderContent';
import Hero from './Hero';
import { Outlet } from 'react-router-dom';
import Filtering from './Filtering';

function App() {


  return (
    <AppShell header={{ height: 60 }} padding='md'>
      <AppShell.Header className={classes.header}>
        <HeaderContent />
      </AppShell.Header>
      <AppShell.Main className={classes.main}>
        <Hero />
        <Filtering /> 
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
