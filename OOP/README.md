## OOP Car

Create a **MakeCar** class by using _OOP concept_, where:
Your class should have:


- **numberOfPasengers**: _number_ for the number of passengers currently in the car (_starts as 0_).
- **maximumNumberPassangers**: _number_ for the maximum number of passengers that the car can hold (_taken as a parameter_).
- **fuel**: _number_ for how many gallons of fuel in the car (_taken as a parameter_).
- **counter**: _number_ for the number of miles the car has traveled (_start as 0_).
- **mount**: _function_ that:
  - increases the number of passengers in the car by one.
  - returns "no more space" if you try to mount an extra passenger.
- **dismount**: _function_ that:
  - decrement the number of passengers by one.
  - returns "no one left" if you try to dismount with no passengers.
- **run**: _function_ that:
  - accepts how many miles to go as a parameter.
  - increases the miles property to how many miles traveled.
  - decreases the amount of fuel needed to travel (1 gallon = 1 mile).
  - returns "not enough fuel" if the fuel is not enough for the inputted distance.
  - returns "no driver" if the number of passengers is 0.

### Available Resources for this Prompt

- MDN
