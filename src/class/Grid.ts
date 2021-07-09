import { rando } from '@nastyox/rando.js'
import type NumberCard from './NumberCard'

export default class {
    public getWidth(): number {
        return this.width
    }

    public getHeight(): number {
        return this.height
    }

    constructor(
        private width: number,
        private height: number,
        public numberCardList: Array<NumberCard>,
    ) {}

    randomNumberCardPositionGenerator(
        countOfNumberCards: number,
    ): Array<position> {
        let res: Array<position> = []

        const getR = (_: number) => rando(_ - 1) + 1

        while (true) {
            const newRandomX = getR(this.width)
            const newRandomY = getR(this.height)

            const newRandomPosition: position = [newRandomX, newRandomY]

            if (!res.includes(newRandomPosition)) {
                res.push(newRandomPosition)

                if (res.length >= countOfNumberCards) {
                    break
                }
            }
        }

        return res
    }

    render() {}
}
