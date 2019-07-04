new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['s0', 's1', 's2', 's3', 's4', 's5', 's6'],
    navgationTooltips: ['0', '1', '2', '3', '4', '5', '6']
})

// Global variable to store the text file line by line.
var textLines;
var currentLine = -1;
var currentClass = ".p0"
var maxLine = 36;

$(window).on("load", function () {
    $(function () {
        $('.hoverElem img').Lazy({
            // your configuration goes here
            scrollDirection: 'vertical',
            effect: 'fadeIn',
            effectTime: 500,
            threshold: 0,
            visibleOnly: true,
            onError: function (element) {
                console.log('error loading ' + element.data('src'));
            }
        });
    })
});

// When the file is fully loaded
$(document).ready(function () {

    // When the document is loaded, start fetching the text file. 
    // In this case text file is located at the root.
    $.ajax({
        url: "txt/thedelay.txt",
        dataType: "text",
        success: function (data) {
            textLines = data.split("\n");
            // Log the text file to console.
            // console.log(textLines);
        }
    });

    var bgSound = document.getElementById("bg");
    bgSound.volume = 0.125;
    bgSound.playbackRate = 0.55;
    bgSound.play();

    $(".storyText").fadeOut(500);
    $('.imgtxtB').css('opacity', '0');



    // For every element in hoverElem class
    // when mouse is over the element do the following
    $(".hoverElem img").mouseover(function () {
        $(currentClass).removeClass("arrowActive");

        // Get the "data-linenum" value
        // this refers to the line in the text.
        // Set currentText to be the text referred to by 
        // data-linenum.
        var lineNumber = $(this).parent().data("linenum");
        currentClass = ".p" + lineNumber.toString();
        var currentText = textLines[lineNumber];
        currentLine = lineNumber;
        // Set the textContainer class element's text.
        $(currentClass).addClass("arrowActive");

        $(".storyText").fadeOut(200, function () {
            $(".storyText").text("");
            $(".storyText").text(currentText);
            $(".storyText").fadeIn(100);
        });
    });

    function goToNeighbor() {
        $(".storyText").fadeOut(300, function () {
            $(".storyText").text("");
            $(".storyText").text(textLines[currentLine]);
            $(".storyText").fadeIn(0);
        });

        $(currentClass).removeClass("arrowActive");

        var neighborClass = ".p" + currentLine.toString();
        $(neighborClass).addClass("arrowActive");
    }

    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // left
                if (currentLine > 0) {
                    currentClass = ".p" + currentLine.toString();
                    currentLine--;
                    console.log(currentLine);
                    if ($(currentClass).is(':first-child')) {
                        fullpage_api.moveSectionUp();
                    }
                    goToNeighbor();
                }
                break;

            case 39: //right
                if (currentLine < maxLine) {
                    currentClass = ".p" + currentLine.toString();
                    currentLine++;
                    console.log(currentLine);
                    if ($(currentClass).is(':last-child')) {
                        fullpage_api.moveSectionDown();
                    }
                    goToNeighbor();
                }
                break;
        }

    });


    $(".imgtxtA").hover(function () {

        $(this).next(".imgtxtB").animate({
            opacity: "1"
        }, {
                queue: false
            });
    }, function () {
        $(this).next(".imgtxtB").animate({
            opacity: "0"
        }, {
                queue: false
            });
    });

});

$(document).ready(function () {

    //Plays the file when the mouse is over the element
    $(".c3audio").mouseover(function () {

        $(".c3audio")[0].play();
    });
    $(".c3audio").mouseleave(function () {

        $(".c3audio")[0].pause();
        $(".c3audio")[0].currentTime = 0;
    });

    $(".c4").mouseover(function () {

        $(".c4")[0].play();

    });
    $(".c5").mouseover(function () {

        $(".c5")[0].play();

    });


    $(".c7audio").mouseover(function () {

        $(".c7audio")[0].play();
    });
    $(".c7audio").mouseleave(function () {

        $(".c7audio")[0].pause();
        $(".c7audio")[0].currentTime = 0;
    });


    $(".c8audio").mouseover(function () {

        $(".c8audio")[0].play();
    });
    $(".c8audio").mouseleave(function () {

        $(".c8audio")[0].pause();
        $(".c8audio")[0].currentTime = 0;
    });

    $(".c9audio").mouseover(function () {

        $(".c9audio")[0].play();
    });
    $(".c9audio").mouseleave(function () {

        $(".c9audio")[0].pause();
        $(".c9audio")[0].currentTime = 0;
    });
    $(".c10audio").mouseover(function () {

        $(".c10audio")[0].play();
    });
    $(".c10audio").mouseleave(function () {

        $(".c10audio")[0].pause();
        $(".c10audio")[0].currentTime = 0;
    });




});
