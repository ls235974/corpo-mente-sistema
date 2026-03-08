export const metadata = { title: 'Corpo & Mente' };
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{margin:0,fontFamily:'Arial'}}>{children}</body>
    </html>
  );
}