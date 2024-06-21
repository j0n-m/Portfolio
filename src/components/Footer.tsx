const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-400 p-8 flex justify-center items-center">
      Footer &copy;{currentYear}
    </footer>
  );
}

export default Footer;
