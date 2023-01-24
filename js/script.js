$(document).ready(function() {
    $(".phone").mask("+380 (99)-999-9999");

    jQuery('.send-form').click(function() {
        var form = jQuery(this).closest('form');

        if (form.valid()) {
            form.css('opacity', '.5');
            var actUrl = form.attr('action');

            jQuery.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function(data) {
                    form.html(data);
                    form.css('opacity', '1');
                    //form.find('.status').html('форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
                },
                error: function() {
                    form.find('.status').html('серверная ошибка');
                }
            });
        }
    });


    $('#main-table-1').ready(function() {
        let btn1 = ["#btn-1-1", "#btn-1-2", "#btn-1-3", "#btn-1-4", "#btn-1-5", "#btn-1-6", "#btn-1-7", "#btn-1-8"];
        let table1 = ['#table-1-1', '#table-1-2', '#table-1-3', '#table-1-4', '#table-1-5', '#table-1-6', '#table-1-7', '#table-1-8']
        $('#btn-1-1').click(function() {
            $(btn1).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table1[i]).removeClass('visible')
                }
            });
            $("#moover-1").attr("style", "height:375px;")
            $('#btn-1-1').addClass("clicked")
            $('#table-1-1').addClass('visible')
        });
        $('#btn-1-2').click(function() {
            $(btn1).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table1[i]).removeClass('visible')
                }
            });
            $("#moover-1").attr("style", "height:277px;")
            $('#btn-1-2').addClass("clicked")
            $('#table-1-2').addClass('visible')
        });
        $('#btn-1-3').click(function() {
            $(btn1).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table1[i]).removeClass('visible')
                }
            });
            $("#moover-1").attr("style", "height:130px;")
            $('#btn-1-3').addClass("clicked")
            $('#table-1-3').addClass('visible')
        });
        $('#btn-1-4').click(function() {
            $(btn1).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table1[i]).removeClass('visible')
                }
            });
            $("#moover-1").attr("style", "height:179px;")
            $('#btn-1-4').addClass("clicked")
            $('#table-1-4').addClass('visible')
        });
        $('#btn-1-5').click(function() {
            $(btn1).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table1[i]).removeClass('visible')
                }
            });
            $("#moover-1").attr("style", "height:277px;")
            $('#btn-1-5').addClass("clicked")
            $('#table-1-5').addClass('visible')
        });
        $('#btn-1-6').click(function() {
            $(btn1).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table1[i]).removeClass('visible')
                }
            });
            $("#moover-1").attr("style", "height:130px;")
            $('#btn-1-6').addClass("clicked")
            $('#table-1-6').addClass('visible')
        });
        $('#btn-1-7').click(function() {
            $(btn1).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table1[i]).removeClass('visible')
                }
            });
            $("#moover-1").attr("style", "height:179px;")
            $('#btn-1-7').addClass("clicked")
            $('#table-1-7').addClass('visible')
        });
        $('#btn-1-8').click(function() {
            $(btn1).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table1[i]).removeClass('visible')
                }
            });
            $("#moover-1").attr("style", "height:620px;")
            $('#btn-1-8').addClass("clicked")
            $('#table-1-8').addClass('visible')
        });
    });
    $('#main-table-2').ready(function() {
        let btn2 = ["#btn-2-1", "#btn-2-2", "#btn-2-3"];
        let table2 = ['#table-2-1', '#table-2-2', '#table-2-3'];
        $('#btn-2-1').click(function() {
            $(btn2).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table2[i]).removeClass('visible')
                }
            });
            $("#moover-2").attr("style", "height:179px;")
            $('#btn-2-1').addClass("clicked")
            $('#table-2-1').addClass('visible')
        });
        $('#btn-2-2').click(function() {
            $(btn2).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table2[i]).removeClass('visible')
                }
            });
            $("#moover-2").attr("style", "height:130px;")
            $('#btn-2-2').addClass("clicked")
            $('#table-2-2').addClass('visible')
        });
        $('#btn-2-3').click(function() {
            $(btn2).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table2[i]).removeClass('visible')
                }
            });
            $("#moover-2").attr("style", "height:130px;")
            $('#btn-2-3').addClass("clicked")
            $('#table-2-3').addClass('visible')
        });
    });
    $('#main-table-3').ready(function() {
        let btn2 = ["#btn-3-1", "#btn-3-2", "#btn-3-3", "#btn-3-4"];
        let table2 = ['#table-3-1', '#table-3-2', '#table-3-3', "#table-3-4"];
        $('#btn-3-1').click(function() {
            $(btn2).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table2[i]).removeClass('visible')
                }
            });
            $("#moover-3").attr("style", "height:130px;")
            $('#btn-3-1').addClass("clicked")
            $('#table-3-1').addClass('visible')
        });
        $('#btn-3-2').click(function() {
            $(btn2).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table2[i]).removeClass('visible')
                }
            });
            $("#moover-3").attr("style", "height:473px;")
            $('#btn-3-2').addClass("clicked")
            $('#table-3-2').addClass('visible')
        });
        $('#btn-3-3').click(function() {
            $(btn2).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table2[i]).removeClass('visible')
                }
            });
            $("#moover-3").attr("style", "height:179px;")
            $('#btn-3-3').addClass("clicked")
            $('#table-3-3').addClass('visible')
        });
        $('#btn-3-4').click(function() {
            $(btn2).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table2[i]).removeClass('visible')
                }
            });
            $("#moover-3").attr("style", "height:277px;")
            $('#btn-3-4').addClass("clicked")
            $('#table-3-4').addClass('visible')
        });
    });
    $('#main-table-4').ready(function() {
        let btn2 = ["#btn-4-1", "#btn-4-2", "#btn-4-3"];
        let table2 = ['#table-4-1', '#table-4-2', '#table-4-3'];
        $('#btn-4-1').click(function() {
            $(btn2).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table2[i]).removeClass('visible')
                }
            });
            $("#moover-4").attr("style", "height:277px;")
            $('#btn-4-1').addClass("clicked")
            $('#table-4-1').addClass('visible')
        });
        $('#btn-4-2').click(function() {
            $(btn2).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table2[i]).removeClass('visible')
                }
            });
            $("#moover-4").attr("style", "height:130px;")
            $('#btn-4-2').addClass("clicked")
            $('#table-4-2').addClass('visible')
        });
        $('#btn-4-3').click(function() {
            $(btn2).each(function(i, elem) {
                if ($(elem).hasClass('clicked')) {
                    $(elem).removeClass('clicked')
                    $(table2[i]).removeClass('visible')
                }
            });
            $("#moover-4").attr("style", "height:179px;")
            $('#btn-4-3').addClass("clicked")
            $('#table-4-3').addClass('visible')
        });
    });

    $('.single-item').slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.single-item').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '50px',
    });
})