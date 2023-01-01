let arr=[
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",

    "The way to get started is to quit talking and begin doing. ",

    "If life were predictable it would cease to be life, and be without flavor. ",

    "If you look at what you have in life, you'll always have more.",

    "Life is what happens when you're busy making other plans.",

    "Spread love everywhere you go. Let no one ever come to you without leaving happier. ",

    "When you reach the end of your rope, tie a knot in it and hang on.",

    "Always remember that you are absolutely unique. Just like everyone else. ",

    "Don't judge each day by the harvest you reap but by the seeds that you plant. ",

    "The future belongs to those who believe in the beauty of their dreams.",

    "Tell me and I forget. Teach me and I remember. Involve me and I learn."
];

let arr2=[
    "-Nelson Mandela",
    "-Walt Disney",
    "-Eleanor Roosevelt",
    "-Oprah Winfrey",
    "-John Lennon",
    "-Mother Teresa",
    "-Franklin D. Roosevelt",
    "-Margaret Mead",
    "-Robert Louis Stevenson",
    "-Eleanor Roosevelt",
    "-Benjamin Franklin"
]

let arr3=[
    "#1e293b",
    '#f87171',
    '#44403c',
    '#f97316',
    '#fde68a',
    '#ca8a04',
    '#14b8a6',
    '#0284c7',
    '#92400e'
]
i=0;
j=3;
function change(){
    document.getElementById("text").innerHTML=arr[i]
    document.getElementById("author").innerHTML=arr2[i]
    color=arr3[j]
    i=Math.random() * arr.length | 0;
    j=Math.random() * arr.length | 0;
    document.body.style.backgroundColor=color;
}