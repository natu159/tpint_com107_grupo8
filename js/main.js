$(document).ready(function() {
	$.ajax({
		url: 'https://reqres.in/api/users?page=1',
		dataType: 'json',
		success: function(data) {
			var html = '';
			for(var i=0; i<3; i++) {
				var user = data.data[i];
				html += '<div class="col-lg-4">';
				html += '<svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">';
			
				html += '<rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>';
				html += '<image x="0" y="0" width="100%" height="100%" xlink:href="' + user.avatar + '" />';
				html += '</svg>';
				html += '<h5 class="fw-bold mt-1">' + user.first_name + ' ' + user.last_name + '</h5>';
				html += '<p>' + user.email + '</p>';
				html += '</div>';
			}
			$('#personal .row').html(html);
		}
	});
});

$(document).ready(function() {
	$("#abrir-form").click(function() {
		$("#modal-login").modal("show");
	});
});
$(document).ready(function() {
	$("#abrir-form-complete").click(function() {
		$("#modal-login").modal("show");
	});
});

$(document).ready(function() {
	$("#cerrar-form").click(function() {
		$("#modal-login").modal("hide");
	})	
});

$(document).ready(function() {
    $("#navbar-toggler").click(function() {
      $("#navbarNav").toggle();
    });
});