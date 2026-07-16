'use client';
const Header: React.FC = () => {
  return (
    <header className="h-full w-full text-center flex flex-row justify-center rise-in">
      <div className="py-6 w-full">
        <p className="font-mono uppercase tracking-[0.3em] text-xs text-accent">
          Senior Software Engineer
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-primary font-black mt-2">
          JC Kirwan
        </h1>
        <div
          className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent"
          aria-hidden="true"
        />
      </div>
    </header>
  );
};
Header.displayName = 'Header';
export default Header;
