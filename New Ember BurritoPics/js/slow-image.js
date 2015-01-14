(function($){

    function getRandRange(low, high) {

        var adjustedHigh = (parseFloat(high) - parseFloat(low)) + 1;
        var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(low);

        if (parseFloat(low) <= parseFloat(high) && (low !== '') && (high !== '')) {
            return numRand;
        } else {
            return 0;
        }
    }

    $(document).ready(function(){
        $('.BurritoImage').hide();

        $('.BurritoImage').each(function () {
            var numRand = getRandRange(1000, 5500);
            $(this).show('blind', {
              easing: 'easeOutCirc',
              duration: numRand
            });
        });
    });

})(jQuery);
