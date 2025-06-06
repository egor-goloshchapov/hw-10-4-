        let count = 0;
        const intervalId = setInterval(() => {
            count++;
            document.getElementById('intervalOutput').innerHTML += `<p>Повідомлення ${count}</p>`;
            if (count >= 5) {
                clearInterval(intervalId);
            }
        }, 1000);



                let pos = 0;
        const interval = setInterval(() => {
            pos += 10;
            document.getElementById('box1').style.left = pos + 'px';
            document.getElementById('box2').style.top = pos + 'px';
            document.getElementById('box3').style.transform = `scale(${1 + pos / 100})`;

            if (pos > 100) {
                clearInterval(interval);
            }
        }, 300);



                document.getElementById('startButton').addEventListener('click', () => {
            const seconds = parseInt(document.getElementById('timeInput').value);
            document.getElementById('timeMessage').innerHTML = `Чекаємо ${seconds} секунд...`;

            setTimeout(() => {
                document.getElementById('timeMessage').innerHTML = `Час вийшов!`;
            }, seconds * 1000);
        });