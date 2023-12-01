

export function typeDeteteEffect() {
    const _CONTENT = [
        "HTML/CSS/JS",
        "Bootstrap/Tailwind",
        "Python",
        "Automatic Testing",
        "Figma",
        "React"
    ]

    let _PART = 0;

    let _PART_INDEX = 0;

    let _INTERVAL_VAL;

    if (document.getElementById("skills") == null) {
        return;
    } else {
        let _ELEMENT = document.getElementById("skills")
        function Type() {
            // Get substring with 1 characater added
            var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX++;

            // If full sentence has been displayed then start to delete the sentence after some time
            if (text === _CONTENT[_PART]) {


                clearInterval(_INTERVAL_VAL);
                setTimeout(function () {
                    _INTERVAL_VAL = setInterval(Delete, 50);
                }, 1000);
            }
        }

        // Implements deleting effect
        function Delete() {
            // Get substring with 1 characater deleted
            var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;

            // If sentence has been deleted then start to display the next sentence
            if (text === '') {
                clearInterval(_INTERVAL_VAL);

                // If current sentence was last then display the first one, else move to the next
                if (_PART == (_CONTENT.length - 1))
                    _PART = 0;
                else
                    _PART++;

                _PART_INDEX = 0;

                // Start to display the next sentence after some time
                setTimeout(function () {
                    _INTERVAL_VAL = setInterval(Type, 100);
                }, 200);
            }
        }

        // Start the typing effect on load
        _INTERVAL_VAL = setInterval(Type, 100);
    };


}



