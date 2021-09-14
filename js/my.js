$(document).ready(function () {
  $('.nav_form, .nav_form_icon').click(function () {
    $('.nav_form').css("border" , "1px solid #F5F5F6");
    $('.nav_form, .search_input').css("background", "none");
  });
  $('.header').click(function () {
    $('.nav_form').css("border" , "none");
    $('.nav_form').css("background-color", "#F5F5F6");
  });
});

  $(document).ready(function () {
    $('.footer_link').hide();
  $('.foot_about').click(function () {
    $(this).next().toggle();   
  });
});

$(document).ready(function () {
  $('.clk_mob_seach_pop').click(function () {
    $('.mob-hom-popup_ser, .mobile_search').css("display","block");   
  });

  $('.mob-hom-popup_ser').click(function () {
    $('.mob-hom-popup_ser, .mobile_search').css("display","none");   
  });

});


$(document).ready(function () {
  $('#eyeglassId').mouseenter(function () {
    $('#showOne,#showTwo,#showThree,showFour').css("visibility", "visible");
    $('#showTwo,#showThree,#showFour').css("visibility", "hidden");

  });

});

$(document).ready(function () {
  $('#showOne').mouseleave(function () {
    $('#showOne').css("visibility", "hidden");
  });
});

$(document).ready(function () {
  $('#sunglassId').mouseenter(function () {
    $('#showTwo').css("visibility", "visible");
    $('#showOne,#showThree,#showFour').css("visibility", "hidden");
  });
});


$(document).ready(function () {
  $('#showTwo').mouseleave(function () {
    $('#showTwo').css("visibility", "hidden");
  });
});

$(document).ready(function () {
  $('#lensId').mouseenter(function () {
    $('#showThree').css("visibility", "visible");
    $('#showTwo,#showOne,#showFour').css("visibility", "hidden");
  });

});

$(document).ready(function () {
  $('#showThree').mouseleave(function () {
    $('#showThree').css("visibility", "hidden");
  });
});

$(document).ready(function () {
  $('#discoverId').mouseenter(function () {
    $('#showFour').css("visibility", "visible");
    $('#showTwo,#showThree,#showOne').css("visibility", "hidden");
  });
});


$(document).ready(function () {
  $('#showFour').mouseleave(function () {
    $('#showFour').css("visibility", "hidden");
  });
});

// DESKTOP LOGIN POPUP 

$(document).ready(function () {
  $('#click_reg').click(function () {
    $('.fir_frm').css("top", "5%");
    $('html').css("position", "fixed");
    // $('.fir_frm').css("display", "block");
  });

  $('#click_reg').click(function () {
    $('#show_reg').css("top", "0");
    // $('#show_reg').css("display", "block");
  });
});

$(document).ready(function () {
  $('#reg_can').click(function () {
    $('.fir_frm').css("top", "-100%");
    $('html').css("position", "static");
  });

  $('#reg_can').click(function () {
    $('#show_reg').css("top", "-100%");
  });
});

// ---------------DESKTOP first time registration-----------------------

// $(document).ready(function(){
//   $('#reg_btn').click(function(){
//     $('#show_form').css("visibility","visible");
//   });
// });

// $(document).ready(function(){
//   $('#form_can').click(function(){
//     $('#show_form').css("visibility","hidden");
//     $('#show_reg').css("visibility","hidden");

//   });
// }); 

// ----------DESKTOP Sign In Form--------------------

$(document).ready(function () {
  $('#reg_btn').click(function () {
    $('#show_sigin').css("top", "0");
    $('.sigin_frm').css("top", "5%");
    $('#show_reg').css("top", "-100%");
    $('.fir_frm').css("top", "-100%");
  });
});

$(document).ready(function () {
  $('#sigin_can').click(function () {
    $('#show_sigin').css("top", "-100%");
    $('html').css("position", "static");


  });
});

$(document).ready(function () {
  $('.sigin_change').click(function () {
    $('#show_reg').css("top", "0");
    $('.fir_frm').css("top", "5%");
    $('#show_sigin').css("top", "-100%");

  });
});

$(document).ready(function () {
  $('#sigin_btn').click(function () {
    $('#show_otp').css("top", "0");
    $('.otp_frm').css("top", "5%");
    $('#show_sigin').css("top", "-100%");
    $('.sigin_frm').css("top", "-100%");

  });
});

