import { getStars } from "@/helpers/common";

const Ratings = ({ rating = 0, ratingCount = 0 }) => {
    return (
        <span>
            <span className="text-yellow-300">{getStars(rating)}</span> {ratingCount} avis
        </span>
    );
};

export default Ratings;
