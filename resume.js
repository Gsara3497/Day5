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
        },
        {
    
            School: "government high school",
            Year: "2012-2015",
        }
    ]

    
};

console.log(JSON.stringify(resumeData, null, 2)); // Print the JSON data with indentation for better readability
