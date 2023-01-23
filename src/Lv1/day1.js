import React from 'react'
//과일장수

const day1 = () => {

    function solution(k, m, score) {
        if (score.length < m) {
            return 0;
        }

        score.sort((a, b) => a - b);

        let total = 0;

        while (score.length >= m) {
            const box = score.splice(score.length - m, m);

            const prize = m * Math.min(...box);

            total += prize;
        }

        return total;
    }

    return (
        <div>day1</div>
    )
}

export default day1