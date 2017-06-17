/* Waypoints */

$(document).ready(function() {
    console.log("hi");
    if (document.getElementById("timeline")){
        $("#timeline").css("display","none");
    }
    if (document.getElementById("timeline-tiny")){
        $("#timeline-tiny").css("display","none");
    }
    $("section").each( function() {
        
        $(this).waypoint(function() {
             $(this.element).addClass("animated fadeInUp");
           
        }, {
                offset: '90%'
        });
        
    });
});

/* Index - navbar for sticky behavior when scrolling */
$(document).on('scroll', function() {
    if ($("#index-navbar").scrollTop() != 0) {
        $("#index-navbar").removeClass("nav");
        $("#index-navbar").addClass("navs");
    }
    else if ($("#index-navbar").scrollTop() == 0) {
        $("#index-navbar").removeClass("navs");
        $("#index-navbar").addClass("nav");
    }

    
    /*if ($(window).scrollTop() > $("#work-samples").position()['top']) {
        console.log("hello");
        $("#nav-port").css("border-bottom", "#000000 4px solid");
    }*/
    navPosition("#work-samples", "#nav-port");
    navPosition("#index-about-wrap", "#nav-about");
});

/* index - anchor link selection behavior */
function navPosition(anchorElement, navElement) {
    if ($(window).scrollTop() > 500 && $(window).scrollTop() > $(anchorElement).position()['top'] -100) {
        $(".top-nav").children().each(function() {
            $(this).removeClass("nav-selected");
        });
        $(navElement).addClass("nav-selected");
    }
    else if ($(window).scrollTop() < 500) {
        $(".top-nav").children().each(function() {
            $(this).removeClass("nav-selected");
        });
    }
}

/* index mouse over nav bar elements */
$(".top-nav").children().each(function() {
    var isClicked = false;
    $(this).on('click', function() {
        $(this).addClass("nav-selected");
        isClicked = true;
    });
    $(this).on('mouseenter', function() {
        $(this).addClass("nav-selected");
    });
    $(this).on('mouseout', function() {
        if (isClicked == false) {
            $(this).removeClass("nav-selected");
        }
    });
});


/* Index - timeline*/
$(document).ready(function() {
    $("p#offline").css("display", "block");
});

/* Index - timeline*/
$("a#index-about-button").on("click", function(event) {
    event.preventDefault();
    $("#timeline").css("display", "block");
});
$("a#index-about-button-tiny").on("click", function(event) {
    event.preventDefault();
    $("#timeline-tiny").css("display", "block");
});

/* Anchors */
$('a.anchor').on('click', function(event) {
    event.preventDefault();
    var target =  $(this).attr('href');
    var spot = $(target).offset().top;
    console.log(spot);
    //window.scroll(0, spot-1000);
    /*document.querySelector(target).scrollIntoView({ 
        behavior: 'smooth' 
    });*/
    $('html, body').animate({
        scrollTop: spot-100 }, 500);
});

var isExternAnchor = false;
$('a.outside-anchor').on('click', function(event) {
    isExternAnchor = true;
    //event.preventDefault();
    /*console.log(window.location.hash);
    $('html,body').animate({
        scrollTop: $(window.location.hash).offset().top-100
    });
    $(document).ready(function() {
        $("#big-title").offset().top;
        window.scroll(0, 500);
        console.log("hi");
    });
   
    if (window.location.hash) {
        scroll(0,0);
    }
    setTimeout(function() { scroll(0,0); }, 1);*/
    
    
    
   
    
    
    //window.scroll(0, spot-1000);
    /*document.querySelector(target).scrollIntoView({ 
        behavior: 'smooth' 
    });*/
    
});
if (window.location.hash) {
    $('html,body').animate({scrollTop: $(window.location.hash).offset().top-100});
}





/*$("#jam-body").colorScroll( {
    colors: [{
        color: '#FFFFFF',
        position: 0
    },
    {
        color: '#FFD1CC',
        position: 1500
    },
    {
        color: '#EB8858',
        position: 2000
    },
    {
        color: '#FFFFFF',
        position: 3000
    }]
});*/

