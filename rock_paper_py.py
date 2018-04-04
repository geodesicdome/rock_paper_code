from random import random
random_number = random()
if random_number < 1/3:
  computer_choice = 'rock'
elif random_number < 2/3:
  computer_choice = 'paper'
else:
  computer_choice = 'scissor'

user_choice = input('Please choose rock, paper, or scissor\n')
print('\tComputer picked ' + computer_choice)
print('\tYou picked ' + user_choice)
#possible_options = ['rock', 'paper', 'scissor']
#if user_choice not in possible_options:
 # print('Go AWAY!!')
if user_choice == computer_choice:
  print('Tie!')
elif user_choice == "rock" and computer_choice == "paper":
  print('You win!')
elif user_choice == "paper" and computer_choice == "scissor":
  print('You win!')
elif user_choice == 'scissor' and computer_choice == "rock":
  print('You win!')
elif user_choice == "scissor" and computer_choice == "rock":
  print('You lose! I win!')
else:
  print('You Win!!')
  
