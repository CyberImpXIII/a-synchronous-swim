$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    $.post('http://127.0.0.1:3000', direction  ,(data)=>{
      SwimTeam.move(data);
    });
    // console.log(direction.toLowerCase());
  }
});

console.log('Client is running in the browser!');
