<script src="js/swiped-events.js"></script>
  <script src="js/script.js"></script>


  <!-- Option 1: Bootstrap Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
    crossorigin="anonymous"></script>



  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <!-- Popper JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  <script>




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

    $(document).ready(function () {
      $('#click_reg').click(function () {
        $('#show_reg').css("visibility", "visible");
      });
    });

    $(document).ready(function () {
      $('#reg_can').click(function () {
        $('#show_reg').css("visibility", "hidden");

      });
    });

    // ---------------first time registration-----------------------

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

    // ----------Sign In Form--------------------

    $(document).ready(function () {
      $('#reg_btn').click(function () {
        $('#show_sigin').css("visibility", "visible");
        $('#show_reg').css("visibility", "hidden");
      });
    });

    $(document).ready(function () {
      $('#sigin_can').click(function () {
        $('#show_sigin').css("visibility", "hidden");


      });
    });

    $(document).ready(function () {
      $('#sigin_btn').click(function () {
        $('#show_otp').css("visibility", "visible");
        $('#show_sigin').css("visibility", "hidden");
        $('#show_reg').css("visibility", "hidden");
      });
    });

    $(document).ready(function () {
      $('#sigin_email').click(function () {
        $('#show_reg').css("visibility", "visible");
        $('#show_sigin').css("visibility", "hidden");

      });
    });

    $(document).ready(function () {
      $('#sigin_frgtpass').click(function () {
        $('#show_forget').css("visibility", "visible");
        $('#show_sigin').css("visibility", "hidden");
        $('#show_reg').css("visibility", "hidden");
      });
    });

    // ----------Otp Form--------------------

    $(document).ready(function () {
      $('#otp_change').click(function () {
        $('#show_reg').css("visibility", "visible");
        $('#show_otp').css("visibility", "hidden");

      });
    });

    $(document).ready(function () {
      $('#otp_pass').click(function () {
        $('#show_sigin').css("visibility", "visible");
        $('#show_otp').css("visibility", "hidden");
      });
    });



    $(document).ready(function () {
      $('#otp_can').click(function () {
        $('#show_otp').css("visibility", "hidden");


      });
    });

    //----------- Forget----------

    $(document).ready(function () {
      $('#forget_can').click(function () {
        $('#show_forget').css("visibility", "hidden");


      });
    });



    $(document).ready(function () {
      $('#clk_reg').click(function () {
        $('#show_reg').css("visibility", "visible");
      });
    });





  </script>