$(document).ready(function () {
  $('#sigin_email').click(function () {
    $('#show_reg').css("top", "0");
    $('.fir_frm').css("top", "5%");
    $('#show_sigin').css("top", "-100%");
    // $('#show_forget').css("top", "-100%");

  });
});

$(document).ready(function () {
  $('#sigin_frgtpass').click(function () {
    $('#show_forget').css("top", "0");
    $('.forget_frm').css("top", "5%");
    $('#show_sigin').css("top", "-100%");
    $('#show_reg').css("top", "-100%");
  });
});

// ----------DESKTOP Otp Form--------------------

$(document).ready(function () {
  $('#otp_change').click(function () {
    $('#show_reg').css("top", "0");
    $('.fir_frm').css("top", "5%");
    $('#show_otp').css("top", "-100%");

  });
});

$(document).ready(function () {
  $('#otp_pass').click(function () {
    $('#show_sigin').css("top", "0");
    $('.sigin_frm').css("top", "5%");
    $('#show_otp').css("top", "-100%");
  });
});



$(document).ready(function () {
  $('#otp_can').click(function () {
    $('#show_otp').css("top", "-100%");
    $('html').css("position", "static");
  });
});


//-----------DESKTOP Forget----------

$(document).ready(function () {
  $('#forget_can').click(function () {
    $('#show_forget').css("top", "-100%");
    $('html').css("position", "static");
  });
});


$(document).ready(function () {
  $('#clk_reg').click(function () {
    $('#show_reg').css("top", "0");
    $('.fir_frm').css("top", "5%");
  });
});

$(document).ready(function () {
  $('.forget_change').click(function () {
    $('#show_sigin').css("top", "0");
    $('.sigin_frm').css("top", "5%");
    $('#show_forget').css("top", "-100%");

  });
});


// End 


//-------------------------MOBILE Login Popup--------------------------

$(document).ready(function () {
     $('#mob_click_reg').click(function () {
       $('.mob_fir_frm').css("left", "0");
      });

   $('#mob_click_reg').click(function () {
     $('#mob_show_reg').css("bottom", "0");
   });
 });

 $(document).ready(function () {
   $('#mob_reg_can').click(function () {
     $('.mob_fir_frm').css("left", "-115%");
   });
  });

// ---------------Mobile first time registration-----------------------

// $(document).ready(function(){
//   $('#reg_btn').click(function(){
//     $('#show_form').css("visibility","visible");
//   });
// });

// $(document).ready(function(){
//   $('#form_can').click(function(){
//     $('#show_form').css("visibility","hidden");
//     $('#show_reg').css("visibility","hidden");

//   });
// }); 

// ----------Mobile Sign In Form--------------------

$(document).ready(function () {
  $('#mob_reg_btn').click(function () {
    $('.mob_sigin_frm').css("left", "0");
    $('.mob_fir_frm').css("left", "-115%");
  });
});

$(document).ready(function () {
  $('#mob_sigin_can').click(function () {
    $('.mob_sigin_frm').css("left", "-115%");


  });
});

$(document).ready(function () {
  $('.mob_sigin_change').click(function () {
    $('.mob_fir_frm').css("left", "0");
    $('.mob_sigin_frm').css("left", "-115%");

  });
});

$(document).ready(function () {
  $('#mob_sigin_btn').click(function () {
    $('.mob_otp_frm').css("left", "0");
    $('.mob_sigin_frm').css("left", "-115%");

  });
});

$(document).ready(function () {
  $('#mob_sigin_email').click(function () {
    $('.mob_fir_frm').css("left", "0");
    $('.mob_sigin_frm').css("left", "-115%");
  });
});

$(document).ready(function () {
  $('#mob_sigin_frgtpass').click(function () {
    $('.mob_forget_frm').css("left", "0");
    $('.mob_sigin_frm').css("left", "-115%");
  });
});

// ----------Mobile Otp Form--------------------

$(document).ready(function () {
  $('#mob_otp_change').click(function () {
    $('.mob_fir_frm').css("left", "0");
    $('.mob_otp_frm').css("left", "-115%");
  });
});

$(document).ready(function () {
  $('#mob_otp_pass').click(function () {
    $('.mob_sigin_frm').css("left", "0");
    $('.mob_otp_frm').css("left", "-115%");
  });
});



