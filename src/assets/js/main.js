
// modal
$('.special.modal')
  .modal('attach events', '.ui.primary.test.item')
  .modal('setting', 'transition', 'horizontal flip')
;


/*====================================================
  TABLE OF CONTENT
  1. function declearetion
  2. Initialization
====================================================*/
(function($) {
    /*===========================
    1. function declearetion
    ===========================*/
	var themeApp = {
        setNavbar: function() {
            if(typeof fixed_navbar != "undefined" && fixed_navbar == true) {
                $('body').addClass('has-fixed-navbar');
                $('#main-navbar').addClass('fixed');
            }
        },
        responsiveIframe: function() {
    		$('.main-content-area').fitVids();
    	},
        highlighter: function() {
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        },
        mobileMenu:function() {
            $('#mobile-menu').html($('#main-menu').html());
            $('#nav-toggle-button').on('click', function(e){
                e.preventDefault();
                $('body').toggleClass('mobile-menu-opened');
            });
            $('#backdrop').on('click', function(){
                $('body').toggleClass('mobile-menu-opened');
            });
            var li = $(".mobile-menu").find('li');
            $(li).has('ul').addClass('menu-item-has-children').prepend('<span class="submenu-toggle-button"><i class="fa fa-angle-down"></i></span>');
            $('.menu-item-has-children').find('.submenu-toggle-button').on('click', function(){
                $(this).toggleClass('opened');
                $(this).siblings('ul').slideToggle();
            });
        },
        siteSearch: function() {
            var searchInput = $('#search-input');
            $('#searchmodal').on('shown.bs.modal', function(){
                searchInput.focus();
            })
            var searchField = searchInput.ghostHunter({
                results: "#search-results",
                zeroResultsInfo : false,
                onKeyUp         : true,
                onPageLoad      : true,
                includepages    : true,
                info_template   : "<div class=\"info align-center\">{{amount}} posts found</div>",
                result_template : "<div class=\"result\"><a href='{{link}}'><div class=\"h5\">{{title}}</div><div class=\"date\">{{pubDate}}</div>{{description}}</a></div>"
            });
            $('#searchmodal').on('hidden.bs.modal', function() {
                 searchField.clear();
            });
						console.log("evoked siteSearch in main.js");
        },
        backToTop: function() {
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
            $('#back-to-top').on('click', function(e){
                e.preventDefault();
                $('html, body').animate({scrollTop : 0},1000);
                return false;
            });
        },
		init:function(){
            themeApp.setNavbar();
            themeApp.responsiveIframe();
    		themeApp.highlighter();
    		themeApp.mobileMenu();
            themeApp.siteSearch();
            themeApp.backToTop();
    	}
	}
    /*===========================
    2. Initialization
    ===========================*/
    $(document).ready(function(){
        $('.ui.sticky')
            .sticky({
                context: '#article-content'
            })
        ;
        var strong = $("#content strong");
        function scroll_to_anchor(anchor_id){
            var tag = $("#" + anchor_id + "");
            $('html,body').animate({scrollTop: tag.offset().top},'slow');
        }
        var sidebar = $('#sidebar');
        jQuery.each(strong, function(i, val) {
            console.log(strong[i]);
            var strongSidebar = $(strong[i]).clone();
            $(strongSidebar).wrapInner("<a href='#" + i + "' class='anchor'></a>");
            $(strongSidebar).appendTo(sidebar);
            sidebar.append("<br>");
            sidebar.append("<br>");
            return (i<2);
        });

        $(strong).each(function(index, element){
            $(this).wrapInner("<div id='" + index + "' class='anchor'></div>");
        });

        var sidebarAnchors = $('#sidebar, .anchor');
        $(sidebarAnchors).each(function(index, element) {
            $(sidebarAnchors[index]).click(function(event) {
                var id = $('#' + index + "");
                console.log(id);
                console.log($(id));
                var contentAnchors = $('#content', id);
                event.preventDefault();
                console.log(id.offset());
                $('html,body').animate({scrollTop: (id).offset().top},'slow');
            })
        });

        themeApp.init();
    });
}(jQuery));
