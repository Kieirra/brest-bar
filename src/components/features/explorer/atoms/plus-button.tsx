import tw from "tailwind-styled-components";

const PlusButton = tw.button`
    p-2
    shadow-md
    bg-gradient-to-r 
    from-primary-500 
    to-accent-400 
    text-white
    hover:from-primary-600
    hover:to-accent-500
    rounded-md
`;

export default PlusButton;
