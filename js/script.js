const mainNavigation = document.querySelector(".main-navigation");
const overlay = mainNavigation.querySelector(".overlay");
const toggler = mainNavigation.querySelector(".navbar-toggler");

const openSideNav = () => mainNavigation.classList.add("active");
const closeSideNav = () => mainNavigation.classList.remove("active");

// document.addEventListener("swiped-right", openSideNav);
document.addEventListener("swiped-left", closeSideNav);
toggler.addEventListener("click", openSideNav);
overlay.addEventListener("click", closeSideNav);




//------------------ SCROLL TOP FUNCTIONALITY CODE---------------------

    // Get the button
    var mybutton = document.getElementById("myBtn");

    // when the user scroll down 20px from the top of the document,show the btton
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
      } else {
        myBtn.style.display = "none";
      }
    }

    //When user click on the button,scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }





// Desktop Cart page Delete Alert

function cartAlert() {
    Swal.fire({
      title: 'Delete Item',
      text: 'Are you sure you want to delete this item?',
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      // if (result.isConfirmed) {
      //   Swal.fire(
      //     'Deleted!',
      //     'Your imaginary file has been deleted.',
      //     'success'
      //   )
      // // For more information about handling dismissals please visit
      // // https://sweetalert2.github.io/#handling-dismissals
      // } else if (result.dismiss === Swal.DismissReason.cancel) {
      //   Swal.fire(
      //     'Cancelled',
      //     'Your imaginary file is safe :)',
      //     'error'
      //   )
      // }
    })
  }
