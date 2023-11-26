import { toTextOpeningHours } from "./opening-hours";

describe("A toTextOpeningHours function", () => {
    it("should be 'Fermé' when got 'lundi: Fermé'", () => {
        expect(toTextOpeningHours("lundi: Fermé", 23)).toBe("Fermé");
    });

    it("should be 'Ouvert 20:00 - 23:00' when got 'vendredi: 20:00 - 23:00' and it's '22:00'", () => {
        expect(toTextOpeningHours("vendredi: 20:00 - 23:00", 22)).toBe("Ouvert 20:00 - 23:00");
    });

    it("should be 'Fermé à l'heure actuelle' when got 'vendredi: 22:00 - 04:00' and it's '05:00'", () => {
        expect(toTextOpeningHours("vendredi: 22:00 - 04:00", 5)).toBe("Fermé à l'heure actuelle");
    });

    it("should be 'Ouvert 22:00 - 04:00' when got 'vendredi: 22:00 - 04:00' and it's '23:00'", () => {
        expect(toTextOpeningHours("vendredi: 22:00 - 04:00", 23)).toBe("Ouvert 22:00 - 04:00");
    });

    it("should be 'Non disponible' when got null", () => {
        // @ts-ignore
        expect(toTextOpeningHours(null, 23)).toBe("Non disponible");
    });

    it("should be 'Ouvert 24h/24' when got dimanche: Ouvert 24h/24", () => {
        expect(toTextOpeningHours("dimanche: Ouvert 24h/24", 23)).toBe("Ouvert 24h/24");
    });
});
