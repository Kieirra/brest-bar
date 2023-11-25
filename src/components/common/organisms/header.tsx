import Logo from "../molecules/logo";

const Header = ({ className = "" }) => {
    return (
        <header className={`bg-ngrey-900 flex items-center px-4 py-2 shadow-md ${className}`}>
            <Logo />
        </header>
    );
};

export default Header;
