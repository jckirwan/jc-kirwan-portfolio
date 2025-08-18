const Header = ({ }) => {
  return (
    <header className="h-full w-full  text-center py-6 md:py-12 m-0 flex flex-row justify-center">
      <div className="py-8 w-full lg:w-2/3 text-gray-200">
        <p className="uppercase text-sm text-center">Experienced Senior Frontend Engineer</p>
        <h1 className="text-6xl md:text-8xl text-gray-200 font-black">JC Kirwan</h1>
      </div>
    </header>
  );
};
Header.displayName = "Header";
export default Header;
