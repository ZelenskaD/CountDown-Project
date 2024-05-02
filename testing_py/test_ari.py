import ari
from unittest import TestCase

class AdditionTestCase(TestCase):
  """Example of unit tests."""

  def test_adder(self):
    assert ari.adder(2,3) == 5  
  
  def test_adder_2(self):
    #instead of assert ari.adder(2,2)==4

    self.assertEqual(ari.adder(2,2),4)
    # self.assertEqual(ari.adder(40,50),90)
    # self.assertEqual(ari.adder(-4,-2),-6)
