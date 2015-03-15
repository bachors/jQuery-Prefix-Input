/************************************************
* #### jQuery Prefix Input ####
* Coded by Ican Bachors 2015.
* http://ibacor.com/labs/jquery-prefix-input/
* Updates will be posted to this site.
************************************************/

$(".ibacor_fi").focus(function(){var ibacor_prefix=$(this).data("prefix"),ibacor_currentId=$(this).attr('id');ibacor_fi(ibacor_prefix,ibacor_currentId);return false});function ibacor_fi(ibacor_prefix,ibacor_input_id){$('#'+ibacor_input_id).keydown(function(){setTimeout(function(){var ibacor_input=$('#'+ibacor_input_id).val();if(ibacor_input.match(new RegExp(ibacor_prefix))){$('#'+ibacor_input_id).val(ibacor_input)}else{$('#'+ibacor_input_id).val(ibacor_prefix)}},50)})}
