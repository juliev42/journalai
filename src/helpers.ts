export default class Helpers {
    static getSunday(d: Date) {
        const day = d.getDay(), diff = d.getDate() - day
        return new Date(d.setDate(diff));
    }
}
