function postToGoogle() {
	alert('success');
	var name = $("#nameField").val();
	var email = $("#emailField").val();
	var mess = $("#messField").val();

	$.ajax({
		url: "https://docs.google.com/forms/d/e/1FAIpQLScgl7xLknBkxK-cVCg_Yl3KqdR8Hq3STG48F8cIahW0qizBHA/formResponse?",
		data: {"entry.366340186": name, "entry.1526569520": email, "entry.1146355856": mess},
		type: "POST",
		dataType: "jsonp",
		success: function(d)
	{},
		error: function(x, y, z) {
			$('#success-msg').show();
		}
	});

	return false;
}
