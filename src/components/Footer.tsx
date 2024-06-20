const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="bg-gray-400 text-neutral-950">
      Footer &copy;{currentYear}
    </div>
  );
}

export default Footer;
