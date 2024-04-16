import type {Metadata} from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'React Auth Kit',
  description: 'Generated by create next app',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </Providers>
  );
}
