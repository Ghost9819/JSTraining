<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p id="demo"></p>

<script>
const UnitList = [{make: "Harley Davidson", type: "motorcyle", year: "2019"},
  {make: "Jayco", type: "Motorhome", year: "2018"},
  {make: "John Deere", type: "Tractor", year: "2039"},
  {make: "John Deere", type: "Combine", year: "2017"},
  {make: "Vanderhall", type: "Trike", year: "2018"},
  {make: "Coachmen", type: "Motorhome", year: "2050"},
  {make: "Brent", type: "Combine", year: "2017"},
]

//document.getElementById("demo").innerHTML = "Car owner is " + UnitList.make +" "+ //UnitList.type +" "+ UnitList.year; 


for(var i = 0; i < UnitList.length; i++) {
   document.getElementById("demo").innerHTML = "Car owner is " + UnitList.make +" "+ UnitList.type +" "+ UnitList.year;
}
</script>

</body>
</html>

