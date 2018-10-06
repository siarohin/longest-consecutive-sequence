module.exports = function longestConsecutiveLength(array) {

	let consecutiveRight = {},
        max = 0;

    for (let i = 0; i < array.length; i++) {

        consecutiveRight[array[i]] = 1 + (consecutiveRight[array[i] + 1] || 0);
        
        while (consecutiveRight[array[i] - 1] !== undefined) {
            consecutiveRight[array[i] - 1] = consecutiveRight[array[i]] + 1;
            array[i]--;
        }

        max = Math.max(max, consecutiveRight[array[i]]);
    }

    return max;

}

