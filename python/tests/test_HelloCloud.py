#
# Copyright (c) 2022 by Salvatore Saieva.
#

import unittest
import HelloCloud

class HelloCloudTest(unittest.TestCase):

    def test_whenInstantiated_whoIsTheCloud(self):
        hw = HelloCloud.HelloCloud()
        self.assertEqual(hw.who, "Cloud")

    def test_whenInstantiated_greetingHasExclaimationReaction(self):
        hw = HelloCloud.HelloCloud()
        self.assertTrue(hw.greeting.startswith('Hello'))
        self.assertTrue(hw.greeting.endswith('!'))

    def test_when_instantiatedWithName_greetingUsesTheName(self):
        hw = HelloCloud.HelloCloud('New York')
        self.assertTrue(hw.greeting.endswith('New York!'))

    def test_whenGreetingQuestion_greetingHasQuestionReaction(self):
        hw = HelloCloud.HelloCloud()
        self.assertTrue(hw.greetingQuestion.endswith('?'))

    def test_whenGreetingEllipsis_greetingHasEllipsisReaction(self):
        hw = HelloCloud.HelloCloud()
        self.assertTrue(hw.greetingEllipsis.endswith('...'))

if __name__ == '__main__':
    unittest.main()
