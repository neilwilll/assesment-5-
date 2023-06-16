const fortuneButton = document.getElementById('fortuneButton');
const fortuneText = document.getElementById('fortuneText');

const getFortune = () => {
    fetch('/getFortune')
        .then(response => response.text())
        .then(fortune => {
            fortuneText.textContent = fortune;
        });
};

fortuneButton.addEventListener('click', getFortune);

const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

complimentBtn.addEventListener('click', getCompliment);
