import Block from "@/components/common/atoms/block";

const ExplorerTitle = () => {
    return (
        <Block>
            <h1 className="text-4xl text-white">
                Trouver le bar qu'il vous faut{" "}
                <span className="bg-gradient-to-r from-primary-500 to-accent-400 text-transparent bg-clip-text font-bold">
                    selon votre humeur
                </span>
            </h1>
        </Block>
    );
};

export default ExplorerTitle;
