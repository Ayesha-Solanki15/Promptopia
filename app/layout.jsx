import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import tailwindConfig from "@tailwind.config";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;


//1 task to fix 

// under my profile, email address is getting out of the box.

//Tasks:
// Implement search : search by ptompt content, search by tag and search by tag
// Implement click on tag and will populate the search field 
// Implement View other profiles