$(document).ready(function(){
    $("#submit").click(function() {
        $.post("/request",
        {
            name: "Phish Finder",
            designation: "Processional gamer"
        },
        function (data, status) {
            console.log(data);
        });
    });
});