$(document).ready(function () {
  $('#mob_otp_can').click(function () {
    $('.mob_otp_frm').css("left", "-115%");
  });
});


//-----------Mobile Forget----------

$(document).ready(function () {
  $('#mob_forget_can').click(function () {
    $('.mob_forget_frm').css("left", "-115%");
  });
});


$(document).ready(function () {
  $('#mob_clk_reg').click(function () {
    $('.mob_fir_frm').css("left", "0");
  });
});

$(document).ready(function () {
  $('.mob_forget_change').click(function () {
    $('.mob_forget_frm').css("left", "-115%");
    $('.mob_sigin_frm').css("left", "0");
  });
});


//-------------------------------------Mobile End ----------------------------------------------




$(document).ready(function () {
  $('#show_four').click(function () {
    $('#dis_fil_lf').css("display", "block");
    $('#show_four').css("display", "none");
    $('#show_2four').css("display", "block");
  });
});

$(document).ready(function () {
  $('#show_2four').click(function () {
    $('#dis_fil_lf').css("display", "none");
    $('#show_four').css("display", "block");
    $('#show_2four').css("display", "none");
  });
});




// MY ACCOUNT PAGES 

$(document).ready(function () {
  $('#click_reg,.my_account').mouseenter(function () {
    $('.my_account').css("visibility", "visible")
  });

  $('#click_reg,.my_account').mouseleave(function () {
    $('.my_account').css("visibility", "hidden")
  });
});



//  DESKTOP FILTER PAGE


$(document).ready(function () {
  $('#show_first_item').hide();
  $('#first_dropdown').click(function () {
    $('#show_first_item').toggle();
    // $('#icn_rot').css("transform", "rotate(180deg)");
  });
});

