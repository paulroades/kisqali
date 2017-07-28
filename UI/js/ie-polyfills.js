(function () {
    $(function() {
        function placeholderIsNotSupported() {
            var test = document.createElement('input');
            return !('placeholder' in test);
        }
        if (placeholderIsNotSupported()) {
            $('input, textarea').placeholder();
        }
    });
})();