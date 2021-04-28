jQuery(document).ready(function($){   
    $(function () {
        $(".sec .content").slice(0, 3).show();
        $("body").on('click touchstart', '.sec .btn_loadmore', function (e) {
            e.preventDefault();
            $(".sec .content:hidden").slice(0, 3).slideDown();
            if ($(".sec .content:hidden").length == 0) {
                $(".sec .btn_loadmore").html("data sudah tidak ada");
            }
        });
    });     });

  


   const selection = document.querySelectorAll("#selection");
   let sec1 = document.querySelector(".sec-1");
   let sec2 = document.querySelector(".sec-2");
   let sec3 = document.querySelector(".sec-3");


   selection.forEach((selection2) => {
     selection2.addEventListener('click' ,() => {
        let SelectionActive = document.querySelectorAll(".selection_active")
        SelectionActive.forEach((aktif) => {
            aktif.classList.remove("selection_active")
        })
        selection2.classList.add('selection_active')
        let dataSel = selection2.getAttribute("data");
        console.log(dataSel)
        if(dataSel == 1){
            sec1.classList.remove("hidden");
            sec2.classList.add("hidden");
            sec3.classList.add("hidden");
        }else if(dataSel == 2){
            sec1.classList.add("hidden");
            sec2.classList.remove("hidden");
            sec3.classList.add("hidden");
            $(function() {
                $(".sec-2 .content").slice(0, 3).show();
                $("body").on('click touchstart', '.sec-2 .btn_loadmore', function (e) {
                    e.preventDefault();
                    $(".sec-2 .content:hidden").slice(0, 3).slideDown();
                    if ($(".sec-2 .content:hidden").length == 0) {
                        $(".sec-2 .btn_loadmore").html("data sudah tidak ada");
                    }
                });
            });          }else if(dataSel == 3){
            sec1.classList.add("hidden");
            sec2.classList.add("hidden");
            sec3.classList.remove("hidden");
            $(function() {
                $(".sec-3 .content").slice(0, 3).show();
                $("body").on('click touchstart', '.sec-3 .btn_loadmore', function (e) {
                    e.preventDefault();
                    $(".sec-3 .content:hidden").slice(0, 3).slideDown();
                    if ($(".sec-3 .content:hidden").length == 0) {
                        $(".sec-3 .btn_loadmore").html("data sudah tidak ada");
                    }
                });
            });  
        }
       
     })
   })

