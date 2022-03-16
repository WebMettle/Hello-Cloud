#
# Copyright (c) 2022 by WebMettle Systems
#

class HelloCloud(object):

    def __init__(self, target = None):
        self.__HelloPhrase = 'Hello'
        self.__Who = 'Cloud' if target == None else target

    @property
    def helloPhrase(self):
        return self.__HelloPhrase

    @property
    def who(self):
        return self.__Who

    @who.setter
    def who(self, target):
        self.__Who = target

    @property
    def _greetingText(self):
        return self.helloPhrase + ' ' + self.who

    @property
    def greeting(self):
        return self._greetingText + '!'

    @property
    def greetingQuestion(self):
        return self._greetingText + '?'

    @property
    def greetingEllipsis(self):
        return self._greetingText + '...'
    
if __name__ == '__main__':
    print(HelloCloud().greetingEllipsis)
    print(HelloCloud().greetingQuestion)
    print(HelloCloud().greeting)
