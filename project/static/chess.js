// Chat -------------- CHAT--------------

var socket;
         $(document).ready(function(){
         socket = io.connect('http://' + document.domain + ':' + location.port + '/chess');
        
         socket.on('connect', function() {
             socket.emit('join', {});
            
          });
          socket.on('status', function(data) {
              $('#chat').val($('#chat').val() + '<' + data.msg + '>\n');
              $('#chat').scrollTop($('#chat')[0].scrollHeight);
          });
          
          socket.on('message', function(data) {
              $('#chat').val($('#chat').val() + data.msg + '\n');
              $('#chat').scrollTop($('#chat')[0].scrollHeight);
          });

          socket.on('startGame', function(data) {
            $('#chat').val($('#chat').val() + data.msg + '\n');
            $('#chat').scrollTop($('#chat')[0].scrollHeight);
          });


          socket.on('hitGame', function(data) {
            $('#chat').val($('#chat').val() + data.msg  + '\n');
            $('#chat').scrollTop($('#chat')[0].scrollHeight);
          });

          socket.on('stayGame', function(data) {
            $('#chat').val($('#chat').val() + data.msg  + '\n');
            $('#chat').scrollTop($('#chat')[0].scrollHeight);
          });
         
          $('#send').click(function(e) {
                  text = $('#text').val();
                  $('#text').val('');
                  socket.emit('text', {msg: text});
          });


        $('#hit').click(function(e) {
            socket.emit('hit', {});//emit 'hit' where 'hit' is defined in the python file.
            // console.log("Hit this shit!");
        });
        
        $('#stay').click(function(e) {
            socket.emit('stay', {});//emit 'stay' where 'stay' is defined in the python file.
            // console.log("Stay this shit!");
        });
        });


// Game  -------------- NEED TO WORK ON THIS..... -------------------

// Things need to work on:
//1. Make it multipleplayer supportive (Maybe to 3 or 4 people)
//2. Removew restart button once one player clicked
//3. fixed he update() function such that if there's 3 or 4 people and if one of the player wins, the top point getter wins.

// Create a local dictoinary that stores the cards (hits) and the user's moves and then pass it on to the server.
