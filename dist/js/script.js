function faqSwitch(a){$("#faq-general").addClass("display-hide"),$("#faq-before").addClass("display-hide"),$("#faq-during").addClass("display-hide"),$("#faq-misc").addClass("display-hide"),$("#faq-general").addClass("opacity-invisible"),$("#faq-before").addClass("opacity-invisible"),$("#faq-during").addClass("opacity-invisible"),$("#faq-misc").addClass("opacity-invisible"),$("#faq-general-nav").removeClass("active"),$("#faq-before-nav").removeClass("active"),$("#faq-during-nav").removeClass("active"),$("#faq-misc-nav").removeClass("active"),$(a+"-nav").addClass("active"),$(a).removeClass("display-hide"),window.setTimeout(function(){$(a).removeClass("opacity-invisible")},175)}$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar").addClass("nav-scrolled"):$(".navbar").removeClass("nav-scrolled")}),$("#submitForm").submit(function(){$.post("http://infuture.io/subscribe",$("#submitForm").serialize(),function(a){a=$.parseJSON(a),1==a.success?$(".intro > .container").append('<p class="response good">'+a.message+"</p>"):$(".intro > .container").append('<p class="response bad">'+a.message+"</p>")},"json")}),$("#submitForm2").submit(function(){$.post("http://infuture.io/subscribe",{email:$("#submitForm2 > input").val()},function(a){a=$.parseJSON(a),1==a.success?$(".footer > .container").append('<p class="response good">'+a.message+"</p>"):$(".footer > .container").append('<p class="response bad">'+a.message+"</p>")},"json")});