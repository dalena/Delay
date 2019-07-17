new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['s0', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11'],
    navgationTooltips: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
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

    var bgSound = document.getElementById("bg");
    bgSound.preload = "auto";
    bgSound.volume = 0.125;
    bgSound.playbackRate = 0.55;
    bgSound.play();

    $(".storyText").fadeOut(500);
    $('.imgtxtB').css('opacity', '0');
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

    $(".imgtxtA").hover(function () {

        $(".p0txt1").animate({
            opacity: "0"
        }, {
                queue: false
            });
    }, function () {
        $(".p0txt1").animate({
            opacity: "1"
        }, {
                queue: false
            });
    });

});

$(document).ready(function () {

    // //Plays the file when the mouse is over the element
    $(".c1audio").mouseover(function () {

        $(".c1audio")[0].play();
    });
    $(".c1audio").mouseleave(function () {

        $(".c1audio")[0].pause();
        $(".c1audio")[0].currentTime = 0;
    });

    $(".c2audio").mouseover(function () {

        $(".c2audio")[0].play();
    });
    $(".c2audio").mouseleave(function () {

        $(".c2audio")[0].pause();
        $(".c2audio")[0].currentTime = 0;
    });

    $(".c3audio").mouseover(function () {

        $(".c3audio")[0].play();
    });
    $(".c3audio").mouseleave(function () {

        $(".c3audio")[0].pause();
        $(".c3audio")[0].currentTime = 0;
    });

    $(".c4audio").mouseover(function () {

        $(".c4audio")[0].play();

    });
    $(".c5audio").mouseover(function () {

        $(".c5audio")[0].play();

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
    $(".c11audio").mouseover(function () {

        $(".c11audio")[0].play();
    });
    $(".c11audio").mouseleave(function () {

        $(".c11audio")[0].pause();
        $(".c11audio")[0].currentTime = 0;
    });
    $(".c12audio").mouseover(function () {

        $(".c12audio")[0].play();
    });
    $(".c12audio").mouseleave(function () {

        $(".c12audio")[0].pause();
        $(".c12audio")[0].currentTime = 0;
    });
    $(".c13audio").mouseover(function () {

        $(".c13audio")[0].play();
    });
    $(".c13audio").mouseleave(function () {

        $(".c13audio")[0].pause();
        $(".c13audio")[0].currentTime = 0;
    });

    $(".c14audio").mouseover(function () {

        $(".c14audio")[0].play();
    });
    $(".c14audio").mouseleave(function () {

        $(".c14audio")[0].pause();
        $(".c14audio")[0].currentTime = 0;
    });
    $(".c15audio").mouseover(function () {

        $(".c15audio")[0].play();
    });
    $(".c15audio").mouseleave(function () {

        $(".c15audio")[0].pause();
        $(".c15audio")[0].currentTime = 0;
    });
    $(".c16audio").mouseover(function () {

        $(".c16audio")[0].play();
    });
    $(".c16audio").mouseleave(function () {

        $(".c16audio")[0].pause();
        $(".c16audio")[0].currentTime = 0;
    });



    $(".c17audio").mouseover(function () {

        $(".c17audio")[0].play();
    });
    $(".c17audio").mouseleave(function () {

        $(".c17audio")[0].pause();
        $(".c17audio")[0].currentTime = 0;
    });


    $(".c18audio").mouseover(function () {

        $(".c18audio")[0].play();
    });
    $(".c18audio").mouseleave(function () {

        $(".c18audio")[0].pause();
        $(".c18audio")[0].currentTime = 0;
    });

    $(".c19audio").mouseover(function () {

        $(".c19audio")[0].play();
    });
    $(".c19audio").mouseleave(function () {

        $(".c19audio")[0].pause();
        $(".c19audio")[0].currentTime = 0;
    });

    $(".c20audio").mouseover(function () {

        $(".c20audio")[0].play();
    });
    $(".c20audio").mouseleave(function () {

        $(".c20audio")[0].pause();
        $(".c20audio")[0].currentTime = 0;
    });
    $(".c21audio").mouseover(function () {

        $(".c21audio")[0].play();
    });
    $(".c21audio").mouseleave(function () {

        $(".c21audio")[0].pause();
        $(".c21audio")[0].currentTime = 0;
    });
    $(".c22audio").mouseover(function () {

        $(".c22audio")[0].play();
    });
    $(".c22audio").mouseleave(function () {

        $(".c22audio")[0].pause();
        $(".c22audio")[0].currentTime = 0;
    });
    $(".c23audio").mouseover(function () {

        $(".c23audio")[0].play();
    });
    $(".c23audio").mouseleave(function () {

        $(".c23audio")[0].pause();
        $(".c23audio")[0].currentTime = 0;
    });

    $(".c24audio").mouseover(function () {

        $(".c24audio")[0].play();
    });
    $(".c24audio").mouseleave(function () {

        $(".c24audio")[0].pause();
        $(".c24audio")[0].currentTime = 0;
    });
    $(".c25audio").mouseover(function () {

        $(".c25audio")[0].play();
    });
    $(".c25audio").mouseleave(function () {

        $(".c25audio")[0].pause();
        $(".c25audio")[0].currentTime = 0;
    });
    $(".c26audio").mouseover(function () {

        $(".c26audio")[0].play();
    });
    $(".c26audio").mouseleave(function () {

        $(".c26audio")[0].pause();
        $(".c26audio")[0].currentTime = 0;
    });



    $(".c27audio").mouseover(function () {

        $(".c27audio")[0].play();
    });
    $(".c27audio").mouseleave(function () {

        $(".c27audio")[0].pause();
        $(".c27audio")[0].currentTime = 0;
    });


    $(".c28audio").mouseover(function () {

        $(".c28audio")[0].play();
    });
    $(".c28audio").mouseleave(function () {

        $(".c28audio")[0].pause();
        $(".c28audio")[0].currentTime = 0;
    });

    $(".c29audio").mouseover(function () {

        $(".c29audio")[0].play();
    });
    $(".c29audio").mouseleave(function () {

        $(".c29audio")[0].pause();
        $(".c29audio")[0].currentTime = 0;
    });

    $(".c30audio").mouseover(function () {

        $(".c30audio")[0].play();
    });
    $(".c30audio").mouseleave(function () {

        $(".c30audio")[0].pause();
        $(".c30audio")[0].currentTime = 0;
    });
    $(".c31audio").mouseover(function () {

        $(".c31audio")[0].play();
    });
    $(".c31audio").mouseleave(function () {

        $(".c31audio")[0].pause();
        $(".c31audio")[0].currentTime = 0;
    });
    $(".c32audio").mouseover(function () {

        $(".c32audio")[0].play();
    });
    $(".c32audio").mouseleave(function () {

        $(".c32audio")[0].pause();
        $(".c32audio")[0].currentTime = 0;
    });
    $(".c33audio").mouseover(function () {

        $(".c33audio")[0].play();
    });
    $(".c33audio").mouseleave(function () {

        $(".c33audio")[0].pause();
        $(".c33audio")[0].currentTime = 0;
    });
    $(".c34audio").mouseover(function () {

        $(".c34audio")[0].play();
    });
    $(".c34audio").mouseleave(function () {

        $(".c34audio")[0].pause();
        $(".c34audio")[0].currentTime = 0;
    });
    $(".c35audio").mouseover(function () {

        $(".c35audio")[0].play();
    });
    $(".c35audio").mouseleave(function () {

        $(".c35audio")[0].pause();
        $(".c35audio")[0].currentTime = 0;
    });

});
