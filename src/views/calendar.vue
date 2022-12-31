<template lang="pug">
<body>
    .wrap
    .instructions
    .first Choose a staff member
    .staff
    .member 
      .avatar(style='background-image: url(http://i.pravatar.cc/300?img=69)')
      .name James Hunter
      .deselect-member change
      .deselect-date change
      .deselect-slot change
      .calendar
      ul.slots
      form.form
        label Name
        input(type="text" name="name" required)
        label Email
        input(type="email" name="email" required)
        input(type="submit" value="Confirm Booking")
      .confirm-message Booking Complete!
        span.restart Book Again?
    .member  
      .avatar(style='background-image: url(http://i.pravatar.cc/300?img=25)')
      .name Selena Yamada
      .deselect-member change
      .deselect-date change
      .deselect-slot change
      .calendar
      ul.slots
      form.form
        label Name
        input(type="text" name="name" required)
        label Email
        input(type="email" name="email" required)
        input(type="submit" value="Confirm Booking")
      .confirm-message Booking Complete!
        span.restart Book Again?
    .member  
      .avatar(style='background-image: url(http://i.pravatar.cc/300?img=32)')
      .name Sarah Belmoris
      .deselect-member change
      .deselect-date change
      .deselect-slot change
      .calendar
      ul.slots
      form.form
        label Name
        input(type="text" name="name" required)
        label Email
        input(type="email" name="email" required)
        input(type="submit" value="Confirm Booking")
      .confirm-message Booking Complete!
        span.restart Book Again?
    .member  
      .avatar(style='background-image: url(http://i.pravatar.cc/300?img=15)')
      .name Phillip Fry
      .deselect-member change
      .deselect-date change
      .deselect-slot change
      .calendar
      ul.slots
      form.form
        label Name
        input(type="text" name="name" required)
        label Email
        input(type="email" name="email" required)
        input(type="submit" value="Confirm Booking")
      .confirm-message Booking Complete!
        span.restart Book Again?


    </body>
    </template>

