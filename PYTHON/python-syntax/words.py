def print_upper_words (words, must_start_with):
  """ Change your words to uppercase and print each word on a separate line. If the word starts with "e" or "E", print it."""
  for word in words:
    # if word.startswith("e") or word.startswith("E"):
      if word[0].lower() in must_start_with:
          print(word.upper())  


print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                  must_start_with={"h", "y"})

# words = ['Hello', 'Hey', 'Yo','Eahh','Else', 'Yes'] 
# print_upper_words(words)
