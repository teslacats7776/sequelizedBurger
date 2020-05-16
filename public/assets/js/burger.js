$(function () {
    $(".create-form").on("submit",function(event){
        event.preventDefault();
        
        var newBurger = {
            burger_name : $("#newburger").val().trim(),
            devoured:0
        };
        $.ajax({
            method:"POST",
            data:newBurger,
            url:"/api/burgers"
        }).then(function(){
            console.log("new burger is added");
            location.reload();
        });

   
    });
    $(".eatBurger").on("click",function(event){
        event.preventDefault();

       
        var id=$(this).data("id");
        console.log(id)
        var state = {
            devoured:1
        };
        $.ajax({
            method:"PUT",
            data:state,
            url:"/api/burgers/"+id
        }).then(function(){
            console.log("burger devoured");
            location.reload();
        });

    });
    $(".trashBurger").on("click",function(event){
    event.preventDefault();
    // alert("line3");
    var id=$(this).data("id");
    var state = {
        devoured:1
    };
    $.ajax({
        method:"DELETE",
        url: "/api/burgers/"+id
    }).then(function(){
        console.log("burger is trashed");
        location.reload();
    });
});


})