$("#nuance-body").colorScroll( {
    colors: [{
        color: '#FFFFFF',
        position: 0
    },
    {
        color: '#FFFFFF',
        position: 2000
    },
    {
        color: '#FFFFFF',
        position: 3000
    }]
});

$("#youni-body").colorScroll( {
    colors: [{
        color: '#FFFFFF',
        position: 1000
    },
    {
        color: '#F38B01',
        position: 1400
    },
    {
        color: '#FFFFFF',
        position: 3000
    }]
});

/*$("#index-body").colorScroll( {
    colors: [{
        color: '#FFFFFF',
        position: 1000
    },
    {
        color: '#6495ED',
        position: 1600
    },
    {
        color: '#FFFFFF',
        position: 1700
    }]
});*/


/* Waypoint animation function */

function floatIn(elementId) {
    
    $("#"+elementId).addClass("animated fadeInUp");
    
    //$("#"+elementId).velocity("transition.slideUpBigIn", { duration: 1400 });
}


/* Fade in behavior for project pages */

$(window).scroll(function(event) {
    if (document.getElementById("side-nav")) {
        $(".row").each( function() {
            // handling for side nav breadcrumbs
            if ($("#"+this.id).visible( true ) == true) {
                $("a.bubble#nav"+(this.id.slice(-1) -1)).empty();
                $("a.bubble#nav"+(this.id.slice(-1) -1)).append("<i class='fa fa-circle-thin' aria-hidden='true'></i>");
                $("a.bubble#nav"+(parseInt(this.id.slice(-1)) +1)).empty();
                $("a.bubble#nav"+(parseInt(this.id.slice(-1)) +1)).append("<i class='fa fa-circle-thin' aria-hidden='true'></i>");
                $("a.bubble#nav"+(this.id.slice(-1))).empty();
                $("a.bubble#nav"+this.id.slice(-1)).append("<i class='fa fa-circle' aria-hidden='true'></i>");
                var currentSection = document.createTextNode(this.id.slice(0, this.id.length-1));
                $("a.bubble#nav"+this.id.slice(-1)).append(currentSection);
                $("a.bubble#nav"+this.id.slice(-1)).addClass("current")
            }
        });
    }
    
  

});


$("a.bubble").mouseenter( function(){
    if ($("#"+$(this).attr('href').slice(1, $(this).attr('href').length)).visible( true ) == false && $(this).className == undefined) {
        $(this).empty();
        $(this).append("<i class='fa fa-circle-thin' aria-hidden='true'></i>");
        var currentSection = document.createTextNode($(this).attr('href').slice(1, $(this).attr('href').length-1));
        $(this).append(currentSection);
    }
});

$("a.bubble").mouseleave( function(){
    if ($("#"+$(this).attr('href').slice(1, $(this).attr('href').length)).visible( true ) == false) {
        $(this).empty();
        $(this).append("<i class='fa fa-circle-thin' aria-hidden='true'></i>");
    }
});

// Function to float up blocks of content
function floatUp(elementId) {
    if (!$("#"+elementId).hasClass("finished") && $("#"+elementId).visible( true ) == true) {
        if ($("#"+elementId).hasClass("style")) {
            $("#"+elementId).velocity({ height: "+=1em" }, { delay: 400 });
        }
        else {
            $("#"+elementId).velocity({ height: "+=4em" }, { delay: 400 });
        }
        
        $("#"+elementId).velocity("transition.slideUpBigIn", { duration: 1400 }).delay(4000);
        $("#"+elementId).addClass("finished");
    }
}

// Handling of mockup tabs

$(function() {
    $(".style").css('display','none'); 
});

$("a.mock-nav").on("click", function(event) {
    event.preventDefault();
    $(".current-mock").each(function() {
        $(this).removeClass("current-mock");
        $(this).css("display","none");
    });
    
    $(".active").each(function () {
        $(this).removeClass("active");
    });
    
    $("#"+$(this).attr('href').substr(1, $(this).attr('href').length)).css('display','inline');
    $("#"+$(this).attr('href').substr(1, $(this).attr('href').length)).addClass("current-mock");
    $(this).addClass("active");
});

