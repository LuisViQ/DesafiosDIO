import { ReactNode } from 'react';
import { Header } from '../Header/Header';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (<>
  <Header title="Dio Bank" />
  {children}
  </>
  )
}
