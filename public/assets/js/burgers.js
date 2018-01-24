// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        // Send the PUT request.
        $.ajax("/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devoured to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#add-burger").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            //sleepy: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/" + id, {
            type: "DELETE",
        }).then(
            function() {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});