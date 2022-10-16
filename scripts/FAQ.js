$(document).ready(function () {
  $(".faq_list li:nth-child(1)").click(function () {
    $(".faq_list li:nth-child(2)").slideToggle();
  });
  $(".faq_list li:nth-child(1)").toggle(
    function () { $(".faq_list li:nth-child(1)").css({"font-weight": 500 }); },
    function () {
      $(".faq_list li:nth-child(1)").css({"font-weight": "normal" });
    });
  $(".faq_list li:nth-child(3)").click(function () {
    $(".faq_list li:nth-child(4)").slideToggle();
  });
  $(".faq_list li:nth-child(3)").toggle(
    function () { $(".faq_list li:nth-child(3)").css({"font-weight": 500 }); },
    function () {
      $(".faq_list li:nth-child(3)").css({"font-weight": "normal" });
    });

  $(".faq_list li:nth-child(5)").click(function () {
    $(".faq_list li:nth-child(6)").slideToggle();
  });
  $(".faq_list li:nth-child(5)").toggle(
    function () { $(".faq_list li:nth-child(5)").css({"font-weight": 500 }); },
    function () {
      $(".faq_list li:nth-child(5)").css({"font-weight": "normal" });
    });

  $(".faq_list li:nth-child(7)").click(function () {
    $(".faq_list li:nth-child(8)").slideToggle();
  });
  $(".faq_list li:nth-child(7)").toggle(
    function () { $(".faq_list li:nth-child(7)").css({"font-weight": 500 }); },
    function () {
      $(".faq_list li:nth-child(7)").css({"font-weight": "normal" });
    });

  $(".faq_list li:nth-child(9)").click(function () {
    $(".faq_list li:nth-child(10)").slideToggle();
  });
  $(".faq_list li:nth-child(9)").toggle(
    function () { $(".faq_list li:nth-child(9)").css({"font-weight": 500 }); },
    function () {
      $(".faq_list li:nth-child(9)").css({"font-weight": "normal" });
    });

  $(".faq_list li:nth-child(11)").click(function () {
    $(".faq_list li:nth-child(12)").slideToggle();
  });
  $(".faq_list li:nth-child(11)").toggle(
    function () { $(".faq_list li:nth-child(11)").css({"font-weight": 500 }); },
    function () {
      $(".faq_list li:nth-child(11)").css({"font-weight": "normal" });
    });
});