/* Collapse behavior for research on checkout.html */
$("a#best-practices").on("click", function(event) {
    event.preventDefault();
  $('#collapseOneOne').collapse('toggle');
});

$("a#emotional").on("click", function(event) {
    event.preventDefault();
  $('#collapseOneTwo').collapse('toggle');
});

/* index.html */

$("#jam-pic").width(250);
$("#youni-pic").width(250);
$("#mycub-pic").width(250);
$("#golden-pic").width(250);

$(".o_sample1").mouseenter(function(){
	$(this).hide();
  	$(this).siblings(".sample1").show().css({
  		'display':'inline-block'
  	});
});
$(".sample1").mouseleave(function(){
  $(this).hide();
  $(this).siblings(".o_sample1").show();
});

$(".o_sample2").mouseenter(function(){
	$(this).hide();
  	$(this).siblings(".sample2").show().css('display','inline-block');
});
$(".sample2").mouseleave(function(){
  $(this).hide();
  $(this).siblings(".o_sample2").show();
});

$(".o_sample3").mouseenter(function(){
	$(this).hide();
  	$(this).siblings(".sample3").show().css('display','inline-block');
});
$(".sample3").mouseleave(function(){
  $(this).hide();
  $(this).siblings(".o_sample3").show();
});

$(".o_sample4").mouseenter(function(){
	$(this).hide();
  	$(this).siblings(".sample4").show().css('display','inline-block');
});
$(".sample4").mouseleave(function(){
  $(this).hide();
  $(this).siblings(".o_sample4").show();
});


/* portfolio tags */
var isSelected;
var tagSet = new Set();
$(".tag-f").on("click", function(event) {
    event.preventDefault();
    
    if (!tagSet.has($(this).attr('id'))) {
        tagSet.add($(this).attr('id'));
       
        isSelected = true;
        $(this).css("background-color", "cornflowerblue");
        $(this).css("color", "white");
        $("div.col-md-3").each(function() {
           
            $(this).css("display", "none");
        });


        var current = $(this).attr('id');
   
        var tags = current.split(" ");
       
        for (var i = 0; i < Array.from(tagSet).length; i++) {
               
                $(".col-md-3."+Array.from(tagSet)[i]).css("display", "block");
        }
        if ($(this).hasClass("ui")){
           
        }
    }
    else {
       
        tagSet.delete($(this).attr('id'));
       
        isSelected = false;
        $(this).css("background-color", "white");
        $(this).css("color", "cornflowerblue");
        
        if (tagSet.size == 0){
            $("div.col-md-3").each(function() {
                $(this).css("display", "block");
            });
        }
        else {
            $("div.col-md-3").each(function() {
                $(this).css("display", "none");
            });
            for (var i = 0; i < Array.from(tagSet).length; i++) {
                
                $(".col-md-3."+Array.from(tagSet)[i]).css("display", "block");
            }
        }
        
    }

    
});


// responsive - for tiny screens
$(".tag-f-tiny").on("click", function(event) {
    event.preventDefault();
    
    if (!tagSet.has($(this).attr('id'))) {
        tagSet.add($(this).attr('id'));
        
        isSelected = true;
        $(this).css("background-color", "cornflowerblue");
        $(this).css("color", "white");
        $("div.col-xs-6").each(function() {
           
            $(this).css("display", "none");
        });


        var current = $(this).attr('id');
      
        var tags = current.split(" ");
      
        for (var i = 0; i < Array.from(tagSet).length; i++) {
               
                $(".col-xs-6."+Array.from(tagSet)[i]).css("display", "block");
        }
        
    }
    else {
       
        tagSet.delete($(this).attr('id'));
        
        isSelected = false;
        $(this).css("background-color", "white");
        $(this).css("color", "cornflowerblue");
        
        if (tagSet.size == 0){
            $("div.col-xs-6").each(function() {
                $(this).css("display", "block");
            });
        }
        else {
            $("div.col-xs-6").each(function() {
                $(this).css("display", "none");
            });
            for (var i = 0; i < Array.from(tagSet).length; i++) {
              
                $(".col-xs-6."+Array.from(tagSet)[i]).css("display", "block");
            }
        }   
    }

});

