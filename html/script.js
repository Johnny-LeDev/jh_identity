$(function() {
	window.addEventListener('message', function(event) {
		if (event.data.type == "enableui") {
			if (event.data.enable) {
				$('#hurensohn').show()
			} else {
				$('#hurensohn').hide()
			}
		}
	})

	$("#signUp").click(function() {
		document.getElementById('container').classList.add("right-panel-active");
		document.getElementById("rocket").style.animation = "move 2s ease-in";
		var video = document.getElementById('video2');
		var source = document.getElementById('myvidsrc');
		source.setAttribute('src', 'plane.mp4');
		video.loop = true;
		video.load();
		video.play();
	
		var mainvid = document.getElementById('video1');
		mainvid.style.animation = "fadeOut 1s ease-in"
		mainvid.style.animationFillMode = "forwards"
	})

	$("#signIn").click(function() {
		mainvid.style.animation = "fadeOut 1s ease-in"
		mainvid.style.animationFillMode = "forwards"
	})

	$("#signUpNew").click(function() {
		var dateof = $("#dateof").val()

		var date = $("#dateofbirth").val();
		var dateof = new Date($("#dateofbirth").val());

		if (date == 'Invalid Date') {
			date = "invalid"
		} else {
			date = dateof
		}

		$.post('https://Jh_identity/register', JSON.stringify({
			firstname: $("#vorname").val(),
			lastname: $("#nachname").val(),
			dateofbirth: date,
			sex: $("input[name='radio']:checked").val(),
			height: $("#big123").val()
		}))
	})
})