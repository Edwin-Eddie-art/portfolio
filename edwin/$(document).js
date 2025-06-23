$(document).ready(function(){
    $("#contactForm").submit(function(event) {
        event.preventDefault(); // Prevent default form submission
    
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
    
        $.ajax({
            url: "contact.php",  // Backend PHP file
            type: "POST",
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            },
            success: function(response) {
                $("#responseMessage").html("<p style='color: green;'>" + response + "</p>");
                $("#contactForm")[0].reset(); // Clear form fields
            },
            error: function() {
                $("#responseMessage").html("<p style='color: red;'>Something went wrong. Try again.</p>");
            }
        });
    });
    
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // Close the menu when clicking on a link (for mobile)
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });
    

    // typing text animation script
    var typed = new Typed(".typing-1", {
        strings: ["Finance","Operations Management"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Operations Analyst"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,  // Disable infinite loop (allows normal scrolling)
        autoplay: false,  // Disable auto slide for better user control
        touchDrag: true,  // Enable touch scrolling
        mouseDrag: true,  // Enable mouse scrolling
        pullDrag: true,   // Allow manual dragging
        freeScroll: true, // Let users scroll freely
        items: 1, // Display one item at a time (prevents blocking)
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 2,
                nav: true
            },
            1000:{
                items: 3,
                nav: true
            }
        }
    });
    
    // Smooth Scroll for Links
$(".menu li a").click(function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(target).offset().top - 70
    }, 800);
});

// Improve Contact Form Validation
$("#contactForm").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
        $("#responseMessage").html("<p style='color: red;'>All fields are required.</p>");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        $("#responseMessage").html("<p style='color: red;'>Enter a valid email.</p>");
        return;
    }

    // Proceed with AJAX
});

});