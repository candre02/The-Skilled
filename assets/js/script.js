
$(document).ready(function(){

$(".saveBtn").on("click", function(){

    var userText = $(this).siblings(".description").val();
    console.log(userText)
    var timeBlock = $(this).parent().attr("id")
    console.log(timeBlock)

    localStorage.setItem(timeBlock, userText)


})

function timeHandler(){
var currentHour = moment().hours();
console.log("current hour", currentHour)

$('.timeBlock').each(function(){
    var timeBlockValue = parseInt($(this).attr("value"))

    console.log("timeblock Vall", timeBlockValue)

    if(timeBlockValue < currentHour){
        $(this).addClass("past_info")
    } else if(timeBlockValue === currentHour){
        $(this).removeClass("past_info")
        $(this).addClass("present_info")
    } else {
        $(this).removeClass("past_info")
        $(this).removeClass("present_info")
        $(this).addClass('future_info')
    }
})

}

timeHandler();

$("#hour-9 .description").val(localStorage.getItem('hour-9'))
$("#hour-10 .description").val(localStorage.getItem('hour-10'))
$("#hour-11 .description").val(localStorage.getItem('hour-11'))
$("#hour-12 .description").val(localStorage.getItem('hour-12'))
$("#hour-13 .description").val(localStorage.getItem('hour-13'))
$("#hour-14 .description").val(localStorage.getItem('hour-14'))
$("#hour-15 .description").val(localStorage.getItem('hour-15'))
$("#hour-16 .description").val(localStorage.getItem('hour-16'))
$("#hour-17 .description").val(localStorage.getItem('hour-17'))







})



















