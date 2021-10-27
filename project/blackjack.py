import random

class Player():
    def __init__(self, name, score, cards):
        self.name = name
        self.score = score
        self.cards = cards
    
    def distribute_cards(self):
        while len(self.cards) != 2:
            self.cards.append(random.randint(1, 11))
            if (len(self.cards)) == 2:
                return self.cards

    def hit(self, newcard):
        self.cards.append(newcard)

    def reset(self):
        self.cards = []


def game(user1, user2):
    playerAwinloseIndex = 1
    playerBwinloseIndex = 1
    print("Welcome to BlackJack Game. Best of 5 count!")
    totalgames = 0
    playerAcards = []
    playerBcards = []
    playerA = Player(user1, 0, playerAcards)
    playerB = Player(user2, 0, playerBcards)
                     
    while totalgames < 5:
        print("Game #" + str(totalgames + 1) + ". Dealing the cards")
        playerA.reset()
        playerB.reset()
        playerA.distribute_cards()
        playerB.distribute_cards()

        print(playerA.name, "has cards: ", playerA.cards)
        print(playerB.name, "has cards: ", playerB.cards)
        
        
        if sum(playerA.cards) == 21 or sum(playerB.cards) == 21:
            if sum(playerA.cards) == 21:
                print(playerA.name, "Black Jack!")
                playerA.score += 1
            else:
                print(playerB.name, "Black Jack!")
                playerB.score += 1
        else:
            while sum(playerA.cards) < 21:
                action = str(input(playerA.name + ", Do you want to stay or hit?  "))
                if action == "hit":
                    playerA.hit(random.randint(1, 11))
                    print(playerA.name + " now have a total of " + str(sum(playerA.cards)) + " from these cards ", playerA.cards)
                    if sum(playerA.cards) > 21:
                        print(playerB.name, "wins!")
                        playerB.score += 1
                        playerAwinloseIndex = 0
                        break
                elif action == "stay":
                    while (sum(playerB.cards) < 21):
                        action = str(input(playerB.name + ", Do you want to stay or hit?  "))
                        if action == "hit":
                            playerB.hit(random.randint(1, 11))
                            print(playerB.name + " now have a total of " + str(sum(playerB.cards)) + " from these cards ", playerB.cards)
                            if sum(playerB.cards) > 21:
                                print(playerA.name, "wins!")
                                playerA.score += 1
                                playerBwinloseIndex = 0
                                break
                        elif action == "stay":
                            break
                    break
                        
        if sum(playerA.cards) > sum(playerB.cards) and playerAwinloseIndex == 1:
            print(playerA.name, "wins!")
            playerA.score += 1
        
        if sum(playerA.cards) < sum(playerB.cards) and playerBwinloseIndex == 1:
            print(playerB.name, "wins!")
            playerB.score += 1
        
        if sum(playerA.cards) == sum(playerB.cards):
            print(playerA.name, playerB.name, "ties!")

        print("Current Best of 5: ")
        print(str(playerA.name) + ": " + str(playerA.score) + " games" + " - V.S. - " + playerB.name + ": " + str(playerB.score) + " games")
        totalgames += 1
    if (playerA.score) > (playerB.score):
        print(playerA.name, " is the ultimate winner!")
        #in the user data base, player B's money goes to player A
    elif (playerA.score) < (playerB.score):
        print(playerB.name, " is the ultimate winner!")
        #in the user data base, player A's money goes to player B
    else:
        print(playerA.name, playerB.name, "ties!")
        #do nothing about the data base.

game("Fred", "Chen")
