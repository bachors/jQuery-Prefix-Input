/***********************************************
* #### jQuery Prefix Input ####
* Coded by Ican Bachors 2015.
* http://ibacor.com/labs/jquery-prefix-input/
* Updates will be posted to this site.
***********************************************/

$(".ibacor_fi").focus(function() {
    var a = $(this).data("prefix"),
        ibacor_currentId = $(this).attr('id'),
        ibacor_val = $(this).val();
    if (ibacor_val == '') {
        $(this).val(a)
    }
    ibacor_fi((Math.abs(a)) ? a : a.replace('ibacorat', ''), ibacor_currentId);
    return false
});

function ibacor_fi(d, e) {
    $('#' + e).keydown(function(c) {
        setTimeout(function() {
            var a = (Math.abs($('#' + e).val())) ? $('#' + e).val() : bcr_riplis($('#' + e).val()),
                qq = (Math.abs(d)) ? d : bcr_riplis(d),
                ibacor_jumlah = qq.length,
                ibacor_cek = a.substring(0, ibacor_jumlah);
            if (a.match(new RegExp(qq)) && ibacor_cek == qq) {
                $('#' + e).val((Math.abs(a)) ? a : bcr_unriplis(a))
            } else {
                if (c.key == 'Control' || c.key == 'Backspace' || c.key == 'Del') {
                    $('#' + e).val((Math.abs(a)) ? qq : bcr_unriplis(qq))
                } else {
                    var b = (Math.abs(a)) ? qq + c.key : bcr_unriplis(qq) + c.key;
                    $('#' + e).val(b.replace("undefined", ""))
                }
            }
        }, 50)
    })
}

function bcr_riplis(a) {
    var f = ['+', '$', '^', '*', '?'];
    var r = ['ibacorat', 'ibacordolar', 'ibacorhalis', 'ibacorkali', 'ibacortanya'];
    $.each(f, function(i, v) {
        a = a.replace(f[i], r[i])
    });
    return a
}

function bcr_unriplis(a) {
    var f = ['+', '$', '^', '*', '?'];
    var r = ['ibacorat', 'ibacordolar', 'ibacorhalis', 'ibacorkali', 'ibacortanya'];
    $.each(f, function(i, v) {
        a = a.replace(r[i], f[i])
    });
    return a
}
