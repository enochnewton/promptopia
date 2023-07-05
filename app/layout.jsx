import { Nav, Provider } from "@components";
import "@styles/globals.css";
export const metadata = {
  title: "Promptopia",
  description: "Discover and share prompts for your next creative project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
