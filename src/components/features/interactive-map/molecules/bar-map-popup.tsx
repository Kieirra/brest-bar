import { Bar } from "../../../../../types/bar";

const BarMapPopup = ({ bar } : {bar: Bar}) => {
    return (
        <>
            <h2 className="text-lg font-bold text-secondary-400">{bar.name}</h2>
            <p className="text-white">{bar.address}</p>
            <ol className="text-white">
                {bar.openingHours?.map((openingHour, index) => (
                    <li key={index}>- {openingHour}</li>
                ))}
            </ol>
        </>
    );
};

export default BarMapPopup;
