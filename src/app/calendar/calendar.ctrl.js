/*global Firebase */

export class CalendarController {
  constructor($scope, $compile, uiCalendarConfig, $firebaseObject) {
    'ngInject';

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.changeTo = 'Hungarian';
 
    // event source that pulls from google.com
    $scope.eventSource = {
      url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
      className: 'gcal-event',           // an option
      currentTimezone: 'America/Chicago' // an option
    };

    // event source that contains custom events on the scope
    // var offHours = [];
    let offHours = [{
      id         : 'sat_off',
      start      : '17:00',
      end        : '20:00',
      dow        : [6],
      color      : '#ccc',
      rendering  : 'background',
      overlap    : false
    }];

    // {title: 'Patient B', start: new Date(y, m, d - 3, 14, 0), end: new Date(y, m, d - 3, 16, 30)},
    // {id: 999, title: 'Patient C', start: new Date(y, m, d - 2, 12, 0), allDay: false},
    // {id: 999, title: 'Patient D', start: new Date(y, m, d - 1, 17, 0), allDay: false},
    // {title: 'Patient E', start: new Date(y, m, d + 1, 15, 0),end: new Date(y, m, d + 1, 16, 0),allDay: false}
    
    $scope.events = [];
    $scope.doctor2Events = [];
    $scope.doctor3Events = [];


    // Adding doctors to events

    // Doctor 1
    var eventObject;
    var roshelle = [-18,-17,-16,-14,-12,-9,-8,-6,-5,-4,-1,0,1,3,5,6,8,9,11,12,14,15,17,18,19];
    for (var i = roshelle.length - 1; i >= 0; i--) {
      eventObject = {
        title: 'Doctor 1', 
        start: new Date(y, m, d + roshelle[i]), 
        allDay: true, 
        rendering: 'background',
        className: ['calendarRoshelle']
      };
      $scope.events.push(eventObject);
    }

    // Doctor 2
    var doc2 = [-19,-17,-15,-11,-10,-8,-6,-5,-4,-1,0,1,3,5,6,8,9,13,14];
    var eventObject2;
    for (i = doc2.length - 1; i >= 0; i--) {
      eventObject2 = {
        title: 'Doctor 2', 
        start: new Date(y, m, d + (doc2[i]+1)), 
        allDay: true, 
        rendering: 'background',
        className: ['calendarDoc2']
      };
      $scope.doctor2Events.push(eventObject2);
    }

    // Doctor 3
    var doc3 = [-19,-16,-14,-11,-9,-8,-6,-5,-3,-1,0,1,4,5,7,9,11,12,14];
    var eventObject3;
    for (i = doc3.length - 1; i >= 0; i--) {
      eventObject3 = {
        title: 'Doctor 3', 
        start: new Date(y, m, d + (doc2[i]+1)), 
        allDay: true, 
        rendering: 'background',
        className: ['calendarDoc3']
      };
      $scope.doctor3Events.push(eventObject3);
    }


    // log Doctor 2 events
    // for (var i = 0; i <= $scope.doctor2Events.length - 1; i++) {
    //   $log.log($scope.doctor2Events[i].title);
    // }
    // $log.log($scope.eventsDoc2);



    // event source that calls a function on every view switch
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m, start: s + (50000), end: e + (100000), allDay: false, className: ['customFeed']}];
      callback(events);
    };


    $scope.calEventsExt = {
      color: '#f00',
      textColor: 'yellow',
      events: [ 
        {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
        {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
        {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
      ]
    };
    /* alert on eventClick */
    $scope.alertOnEventClick = function(date){
        $scope.alertMessage = (date.title + ' was clicked ');
    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'New appointment',
        start: new Date(y, m, d, 11, 0),
        end: new Date(y, m, d, 12, 0),
        className: ['openSesame']
      });
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };
     /* Render Tooltip */
    $scope.eventRender = function(event, element) {
      // if(event.rendering == 'background'){
        // element.append("Dr. Beckwith");
      // }
      element.attr({'tooltip': event.title, 
                    'tooltip-append-to-body': true});
      $compile(element)($scope);
    };

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 510,
        defaultView: 'month',
        firstDay: 1,
        editable: true,
        eventConstraint: 'businessHours',
        businessHours: {
          start: "10:00", // a start time (10am)
          end: "20:00", // an end time (8pm)
          dow: [ 1, 2, 3, 4, 5, 6 ] // days of week. an array of zero-based day of week integers (0=Sunday)
        },
        hiddenDays: [ 0 ], // hide Sundays
        minTime: "10:00:00",
        maxTime: "20:00:00",
        slotEventOverlap: false,
        slotDuration: '00:30:00',
        // eventColor: '#2cbfd9',
        // slotLabelInterval: '02:00:00',
        // selectable: true,
        customButtons: {
          addEventButton: {
            text: 'Add an appointment',
            click: function() {
              // alert('clicked the custom button!');
              $scope.addEvent();
            }
          }
        },
        header: {
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
        // dayClick: function() {
        //   alert('a day has been clicked!');
        // }
      }
    };

    $scope.changeLang = function() {
      if($scope.changeTo === 'Hungarian'){
        $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
        $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
        $scope.changeTo= 'English';
      } else {
        $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        $scope.changeTo = 'Hungarian';
      }
    };

    // Event Source Options
    // color: Sets every Event Object's color for this source.
    // backgroundColor: Sets every Event Object's backgroundColor for this source.
    // borderColor: Sets every Event Object's borderColor for this source.
    // textColor: Sets every Event Object's textColor for this source.
    // className: Sets every Event Object's className for this source.
    // editable: Sets every Event Object's editable for this source.
    // startEditable: Sets every Event Object's startEditable for this source.
    // durationEditable: Sets every Event Object's durationEditable for this source.
    // rendering: Sets every Event Object's rendering for this source.
    // overlap: Sets every Event Object's overlap for this source.
    // constraint: Sets every Event Object's constraint for this source.
    // allDayDefault: Sets the allDayDefault option, but only for this source.
    // eventDataTransform: Sets the eventDataTransform callback, but only for this source.
    /* event sources array*/
    // $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.events.push(offHours[0]);
    $scope.doctor2Events.push(offHours[0]);
    $scope.doctor3Events.push(offHours[0]);

    $scope.eventSources = [$scope.events, $scope.eventsF];
    $scope.eventSourcesDoc2 = [$scope.doctor2Events];
    $scope.eventSourcesDoc3 = [$scope.doctor3Events];
 
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
    /* EOF */

    // connect to firebase
    var ref = new Firebase("https://metromeduc.firebaseio.com");

    // download the data into a local object
    var syncObject = $firebaseObject(ref);

    // three way data binding
    syncObject.$bindTo($scope, 'days');
  }
}