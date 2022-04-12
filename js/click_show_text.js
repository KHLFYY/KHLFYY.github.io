var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("(*^▽^*)", "!!!∑(ﾟДﾟノ)ノ", "ヾ(ﾟ∀ﾟゞ)", "(ﾉ´▽｀)ﾉ♪", "ヾ(✿ﾟ▽ﾟ)ノ", "  ٩(๑>◡<๑)۶", "  〒▽〒", "  (✪ω✪)", "─=≡Σ(((つ•̀ω•́)つ", "∑(っ°Д°;)っ", "(。-ω-)zzz", "(`ヮ´ )σ`∀´) ﾟ∀ﾟ)σ", "  (๑¯∀¯๑)", "  (ಥ_ಥ)", " ᕦ(･ㅂ･)ᕤ", " ( ´ρ`)", "  ( ﾟ∀。)", "  (ﾟДﾟ≡ﾟДﾟ)", "ᕕ( ᐛ )ᕗ ", " (ﾉ)`ω´(ヾ) ", "  σ( ᑒ ) ", "(ノﾟ∀ﾟ)ノ ");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x - 60,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#01AFFD"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}