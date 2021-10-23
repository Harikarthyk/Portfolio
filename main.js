window.onload = function () {
	let str = "I'm HariKarthikkeyyan.";
	let i = 0;
	let curr = '';
	typeWriter();
	function typeWriter() {
		curr += str.charAt(i);
		document.getElementById('name').innerHTML = curr + '|';
		i++;
		if (i >= str.length) {
			curr = '';
			i = 0;
			setTimeout(typeWriter, 1000);
		} else setTimeout(typeWriter, 100);
	}
};
