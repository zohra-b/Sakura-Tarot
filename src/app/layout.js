
import { Inter } from 'next/font/google';
import './globals.css';
import { CardProvider } from '@/context/cardContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sakura Tarot',
  description:
    'Descubre tu destino con nuestra aplicación única de cartas de Sakura. Selecciona tres cartas y desvela los misterios de tu pasado, presente y futuro. Obtén insights reveladores y encuentra la guía que necesitas para tu camino. ¡Explora el poder de la adivinación con la belleza de las cartas de Sakura ahora!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Header />
      <CardProvider>
        <body className={inter.className}>
          {children}
        </body>
        <Footer/>
      </CardProvider>
    </html>
  );
}
