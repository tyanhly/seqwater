

var $ = jQuery;
var clickSearch = false;
var clickSmallButton = false;

function ResizeHeightSiderBar(){
    $("#sidebar-second").height(Math.max($("#main").height(), $("#sidebar-second").height()));
}

        $(document).ready(function() {
        	
        	//Customize for display a list news of taxonomy
            $("#content").find(".field-label").remove();
            $("#content").find(".field-name-field-image").removeClass("clearfix");
            $("#content").find(".field-name-field-image").addClass("filed-images-style-customize");


            // Customize for display for block play
            $(".region-play-block-home-page").find(".views-row").addClass("span4");

            //Customize background label category
            $(".live-news-update-button").each(function(){
                  var cat = $(this).text().toLowerCase();
                  if(cat == "projects"){
                      $(this).addClass("projects-news-button");
                  }
                  if(cat == "recreation"){
                      $(this).addClass("recreation-news-button");
                  }
            });

            $(".pitch1").find(".bigbannerslider-active").show();
            var t=setTimeout(function(){ResizeHeightSiderBar();},1000);

            //for condition show toolbar manager drupal in top menu
            if($("#toolbar").length > 0){
                if($("#toolbar").html() != ''){
                    $("#real-menu").css("top","65px");
                    $("#virtual-menu").css("top","65px");
                    $("#menu-second-template").css("top","65px");
                    $("#vituar-menu-second-template").css("top","65px");

                    $(".search-box").css("top","157px");
                    $(".search-box-follow").css("top","145px");

                    $("#header").css("margin-top","65px");
                }
            }

            $('#myCarousel').carousel('pause');
            $('#myCarousel3').carousel('pause');
            $('.js-activated').dropdownHover().dropdown();


            $(".li-search-box").click(function(){

                $(".search-box").find(".form-text").attr("class","form-text span5");
                $(".search-box").find(".form-text").attr("style","height: 30px;");
                $(".search-box").find(".form-text").attr("placeholder","SEARCH...");

                $(".search-box").find(".btn").hide();
                if(!clickSearch){
                    $(".search-box").show();
                    $(".search-box-follow").show();clickSearch = true;
                }
                else {
                    $(".search-box").hide();
                    $(".search-box-follow").hide();clickSearch = false;
                }
            });

            $(".btn-show-menu").click(function(){
                if(!clickSmallButton){
                    $(".menu-small").show();clickSmallButton = true;
                }
                else {
                    $(".menu-small").hide();clickSmallButton = false;
                }
            });

            resizePeopleBlock();
                //when window is resized by customer
                $(window).resize(function () {
                    resizeHeightMenu();resizePeopleBlock();
                    ResizeHeightSiderBar();
                });

                function resizeHeightMenu(){
                    var bodyWidth = $(window).width();
                    if(bodyWidth > 748) $(".menu-small").hide();
                    else $("#logo").attr("class","");
                }
                function resizePeopleBlock(){
                    var bodyWidth = $(window).width();
                    if(bodyWidth > 748) {
                        $("#showCarouselInSmall").hide();
                        $("#showCarouselInLarge").show();
                    }
                    else {
                        $("#showCarouselInLarge").hide();
                        $("#showCarouselInSmall").show();
                    }
                }

        });
