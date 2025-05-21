const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const audioMap = {};

sounds.forEach((item)=>{
	let doc=document.createElement("audio");
	doc.src=`./sounds/${item}.mp3`;
	doc.id=item;
	document.body.appendChild(doc);
	audioMap[item]=doc;
	
})

function playSound(soundName){
	stopAllSound();
	audioMap[soundName].play();
}

function stopAllSound() {
	for(let song in audioMap){
		audioMap[song].pause();
		audioMap[song].currentTime=0;
	}
}

document.querySelectorAll(".btn").forEach((btn)=>{
	btn.addEventListener("click",()=>{
		playSound(btn.textContent);
	});
});

document.querySelector(".stop").addEventListener("click",()=>{
		stopAllSound();
	})
