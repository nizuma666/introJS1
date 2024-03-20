const biodata = {
  name: "syaifulloh ismail",
  age: 23,
  hobbies: ["sleep", "play game", "read comic"],
  IsMarried: false,
  schoolList: [
    {
      nameSchool: "SDN Pinang 4",
      yearIn: 2006,
      yearOut: 2013,
      major: "",
    },
    {
      nameSchool: "SMP Muhammadiyah 2",
      yearIn: 2013,
      yearOut: 2016,
      major: "",
    },
    {
      nameSchool: "SMK Negeri 5",
      yearIn: 2016,
      yearOut: 2019,
      major: "",
    },
  ],
  skills: [
    {
      skillName: "gaming",
      level: "advanced",
    },
    {
      skillName: "ngoding",
      level: "beginner",
    },
  ],
  interestInCoding: true,
};
console.log(biodata.skills);
console.log(typeof biodata.IsMarried);
