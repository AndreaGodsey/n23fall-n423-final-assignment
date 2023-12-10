import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Menu, Icon } from 'semantic-ui-react';
import Link from 'next/link'
import { AppProvider } from '@/useHooks/useAppState';

export default function App({ Component, pageProps }) {
  return (
    <>
    <AppProvider>

    <Menu>
      <Menu.Item style={{color: "white", backgroundColor: "blue"}}  as={Link} href='/'>
        <Icon name='home'/>
        Home
      </Menu.Item>

      <Menu.Item style={{color: "white", backgroundColor: "blue"}}  as={Link} href='/about'>
        <Icon name='eye'/>
        About
      </Menu.Item>

      <Menu.Item style={{color: "white", backgroundColor: "blue"}}  as={Link} href='/favorites'>
      <Icon name='heart'/>
        Favorites
      </Menu.Item>

      <Menu.Item style={{color: "white", backgroundColor: "blue"}}  as={Link} href='/orderdog'>
      <Icon name='cart'/>
        Adopt Dog
      </Menu.Item>

      <Menu.Item style={{color: "white", backgroundColor: "blue"}}  as={Link} href='/createaccount'>
      <Icon name='pencil'/>
       Create Account
      </Menu.Item>

    </Menu>
    
    <Component {...pageProps} />
    


    </AppProvider>

    
    
    </>
  )
}
