module.exports = function longestConsecutiveLength(array) {

	const consecutiveRight = {};

	let max = 0;
    for (let i = 0; i < array.length; i++) {

        let current = array[i];
        if (consecutiveRight[current] !== undefined) {
            continue;
        }

        consecutiveRight[current] = 1 + (consecutiveRight[current + 1] || 0);
        while (consecutiveRight[current - 1] !== undefined) {
            consecutiveRight[current - 1] = consecutiveRight[current] + 1;
            current--;
        }

        max = Math.max(max, consecutiveRight[current]);
    }

    return max;

}

