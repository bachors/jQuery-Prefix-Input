/***********************************************
* #### jQuery Prefix Input v0.01 ####
* Coded by Ican Bachors 2015.
* http://ibacor.com/labs/jquery-prefix-input/
* Updates will be posted to this site.
***********************************************/

$.fn.prefix = function() {
	
	$(this).each(function(i, a) {
        $(this).focus(function() {
			var b = $(this).data("prefix").toString(),
				c = $(this).attr('class'),
				d = $(this).val();
			if (d == '') {
				$(this).val(b)
			}
			pasang(b.replace('ibacorat', ''), c, i);
			return false
		});
    });	

	function pasang(a, b, c) {
		$('.' + b).eq(c).keydown(function(d) {
			setTimeout(function() {
				var e = rubah($('.' + b).eq(c).val(), true),
					f = rubah(a, true),
					g = f.length,
					h = e.substring(0, g);
				if (e.match(new RegExp(f)) && h == f) {
					$('.' + b).eq(c).val(rubah(e, false))
				} else {
					if (d.key == 'Control' || d.key == 'Backspace' || d.key == 'Del') {
						$('.' + b).eq(c).val(rubah(f, false))
					} else {
						var i = rubah(f, false) + d.key;
						$('.' + b).eq(c).val(i.replace("undefined", ""))
					}
				}
			}, 50)
		})
	}

	function rubah(a, b) {
		var c = ['+', '$', '^', '*', '?'];
		var d = ['ibacorat', 'ibacordolar', 'ibacorhalis', 'ibacorkali', 'ibacortanya'];
		$.each(c, function(i, v) {
			if(b == true){
				a = a.replace(c[i], d[i]);
			}else{
				a = a.replace(d[i], c[i]);
			}
		});
		return a
	}
	
}
