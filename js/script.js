    // Global variable to store the text file line by line.
    var textLines;

    // When the file is fully loaded
    $(document).ready(function () {

        // When the document is loaded, start fetching the text file. 
        // In this case text file is located at the root.
        $.ajax({
            url: "../txt/thedelay.txt",
            dataType: "text",
            success: function (data) {
                textLines = data.split("\n");
                // Log the text file to console.
                console.log(textLines);
            }
        });

        $( ".storyText" ).fadeOut( 500);



        // For every element in hoverElem class
        // when mouse is over the element do the following
        $(".hoverElem img").mouseover(function () {
            // Get the "data-linenum" value
            // this refers to the line in the text.
            // Set currentText to be the text referred to by 
            // data-linenum.
                var lineNumber = $(this).parent().data("linenum");
                var currentText = textLines[lineNumber];
                // Set the textContainer class element's text.
                $( ".storyText" ).fadeOut( 500, function(){
                    $(".storyText").text("");
                    $(".storyText").text(currentText);
                    $( ".storyText" ).fadeIn( 500 );
                });
        });
    
        // When the mouse leaves the element clean up the textContainer
        // $(".hoverElem img").mouseout(function () {
        //     $( ".storyText" ).fadeOut( 500, function(){
        //         $(".storyText").text("");
        //     });
        // });
    });