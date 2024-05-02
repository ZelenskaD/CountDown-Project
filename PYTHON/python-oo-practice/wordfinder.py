"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    
    def __init__(self, file_path):
        """Initialize the WordList class with a path to a file."""
        self.file_path = file_path
        self.words = self.load_words()
    
    def load_words(self):
        """Load words from a file into a list and return the list."""
        with open(self.file_path, 'r') as file:
            words = file.read().splitlines()
        print(f"{len(words)} words read")
        return words

    def random(self):
        """Return a random word from the loaded list of words."""
        return random.choice(self.words)



        
