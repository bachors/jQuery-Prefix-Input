# jQuery-Prefix-Input
jquery plugins to provide the input prefix<hr>
<h2>Example:</h2>
<p>Install: Selector by class name in all the input</p>
<pre>Member Name &lt;input type="text" class="demo" data-prefix="JKT48_" /&gt;
Website &lt;input type="text" class="demo" data-prefix="http://" /&gt;
Phone &lt;input type="text" class="demo" data-prefix="+62" /&gt;</pre>
<h2>jQuery:</h2>
<pre>
&lt;!-- Include jQuery --&gt;
&lt;script src="//code.jquery.com/jquery-2.1.1.min.js"&gt;&lt;/script&gt;

&lt;!-- Include prefix-input.js --&gt;
&lt;script src="js/jquery.prefix-input.js"&gt;&lt;/script&gt;
&lt;script&gt;        
$(function() {
    $(".demo").prefix();
});
&lt;/script&gt;
</pre>
