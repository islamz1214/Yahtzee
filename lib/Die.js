export default class Die {
    roll() {
        return Math.floor(Math.random() * 6) + 1
    }
}