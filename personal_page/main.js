
function openInfo(person) {
    console.log(person);                // 使用 console.log 顯示一些資訊，可用來 debug

    // 跳出 alert 範例 
    if( person === 'howard') {
        alert('邪惡無敵!!')             
    }

    // 修改 element 的文字內容
    else if (person === 'wan') {
        let node = document.getElementById('wan-title');
        let nickname = node.innerHTML === '阿針' ? '阿針遊戲王' : '阿針';
        node.innerHTML = nickname;
        node.style.color = node.style.color === 'red' ? 'blue' : 'red';
    
    }

    // 新增 element 
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
    
    // 新增 class 做到小動畫的效果，並轉移畫面
    else if(person === 'sheep') {
        $('#Sheep > .selfie').addClass('active');
        setTimeout(function() {
            $('#Sheep > .selfie').removeClass('active');
            window.location.href='https://biography.stackblitz.io';
        }, 1000)
    }
}
        