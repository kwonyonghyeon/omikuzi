const button = document.getElementById('button');
const syokai = document.getElementById('syokai');
const uranai = document.getElementById('uranai');
console.log(uranai);
const uranaiSyokai = document.getElementById('uranaiSyokai');

function hidden(hidden) {
    hidden.classList.add('hidden');
}

function uranaiSyokaiFunction() {
    uranaiSyokai.classList.remove('hidden');
    if (uranai.innerText == '大吉') {
        uranaiSyokai.innerText = "축하드립니다! 대길이라니, 올해 좀 잘 나가시겠는데요?";
    }
    else if (uranai.innerText == '吉') {
        uranaiSyokai.innerText = "길입니다! 대길보다는 못하지만, 그래도 즐거운 한 해를 보내시겠네요!";
    }
    else if (uranai.innerText == '中吉') {
        uranaiSyokai.innerText = "중길입니다! 행복한 신년 보내세요 :)";
    }
    else if (uranai.innerText == '小吉') {
        uranaiSyokai.innerText = "소길입니다! 딱 가운데 운세네요..! 무난하게 보내실 수 있겠어요.";
    }
    else if (uranai.innerText == '末吉') {
        uranaiSyokai.innerText = "말길입니다! 아슬아슬하긴 했지만, 그래도 길입니다!";
    }
    else if (uranai.innerText == '凶') {
        uranaiSyokai.innerText = "흉입니다. 올해 조금 조심하셔야 할 수도... (웃음) 이런거는 다 재미일 뿐, 진지하게 받아들이지는 마세요!";
    }
    else if (uranai.innerText == '大凶') {
        uranaiSyokai.innerText = "대흉입니다. 액땜 한 셈 치죠..! (그래도 조금 조심하시는게 좋을 수도...?)";
    }
}

function uranaiFunction(event) {
    hidden(button);
    hidden(syokai);
    uranai.classList.remove('hidden');
    const unsei = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
    uranai.innerText = unsei[Math.floor(Math.random() * unsei.length)]
    uranaiSyokaiFunction()
}

button.addEventListener('click', uranaiFunction);