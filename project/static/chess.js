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

          socket.on('startGame', function(data) {
            $('#chat').val($('#chat').val() + data.msg + '\n');
            
            const arrayInitialCardsA = [];
            if (data.AinitialcardsFirst != null && data.AinitialcardsSecond != null){
              arrayInitialCardsA[0] = data.AinitialcardsFirst;
              arrayInitialCardsA[1] = data.AinitialcardsSecond;
              // window.alert(arrayInitialCardsA);
              
            arrayInitialCardsA.forEach(function (i){
              if (i == '1'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/1.png';
                div.appendChild(img); 
              }
              if (i  == '2'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/2.png';
                div.appendChild(img); 
              } if (i  == '3'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/3.png';
                div.appendChild(img); 
              } if (i  == '4'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/4.png';
                div.appendChild(img); 
              } if (i  == '5'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/5.png';
                div.appendChild(img); 
              } if (i  == '6'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/6.png';
                div.appendChild(img);
              } if (i  == '7'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/7.png';
                div.appendChild(img);
              } if (i  == '9'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/9.png';
                div.appendChild(img);
              } if (i  == '8'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/8.png';
                div.appendChild(img);
              } if (i  == '10'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/10.png';
                div.appendChild(img);
              } if (i  == '11'){
                var img = new Image(); 
                var div = document.getElementById('div4'); 
                img.src = '../static/cards/1.png';
                div.appendChild(img);
              }
            });
            }
           

            const arrayInitialCardsB = [];
            if (data.BinitialcardsFirst != null && data.BinitialcardsSecond != null){
              arrayInitialCardsB[0] = data.BinitialcardsFirst;
              arrayInitialCardsB[1] = data.BinitialcardsSecond;
              
              arrayInitialCardsB.forEach(function (i){
              if (i == '1'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/1.png';
                div.appendChild(img); 
              }
              if (i  == '2'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/2.png';
                div.appendChild(img); 
              } if (i  == '3'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/3.png';
                div.appendChild(img); 
              } if (i  == '4'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/4.png';
                div.appendChild(img); 
              } if (i  == '5'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/5.png';
                div.appendChild(img); 
              } if (i  == '6'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/6.png';
                div.appendChild(img);
              } if (i  == '7'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/7.png';
                div.appendChild(img);
              } if (i  == '9'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/9.png';
                div.appendChild(img);
              } if (i  == '8'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/8.png';
                div.appendChild(img);
              } if (i  == '10'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/10.png';
                div.appendChild(img);
              } if (i  == '11'){
                var img = new Image(); 
                var div = document.getElementById('div5'); 
                img.src = '../static/cards/1.png';
                div.appendChild(img);
              }
            });
            }

            $('#chat').scrollTop($('#chat')[0].scrollHeight);
          });

          var playerAnewcard;
          var playerBnewcard;
          socket.on('hitGame', function(data) {
            $('#chat').val($('#chat').val() + data.msg  + '\n');

            //data.playerAnewcard is a string and is the value that the user has hitted and passed into javascript.
            // playerAnewcard = data.playerAnewcard;
            // playerBnewcard = data.playerBnewcard;

            //Hit Cards
            var img = new Image(); 
            var div = document.getElementById('div4'); 
            if (data.playerAnewcard == '1'){
              img.src = '../static/cards/1.png';
              div.appendChild(img); 
            } else if (data.playerAnewcard == '2'){
              img.src = '../static/cards/2.png';
              div.appendChild(img);
            }else if (data.playerAnewcard == '3'){
              img.src = '../static/cards/3.png';
              div.appendChild(img);
            }else if (data.playerAnewcard == '4'){
              img.src = '../static/cards/4.png';
              div.appendChild(img);
            }else if (data.playerAnewcard == '5'){
              img.src = '../static/cards/5.png';
              div.appendChild(img);
            }else if (data.playerAnewcard == '6'){
              img.src = '../static/cards/6.png';
              div.appendChild(img);
            }else if (data.playerAnewcard == '7'){
              img.src = '../static/cards/7.png';
              div.appendChild(img);
            }else if (data.playerAnewcard == '9'){
              img.src = '../static/cards/9.png';
              div.appendChild(img);
            }else if (data.playerAnewcard == '8'){
              img.src = '../static/cards/8.png';
              div.appendChild(img);
            }else if (data.playerAnewcard == '10'){
              img.src = '../static/cards/10.png';
              div.appendChild(img);
            }else if (data.playerAnewcard == '11'){
              img.src = '../static/cards/1.png';
              div.appendChild(img);
            } else if (data.playerAnewcard == 'x'){
              //If it is game over, then we clear the div.
              document.getElementById("div4").innerHTML = "";
              //do nothing...
            }

            var img = new Image(); 
            var div2 = document.getElementById('div5'); 
            if (data.playerBnewcard == '1'){
              img.src = '../static/cards/1.png';
              div2.appendChild(img);
            } else if (data.playerBnewcard == '2'){
              img.src = '../static/cards/2.png';
              div2.appendChild(img);
            }else if (data.playerBnewcard == '3'){
              img.src = '../static/cards/3.png';
              div2.appendChild(img);
            }else if (data.playerBnewcard == '4'){
              img.src = '../static/cards/4.png';
              div2.appendChild(img);
            }else if (data.playerBnewcard == '5'){
              img.src = '../static/cards/5.png';
              div2.appendChild(img);
            }else if (data.playerBnewcard == '6'){
              img.src = '../static/cards/6.png';
              div2.appendChild(img);
            }else if (data.playerBnewcard == '7'){
              img.src = '../static/cards/7.png';
              div2.appendChild(img);
            }else if (data.playerBnewcard == '9'){
              img.src = '../static/cards/9.png';
              div2.appendChild(img);
            }else if (data.playerBnewcard == '8'){
              img.src = '../static/cards/8.png';
              div2.appendChild(img);
            }else if (data.playerBnewcard == '10'){
              img.src = '../static/cards/10.png';
              div2.appendChild(img);
            }else if (data.playerBnewcard == '11'){
              img.src = '../static/cards/1.png';
              div2.appendChild(img);
            } else if (data.playerAnewcard == 'x'){
              document.getElementById("div5").innerHTML = "";
              //do nothing...
            }

            // document.getElementById("playerAnewcard").value = data.playerAnewcard;
            // document.getElementById("playerBnewcard").value = data.playerBnewcard;
            
            $('#chat').scrollTop($('#chat')[0].scrollHeight);
          });

        

          socket.on('stayGame', function(data) {
            $('#chat').val($('#chat').val() + data.msg  + '\n');
            
            if (data.playerAscore != null && data.playerBscore != null){
              document.getElementById("playerAscore").value = data.playerAscore;
              document.getElementById("playerBscore").value = data.playerBscore;  
            }

            if (data.GameOver == 1){
              // document.getElementById("playerAscore").value = data.whowins;
              // document.getElementById("playerBscore").value = data.whowins;
              var whoeverwins = data.whowins;

              if (confirm("game over. " + whoeverwins + " wins!")){
                socket.emit('gameover', {}, function() {
                  window.location.href = "/login";
                  socket.disconnect();
            });

              }
            }
           
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
