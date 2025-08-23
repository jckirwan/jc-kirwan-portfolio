"use client"
const Header = ({ }) => {
  return (
    <header className="h-full full text-center flex flex-row justify-center">
      <div className="py-4 w-full text-gray-200">
        <p className="uppercase text-sm text-center">Experienced Senior Frontend Engineer</p>
        <h1 className="text-4xl text-gray-200 font-black">JC Kirwan</h1>
      </div>
    </header>
  );
};
Header.displayName = "Header";
export default Header;
