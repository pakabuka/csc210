// Chat -------------- CHAT--------------

var socket;
         $(document).ready(function(){
         socket = io.connect('http://' + document.domain + ':' + location.port + '/chess');
          socket.on('connect', function() {
             socket.emit('join', {});

             /* ****IMPORTANT*** */
             //NEED TO WORK ON THIS:
             //TRY TO MAKE IT MULTIPLAYER:
             //1. Whenever a new userenter, create a new player object and add that new player object to the game to process.
             //2. Make sure no users can click restart after the game started
             //3. ETC.
          });
          socket.on('status', function(data) {
              $('#chat').val($('#chat').val() + '<' + data.msg + '>\n');
              $('#chat').scrollTop($('#chat')[0].scrollHeight);
          });
          
          socket.on('message', function(data) {
              $('#chat').val($('#chat').val() + data.msg + '\n');
              $('#chat').scrollTop($('#chat')[0].scrollHeight);
          });
         
          $('#send').click(function(e) {
                  text = $('#text').val();
                  $('#text').val('');
                  socket.emit('text', {msg: text});
          });
        
          //TESTING
        $('#hit').click(function(e) {
            text = "has hitted."
            socket.emit('text', {msg: text});
        });

         });


// Game  -------------- NEED TO WORK ON THIS..... -------------------

// Things need to work on:
//1. Make it multipleplayer supportive (Maybe to 3 or 4 people)
//2. Removew restart button once one player clicked
//3. fixed he update() function such that if there's 3 or 4 people and if one of the player wins, the top point getter wins.

