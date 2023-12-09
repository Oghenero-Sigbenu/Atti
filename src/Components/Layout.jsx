import ContactForm from "./Landing/Contact";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

function Layout({ children, contact }) {
  return (
    <div className="">
      <Header />
      <div>{children}</div>
      <div className="">
        {contact && <ContactForm />}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
