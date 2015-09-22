// Data
  var data = [
     { name:"Ireland",  income:53000, life: 78, pop:6378, color: "green"},
     { name:"Norway",   income:73000, life: 87, pop:5084, color: "blue" },
     { name:"Tanzania", income:27000, life: 50, pop:3407, color: "grey" }
  ];
  
  var rooms = [
  [],
  [
    {
      "x": 25,
      "y": 39,
      "num": "F400-MAIN-1",
      "info": "The science hallway",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 33,
      "y": 26,
      "num": "F400-MAIN-2",
      "info": "The science hallway",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 34,
      "y": 65,
      "num": "F600-MAIN",
      "info": "The social studies and world languages hallway",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 43,
      "y": 90,
      "num": "F800-MAIN",
      "info": "The English hallway",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 56,
      "y": 87,
      "num": "F900",
      "info": "The Bricks and gyms. Access to 700 hallway",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 64,
      "y": 27,
      "num": "F500-MAIN-1",
      "info": "The band/theatre hallway",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 74,
      "y": 40,
      "num": "F500-MAIN-2",
      "info": "The band/theatre hallway",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 38,
      "y": 2,
      "num": "F200-MAIN",
      "info": "The math hallway",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 53,
      "y": 4,
      "num": "F300-MAIN",
      "info": "The electives hallway",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 47,
      "y": 2,
      "num": "F100-MAIN",
      "info": "The cafeteria",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 50,
      "y": 91,
      "num": "EXIT-FRONT",
      "info": "Front entrance/exit",
      "floor": 1,
      "type": "other",
      "color": "#02B2B2"
    },
    {
      "x": 52,
      "y": 1,
      "num": "EXIT-BACK",
      "info": "Back entrance/exit (LOCKED AFTER 9:00)",
      "floor": 1,
      "type": "other",
      "color": "#02B2B2"
    },
    {
      "x": 48,
      "y": 66,
      "num": "COUNSELING",
      "info": "Counseling offices",
      "floor": 1,
      "type": "other",
      "color": "#02B202"
    }
  ],
  [
    {
      "x": 61,
      "y": 79,
      "num": "201",
      "info": "Math classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 58,
      "y": 79,
      "num": "203",
      "info": "Office",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 53,
      "y": 59,
      "num": "213",
      "info": "Math classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 53,
      "y": 68,
      "num": "214",
      "info": "Math classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 56,
      "y": 68,
      "num": "212",
      "info": "Math classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 46,
      "y": 80,
      "num": "204",
      "info": "Office",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 42,
      "y": 80,
      "num": "205",
      "info": "Classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 30,
      "y": 79,
      "num": "206",
      "info": "Office",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 16,
      "y": 79,
      "num": "208",
      "info": "Locked, old bathroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 9,
      "y": 79,
      "num": "211",
      "info": "Locked, old bathroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 23,
      "y": 64,
      "num": "216",
      "info": "Boys's bathroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 22,
      "y": 61,
      "num": "217",
      "info": "Girl's bathroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 18,
      "y": 54,
      "num": "218",
      "info": "Office",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 18,
      "y": 48,
      "num": "224",
      "info": "Office",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 19,
      "y": 44,
      "num": "225",
      "info": "The 200 computer lab",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 25,
      "y": 25,
      "num": "227",
      "info": "Office",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 26,
      "y": 22,
      "num": "228",
      "info": "Classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 31,
      "y": 7,
      "num": "231",
      "info": "Office",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 32,
      "y": 15,
      "num": "230",
      "info": "Office",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 45,
      "y": 11,
      "num": "233",
      "info": "Classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 49,
      "y": 10,
      "num": "235",
      "info": "Storage",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 45,
      "y": 19,
      "num": "232",
      "info": "Classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 39,
      "y": 26,
      "num": "222",
      "info": "Classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 32,
      "y": 27,
      "num": "219-2",
      "info": "Office",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 24,
      "y": 45,
      "num": "220",
      "info": "Classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 23,
      "y": 51,
      "num": "219",
      "info": "Classroom",
      "floor": 2,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 21,
      "y": 89,
      "num": "F400-2",
      "info": "The main staircase to the 400 floor",
      "floor": 2,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 79,
      "y": 81,
      "num": "MAIN-200",
      "info": "Access to the main level",
      "floor": 2,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 88,
      "y": 80,
      "num": "F300-1",
      "info": "Tiny corridor to the 300 floor",
      "floor": 2,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 84,
      "y": 66,
      "num": "F100",
      "info": "Access to the 100 floor (cafeteria)",
      "floor": 2,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 52,
      "y": 13,
      "num": "EXIT-200-1",
      "info": "Exit (LOCKED)",
      "floor": 2,
      "type": "other",
      "color": "#02B2B2"
    },
    {
      "x": 6,
      "y": 68,
      "num": "EXIT-200-2",
      "info": "Exit (LOCKED)",
      "floor": 2,
      "type": "other",
      "color": "#02B2B2"
    },
    {
      "x": 71,
      "y": 53,
      "num": "EXIT-BACK-1",
      "info": "Back entrance/exit (LOCKED AFTER 9:00)",
      "floor": 2,
      "type": "other",
      "color": "#02B2B2"
    }
  ],
  [
    {
      "x": 22,
      "y": 14,
      "num": "302",
      "info": "Break room",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 31,
      "y": 31,
      "num": "308",
      "info": "Teacher office",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 35,
      "y": 29,
      "num": "309-1",
      "info": "Tech/Drafting Lab",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 36,
      "y": 46,
      "num": "310",
      "info": "Video editing",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 37,
      "y": 49,
      "num": "312-1",
      "info": "Electrical",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 44,
      "y": 46,
      "num": "311-1",
      "info": "Storage/Lost and Found",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 47,
      "y": 39,
      "num": "312-2",
      "info": "Storage",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 49,
      "y": 34,
      "num": "312-3",
      "info": "Storage",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 42,
      "y": 24,
      "num": "309-2",
      "info": "Tech/Drafting Lab",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 53,
      "y": 26,
      "num": "309-3",
      "info": "Tech/Drafting Lab",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 69,
      "y": 38,
      "num": "339-1",
      "info": "Film/Photography room and JLab",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 75,
      "y": 58,
      "num": "339-2",
      "info": "Film/Photography room and JLab",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 75,
      "y": 62,
      "num": "333",
      "info": "Computer lab",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 69,
      "y": 73,
      "num": "330",
      "info": "Custodian room",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 70,
      "y": 82,
      "num": "329",
      "info": "Storage room",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 59,
      "y": 83,
      "num": "325",
      "info": "Boy's bathroom",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 55,
      "y": 83,
      "num": "324",
      "info": "Girl's bathroom",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 55,
      "y": 88,
      "num": "326",
      "info": "Dressing room",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 59,
      "y": 90,
      "num": "327",
      "info": "Dressing room",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 59,
      "y": 94,
      "num": "328",
      "info": "Dressing room",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 59,
      "y": 29,
      "num": "318",
      "info": "Pantry",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 63,
      "y": 39,
      "num": "317-1",
      "info": "Food lab",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 51,
      "y": 41,
      "num": "316",
      "info": "Work room",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 69,
      "y": 62,
      "num": "317-2",
      "info": "Food lab",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 68,
      "y": 68,
      "num": "334",
      "info": "Storage",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 65,
      "y": 71,
      "num": "323",
      "info": "Workroom",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 57,
      "y": 74,
      "num": "315-1",
      "info": "Multi-use classroom",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 46,
      "y": 52,
      "num": "315-2",
      "info": "Multi-use classroom",
      "floor": 3,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 11,
      "y": 1,
      "num": "MAIN-300",
      "info": "Back to the main hallway",
      "floor": 3,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 42,
      "y": 32,
      "num": "F500-1",
      "info": "Staircase to the 500 hallway",
      "floor": 3,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 72,
      "y": 79,
      "num": "F500-2",
      "info": "Another staircase to the 500 hallway",
      "floor": 3,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 63,
      "y": 26,
      "num": "EXIT-300",
      "info": "Exit to the back parking lot (LOCKED)",
      "floor": 3,
      "type": "other",
      "color": "#02B2B2"
    }
  ],
  [
    {
      "x": 77,
      "y": 49,
      "num": "402-1",
      "info": "Science",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 71,
      "y": 72,
      "num": "402-2",
      "info": "Science",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 81,
      "y": 83,
      "num": "405-1",
      "info": "Science",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 89,
      "y": 43,
      "num": "432-1",
      "info": "Physics",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 81,
      "y": 42,
      "num": "432-2",
      "info": "Physics",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 86,
      "y": 50,
      "num": "401",
      "info": "Office",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 77,
      "y": 42,
      "num": "430-1",
      "info": "Physics",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 70,
      "y": 38,
      "num": "430-2",
      "info": "Physics",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 67,
      "y": 37,
      "num": "424-2",
      "info": "Science Computer Lab",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 64,
      "y": 64,
      "num": "425-1",
      "info": "Upper Lecture Hall",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 53,
      "y": 30,
      "num": "424-1",
      "info": "Science Computer Lab",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 52,
      "y": 34,
      "num": "425-2",
      "info": "Upper Lecture Hall",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 49,
      "y": 37,
      "num": "426-2",
      "info": "Lower Lecture Hall",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 61,
      "y": 67,
      "num": "426-1",
      "info": "Lower Lecture Hall",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 62,
      "y": 72,
      "num": "427",
      "info": "Office",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 66,
      "y": 86,
      "num": "405-2",
      "info": "Science",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 64,
      "y": 90,
      "num": "407",
      "info": "Office",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 62,
      "y": 86,
      "num": "408-1",
      "info": "Science",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 48,
      "y": 87,
      "num": "408-2",
      "info": "Science",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 37,
      "y": 83,
      "num": "410",
      "info": "Electrical",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 31,
      "y": 84,
      "num": "411-1",
      "info": "Biology",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 22,
      "y": 84,
      "num": "411-2",
      "info": "Biology",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 21,
      "y": 74,
      "num": "413",
      "info": "Greenhouse",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 25,
      "y": 73,
      "num": "414-1",
      "info": "Biology",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 28,
      "y": 73,
      "num": "415-1",
      "info": "Science Storage/Kitchen",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 45,
      "y": 70,
      "num": "415-2",
      "info": "Science Storage/Kitchen",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 42,
      "y": 35,
      "num": "422-1",
      "info": "Chemistry Lab",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 32,
      "y": 46,
      "num": "415-3",
      "info": "Science Storage/Kitchen",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 27,
      "y": 44,
      "num": "414-2",
      "info": "Biology",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 33,
      "y": 29,
      "num": "422-2",
      "info": "Chemistry Lab",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 29,
      "y": 26,
      "num": "421-1",
      "info": "Chemistry Lab",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 19,
      "y": 17,
      "num": "421-2",
      "info": "Chemistry Lab",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 16,
      "y": 23,
      "num": "420-2",
      "info": "Biology",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 41,
      "y": 90,
      "num": "F600-1",
      "info": "Staircase to floor 600",
      "floor": 4,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 69,
      "y": 79,
      "num": "F600-2",
      "info": "Staircase to floor 600",
      "floor": 4,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 10,
      "y": 73,
      "num": "LIBRARY",
      "info": "The school library",
      "floor": 4,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 80,
      "y": 75,
      "num": "MAIN-400-1",
      "info": "Back to the main hallway",
      "floor": 4,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 57,
      "y": 5,
      "num": "F200-1",
      "info": "Staircase to floor 200",
      "floor": 4,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 91,
      "y": 45,
      "num": "MAIN-400-2",
      "info": "Back to the main hallway",
      "floor": 4,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 29,
      "y": 32,
      "num": "420-1",
      "info": "Biology",
      "floor": 4,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 15,
      "y": 17,
      "num": "EXIT-400",
      "info": "Exit to the lake (LOCKED)",
      "floor": 4,
      "type": "other",
      "color": "#02B2B2"
    }
  ],
  [
    {
      "x": 38,
      "y": 83,
      "num": "541",
      "info": "Office",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 40,
      "y": 89,
      "num": "542",
      "info": "Office",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 34,
      "y": 94,
      "num": "545",
      "info": "Platform",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 38,
      "y": 94,
      "num": "544",
      "info": "Office",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 38,
      "y": 62,
      "num": "501",
      "info": "Special Education",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 34,
      "y": 44,
      "num": "501-2",
      "info": "Special Education",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 29,
      "y": 38,
      "num": "510",
      "info": "Custodian Room",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 26,
      "y": 33,
      "num": "514-ACCESS-1",
      "info": "Provides access to the 514 art room",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 21,
      "y": 20,
      "num": "507",
      "info": "",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 21,
      "y": 7,
      "num": "512",
      "info": "Fine arts room",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 46,
      "y": 15,
      "num": "513",
      "info": "Fine arts room",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 44,
      "y": 18,
      "num": "514-ACCESS-2",
      "info": "Provides access to the 514 art room",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 38,
      "y": 41,
      "num": "502",
      "info": "Special Education",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 44,
      "y": 59,
      "num": "521",
      "info": "Music Library",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 49,
      "y": 55,
      "num": "522",
      "info": "Music Library",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 53,
      "y": 52,
      "num": "524",
      "info": "Choir Room",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 54,
      "y": 57,
      "num": "523",
      "info": "Office",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 56,
      "y": 67,
      "num": "531",
      "info": "Fine Arts Studio",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 66,
      "y": 69,
      "num": "555",
      "info": "Office",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 77,
      "y": 71,
      "num": "EXIT-500",
      "info": "Exit and band rooms",
      "floor": 5,
      "type": "other",
      "color": "#02B2B2"
    },
    {
      "x": 58,
      "y": 79,
      "num": "F300-3",
      "info": "Access to the 300 floor",
      "floor": 5,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 30.5,
      "y": 21,
      "num": "F300-2",
      "info": "Access to the 300 floor",
      "floor": 5,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 25,
      "y": 71,
      "num": "MAIN-600-1",
      "info": "Access to the main level",
      "floor": 5,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 73,
      "y": 81,
      "num": "F700-1",
      "info": "Access to the 700 floor",
      "floor": 5,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 42,
      "y": 22,
      "num": "518",
      "info": "Storage",
      "floor": 5,
      "type": "room",
      "color": "#B20202"
    }
  ],
  [
    {
      "x": 44,
      "y": 15,
      "num": "F400-1",
      "info": "Main staircase to floor 400",
      "floor": 6,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 34.5,
      "y": 2,
      "num": "631",
      "info": "Spanish and French classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 36,
      "y": 4,
      "num": "632",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 32,
      "y": 5,
      "num": "630",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 39,
      "y": 12,
      "num": "633",
      "info": "Classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 37,
      "y": 18,
      "num": "629",
      "info": "French and Spanish classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 41,
      "y": 16,
      "num": "636",
      "info": "Storage",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 38,
      "y": 22,
      "num": "628",
      "info": "Languages classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 37,
      "y": 36,
      "num": "627",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 35,
      "y": 37,
      "num": "626",
      "info": "Classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 34,
      "y": 42,
      "num": "625",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 21,
      "y": 74.5,
      "num": "659",
      "info": "World languages classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 20,
      "y": 78,
      "num": "660",
      "info": "Classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 15,
      "y": 89,
      "num": "661",
      "info": "Languages classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 27,
      "y": 76,
      "num": "658",
      "info": "Languages classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 28,
      "y": 72,
      "num": "657",
      "info": "Computer lab",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 35,
      "y": 60,
      "num": "654",
      "info": "Storage",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 38,
      "y": 60,
      "num": "655",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 47,
      "y": 62,
      "num": "656",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 52,
      "y": 61,
      "num": "616",
      "info": "Boy's bathroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 56,
      "y": 54,
      "num": "615",
      "info": "Social studies classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 52,
      "y": 47,
      "num": "614",
      "info": "Closet",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 41,
      "y": 56,
      "num": "619",
      "info": "Staff bathroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 50,
      "y": 57,
      "num": "620",
      "info": "Staff bathroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 49,
      "y": 50,
      "num": "621",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 46,
      "y": 41,
      "num": "622",
      "info": "Girl's bathroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 43,
      "y": 36,
      "num": "612",
      "info": "Kitchen",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 50,
      "y": 25,
      "num": "637",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 55,
      "y": 23,
      "num": "638",
      "info": "Social studies classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 59,
      "y": 23,
      "num": "639-1",
      "info": "Social studies classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 63,
      "y": 12,
      "num": "639-2",
      "info": "Social studies classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 62,
      "y": 7,
      "num": "641",
      "info": "Social studies classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 67,
      "y": 11,
      "num": "642",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 69,
      "y": 18,
      "num": "645",
      "info": "Storage",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 69,
      "y": 15,
      "num": "644",
      "info": "Closet",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 73,
      "y": 32,
      "num": "646",
      "info": "Classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 80,
      "y": 31,
      "num": "647",
      "info": "Bathroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 82,
      "y": 29,
      "num": "648",
      "info": "Bathroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 41,
      "y": 40,
      "num": "624",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 59,
      "y": 35,
      "num": "611",
      "info": "Social studies classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 61,
      "y": 38,
      "num": "609",
      "info": "Social studies classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 72,
      "y": 46,
      "num": "608",
      "info": "Social studies classroom",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 74,
      "y": 37,
      "num": "604",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 83,
      "y": 35,
      "num": "602",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 86,
      "y": 32,
      "num": "601",
      "info": "Office",
      "floor": 6,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 61,
      "y": 0,
      "num": "F400-HIDDEN",
      "info": "A hidden staircase to the 400 level",
      "floor": 6,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 88,
      "y": 25,
      "num": "MAIN-600",
      "info": "Back to the main level",
      "floor": 6,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 57,
      "y": 62,
      "num": "F800",
      "info": "Main staircase to the 800 floor",
      "floor": 6,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 84,
      "y": 43,
      "num": "F800-HIDDEN",
      "info": "Hidden staircase to the 800 floor",
      "floor": 6,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 17,
      "y": 92,
      "num": "EXIT-600",
      "info": "Exit to the parking lot (LOCKED)",
      "floor": 6,
      "type": "other",
      "color": "#02B2B2"
    }
  ],
  [
    {
      "x": 31,
      "y": 27,
      "num": "703",
      "info": "Health Room",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 33,
      "y": 32,
      "num": "704",
      "info": "Men's Locker Room",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 35,
      "y": 53,
      "num": "722",
      "info": "Office",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 31,
      "y": 57,
      "num": "726-1",
      "info": "Varsity Locker Room",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 27,
      "y": 61,
      "num": "729",
      "info": "Office",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 33,
      "y": 79,
      "num": "731",
      "info": "Health Room",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 35,
      "y": 84,
      "num": "732-ACCESS",
      "info": "Hallway to Women's Locker Room",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 53,
      "y": 86,
      "num": "738",
      "info": "Women's Locker Room",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 62,
      "y": 68,
      "num": "744",
      "info": "Access to Women's Locker Room",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 64,
      "y": 61,
      "num": "726-2",
      "info": "Varsity Locker Room",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 38,
      "y": 76,
      "num": "735",
      "info": "Trainer",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 75,
      "y": 58,
      "num": "760",
      "info": "Weight Room",
      "floor": 7,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 66,
      "y": 66,
      "num": "F900-2",
      "info": "Access to the mat room and main gym",
      "floor": 7,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 82,
      "y": 71,
      "num": "F900-3",
      "info": "Access to the main gym and south gym",
      "floor": 7,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 19,
      "y": 57,
      "num": "F900-4",
      "info": "Access to The Bricks and main level",
      "floor": 7,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 17,
      "y": 7,
      "num": "F500-3",
      "info": "Access to 500 level",
      "floor": 7,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 86,
      "y": 67,
      "num": "EXIT-700",
      "info": "Exit to the side of the school",
      "floor": 7,
      "type": "other",
      "color": "#02B2B2"
    }
  ],
  [
    {
      "x": 96,
      "y": 26,
      "num": "801",
      "info": "Main office (from outside this hallway)",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 81,
      "y": 45,
      "num": "802",
      "info": "Main office",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 71,
      "y": 50,
      "num": "809",
      "info": "Attendance office",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 63,
      "y": 48,
      "num": "821",
      "info": "Storage",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 82,
      "y": 24,
      "num": "811",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 78,
      "y": 33,
      "num": "812-1",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 61,
      "y": 33,
      "num": "812-2",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 57,
      "y": 25,
      "num": "813",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 49,
      "y": 14,
      "num": "814",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 31,
      "y": 39,
      "num": "859-1",
      "info": "Teacher office",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 20,
      "y": 39,
      "num": "859-2",
      "info": "Teacher office",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 13,
      "y": 60,
      "num": "854",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 13,
      "y": 68,
      "num": "853",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 14,
      "y": 75,
      "num": "848",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 19,
      "y": 62,
      "num": "844-1",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 36.5,
      "y": 63,
      "num": "844-2",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 18,
      "y": 71,
      "num": "843",
      "info": "Teacher office",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 23.5,
      "y": 79,
      "num": "842-1",
      "info": "Teacher office",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 32,
      "y": 79,
      "num": "842-2",
      "info": "Teacher office",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 24,
      "y": 92,
      "num": "847",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 31,
      "y": 92,
      "num": "846",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 37,
      "y": 71,
      "num": "841",
      "info": "Teacher office",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 39,
      "y": 52,
      "num": "831",
      "info": "Teacher office",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 42,
      "y": 61,
      "num": "822",
      "info": "Languages arts computer lab",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 42,
      "y": 68,
      "num": "823",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 42,
      "y": 74,
      "num": "845",
      "info": "Language arts classroom",
      "floor": 8,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 10.5,
      "y": 33,
      "num": "F600-MAIN-1",
      "info": "Main staircase to the 600 floor",
      "floor": 8,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 56,
      "y": 2,
      "num": "F600-HIDDEN-1",
      "info": "A hidden staircase to the 600 floor",
      "floor": 8,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 87,
      "y": 19,
      "num": "MAIN-800",
      "info": "Back to the main level",
      "floor": 8,
      "type": "other",
      "color": "#02B202"
    }
  ],
  [
    {
      "x": 6,
      "y": 36,
      "num": "918",
      "info": "",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 12,
      "y": 36,
      "num": "917",
      "info": "",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 33,
      "y": 35,
      "num": "915",
      "info": "",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 42,
      "y": 35,
      "num": "914",
      "info": "IB Store",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 50,
      "y": 24,
      "num": "913",
      "info": "Football Storage",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 56,
      "y": 29,
      "num": "901-1",
      "info": "Mat Room/Aerobics",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 52,
      "y": 37,
      "num": "900-1",
      "info": "Main Gym",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 83,
      "y": 68,
      "num": "900-2",
      "info": "Main Gym",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 81,
      "y": 73,
      "num": "900-3",
      "info": "Main Gym",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 84,
      "y": 80,
      "num": "902-1",
      "info": "South Gym",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 85,
      "y": 76,
      "num": "906",
      "info": "Bathroom",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 90,
      "y": 62,
      "num": "905",
      "info": "Bathroom",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 91,
      "y": 58,
      "num": "902-2",
      "info": "South Gym",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 73,
      "y": 25,
      "num": "901-2",
      "info": "Mat Room/Aerobics",
      "floor": 9,
      "type": "room",
      "color": "#B20202"
    },
    {
      "x": 69,
      "y": 27,
      "num": "F700-2",
      "info": "Access to the 700 floor's other corridors (plus the other gyms)",
      "floor": 9,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 44,
      "y": 25,
      "num": "F700-3",
      "info": "Access to the 700 floor main corridor",
      "floor": 9,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 3,
      "y": 39,
      "num": "MAIN-900",
      "info": "Access to the main hall",
      "floor": 9,
      "type": "other",
      "color": "#02B202"
    },
    {
      "x": 8,
      "y": 44,
      "num": "EXIT-900-1",
      "info": "Exit to front parking lot",
      "floor": 9,
      "type": "other",
      "color": "#02B2B2"
    },
    {
      "x": 44,
      "y": 44,
      "num": "EXIT-900-2",
      "info": "Exit to front parking lot",
      "floor": 9,
      "type": "other",
      "color": "#02B2B2"
    },
    {
      "x": 91,
      "y": 50,
      "num": "EXIT-900-3",
      "info": "Exit to the back parking lot",
      "floor": 9,
      "type": "other",
      "color": "#02B2B2"
    },
    {
      "x": 81,
      "y": 81,
      "num": "EXIT-900-4",
      "info": "Exit to the front parking lot",
      "floor": 9,
      "type": "other",
      "color": "#02B2B2"
    }
  ],
  [],
  [],
  []
]

tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d.info; });

  var svg = d3.select("#hook").append("svg")
        .attr("width", 1280)
        .attr("height", 900)
        .style("fill", "#D0D0D0").append("g");
	svg.call(tip)
    var nodes = svg.selectAll("circle").data(rooms[2]).enter();
	nodes.append("svg:image")
		.attr('x',0)
		.attr('y',0)
		.attr('width', 1280)
		.attr('height', 900)
		.attr("xlink:href","200.png")
    nodes.append("circle")
        .attr("id", function(d) { return d.num })
        .attr("cx", function(d) { return 1280*d.x/100  })
        .attr("cy", function(d) { return 900*d.y/100 })
        .attr("r",  function(d) { return 20 })
        .attr("fill",function(d){ return d.color })
		.on('mouseover', tip.show)
		.on('mouseout', tip.hide);
	nodes.append("text").style("fill","black")
        .attr("dx", function(d) { return 1280*d.x/100  })
        .attr("dy", function(d) { return 900*d.y/100 })
		.text(function(d) { return d.num });

		
		
	  
	  
		