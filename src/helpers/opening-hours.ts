export const toTextOpeningHours = (openingHours: string, currentHour: number) => {
    if (openingHours.includes("Fermé")) return "Fermé";

    const [day, hours] = openingHours.split(": ");
    const [start, end] = hours.split(" - ");
    const [startHour, startMinutes] = start.split(":").map(Number);
    const [endHour, endMinutes] = end.split(":").map(Number);
    const isAfterMidnight = endHour < startHour;

    if (isOpened(isAfterMidnight, currentHour, startHour, endHour)) {
        return `Ouvert ${start} - ${end}`;
    }

    return "Fermé à l'heure actuelle";
};

const isOpened = (
    isAfterMidnight: boolean,
    currentHour: number,
    startHour: number,
    endHour: number
) => {
    return (
        (isAfterMidnight && (currentHour >= startHour || currentHour < endHour)) ||
        (!isAfterMidnight && currentHour >= startHour && currentHour < endHour)
    );
};
