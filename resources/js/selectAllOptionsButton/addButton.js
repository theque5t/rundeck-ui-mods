jQuery(document).ready(function($) {

    var attempts = 0;
    var maxAttempts = 5;

    var addButton = setInterval(function(){

        if(attempts == maxAttempts){
            clearInterval(addButton);
        }
        attempts++;

        var commandOptions = document.getElementById('_commandOptions');

        if (commandOptions != null){

            var formGroups = commandOptions.getElementsByClassName('form-group');

            for( n1 = 0; n1 < formGroups.length; n1++ ){

                var inputs = formGroups[n1].getElementsByTagName('input');
                var checkboxes = jQuery(inputs).filter('input:checkbox');
                var helpBlock = formGroups[n1].getElementsByClassName('help-block');
                var isMultiOptionList = checkboxes.length > 1;
                var noSelectAllButtonExists = jQuery(inputs).filter('#selectAllOptionsButton'+n1).length == 0;
                var hasOneHelpBlock = helpBlock.length == 1;

                if (isMultiOptionList && noSelectAllButtonExists && hasOneHelpBlock){
                    var checkedBoxes = jQuery(checkboxes).filter(':checked').length;
                    if (checkedBoxes != checkboxes.length){
                        var value = "Check All";
                    }
                    else{
                        var value = "Uncheck All";
                    }

                    if(helpBlock[0].childNodes.length == 0){
                        jQuery(helpBlock[0]).append('<input id="selectAllOptionsButton'+n1+'" type="button" value="'+value+'" onclick="selectAllOptionsButtonFunction(this);" />');
                    }
                    else{
                        jQuery('<input id="selectAllOptionsButton'+n1+'" type="button" value="'+value+'" onclick="selectAllOptionsButtonFunction(this);" />').insertBefore(helpBlock[0].firstChild);
                    }                
                }
            }
        }
    }, 500);
});