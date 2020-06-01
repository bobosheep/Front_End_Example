
function openInfo(person) {
    console.log(person);
    if( person === 'howard') {
        alert('邪惡無敵!!')
    }
    else if (person === 'wan') {
        let node = document.getElementById('wan-title');
        let nickname = node.innerHTML === '阿針' ? '阿針遊戲王' : '阿針';
        node.innerHTML = nickname;
        node.style.color = node.style.color === 'red' ? 'blue' : 'red';
    
    }
    else if(person === 'jason') {
        let node = document.createElement('span');
        node.innerHTML = '🍕' ;
        let x = parseInt(Math.random() * 1500) + 10;
        let y = parseInt(Math.random() * 800) + 10;
        console.log(x, y)
        node.style.cssText = "font-size:64px;position: fixed; top: " + y + "px; left: " + x + "px;"; 
        document.getElementById("app").appendChild(node);
        setTimeout(function() {
            document.getElementById("app").removeChild(node);
        }, 5000);
    }
    else if(person === 'sheep') {
        $('#Sheep > .selfie').addClass('active');
        setTimeout(function() {
            $('#Sheep > .selfie').removeClass('active');
        }, 1000)
    }
}
        