$(document).ready(function() {

    $('.stream-counter-container').each(function() {
        var streamTimer = null;

        var deadline = $('.stream-counter-container').attr('data-deadline');

        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total':    t,
                'days':     days,
                'hours':    hours,
                'minutes':  minutes,
                'seconds':  seconds
            };
        }

        function getDaysText(number) {
            var endings = Array('дней', 'день', 'дня');
            var num100 = number % 100;
            var num10 = number % 10;
            if (num100 >= 5 && num100 <= 20) {
                return endings[0];
            } else if (num10 == 0) {
                return endings[0];
            } else if (num10 == 1) {
                return endings[1];
            } else if (num10 >= 2 && num10 <= 4) {
                return endings[2];
            } else if (num10 >= 5 && num10 <= 9) {
                return endings[0];
            } else {
                return endings[2];
            }
        }

        function getHoursText(number) {
            var endings = Array('часов', 'час', 'часа');
            var num100 = number % 100;
            var num10 = number % 10;
            if (num100 >= 5 && num100 <= 20) {
                return endings[0];
            } else if (num10 == 0) {
                return endings[0];
            } else if (num10 == 1) {
                return endings[1];
            } else if (num10 >= 2 && num10 <= 4) {
                return endings[2];
            } else if (num10 >= 5 && num10 <= 9) {
                return endings[0];
            } else {
                return endings[2];
            }
        }
        
        function getMinutesText(number) {
            var endings = Array('минут', 'минута', 'минуты');
            var num100 = number % 100;
            var num10 = number % 10;
            if (num100 >= 5 && num100 <= 20) {
                return endings[0];
            } else if (num10 == 0) {
                return endings[0];
            } else if (num10 == 1) {
                return endings[1];
            } else if (num10 >= 2 && num10 <= 4) {
                return endings[2];
            } else if (num10 >= 5 && num10 <= 9) {
                return endings[0];
            } else {
                return endings[2];
            }
        }

        function getSecondsText(number) {
            var endings = Array('секунд', 'секунда', 'секунды');
            var num100 = number % 100;
            var num10 = number % 10;
            if (num100 >= 5 && num100 <= 20) {
                return endings[0];
            } else if (num10 == 0) {
                return endings[0];
            } else if (num10 == 1) {
                return endings[1];
            } else if (num10 >= 2 && num10 <= 4) {
                return endings[2];
            } else if (num10 >= 5 && num10 <= 9) {
                return endings[0];
            } else {
                return endings[2];
            }
        }
        
        function updateCounter() {
            var t = getTimeRemaining(deadline);
            
            $('.stream-counter-item-days .stream-counter-item-value').html(('0' + t.days).slice(-2));
            $('.stream-counter-item-days .stream-counter-item-text').html(getDaysText(t.days));
            
            $('.stream-counter-item-hours .stream-counter-item-value').html(('0' + t.hours).slice(-2));
            $('.stream-counter-item-hours .stream-counter-item-text').html(getHoursText(t.hours));
            
            $('.stream-counter-item-minutes .stream-counter-item-value').html(('0' + t.minutes).slice(-2));
            $('.stream-counter-item-minutes .stream-counter-item-text').html(getMinutesText(t.minutes));
            
            $('.stream-counter-item-seconds .stream-counter-item-value').html(('0' + t.seconds).slice(-2));
            $('.stream-counter-item-seconds .stream-counter-item-text').html(getSecondsText(t.seconds));
            
            if (t.total <= 0) {
                window.clearInterval(streamTimer);
                streamTimer = null;
                $('.stream-counter').hide();
                $('.stream-video-player').html('<iframe width="560" height="315" src="' + $('.stream-video-player').attr('data-link') + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                $('.stream-video').show();
            }
        }

        updateCounter();

        streamTimer = window.setInterval(updateCounter, 1000);
    });

});