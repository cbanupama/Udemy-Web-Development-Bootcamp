function tables() {
	var number = document.getElementById('start').value;
	var placeholder = document.getElementById('placeholder');
	var str = "";
	for (var i = 1; i <= 10; i++) {
		ans = (number * i);
		str += '<tr><td>' + number + '</td><td>*</td><td>' + i + '</td><td>=</td><td>' + ans + '</td></tr>';
        console.log(str);

	
	}

	placeholder.innerHTML = str;
}