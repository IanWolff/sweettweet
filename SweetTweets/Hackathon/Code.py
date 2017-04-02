'''
Created on Mar 31, 2017

@author: cmahl_000
'''
from Linked_List import Linked_List
from random import randint

class Code:
    #self.nicePositiveList = Linked_List()
    #self.niceNegativeList = Linked_List()
    def __init__(self):
        self.goodList = Linked_List()
        self.badList = Linked_List()
        allPositives = open("happy.txt", "r")
        allNegatives = open("unhappy.txt", "r")
        self.niceNegativeList = Linked_List()
        self.nicePositiveList = Linked_List()
        
        for word in allPositives.readlines():
            self.goodList.append_element(word)
        for word in allNegatives.readlines():
            self.badList.append_element(word)
        allPositives.close()
        allNegatives.close()
        
        
        
        for i in self.badList:
            word = i[:len(i) - 2]
            self.niceNegativeList.append_element(word)
        for i in self.goodList:
            word = i[:len(i)-2]
            self.nicePositiveList.append_element(word)
        
        
        self.goodVerbs = Linked_List()
        self.goodNouns = Linked_List()
        self.goodAdjectives = Linked_List()
        self.goodAdverbs = Linked_List()
        self.goodPrepositions = Linked_List()
        self.badVerbs = Linked_List()
        self.badNouns = Linked_List()
        self.badAdjectives = Linked_List()
        self.badAdverbs = Linked_List()
        self.badPrepositions = Linked_List()
        for i in range(len(self.goodList)):
            word = self.goodList.get_element_at(i)
            type = word[len(word)-2:len(word)-1]
            part = word[:len(word)-2]
            if type == "A":
                self.goodAdjectives.append_element(part)
            elif type == "V":
                self.goodVerbs.append_element(part)
            elif type == "N":
                self.goodNouns.append_element(part)
            elif type == "B":
                self.goodAdverbs.append_element(part)
            elif type == "P":
                self.goodPrepositions.append_element(part)
        for i in range(len(self.badList)):
            word = self.badList.get_element_at(i)
            type = word[len(word)-2:len(word)-1]
            part = word[:len(word)-2]
            if type == "A":
                self.badAdjectives.append_element(part)
            elif type == "V":
                self.badVerbs.append_element(part)
            elif type == "N":
                self.badNouns.append_element(part)
            elif type == "B":
                self.badAdverbs.append_element(part)
            elif type == "P":
                self.badPrepositions.append_element(part)
                
        for i in range(len(self.badNouns)):
            word = self.badNouns.get_element_at(i)
            newWord = word + "s"
            self.badNouns.insert_element_at(newWord, i+1)
            
    def random(self, array):
        x = randint(0, len(array) - 1)
        return array.get_element_at(x)
        
                
    def stringSwitch(self, string):
        tweetWords = string.split()
        array = []
        for word in tweetWords:
            newWord = "".join(c for c in word if c not in ('!','.',':'))
            if self.binarySearch(newWord, self.badAdjectives):
                array.append(self.random(self.goodAdjectives))
            elif self.binarySearch(newWord, self.badNouns):
                array.append(self.random(self.goodNouns))
            elif self.binarySearch(newWord, self.badVerbs):
                array.append(self.random(self.goodVerbs))
            elif self.binarySearch(newWord, self.badAdverbs):
                array.append(self.random(self.goodAdverbs))
            elif self.binarySearch(newWord, self.badPrepositions):
                array.append(self.random(self.goodPrepositions))
            else:
                array.append(word)
        s = " "
        return s.join(array)

        
    def binarySearch(self, searchTerm, array):
        a = 0
        b = len(array) - 1
        while a <= b:
            m = ((a + b) // 2)
            if searchTerm.lower() < array.get_element_at(m).lower():
                b = m - 1
            if searchTerm.lower() > array.get_element_at(m).lower():
                a = m + 1
            if searchTerm.lower() == array.get_element_at(m).lower():
                return True
        return False
    
    def getGoodList(self):
        return str(self.goodList)
    
    
    
    def listToArray(self, list):
        array = []
        for i in list:
            array.append(i)
        return array
    def getNegativeList(self):
        return self.niceNegativeList
    def getPositiveList(self):
        return self.nicePositiveList
    
if __name__ == "__main__":
    code = Code()
    print(code.listToArray(code.getNegativeList()))
    print(code.listToArray(code.getPositiveList()))
    
    
                

    
    