$(document).ready(function () {
  $('#show_second_item').hide();
  $('#second_dropdown').click(function () {
    $('#show_second_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_third_item').hide();
  $('#third_dropdown').click(function () {
    $('#show_third_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_fourth_item').hide();
  $('#fourth_dropdown').click(function () {
    $('#show_fourth_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_fifth_item').hide();
  $('#fifth_dropdown').click(function () {
    $('#show_fifth_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_six_item').hide();
  $('#six_dropdown').click(function () {
    $('#show_six_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_seven_item').hide();
  $('#seven_dropdown').click(function () {
    $('#show_seven_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_eight_item').hide();
  $('#eight_dropdown').click(function () {
    $('#show_eight_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_nine_item').hide();
  $('#nine_dropdown').click(function () {
    $('#show_nine_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_ten_item').hide();
  $('#ten_dropdown').click(function () {
    $('#show_ten_item').toggle();
  });
});

$(document).ready(function(){
  $(".rim_div").click(function(){
    $(this).toggleClass("show_rim");

  });

});

  


//MOBILE FILTER PAGE 

$(document).ready(function () {
  // 1 filter

  $('#mobile_srt').click(function () {
    $('#mobile_srt').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_srt').css("display", "block");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 2 filter

  $('#mobile_frm_typ').click(function () {
    $('#mobile_frm_typ').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#show_mobile_frm_typ').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 3 filter
  $('#mobile_frm_shp').click(function () {
    $('#mobile_frm_shp').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_frm_shp').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 4 filter

  $('#mobile_frm_clr').click(function () {
    $('#mobile_frm_clr').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_frm_clr').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 5 filter

  $('#mobile_brnd').click(function () {
    $('#mobile_brnd').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_brnd').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 6 filter

  $('#mobile_frm_siz').click(function () {
    $('#mobile_frm_siz').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_frm_siz').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 7 filter

  $('#mobile_prc').click(function () {
    $('#mobile_prc').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_prc').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 8 filter

  $('#mobile_gndr').click(function () {
    $('#mobile_gndr').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_gndr').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 9 filter
  $('#mobile_matrl').click(function () {
    $('#mobile_matrl').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });



    $('#show_mobile_matrl').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 10 filter

  $('#mobile_wght_grp').click(function () {
    $('#mobile_wght_grp').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_wght_grp').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 11 filter

  $('#mobile_pres_typ').click(function () {
    $('#mobile_pres_typ').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_pres_typ').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 12 filter

  $('#mobile_coll').click(function () {
    $('#mobile_coll').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });



    $('#show_mobile_coll').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 13 Filter
  $('#mobile_grs_clr').click(function () {
    $('#mobile_grs_clr').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_grs_clr').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_mtrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 14 filter
  $('#mob_frame_wid').click(function () {
    $('#mob_frame_wid').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });


    $('#show_mob_frame_wid').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
  });

});

$('input[type=radio]').click(function(){
  if (this.previous) {
      this.checked = false;
  }
  this.previous = this.checked;
});


//MOBILE SORT PAGE
$(document).ready(function () {
  $('#main_sort_btn').click(function () {
    $('.main_filt_con').css("display", "none");
    $('#main_show_prod_sort').css("display", "block");
  });

  $('#main_sort_can_btn').click(function () {
    $('#main_show_prod_sort').css("display", "none");
    $('.main_filt_con').css("display", "block");
  });

});


// Desktop SINGLE PRODUCT  PAGE 

$(document).ready(function () {
  $('.single_prd_click_feature').click(function () {
    $('.single_prd_click_feature').css("color", "black");
    $('.single_prd_clk_desc').css("color", "#C2C2C3");
    $('.single_prd_click_table').css("color", "#C2C2C3");
    $('.single_prd_feature').css("display", "inline-block");
    $('.single_prd_desc').css("display", "none");
    $('.single_prd_table').css("display", "none");
  });

  $('.single_prd_clk_desc').click(function () {
    $('.single_prd_clk_desc').css("color", "black");
    $('.single_prd_clk_feature').css("color", "#C2C2C3");
    $('.single_prd_click_table').css("color", "#C2C2C3");
    $('.single_prd_desc').css("display", "block");
    $('.single_prd_feature').css("display", "none");
    $('.single_prd_table').css("display", "none");
  });

  $('.single_prd_click_table').click(function () {
    $('.single_prd_click_table').css("color", "black");
    $('.single_prd_clk_desc').css("color", "#C2C2C3");
    $('.single_prd_click_feature').css("color", "#C2C2C3");
    $('.single_prd_table').css("display", "block");
    $('.single_prd_feature').css("display", "none");
    $('.single_prd_desc').css("display", "none");
  });

});

$(document).ready(function () {
  $('.click_1caro_single_prd').click(function () {
    $('.show_1caro_single_prd').css("display", "block");
    $('.show_2caro_single_prd').css("display", "none");
    $('.show_3caro_single_prd').css("display", "none");
    $('.show_4caro_single_prd').css("display", "none");
    $('.show_5caro_single_prd').css("display", "none");
  });

  $('.click_2caro_single_prd').click(function () {
    $('.show_2caro_single_prd').css("display", "block");
    $('.show_1caro_single_prd').css("display", "none");
    $('.show_3caro_single_prd').css("display", "none");
    $('.show_4caro_single_prd').css("display", "none");
    $('.show_5caro_single_prd').css("display", "none");
  });

  $('.click_3caro_single_prd').click(function () {
    $('.show_3caro_single_prd').css("display", "block");
    $('.show_2caro_single_prd').css("display", "none");
    $('.show_1caro_single_prd').css("display", "none");
    $('.show_4caro_single_prd').css("display", "none");
    $('.show_5caro_single_prd').css("display", "none");
  });

  $('.click_4caro_single_prd').click(function () {
    $('.show_4caro_single_prd').css("display", "block");
    $('.show_2caro_single_prd').css("display", "none");
    $('.show_3caro_single_prd').css("display", "none");
    $('.show_1caro_single_prd').css("display", "none");
    $('.show_5caro_single_prd').css("display", "none");
  });

  $('.click_5caro_single_prd').click(function () {
    $('.show_5caro_single_prd').css("display", "block");
    $('.show_2caro_single_prd').css("display", "none");
    $('.show_3caro_single_prd').css("display", "none");
    $('.show_1caro_single_prd').css("display", "none");
    $('.show_4caro_single_prd').css("display", "none");
  });
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});



//  $(document).ready(function(){
//    $('.show_hrt').hide();
//    $('.click_hrt').click(function(){
//      var hrt = $(this).next('.show_hrt');
//      hrt.show();
//      $(this).show();

//    });

//  });




$(document).ready(function(){
  $(".like").click(function(){
    $(this).toggleClass("show_hrt");

  });
});




$(document).ready(function(){
  $(".clk_sngl_clr_choose").click(function(){
    $(this).addClass("fir");
 });
});

$(document).ready(function(){
 $(".popup_product_detail").click(function(){
   $(this).addClass("popup_product_detail_bord");
 });
 
});

$(document).ready(function(){
  $(".bdy_button").click(function(){
    $(".modal_main").hide();
  });
});



// Mobile SINGLE PRODUCT  PAGE 

$(document).ready(function () {
  $('.mobile_click_feature').click(function () {
    $('.mobile_click_feature p').css("color", "#fff");
    $('.mobile_click_feature').css("background-color", "#797979");
    $('.mobile_click_desc p').css("color", "#bebebe");
    $('.mobile_click_table p').css("color", "#bebebe");
    $('.mobile_click_desc').css("background-color", "#fff");
    $('.mobile_click_table').css("background-color", "#fff");
    $('.mobile_show_feature').css("display", "inline-block");
    $('.mobile_show_desc').css("display", "none");
    $('.mobile_show_table').css("display", "none");
  });

  $('.mobile_click_desc').click(function () {
    $('.mobile_click_desc p').css("color", "#fff");
    $('.mobile_click_desc').css("background-color", "#797979");
    $('.mobile_click_feature p').css("color", "#bebebe");
    $('.mobile_click_table p').css("color", "#bebebe");
    $('.mobile_click_feature').css("background-color", "#fff");
    $('.mobile_click_table').css("background-color", "#fff");
    $('.mobile_show_desc').css("display", "block");
    $('.mobile_show_feature').css("display", "none");
    $('.mobile_show_table').css("display", "none");
  });

  $('.mobile_click_table').click(function () {
    $('.mobile_click_table p').css("color", "#fff");
    $('.mobile_click_table').css("background-color", "#797979");
    $('.mobile_click_desc p').css("color", "#bebebe");
    $('.mobile_click_feature p').css("color", "#bebebe");
    $('.mobile_click_feature').css("background-color", "#fff");
    $('.mobile_click_desc').css("background-color", "#fff");
    $('.mobile_show_table').css("display", "block");
    $('.mobile_show_feature').css("display", "none");
    $('.mobile_show_desc').css("display", "none");
  });
});

$(document).ready(function(){
  $('.mobile_single_buy_click').click(function(){
    $('.main_mobile_single_buy_show').css("display","block");
  });
});

$(document).ready(function(){
  $('.mobile_single_buy_cancel').click(function(){
    $('.main_mobile_single_buy_show').css("display","none");
  });
});

$(document).ready(function(){
  $('.mobile_bdy_button').click(function(){
    $('.show_mobile_bdy_button').css("display","block");
    $('.mobile').css("position","fixed");    
  });
});

$(document).ready(function(){
  $('.show_mobile_bdy_cancel, .show_mobile_bdy_button').click(function(){
    $('.show_mobile_bdy_button').css("display", "none");
        $('.mobile').css("position","static");    
  });
});

$(document).ready(function(){
  $('.mobile_bdy2_button').click(function(){
    $('.show_mobile_bdy2_button').css("display","block");
    $('.show_mobile_bdy_button').css("display", "none");
  });
});

$(document).ready(function(){
  $('.show_mobile_bdy2_cancel').click(function(){
    $('.show_mobile_bdy2_button').css("display", "none");
  });
});


$(document).ready(function(){
  $('.click_snglpg_clr_click').click(function(){
    $('.main_show_snglpg_clr_click').css("display", "block");
  });
});

$(document).ready(function(){
  $('.show1_snglpg_clr_click, .can_snglpg_clr_click').click(function(){
    $('.main_show_snglpg_clr_click').css("display", "none");
  });
});

//----------------------- cart page

$(document).ready(function () {
  $('#cart_show_more').click(function () {
    $('#cart_show_offer').css("display", "block");
    $('#cart_show_less').css("display", "block");
    $('#cart_show_more').css("display", "none");
    
  });
});

$(document).ready(function () {
  $('#cart_show_less').click(function () {
    $('#artk_show_more').css("display", "block");
    $('#cart_show_less').css("display", "none");
    $('#cart_show_offer').css("display", "none");
  });
});


$(function () {
  $('input[type="number"]').niceNumber();
});

$(document).ready(function () {
  $('.cart_show_more').click(function () {
    $('.cart_show_offer').css("display", "block");
    $('.cart_show_less').css("display", "block");
    $('.cart_show_more').css("display", "none");

  });
});

$(document).ready(function () {
  $('.cart_show_less').click(function () {
    $('.cart_show_more').css("display", "block");
    $('.cart_show_less').css("display", "none");
    $('.cart_show_offer').css("display", "none");
  });
});

$(document).ready(function () {
  $('.desk_plus_clk_cpn').click(function () {
    $(this).next().show();
    $(this).hide();
  });
  $('.desk_minus_clk_cpn').click(function () {
    $(this).parent().hide();
    $(this).parent().prev().show();
  });
}); 



//-----------------------Mobile cart page-----------------------------

$(document).ready(function () {
  $('#wrapperopen').click(function () {
    $('#wrapper').css("width", "100%");
    $('.cu').css("display", "block");

  });
});


$(document).ready(function () {
  $('.wrapperof').click(function () {
    $('#wrapper').css("width", "0");
    $('.cu').css("display", "none");

  });
});

$(document).ready(function () {
  $('#popup').click(function () {
    $('.popuop_box').css("display", "block");


  });
});

$(document).ready(function () {
  $('#popupclose').click(function () {
    $('.popuop_box').css("display", "none");


  });
});

$(document).ready(function () {
  $('.mob_cart_clkpopup').click(function () {
    $(this).parents().next().css("display", "block");
  });
});

$(document).ready(function () {
  $('.mob_cart_popupclose2').click(function () {
    $('.popuop_box2').css("display", "none");


  });
});


$(document).ready(function () {
  $('.delete').click(function () {
    $(this).parentsUntil(".grand_prt").next().css({
      
      'width' : '90%',
      'left' : '10%'
    });

  });
});


// DESKTOP ADDRESS

// $(document).ready(function () {
//   $('.address_product_show').hide();
//   $('.address_product_click').click(function () {
//     $('.address_product_show').show();


//   });
// });

$(document).ready(function () {
  $('.address_product_show').hide();
  $('.address_product_click2').hide();
  $('.address_product_click').click(function () {
    $('.address_product_show , .address_product_click2').show();
    $('.address_product_click').hide();
  });
});
$(document).ready(function () {
  $('.address_product_show').hide();
  $('.address_product_click2').click(function () {
    $('.address_product_show , .address_product_click').show();
    $('.address_product_click2, .address_product_show').hide();
  });
});


$(document).ready(function () {
  $('.shipping_address2').hide();
  $('.shipping_address_child1, .address_top_btn').click(function () {
  $(this).parentsUntil('.address_left').next().show();
  $('.shipping_address1').hide();
  });
});

 $(document).ready(function () {
   $('.address_top_btn2').click(function () {
     $(this).parentsUntil('.address_left').prev().show();
     $('.shipping_address2').hide();
   });
 });


// var desk_address = "";
// var desk_selected = $(".shipping_body input[type='radio']:checked");
// if (desk_selected.length > 0) {
//   desk_address = desk_selected.val();
// }


// MOBILE ADDRESS PAGE

$(document).ready(function () {
  $('.address').click(function () {
    $('.address_popup').css("display", "block");
    $('.mobile_nav').css("display", "none");
  });
});

$(document).ready(function () {
  $('.address_popup_close').click(function () {
    $('.address_popup').css("display", "none");
    $('.cart_grand_parent').css("display", "block");
    $('.mobile_nav').css("display", "block");
  });
});




$(document).ready(function () {
  $('.mob_address_click').click(function () {
    $('.address_form').css("display", "block");
    $('.address_popup').css("display", "none");
    $('.cart_grand_parent').css("display", "none");
    $('.mobile_nav').css("display", "none");
  });
});




$(document).ready(function () {
  $('.mob_address_form_close').click(function () {
    $('.address_form').css("display", "none");
    $('.cart_grand_parent').css("display", "block");
    $('.mobile_nav').css("display", "block");
  });
});

$(document).ready(function () {
  $('.form_up').click(function () {
    $(this).find(".show_form_up").css("transform", "translateY(-25px)");
  });
});

 $(document).ready(function () {
   $('.mob_view_address').click(function () {
     $('.address_popup').css("display", "block");
     $('.address_form').css("display", "none");
   });
 });


//  $(document).ready(function () {
//   $('.show_caro_single_prd').click(function () {
//     $(this).parent().prev()
//     $('.address_form').css("display", "none");
//   });
// });

 

 







