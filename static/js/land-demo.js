
function LandDemo() {


    var states = [
        "washington",
        "oregon",
        "california",
        "idaho",
        "nevada",
        "montana",
        "wyoming",

        "utah",
        "arizona",
        "colorado",
        "new_mexiko",
        "north_dakota",
        "south_dakota",
        "nebraska",
        "kanzas",
        "oklahoma",
        "minesota",

        "iowa",
        "missouri",
        "arkansas",
        "louisiana",
        "wisconsin",
        "illinois",
        "michigan",
        "kentucky",
        "tennessee",
        "missisipi",

        "alabama",
        "georgia",
        "florida",
        "ohio",
        "west_virginia",
        "virgina",
        "north_carolina",
        "south_carolina",
        "pensylvania",

        "new_york",
        "new_jersey",
        "delaware",
        "vermont",
        "new_hampshire",
        "massachusetts",
        "connecticut",
        "maine",
        "alaska",
        "hawaii",
    ];
    var statesDetails = {
        "washington": {
            "title": "Washington",
            "src": "01_Washington.png"
        },
        "oregon": {
            "title": "Oregon",
            "src": "02_Oregon.png"
        },
        "california": {
            "title": "California",
            "src": "03_California.png"
        },
        "idaho": {
            "title": "Idaho",
            "src": "06_Idaho.png"
        },
        "nevada": {
            "title": "Nevada",
            "src": "04_Nevada.png"
        },
        "montana": {
            "title": "Montana",
            "src": "05_Montana.png"
        },
        "wyoming": {
            "title": "Wyoming",
            "src": "09_Wyoming.png"
        },

        "utah": {
            "title": "Utah",
            "src": "08_Utah.png"
        },
        "arizona": {
            "title": "Arizona",
            "src": "07_Arizona.png"
        },
        "colorado": {
            "title": "Colorado",
            "src": "12_Colorado.png"
        },
        "new_mexiko": {
            "title": "New Mexiko",
            "src": "11_New_Mexico.png"
        },
        "north_dakota": {
            "title": "North Dakota",
            "src": "13_North_Dakota.png"
        },
        "south_dakota": {
            "title": "South Dakota",
            "src": "14_South_Dakota.png"
        },
        "nebraska": {
            "title": "Nebraska",
            "src": "10_Nebraska.png"
        },
        "kanzas": {
            "title": "Kanzas",
            "src": "16_Kanzas.png"
        },
        "oklahoma": {
            "title": "Oklahoma",
            "src": "15_Oklahoma.png"
        },
        "minesota": {
            "title": "Minesota",
            "src": "20_Minesota.png"
        },

        "iowa": {
            "title": "Iowa",
            "src": "19_Iowa.png"
        },
        "missouri": {
            "title": "Missouri",
            "src": "17_Missouri.png"
        },
        "arkansas": {
            "title": "Arkansas",
            "src": "20_Arkansas.png"
        },
        "louisiana": {
            "title": "Louisiana",
            "src": "22_Louisiana.png"
        },
        "wisconsin": {
            "title": "Wisconsin",
            "src": "23_Wisconsin.png"
        },
        "illinois": {
            "title": "Illinois",
            "src": "25_Illinois.png"
        },
        "michigan": {
            "title": "Michigan",
            "src": "27_Michigan.png"
        },
        "kentucky": {
            "title": "Kentucky",
            "src": "29_Kentucky.png"
        },
        "tennessee": {
            "title": "Tennessee",
            "src": "21_Tennessee.png"
        },
        "missisipi": {
            "title": "Missisipi",
            "src": "24_Missisipi.png"
        },

        "alabama": {
            "title": "Alabama",
            "src": "26_Alabama.png"
        },
        "georgia": {
            "title": "Georgia",
            "src": "33_Georgia.png"
        },
        "florida": {
            "title": "Florida",
            "src": "28_Florida.png"
        },
        "ohio": {
            "title": "Ohio",
            "src": "30_Ohio.png"
        },
        "west_virginia": {
            "title": "West Virginia",
            "src": "30_West_Virginia.png"
        },
        "virgina": {
            "title": "Virgina",
            "src": "31_Virgina.png"
        },
        "north_carolina": {
            "title": "North Carolina",
            "src": "35_North_Carolina.png"
        },
        "south_carolina": {
            "title": "South Carolina",
            "src": "37_South_Carolina.png"
        },
        "pensylvania": {
            "title": "Pensylvania",
            "src": "32_Pennsylvania.png"
        },

        "new_york": {
            "title": "New York",
            "src": "34_New_York.png"
        },
        "new_jersey": {
            "title": "New Jersey",
            "src": "36_New_Jersey.png"
        },
        "delaware": {
            "title": "Delaware",
            "src": "38_Delaware.png"
        },
        "vermont": {
            "title": "Vermont",
            "src": "39_Vermont.png"
        },
        "new_hampshire": {
            "title": "New Hampshire",
            "src": "41_New_Hampshire.png"
        },
        "massachusetts": {
            "title": "Massachusetts",
            "src": "43_Massachusetts.png"
        },
        "connecticut": {
            "title": "Connecticut",
            "src": "40_Connecticut.png"
        },
        "maine": {
            "title": "Maine",
            "src": "44_Maine.png"
        },
        "alaska": {
            "title": "Alaska",
            "src": "Alaska.png"
        },
        "hawaii": {
            "title": "Hawaii",
            "src": "Hawaii.png"
        },
    };

    var previousQuestions = {};
    var question;

    var score = 0;

    const getRandomInteger = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random()*(max-min+1) + min);
    };
    const shuffleArr = (arr) => {
        var newArr = [];
        var _arr = arr.slice(0);
        var arrLength = _arr.length;
        while(newArr.length < arrLength) {
            const newI = getRandomInteger(0, _arr.length-1);
            newArr.push(_arr.splice(newI, 1));
        }
        return newArr;
    };

    const displayNextQuestion = () => {
        if(question) {
            previousQuestions[question] = {};
            var mapImg = document.querySelector(`.${question}`);
            mapImg.style.display = 'none';
        }
        var newQuestion = states[getRandomInteger(0, states.length-1)];
        while(Object.keys(previousQuestions).indexOf(newQuestion) !== -1) {
            newQuestion = states[getRandomInteger(0, states.length-1)];
        }
        var questionImg = document.querySelector('.state-image').querySelector('img');
        questionImg.src = `static/img/${statesDetails[newQuestion].src}`;

        var mapImg = document.querySelector(`.${newQuestion}`);
        mapImg.style.display = 'block';

        let newAnswers = [newQuestion];
        while(newAnswers.length < 4) {
            var newAnswer = states[getRandomInteger(0, states.length-1)];
            if(newAnswers !== newQuestion && newAnswers.indexOf(newAnswer) === -1) {
                // keep
            } else {
                continue;
            }
            newAnswers.push(newAnswer);
        }
        newAnswers = shuffleArr(newAnswers);
        const variant1 = document.querySelector('.variant-1');
        const variant2 = document.querySelector('.variant-2');
        const variant3 = document.querySelector('.variant-3');
        const variant4 = document.querySelector('.variant-4');

        variant1.innerHTML = statesDetails[newAnswers[0]].title;
        variant1.id = newAnswers[0];

        variant2.innerHTML = statesDetails[newAnswers[1]].title;
        variant2.id = newAnswers[1];

        variant3.innerHTML = statesDetails[newAnswers[2]].title;
        variant3.id = newAnswers[2];

        variant4.innerHTML = statesDetails[newAnswers[3]].title;
        variant4.id = newAnswers[3];

        question = newQuestion;
    };


    const assignEvents = () => {
        const handleQuestion = (event) => {
            const answer = event.currentTarget.innerText;

            var variant = event.currentTarget;


            return new Promise((resolve, reject) => {
                variant.classList.add('preview');
                resolve();
                setTimeout(() => {
                    resolve();
                }, 100)
            }).then(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        variant.classList.remove('preview');
                        resolve();
                    }, 1000);
                });
            }).then(() => {
                return new Promise((resolve, reject) => {
                    if(variant.id === question) {
                        score += 100;
                        variant.classList.add('success');
                        setTimeout(() => {
                            variant.classList.remove('success');
                            resolve();
                        }, 400)

                    } else {
                        variant.classList.add('error');
                        setTimeout(() => {
                            variant.classList.remove('error');
                            resolve();
                        }, 400)
                    }
                })
            }).then(() => {
                document.querySelector('.score').innerHTML = `Score: ${score}`;

                displayNextQuestion();
            })
        };

        document.querySelector('.variant-1').addEventListener('click', (event) => {
            handleQuestion(event);
        });
        document.querySelector('.variant-2').addEventListener('click', (event) => {
            handleQuestion(event);
        });
        document.querySelector('.variant-3').addEventListener('click', (event) => {
            handleQuestion(event);
        });
        document.querySelector('.variant-4').addEventListener('click', (event) => {
            handleQuestion(event);
        });
    };

    this.init = () => {
        assignEvents();
        displayNextQuestion();
    };
}