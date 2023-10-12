import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title: "Promptopia",
    description: 'Discover and Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className="gradient" />
            </div>

            <div className="app">
                {children}
            </div>
        </body>
    </html>
    )
}

export default RootLayout