<script>
import $ from 'jquery'
export default {
  name: "footer",
  data() {
    return {};
  },
  watch: {},
  created() {
    $('.member').on('click', function(e){
  if (!$(this).hasClass('selected')){
    $(this).addClass('selected');
    $('.wrap').addClass('member-selected');
    addCalendar($(this).find('.calendar'));
      e.preventDefault();
  e.stopPropagation();
  }

});

$('.deselect-member, .restart').on('click', function(e){
  $('.member').removeClass('selected');
  $('.wrap').removeClass('member-selected date-selected slot-selected booking-complete');
  e.preventDefault();
  e.stopPropagation();
});

$('.deselect-date').on('click', function(e){
  $('.wrap').removeClass('date-selected slot-selected');
  $('.calendar *').removeClass('selected');
  e.preventDefault();
  e.stopPropagation();
});

$('.deselect-slot').on('click', function(e){
  $('.wrap').removeClass('slot-selected');
  $('.slots *').removeClass('selected');
  e.preventDefault();
  e.stopPropagation();
});

$('.form').on('submit', function(e){
  $('.wrap').toggleClass('booking-complete');
  e.preventDefault();
  e.stopPropagation();
})

function invokeCalendarListener(){
  $('.calendar td:not(.disabled)').on('click', function(e){
    addSlots();
    var date = $(this).html();
    var day = $(this).data('day');
    $('.date').html(day + ',  ' + date);
    $(this).addClass('selected');
    setTimeout(function(){
      $('.wrap').addClass('date-selected');
    },10);
    e.preventDefault();
    e.stopPropagation();
  });
}


function invokeSlotsListener(){
  $('.slots li').on('click', function(e){
    $(this).addClass('selected');
    $('.wrap').addClass('slot-selected');
    setTimeout(function(){
      $('.selected.member input[name="name"]').focus();
    }, 700);
    e.preventDefault();
    e.stopPropagation();
  });
}



function addSlots(container){
    console.log(container)
  var number = Math.ceil(Math.random()*5 + 1);
  var time = 7;
  var endings = [':00', ':15', ':30', ':45'];
  var timeDisplay = '';
  var slots = ''
  for(var i = 0; i < number; i++){
    time += Math.ceil(Math.random()*3);
    timeDisplay = time + endings[Math.floor(Math.random()*4)];
    slots += '<li>'+timeDisplay+'</li>';
  }
  
  $('.selected .slots').html(slots);
  
  invokeSlotsListener();
  
}



function addCalendar(container){
  //get dates
  var today = new Date();
  var day = today.getDay()
  var date = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  var first = new Date();
  first.setDate(1);
  var startDay = first.getDay();
  var dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  var monthLengths = [31,28,31,30,31,30,31,31,30,31,30,31];
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var dayNames = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  
  var current = 1 - startDay;
  console.log(container, day, monthLengths)
  //assemble calendar
  var calendar = '<label class="date"></label><label class="month">'+monthNames[month]+'</label> <label class="year">'+year+'</label>';
  
  calendar += '<table><tr>';
  dayLabels.forEach(function(label){
    calendar += '<th>'+label+'</th>';
  })
  calendar += '</tr><tr>';
  var dayClasses = '';
  while( current <= 30){
    if (current > 0){
      dayClasses = '';
      today.setDate(current);
      if (today.getDay() == 0 || today.getDay() == 6){
        dayClasses += ' disabled';
      }
      if (current < date){
        dayClasses += ' disabled';
      }
      if (current == date){
        dayClasses += ' today';
      }
      calendar += '<td class="'+dayClasses+'" data-day="'+dayNames[(current + startDay)%7]+'">'+current+'</td>';
    } else {
      calendar += '<td></td>';
    }
    
    if ( (current + startDay) % 7 == 0){
      calendar += '</tr><tr>';
    }
    
    current++
  }
  
  calendar += '</tr></table>';
  container.html(calendar);
  
  invokeCalendarListener();
}
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
$hue: 241;

$distance: 0;
$color: hsl($hue, 100%, 59%);
$accent: hsl( ($hue + $distance) , 100%, 50%);
$grey: #ddd;
$sans: 'Alegreya Sans', sans-serif;
$ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1.000);
$short: 300ms;
$mid: 500ms;
$long: 800ms;


html{
  font-size: 1.3px;
  *{
    box-sizing: border-box;
  }
}

body{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(60deg, darken(adjust-hue($color,5),10%), lighten(adjust-hue($color,-5), 10%));
  background: white;
  font-family: $sans;
  font-size: 40rem;
  overflow: hidden;
}

.wrap{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  color: $color;
  width: 500rem;
  height: 450rem; 
  &.member-selected{ 
    .member:not(.selected){
      opacity: 0;
      pointer-events: none;
      transform: perspective(100rem) translatez(-50rem);
      transition: opacity $short $ease-in-out, transform $long $ease-in-out, height $mid $ease-in-out;
    }
    .instructions .first{
      opacity: 0;
    }
    &.date-selected{ 
      .deselect-date{
        opacity: 1;
        pointer-events: auto;
      }
      .calendar{ 
        .date{
          transform: scale(0.5) translateY(-5rem) translateX(0rem);
          opacity: 1;
        }
        .month {
          transform: scale(0.5) translateY(-5rem) translateX(100rem);
        }
        .year{
          transform: scale(0.5) translateY(-5rem) translateX(200rem);
        }
        
        table{
          pointer-events: none;
          transform: translateY(50rem);
          border-top: 1px solid rgba($grey,0.8);
        }
        td:not(.selected), th:not(.selected){
          opacity: 0;
          transform: perspective(100rem) translatez(-50rem);
          transition: opacity $short $ease-in-out, transform $short $ease-in-out;
        }
      }
      .slots{ 
        opacity: 1;
        transform: translatey(0%);
        pointer-events: auto;
        li{
          transform: translatey(0);
          opacity: 1;
          color: $color;
          &:nth-child(1){
            transition-delay: $mid * 0/6;
            transform: translateY(0rem) perspective(100rem) translateZ(0);
          }
          &:nth-child(2){
            transition-delay: $mid * 1/6;
            transform: translateY(50rem) perspective(100rem) translateZ(0);
          }
          &:nth-child(3){
            transition-delay: $mid * 2/6;
            transform: translateY(100rem) perspective(100rem) translateZ(0);
          }
          &:nth-child(4){
            transition-delay: $mid * 3/6;
            transform: translateY(150rem) perspective(100rem) translateZ(0);
          }
          &:nth-child(5){
            transition-delay: $mid * 4/6;
            transform: translateY(200rem) perspective(100rem) translateZ(0);
          }
          &:nth-child(6){
            transition-delay: $mid * 5/6;
            transform: translateY(250rem) perspective(100rem) translateZ(0);
          }
          &:nth-child(7){
            transition-delay: $mid * 6/6;
            transform: translateY(300rem) perspective(100rem) translateZ(0);
          }
        }
      }
      &.slot-selected{ 
        .form{
          opacity: 1;
          transform: translatey(0%);
          pointer-events: auto;
          transition: opacity $mid $ease-in-out, transform $long $ease-in-out;
          *{
              transform: translatey(0);
              &:nth-child(1){transition-delay: $short * 1/6;}
              &:nth-child(2){transition-delay: $short * 2/6;}
              &:nth-child(3){transition-delay: $short * 3/6;}
              &:nth-child(4){transition-delay: $short * 4/6;}
              &:nth-child(5){transition-delay: $short * 5/6;}
              &:nth-child(6){transition-delay: $short * 6/6;}
          }
        }
        .deselect-slot{
          opacity: 1;
          pointer-events: auto;
        }
        .slots{
          pointer-events: none;
        }
        .slots li:not(.selected){
          opacity: 0;
          &:nth-child(1){
            transition-delay: $mid * 0/6;
            transform: translateY(0rem) perspective(100rem) translateZ(-50rem);
          }
          &:nth-child(2){
            transition-delay: $mid * 1/6;
            transform: translateY(50rem) perspective(100rem) translateZ(-50rem);
          }
          &:nth-child(3){
            transition-delay: $mid * 2/6;
            transform: translateY(100rem) perspective(100rem) translateZ(-50rem);
          }
          &:nth-child(4){
            transition-delay: $mid * 3/6;
            transform: translateY(150rem) perspective(100rem) translateZ(-50rem);
          }
          &:nth-child(5){
            transition-delay: $mid * 4/6;
            transform: translateY(200rem) perspective(100rem) translateZ(-50rem);
          }
          &:nth-child(6){
            transition-delay: $mid * 5/6;
            transform: translateY(250rem) perspective(100rem) translateZ(-50rem);
          }
          &:nth-child(7){
            transition-delay: $mid * 6/6;
            transform: translateY(300rem) perspective(100rem) translateZ(-50rem);
          }
        }
        .slots li.selected{
          transform: translateY(0rem) perspective(100rem) translateZ(0rem);
          transition-delay: 0s;
          border-bottom: 1px solid rgba($grey,0.8);
        }
        &.booking-complete{
          .deselect-member, .deselect-date, .deselect-slot{
            opacity: 0;
            pointer: none;
          }
          .form{
            transition: opacity $mid $ease-in-out, transform $long $ease-in-out;
            &:before, &:after{
              transform: scalex(0);
            }
            label{
              opacity: 0;
              transition: opacity $short $ease-in-out;
            }
            input{
              border-bottom: 1px solid rgba($grey,0.8);
              pointer-events: none;
              &[name="name"]{
                padding: 10rem 70rem;
                transform: translatey(-33rem);
              }
              &[name="email"]{ 
                padding: 10rem 70rem;
                transform: translatey(-60rem);
              }
              &[type="submit"]{
                transform: translatey(-60rem);
                opacity: 0;
                transition: transform $mid $ease-in-out, opacity $short $ease-in-out;
              }
            }
          }
          .confirm-message{
            opacity: 1;
            transform: translatey(0%);
            pointer-events: auto;
          }
        }
      }
    }
  }
}

.instructions{
  margin-bottom: 25rem;
  text-align: center;
  height: 80vh;
  font-weight: 300;
  color: $color;
    > *{
      transition: opacity $short $ease-in-out;
    }
}
.deselect-member, .deselect-date, .deselect-slot{
  position: absolute;
  color: $grey;
  top: 35rem;
  right: 25rem;
  z-index: 10;
  display: inline-block;
  font-size: 20rem;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity $short $ease-in-out;
  font-weight: 100;
}
.deselect-date{
  top: 95rem;
}
.deselect-slot{
  top: 145rem;
}

.member{
  background: white;
  width: 100%;
  padding: 20rem;
  height: 100rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  transition: opacity $long $ease-in-out, transform $mid $ease-in-out, height $short $ease-in-out, box-shadow $long $ease-in-out;
  box-shadow: 5rem 5rem 20rem rgba($color, 0.15);
  overflow: hidden;
  .name{
    display: inline-block;
    margin-left: 85rem;
    line-height: 60rem;
    transform-origin: 0% 0%;
    transition: transform $mid $ease-in-out;
    font-weight: 100;
    font-size: 40rem;
  }
  .avatar{
    transform-origin: 100% 0%;
    width: 70rem;
    height: 70rem;
    border-radius: 100rem;
    display: inline-block;
    position: absolute;
    top: 15rem;
    left: 15rem;
    background-size: cover;
    filter: saturate(50%) contrast(120%);
    transition: transform $mid $ease-in-out;
    &:after{
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100rem;
      background-color: $color;
      mix-blend-mode: lighten;
    }
    
  }
  
  &:nth-child(1){
    transform: translatey(70rem) perspective(100rem) translatez(-10rem);
  }
  &:nth-child(2){
    transform: translatey(170rem) perspective(100rem) translatez(-10rem);
  }
  &:nth-child(3){
    transform: translatey(270rem) perspective(100rem) translatez(-10rem);
  }
  &:nth-child(4){
    transform: translatey(370rem) perspective(100rem) translatez(-10rem);
  }
  &.selected{
    transform: translatey(0rem) perspective(100rem) translatez(0rem);
    height: 450rem;
    cursor: default;
    z-index: 2;
    box-shadow: 10rem 10rem 60rem rgba(darken($color,20%), 0.1);
    transition: opacity $short $ease-in-out, transform $long $ease-in-out, height $mid $ease-in-out, box-shadow $long $ease-in-out;
    .deselect-member{
      opacity: 1;
      pointer-events: auto;
    }
    .name, .avatar{
      transform: scale(0.7) translatex(-30rem);
    }
    .calendar{
      height: 340rem;
      transform: translatey(0rem);
      transition: opacity $mid $ease-in-out, transform $mid $ease-in-out, height $long $ease-in-out;
      opacity: 1;
    }
  }
}

.calendar{
  width: 100%;
  margin-top: 0rem;
  height: 0;
  opacity: 0;
  transition: opacity $short $ease-in-out, transform $short $ease-in-out, height $short $ease-in-out;
  font-size: 17rem;
  border-top: 1px solid rgba($grey,0.8);
  .date, .month, .year{
    position: absolute;
    top: 15rem;
    left: 65rem;
    font-size: 50rem;
    display: inline-block;
    font-weight: 100;
    transition: opacity $short $ease-in-out, transform $mid $ease-in-out;
    transform-origin: 100% 0%;
    transform: translateX(0) scale(1);
  }
  .year{
    transform: translateX(80rem) scale(1);
  }
  .date{
    opacity: 0;
    transform-origin: 0% 0%;
    transform: translateX(-100rem) scale(1);
  }
  table{
    width: 100%;
    text-align: center;
    transition: transform $mid $ease-in-out;
    transform: translatey(80rem);
    border-top: 1px solid white;
    
    
    td, th{
      width: 13%;
      padding: 10rem;
      cursor: pointer;
      font-weight: 200;

      &.today{
        background: $color;
        color: white;
      }
      &.disabled{
        color: $grey;
        pointer-events: none;
        &.today{
          background: $grey;
          color: white;
        }
      }
      &.selected{
        transform: perspective(100rem) translateZ(80rem);
        transition: opacity $long $ease-in-out, transform $long $ease-in-out;
        opacity: 0;
      }
    }
    th{
      padding-top: 20rem;
    }
  }
}

.slots{
  position: absolute;
  left: 15rem;
  width: calc(100% - 20rem);
  height: 320rem;
  top: 135rem;
  opacity: 0;
  transform: translatey(50%);
  pointer-events: none;
  transition: opacity $short $ease-in-out, transform $mid $ease-in-out;
  font-size: 25rem;
  font-weight: 100;
  li{
    background: white;
    display: block;
    transition: color $mid $ease-in-out, transform $long $ease-in-out, opacity $mid $ease-in-out, border $long $ease-in-out;
    transform-origin: 100% 50%;
    color: transparent;
    border-bottom: 1px solid rgba($grey,0);
    padding: 10rem 70rem;
    cursor: pointer;
    position: absolute;
    width: calc(100% - 20rem);
    &:nth-child(1){transform: translatey(0rem) perspective(100rem) translatez(30rem);}
    &:nth-child(2){transform: translatey(50rem) perspective(100rem) translatez(30rem);}
    &:nth-child(3){transform: translatey(100rem) perspective(100rem) translatez(30rem);}
    &:nth-child(4){transform: translatey(150rem) perspective(100rem) translatez(30rem);}
    &:nth-child(5){transform: translatey(200rem) perspective(100rem) translatez(30rem);}
    &:nth-child(6){transform: translatey(250rem) perspective(100rem) translatez(30rem);}
    &:nth-child(7){transform: translatey(300rem) perspective(100rem) translatez(30rem);}
  }
}

.form{
  position: absolute;
  left: 15rem;
  width: 460rem;
  height: 320rem;
  top: 200rem;
  opacity: 0;
  transform: translatey(50%);
  pointer-events: none;
  transition: opacity $short $ease-in-out, transform $mid $ease-in-out;
  &:before, &:after{
    content: '';
    position: absolute;
    top: 0;
    z-index: 2;
    width: 70rem;
    height: 100%;
    background: white;
    transition: transform $long $ease-in-out;
  }
  &:before{
    left: 0;
    transform-origin: 0% 50%;
  }
  &:after{
    right: 0;
    transform-origin: 100% 50%;
  }
  label{
    display: block;
    font-size: 15rem;
    font-weight: 300;
    color: $grey;
    margin-left: 70rem;
  }
  input[type="text"], input[type="email"]{
    font-size: 25rem;
    font-weight: 100;
    margin-bottom: 15rem;
    border: none;
    border-bottom: 1px solid $color;
    width: 100%;
    outline: none;
    padding: 0 70rem 5rem;
    color: $color;
    background: transparent;
  }
  input[type="submit"]{
    background: $color;
    border: none;
    color: white;
    font-weight: 100;
    padding: 15rem;
    font-size: 20rem;
    cursor: pointer;
    margin-top: 15rem;
    margin-left: 70rem;
    outline: none;
  }
  *{
    font-family: $sans;
    transition: transform $mid $ease-in-out, border $mid $ease-in-out, opacity $long $ease-in-out, padding $mid $ease-in-out;
    transform: translateY(100rem);
  }
}

.confirm-message{
  position: absolute;
  left: 15rem;
  width: 460rem;
  text-align: center;
  height: 320rem;
  top: 320rem;
  font-size: 40rem;
  font-weight: 100;
  opacity: 0;
  transform: translatey(35%);
  pointer-events: none;
  transition: opacity $short $ease-in-out, transform $mid $ease-in-out;
  transition-delay: $short/2;
  .restart{
    display: block;
    text-align: center;
    margin-top: 15rem;
    color: $grey;
    font-size: 25rem;
    cursor: pointer;
  }
}
.sig{
  position: fixed;
  bottom: 8px;
  right: 8px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 100;
  font-family: sans-serif;
  color: rgba(0,0,0,0.4);
  letter-spacing: 2px;
}
</style>
