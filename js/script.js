new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['s0', 's1', 's2'],
    navgationTooltips: ['0', '1', '2']
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



    // When the mouse leaves the element clean up the textContainer
    // $(".hoverElem img").mouseout(function () {
    //     $( ".storyText" ).fadeOut( 500, function(){
    //         $(".storyText").text("");
    //     });
    // });
});

$(document).ready(function () {

    //Plays the file when the mouse is over the element
    $(".a1").mouseover(function () {

        $(".a1")[0].play();

    });
    $(".a2").mouseover(function () {

        $(".a2")[0].play();

    });


    $(".nour1").mouseover(function () {

        $(".nour1")[0].play();
    });
    $(".nour1").mouseleave(function () {

        $(".nour1")[0].pause();
        $(".nour1")[0].currentTime = 0;
    });


    $(".nour2").mouseover(function () {

        $(".nour2")[0].play();
    });
    $(".nour2").mouseleave(function () {

        $(".nour2")[0].pause();
        $(".nour2")[0].currentTime = 0;
    });

    $(".nour3").mouseover(function () {

        $(".nour3")[0].play();
    });
    $(".nour3").mouseleave(function () {

        $(".nour3")[0].pause();
        $(".nour3")[0].currentTime = 0;
    });
    $(".nour4").mouseover(function () {

        $(".nour4")[0].play();
    });
    $(".nour4").mouseleave(function () {

        $(".nour4")[0].pause();
        $(".nour4")[0].currentTime = 0;
    });




});
