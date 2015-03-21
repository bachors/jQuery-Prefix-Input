/************************************************
* #### jQuery Prefix Input ####
* Coded by Ican Bachors 2015.
* http://ibacor.com/labs/jquery-prefix-input/
* Updates will be posted to this site.
************************************************/

$(".ibacor_fi").focus(function(){var a=$(this).data("prefix"),ibacor_currentId=$(this).attr('id'),ibacor_val=$(this).val();if(ibacor_val==''){$(this).val(a)}ibacor_fi(a,ibacor_currentId);return false});function ibacor_fi(c,d){$('#'+d).keydown(function(b){setTimeout(function(){var a=$('#'+d).val(),ibacor_jumlah=c.length,ibacor_cek=a.substring(0,ibacor_jumlah);if(a.match(new RegExp(c))&&ibacor_cek==c){$('#'+d).val(a)}else{if(b.key=='Control'||b.key=='Backspace'||b.key=='Del'){$('#'+d).val(c)}else{$('#'+d).val(c+b.key)}}},50)})}
