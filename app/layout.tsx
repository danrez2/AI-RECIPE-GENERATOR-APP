// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'AI Recipe Generator',
  description: 'Generate recipes using AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* Header content */}
        </header>
        <main>
          <div style={{ border: '1px solid red' }}> {/* Added for debugging */}
            {children}
          </div>
        </main>
        <footer>
          {/* Footer content */}
        </footer>
      </body>
    </html>
  );
}
