// Welcome to the so post beat javascript file!!

// audio stuff here using the web audio api
// instigate audio context

        const AudioContext = window.AudioContext || window.webAudioContext;
// load in track

		 const audioElement = document.querySelector('audio');
		 const playButton = document.querySelector('.onOff');

		 playButton.addEventListener('click', function() {
			 if (this.dataset.playing === 'false'){
				 audioElement.play();
				 this.dataset.playing = 'true';
			 } else if (this.dataset.playing === 'true') {
				 audioElement.pause();
				 this.dataset.playing = 'false';
			 }
		 }, false)

// random greating

// random corp shiz

// random saying
		let sayingBox = document.getElementById("sayingBox");

		let sayings = [
            "Digital but also clocks.",
            "Don't believe the jipe.",
			"why is a question, a very short question, it applies to everything.",
			"If it doesn't contradict itself it can't be true.",
			"Seldom stand, seldom fall.",
			"The late worm misses all the birds.",
			"If it ain't broke, break it.",
			"We are always moving furniture.",
			"If it can't be done laying down it's not worth doing.",
			"They'll come to us all.",
			"You don't need a code abode.",
            "Warning: life."
			]

		let list = sayings.length;

		window.onload = grabSaying = () => {
				let num = Math.floor(Math.random() * list);
				sayingBox.innerText = sayings[num];
				}

        //mood board

        const moodBoard = document.getElementById('moodBoard');
        moodBoard.style.display = 'none';

		let moodA = document.getElementById('moodA');
		let moodB = document.getElementById('moodB');
		let moodC = document.getElementById('moodC');
		let moodD = document.getElementById('moodD');
		moodArray = [ moodA, moodB, moodC, moodD ];

		let wordsA = [ 'some', 'these', 'while', 'if', 'as', 'how', 'why', 'what', 'where', 'such', 'when', 'my', 'your', 'her', 'his', '10' ]
		let wordsB = [ 'red', 'pale', 'tense', 'bold', 'perfect', 'loose', 'flavoured', 'wild', 'simple', 'elusive', 'beautiful', 'coastal', 'vile', 'dainty', 'tired', 'sequential']
		let wordsC = [ 'lemons', 'accusations', 'diamonds', 'children', 'visions', 'fixtures', 'apparitions', 'notions', 'dreams', 'storm clouds', 'animals', 'cities', 'mysteries', 'fingers', 'excuses', 'numbers']
		let wordsD = [ 'grow', 'exist', 'fail', 'flew', 'diminish', 'engage', 'appear', 'die', 'collide', 'threaten', 'coagulate', 'thrive', 'belong', 'tickle', 'disappoint', 'return']

		const generateBoard = () => {
            moodBoard.style.display = "flex";

	for(i=0; i < moodArray.length; i++){
	randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6,'0');
		moodArray[i].style.backgroundColor = randomColor;

					if(moodArray[i] == moodA){
					let num = Math.floor(Math.random() * wordsA.length);
					moodArray[i].innerText = wordsA[num];
							}else if(moodArray[i] == moodB){
					let num = Math.floor(Math.random() * wordsB.length);
					moodArray[i].innerText = wordsB[num];
							}else if(moodArray[i] == moodC){

					let num = Math.floor(Math.random() * wordsC.length);
					moodArray[i].innerText = wordsC[num];
							}else{

					let num = Math.floor(Math.random() * wordsD.length);
					moodArray[i].innerText = wordsD[num];
							}

					};
		 };

const chordBox = document.getElementById('chordBox');

const chords = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'];
const chordType = ['maj', 'maj', 'maj','min', 'min', 'aug', 'dim'];

const createChords = () => {

let randomChordSeq = [];

    for(i = 0; i < 3; i++){

        let randomChord = Math.floor(Math.random() * chords.length);
        let randomType = Math.floor(Math.random() * chordType.length);

        randomChordSeq.push(` ${chords[randomChord]}  ${chordType[randomType]} `)
    };

    let repeatedChord = randomChordSeq[Math.floor(Math.random() * 3)];

    randomChordSeq.splice(Math.floor(Math.random() * 3),0, repeatedChord);

    chordBox.innerText = randomChordSeq;

};
