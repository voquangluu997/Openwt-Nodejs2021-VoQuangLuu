function different_values(arr, num) {
    var max_val = -1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var x = Math.abs(arr[i] - arr[j]);
            if (x <= num) {
                max_val = Math.max(max_val, x)
            }
        }
    }
    return max_val
}