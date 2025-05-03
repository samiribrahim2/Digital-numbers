const numbers = [
    ["top", "top-left", "top-right", "bottom-left", "bottom-right", "bottom"],     // 0
    ["top-right", "bottom-right"],                                                 // 1
    ["top", "top-right", "middle", "bottom-left", "bottom"],                       // 2
    ["top", "top-right", "middle", "bottom-right", "bottom"],                      // 3
    ["top-left", "top-right", "middle", "bottom-right"],                           // 4
    ["top", "top-left", "middle", "bottom-right", "bottom"],                       // 5
    ["top", "top-left", "middle", "bottom-left", "bottom-right", "bottom"],        // 6
    ["top", "top-right", "bottom-right"],                                           // 7
    ["top", "top-left", "top-right", "middle", "bottom-left", "bottom-right", "bottom"], // 8
    ["top", "top-left", "top-right", "middle", "bottom-right", "bottom"]           // 9
];

const btn = document.getElementById('Display');
const number = document.getElementById('input');
btn.addEventListener('click', () => {
    let value = number.value.trim();

    if (/^\d{1,3}$/.test(value)) {
        value = parseInt(value);
        console.log("Valid number:", value);
        number.value = "";
        // Remove 'light' class from all segments
        document.querySelectorAll('.segment').forEach(seg => seg.classList.remove('light'));

        const digits = document.getElementsByClassName('digit');

        let usedDigits = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            digits[i].style.display = "block";
            const digit = value % 10;
            value = Math.floor(value / 10);
            usedDigits++;

            const digitSegments = numbers[digit];

            if (digitSegments) {
                digitSegments.forEach(classname => {
                    const segment = digits[i].querySelector(`.${classname}`);
                    if (segment) {
                        segment.classList.add('light');
                    }
                });
            }

            // Stop if no more digits
            if (value === 0) {
                for (let i = 0; i < digits.length - usedDigits; i++) {
                    digits[i].style.display = "none";
                }
                break;
            };
        }
    }





});