import BarCard, { BarCardProps } from "../molecules/bar-card";

const BarList = ({ items }: { items: BarCardProps[] }) => {
    return (
        <div className="bg-ngrey-800 p-4 max-w-lg">
            <h1 className="uppercase bold mb-4 text-2xl text-white">Explorer</h1>
            <div className="flex flex-col space-y-6">
                {items.map((item) => (
                    <BarCard item={item} />
                ))}
            </div>
        </div>
    );
};

export default BarList;
