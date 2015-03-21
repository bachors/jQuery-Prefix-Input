/************************************************
* #### jQuery Prefix Input ####
* Coded by Ican Bachors 2015.
* http://ibacor.com/labs/jquery-prefix-input/
* Updates will be posted to this site.
************************************************/

$(".ibacor_fi").focus(function(){var a=$(this).data("prefix"),ibacor_currentId=$(this).attr('id'),ibacor_val=$(this).val();if(ibacor_val==''){$(this).val(a)}ibacor_fi(a,ibacor_currentId);return false});function ibacor_fi(b,c){$('#'+c).keydown(function(){setTimeout(function(){var a=$('#'+c).val(),ibacor_jumlah=b.length,ibacor_cek=a.substring(0,ibacor_jumlah);if(a.match(new RegExp(b))&&ibacor_cek==b){$('#'+c).val(a)}else{$('#'+c).val(b)}},50)})}
