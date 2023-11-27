import Logo from "../molecules/logo";

const Header = ({ className = "" }) => {
    return (
        <header className={`flex items-center bg-ngrey-900 px-4 py-2 shadow-md ${className}`}>
            <Logo />
        </header>
    );
};

export default Header;
