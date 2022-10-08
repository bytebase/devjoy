import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-accent py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-16 w-auto text-slate-900" />
        <p className="mt-6 text-base text-black md:mt-0">Copyright &copy; {new Date().getFullYear()} DevJoy. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
