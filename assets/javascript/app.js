
$(document).ready(function () {

    var game_duration = 30;
    var intervalId;
    var score = 0;

    $("#begin-button").click(run());

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function stop() {
        clearInterval(intervalId);
        for (let i = 0; i < 5; ++i) {
            let q_num = i + 1;
            let q_ans = $("input[name='q" + q_num + "radio']:checked").val();
            let q_right_ans = $("#q" + q_num).attr("data-ans");
            if (q_ans === q_right_ans) {
                ++score;
            }
        }
        console.log(score);
        document.body.innerHTML = "<div class='container'>" +
            "<br><h1>Computer History Trivia Game</h1><hr>" +
            "<div class='jumbotron'><h1 id='score-report' class='display-4'>Results:</h1>" +
            "<br><h1 class='lead'>You scored " + score + " out of 5.</h1><br>" +
            "<p class='lead'><a class='btn btn-primary btn-lg' href='index.html' role='button'>Play Again</a></p>" +
            "</div><br><br><br><footer class='fixed-bottom'>Copyright &copy; Irving Rivas 2018</footer></div>"
    }

    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }

    function decrement() {
        $("#time-box").html("<h1>" + timeConverter(game_duration) + "</h1>")
        game_duration--;
        if (game_duration === 0) {
            stop();
        }
    }

    $("#more-time").on("click", function () {
        game_duration += 15;
    });

    $("#submit-answers").on("click", function () {
        stop();
    });

});