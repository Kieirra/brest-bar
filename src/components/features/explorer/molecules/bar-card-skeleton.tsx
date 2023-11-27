import Card from "@/components/common/atoms/card";

const BarCardSkeleton = () => {
    return (
        <Card className="max-w-lg animate-pulse">
            <div className="mb-4 h-5 w-3/4 rounded bg-gray-200 "></div>
            <div className="mb-4 h-4 w-1/2 rounded bg-gray-200"></div>
            <div className="mb-4 h-4 w-1/2 rounded bg-gray-200"></div>
        </Card>
    );
};

export default BarCardSkeleton;
