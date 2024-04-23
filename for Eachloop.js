let resumeData = {
    Name: "saravanapriya",
    DateofBirth:"03-04-1999",
    Gender:"Female",
    Nationality:"Indian",
    Languagesknown:["Tamil","english"],
    Email: "vijayasekar@gmail.com",
    
    Address: ["4/862" ,"kilpalur","Tiruvannamalai","Tamilnadu-606908"],
    Education: [
        {
            Degree: "Bachelor of Science in Computer Science",
            University: "Tiruvalluvar University",
            Year: "2015-2018",
            School: "government high school",
            Year: "2012-2015",
        }
    
    ],

}



// Using forEach loop (for arrays)
console.log("\nUsing forEach loop:");
Object.entries(resumeData).forEach(([key, value]) => {
    console.log(key + ": " + value);
});