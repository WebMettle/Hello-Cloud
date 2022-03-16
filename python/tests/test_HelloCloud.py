#
# Copyright (c) 2022 by Salvatore Saieva.
#

import unittest
import HelloCloud

class HelloCloudTest(unittest.TestCase):

    def test_whenInstantiated_whoIsTheCloud(self):
        hc = HelloCloud.HelloCloud()
        self.assertEqual(hc.who, "Cloud")

    def test_whenInstantiated_greetingHasExclaimationReaction(self):
        hc = HelloCloud.HelloCloud()
        self.assertTrue(hc.greeting.startswith('Hello'))
        self.assertTrue(hc.greeting.endswith('!'))

    def test_when_instantiatedWithName_greetingUsesTheName(self):
        hc = HelloCloud.HelloCloud('New York')
        self.assertTrue(hc.greeting.endswith('New York!'))

    def test_whenGreetingQuestion_greetingHasQuestionReaction(self):
        hc = HelloCloud.HelloCloud()
        self.assertTrue(hc.greetingQuestion.endswith('?'))

    def test_whenGreetingEllipsis_greetingHasEllipsisReaction(self):
        hc = HelloCloud.HelloCloud()
        self.assertTrue(hc.greetingEllipsis.endswith('...'))

if __name__ == '__main__':
    unittest.main()
