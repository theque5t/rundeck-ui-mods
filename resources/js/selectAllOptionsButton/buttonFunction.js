selectAllOptionsButtonFunction = function (obj) {
	var commandOptions = document.getElementById('_commandOptions');
	var formGroups = commandOptions.getElementsByClassName('form-group');
	var formGroupIndex = obj.id.substring(22);
	var inputs = formGroups[formGroupIndex].getElementsByTagName('input');
	var checkboxes = jQuery(inputs).filter('input:checkbox');
	var checkedBoxes = jQuery(checkboxes).filter(':checked').length;
	var button = jQuery(inputs).filter('input:button');

	if(obj.value == "Check All"){
		//check them all
		for(var n1 = 0; n1 < checkboxes.length; n1++) {
			if(checkboxes[n1].checked == false) {
				checkboxes[n1].click();
			}
		}
		button[0].value = "Uncheck All";
	}else{
		//uncheck them all
		for(var n1 = 0; n1 < checkboxes.length; n1++) {
			if(checkboxes[n1].checked == true) {
				checkboxes[n1].click();
			}
		}
		button[0].value = "Check All";
	}
};