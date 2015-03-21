/************************************************
* #### jQuery Prefix Input ####
* Coded by Ican Bachors 2015.
* http://ibacor.com/labs/jquery-prefix-input/
* Updates will be posted to this site.
************************************************/

$(".ibacor_fi").focus(function(){var a=$(this).data("prefix"),ibacor_currentId=$(this).attr('id'),ibacor_val=$(this).val();if(ibacor_val==''){$(this).val(a)}ibacor_fi(a,ibacor_currentId);return false});function ibacor_fi(d,e){$('#'+e).keydown(function(c){setTimeout(function(){var a=$('#'+e).val(),ibacor_jumlah=d.length,ibacor_cek=a.substring(0,ibacor_jumlah);if(a.match(new RegExp(d))&&ibacor_cek==d){$('#'+e).val(a)}else{if(c.key=='Control'||c.key=='Backspace'||c.key=='Del'){$('#'+e).val(d)}else{var b=d+c.key;$('#'+e).val(b.replace("undefined",""))}}},50)})}
