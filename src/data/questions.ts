import { Question } from '../types';

export const bibleQuestions: Question[] = [
  // Old Testament - Easy
  {
    id: 1,
    question: "Who was the first man created by God?",
    options: ["Abel", "Adam", "Noah", "Abraham"],
    correctAnswer: 1,
    explanation: "Adam was the first man created by God from the dust of the earth.",
    bibleReference: "Genesis 2:7",
    category: "ot",
    difficulty: "easy",
    topic: "Creation"
  },
  {
    id: 2,
    question: "How many days did it take God to create the world?",
    options: ["5 days", "6 days", "7 days", "8 days"],
    correctAnswer: 1,
    explanation: "God created the world in six days and rested on the seventh day.",
    bibleReference: "Genesis 1:31, 2:2",
    category: "ot",
    difficulty: "easy",
    topic: "Creation"
  },
  {
    id: 3,
    question: "Who built the ark to survive the great flood?",
    options: ["Moses", "Abraham", "Noah", "David"],
    correctAnswer: 2,
    explanation: "Noah built the ark according to God's instructions to save his family and the animals.",
    bibleReference: "Genesis 6:19",
    category: "ot",
    difficulty: "easy",
    topic: "Noah"
  },
  {
    id: 4,
    question: "What did God promise Abraham regarding his descendants?",
    options: ["They would be wise", "They would be numerous as stars", "They would be wealthy", "They would be kings"],
    correctAnswer: 1,
    explanation: "God promised Abraham that his descendants would be as numerous as the stars in the sky.",
    bibleReference: "Genesis 15:5",
    category: "ot",
    difficulty: "easy",
    topic: "Abraham"
  },
  {
    id: 5,
    question: "Who was sold into slavery by his brothers?",
    options: ["Benjamin", "Joseph", "Judah", "Reuben"],
    correctAnswer: 1,
    explanation: "Joseph was sold into slavery by his jealous brothers but later became a ruler in Egypt.",
    bibleReference: "Genesis 37:28",
    category: "ot",
    difficulty: "easy",
    topic: "Joseph"
  },

  // Old Testament - Medium
  {
    id: 6,
    question: "How many plagues did God send upon Egypt?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 3,
    explanation: "God sent ten plagues upon Egypt to convince Pharaoh to let the Israelites go.",
    bibleReference: "Exodus 7-12",
    category: "ot",
    difficulty: "medium",
    topic: "Moses"
  },
  {
    id: 7,
    question: "On which mountain did Moses receive the Ten Commandments?",
    options: ["Mount Ararat", "Mount Sinai", "Mount Nebo", "Mount Carmel"],
    correctAnswer: 1,
    explanation: "Moses received the Ten Commandments on Mount Sinai.",
    bibleReference: "Exodus 19:20",
    category: "ot",
    difficulty: "medium",
    topic: "Moses"
  },
  {
    id: 8,
    question: "Who was the first king of Israel?",
    options: ["David", "Solomon", "Saul", "Samuel"],
    correctAnswer: 2,
    explanation: "Saul was anointed as the first king of Israel by the prophet Samuel.",
    bibleReference: "1 Samuel 10:1",
    category: "ot",
    difficulty: "medium",
    topic: "Kings"
  },
  {
    id: 9,
    question: "With what weapon did David kill Goliath?",
    options: ["Sword", "Spear", "Sling and stone", "Bow and arrow"],
    correctAnswer: 2,
    explanation: "David killed the giant Goliath with a sling and a stone, trusting in God's power.",
    bibleReference: "1 Samuel 17:49",
    category: "ot",
    difficulty: "medium",
    topic: "David"
  },
  {
    id: 10,
    question: "Who was known as the wisest king of Israel?",
    options: ["David", "Solomon", "Saul", "Hezekiah"],
    correctAnswer: 1,
    explanation: "Solomon was known for his great wisdom, which was a gift from God.",
    bibleReference: "1 Kings 3:12",
    category: "ot",
    difficulty: "medium",
    topic: "Solomon"
  },

  // Old Testament - Hard
  {
    id: 11,
    question: "How many years did the Israelites wander in the wilderness?",
    options: ["30 years", "35 years", "40 years", "45 years"],
    correctAnswer: 2,
    explanation: "The Israelites wandered in the wilderness for 40 years due to their disobedience.",
    bibleReference: "Numbers 14:33",
    category: "ot",
    difficulty: "hard",
    topic: "Moses"
  },
  {
    id: 12,
    question: "Who was the prophet that was taken up to heaven in a whirlwind?",
    options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    correctAnswer: 0,
    explanation: "Elijah was taken up to heaven in a whirlwind without experiencing death.",
    bibleReference: "2 Kings 2:11",
    category: "ot",
    difficulty: "hard",
    topic: "Prophets"
  },
  {
    id: 13,
    question: "How long was Daniel in the lion's den?",
    options: ["One day", "One night", "Three days", "One week"],
    correctAnswer: 1,
    explanation: "Daniel spent one night in the lion's den, and God protected him from harm.",
    bibleReference: "Daniel 6:16-23",
    category: "ot",
    difficulty: "hard",
    topic: "Daniel"
  },
  {
    id: 14,
    question: "What was the name of the garden where Adam and Eve lived?",
    options: ["Garden of Paradise", "Garden of Eden", "Garden of Life", "Garden of Heaven"],
    correctAnswer: 1,
    explanation: "Adam and Eve lived in the Garden of Eden before they disobeyed God.",
    bibleReference: "Genesis 2:8",
    category: "ot",
    difficulty: "easy",
    topic: "Creation"
  },
  {
    id: 15,
    question: "Who was swallowed by a great fish?",
    options: ["Jonah", "Job", "Joshua", "Jeremiah"],
    correctAnswer: 0,
    explanation: "Jonah was swallowed by a great fish when he tried to flee from God's command.",
    bibleReference: "Jonah 1:17",
    category: "ot",
    difficulty: "medium",
    topic: "Prophets"
  },

  // New Testament - Easy
  {
    id: 16,
    question: "In which city was Jesus born?",
    options: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
    correctAnswer: 2,
    explanation: "Jesus was born in Bethlehem, fulfilling the Old Testament prophecy.",
    bibleReference: "Matthew 2:1",
    category: "nt",
    difficulty: "easy",
    topic: "Jesus"
  },
  {
    id: 17,
    question: "Who baptized Jesus?",
    options: ["Peter", "Andrew", "John the Baptist", "James"],
    correctAnswer: 2,
    explanation: "John the Baptist baptized Jesus in the Jordan River.",
    bibleReference: "Matthew 3:13",
    category: "nt",
    difficulty: "easy",
    topic: "Jesus"
  },
  {
    id: 18,
    question: "How many disciples did Jesus choose?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    explanation: "Jesus chose twelve disciples to be his apostles and closest followers.",
    bibleReference: "Mark 3:14",
    category: "nt",
    difficulty: "easy",
    topic: "Jesus"
  },
  {
    id: 19,
    question: "What did Jesus do at the wedding in Cana?",
    options: ["Healed the sick", "Turned water into wine", "Fed the hungry", "Raised the dead"],
    correctAnswer: 1,
    explanation: "Jesus performed his first miracle by turning water into wine at the wedding in Cana.",
    bibleReference: "John 2:11",
    category: "nt",
    difficulty: "easy",
    topic: "Jesus"
  },
  {
    id: 20,
    question: "Who denied knowing Jesus three times?",
    options: ["Judas", "Peter", "Thomas", "John"],
    correctAnswer: 1,
    explanation: "Peter denied knowing Jesus three times before the rooster crowed, as Jesus had predicted.",
    bibleReference: "Matthew 26:75",
    category: "nt",
    difficulty: "easy",
    topic: "Jesus"
  },

  // New Testament - Medium
  {
    id: 21,
    question: "How many loaves and fishes did Jesus use to feed the 5000?",
    options: ["3 loaves, 2 fish", "5 loaves, 2 fish", "7 loaves, 3 fish", "2 loaves, 5 fish"],
    correctAnswer: 1,
    explanation: "Jesus used five loaves and two fish to miraculously feed over 5000 people.",
    bibleReference: "Matthew 14:17",
    category: "nt",
    difficulty: "medium",
    topic: "Jesus"
  },
  {
    id: 22,
    question: "On which day of the week did Jesus rise from the dead?",
    options: ["Friday", "Saturday", "Sunday", "Monday"],
    correctAnswer: 2,
    explanation: "Jesus rose from the dead on Sunday, the first day of the week.",
    bibleReference: "Mark 16:9",
    category: "nt",
    difficulty: "medium",
    topic: "Jesus"
  },
  {
    id: 23,
    question: "Who was the tax collector that Jesus called to follow him?",
    options: ["Matthew", "Mark", "Luke", "Zacchaeus"],
    correctAnswer: 0,
    explanation: "Matthew was a tax collector whom Jesus called to be one of his disciples.",
    bibleReference: "Matthew 9:9",
    category: "nt",
    difficulty: "medium",
    topic: "Jesus"
  },
  {
    id: 24,
    question: "What happened to Jesus 40 days after his resurrection?",
    options: ["He was transfigured", "He ascended to heaven", "He appeared to Paul", "He walked on water"],
    correctAnswer: 1,
    explanation: "Jesus ascended to heaven 40 days after his resurrection.",
    bibleReference: "Acts 1:9",
    category: "nt",
    difficulty: "medium",
    topic: "Jesus"
  },
  {
    id: 25,
    question: "Who was the first Christian martyr?",
    options: ["Paul", "Peter", "Stephen", "James"],
    correctAnswer: 2,
    explanation: "Stephen was the first Christian martyr, stoned to death for his faith.",
    bibleReference: "Acts 7:59",
    category: "nt",
    difficulty: "medium",
    topic: "Early Church"
  },

  // New Testament - Hard
  {
    id: 26,
    question: "How many times did Paul visit Jerusalem according to Acts?",
    options: ["2 times", "3 times", "4 times", "5 times"],
    correctAnswer: 1,
    explanation: "According to Acts, Paul visited Jerusalem three times after his conversion.",
    bibleReference: "Acts 9, 15, 21",
    category: "nt",
    difficulty: "hard",
    topic: "Paul"
  },
  {
    id: 27,
    question: "On which island was Paul shipwrecked?",
    options: ["Cyprus", "Crete", "Malta", "Rhodes"],
    correctAnswer: 2,
    explanation: "Paul was shipwrecked on the island of Malta during his journey to Rome.",
    bibleReference: "Acts 28:1",
    category: "nt",
    difficulty: "hard",
    topic: "Paul"
  },
  {
    id: 28,
    question: "What was Paul's name before his conversion?",
    options: ["Silas", "Saul", "Simon", "Samuel"],
    correctAnswer: 1,
    explanation: "Paul's original name was Saul before his dramatic conversion on the road to Damascus.",
    bibleReference: "Acts 9:4",
    category: "nt",
    difficulty: "medium",
    topic: "Paul"
  },
  {
    id: 29,
    question: "How many books did Paul write in the New Testament?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 2,
    explanation: "Paul wrote 13 letters that are included in the New Testament.",
    bibleReference: "Romans - Philemon",
    category: "nt",
    difficulty: "hard",
    topic: "Paul"
  },
  {
    id: 30,
    question: "Who wrote the Book of Revelation?",
    options: ["Paul", "Peter", "John", "James"],
    correctAnswer: 2,
    explanation: "The apostle John wrote the Book of Revelation while exiled on the island of Patmos.",
    bibleReference: "Revelation 1:1",
    category: "nt",
    difficulty: "medium",
    topic: "Books"
  },

  // Figures - Mixed Difficulty
  {
    id: 31,
    question: "Who was the oldest person mentioned in the Bible?",
    options: ["Adam", "Noah", "Methuselah", "Abraham"],
    correctAnswer: 2,
    explanation: "Methuselah lived 969 years, making him the oldest person mentioned in the Bible.",
    bibleReference: "Genesis 5:27",
    category: "figures",
    difficulty: "medium",
    topic: "Biblical Figures"
  },
  {
    id: 32,
    question: "Who was known as a man after God's own heart?",
    options: ["Solomon", "David", "Samuel", "Josiah"],
    correctAnswer: 1,
    explanation: "David was described as a man after God's own heart despite his failures.",
    bibleReference: "1 Samuel 13:14",
    category: "figures",
    difficulty: "medium",
    topic: "David"
  },
  {
    id: 33,
    question: "Who was the mother of Samuel?",
    options: ["Ruth", "Hannah", "Rachel", "Rebecca"],
    correctAnswer: 1,
    explanation: "Hannah was Samuel's mother who prayed earnestly for a child and dedicated him to God.",
    bibleReference: "1 Samuel 1:20",
    category: "figures",
    difficulty: "medium",
    topic: "Samuel"
  },
  {
    id: 34,
    question: "Who was the strongest man in the Bible?",
    options: ["Goliath", "David", "Samson", "Joshua"],
    correctAnswer: 2,
    explanation: "Samson was known for his supernatural strength, which came from his uncut hair.",
    bibleReference: "Judges 16:17",
    category: "figures",
    difficulty: "easy",
    topic: "Samson"
  },
  {
    id: 35,
    question: "Who was Moses' brother and spokesperson?",
    options: ["Joshua", "Caleb", "Aaron", "Miriam"],
    correctAnswer: 2,
    explanation: "Aaron was Moses' brother who served as his spokesperson and became the first high priest.",
    bibleReference: "Exodus 4:14",
    category: "figures",
    difficulty: "medium",
    topic: "Moses"
  },

  // Themes - Mixed
  {
    id: 36,
    question: "What is the first commandment?",
    options: ["Honor your parents", "Do not murder", "You shall have no other gods", "Do not steal"],
    correctAnswer: 2,
    explanation: "The first commandment is to have no other gods before the Lord.",
    bibleReference: "Exodus 20:3",
    category: "themes",
    difficulty: "easy",
    topic: "Ten Commandments"
  },
  {
    id: 37,
    question: "What does 'Immanuel' mean?",
    options: ["God with us", "Prince of Peace", "Mighty God", "Wonderful Counselor"],
    correctAnswer: 0,
    explanation: "Immanuel means 'God with us' and was a name prophesied for Jesus.",
    bibleReference: "Matthew 1:23",
    category: "themes",
    difficulty: "medium",
    topic: "Names of God"
  },
  {
    id: 38,
    question: "What are the fruits of the Spirit according to Galatians?",
    options: ["Faith, Hope, Love", "Love, Joy, Peace, etc.", "Wisdom, Knowledge, Understanding", "Power, Strength, Might"],
    correctAnswer: 1,
    explanation: "The fruits of the Spirit include love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.",
    bibleReference: "Galatians 5:22-23",
    category: "themes",
    difficulty: "medium",
    topic: "Holy Spirit"
  },
  {
    id: 39,
    question: "How many times should we forgive according to Jesus?",
    options: ["7 times", "70 times", "77 times", "70 times 7"],
    correctAnswer: 3,
    explanation: "Jesus said we should forgive not just seven times, but seventy times seven.",
    bibleReference: "Matthew 18:22",
    category: "themes",
    difficulty: "medium",
    topic: "Forgiveness"
  },
  {
    id: 40,
    question: "What is the greatest commandment according to Jesus?",
    options: ["Love your neighbor", "Love God with all your heart", "Do not murder", "Honor your parents"],
    correctAnswer: 1,
    explanation: "Jesus said the greatest commandment is to love God with all your heart, soul, and mind.",
    bibleReference: "Matthew 22:37",
    category: "themes",
    difficulty: "easy",
    topic: "Love"
  },

  // Books - Mixed
  {
    id: 41,
    question: "Which book comes after Psalms?",
    options: ["Ecclesiastes", "Proverbs", "Song of Songs", "Isaiah"],
    correctAnswer: 1,
    explanation: "Proverbs follows Psalms in the order of Old Testament books.",
    bibleReference: "Bible Order",
    category: "books",
    difficulty: "easy",
    topic: "Bible Books"
  },
  {
    id: 42,
    question: "How many chapters are in the book of Psalms?",
    options: ["120", "130", "140", "150"],
    correctAnswer: 3,
    explanation: "The book of Psalms contains 150 chapters (psalms).",
    bibleReference: "Psalm 150",
    category: "books",
    difficulty: "medium",
    topic: "Psalms"
  },
  {
    id: 43,
    question: "Which is the shortest book in the New Testament?",
    options: ["Philemon", "2 John", "3 John", "Jude"],
    correctAnswer: 2,
    explanation: "3 John is the shortest book in the New Testament with only 219 words in Greek.",
    bibleReference: "3 John",
    category: "books",
    difficulty: "hard",
    topic: "Bible Books"
  },
  {
    id: 44,
    question: "Who wrote the book of Hebrews?",
    options: ["Paul", "Peter", "John", "Unknown"],
    correctAnswer: 3,
    explanation: "The authorship of Hebrews is unknown, though many theories exist.",
    bibleReference: "Hebrews",
    category: "books",
    difficulty: "hard",
    topic: "Bible Books"
  },
  {
    id: 45,
    question: "Which Gospel was written first?",
    options: ["Matthew", "Mark", "Luke", "John"],
    correctAnswer: 1,
    explanation: "Most scholars believe Mark was the first Gospel written.",
    bibleReference: "Gospel of Mark",
    category: "books",
    difficulty: "medium",
    topic: "Gospels"
  },

  // Additional questions to reach 100+
  {
    id: 46,
    question: "What did God create on the third day?",
    options: ["Sun and moon", "Animals", "Land and plants", "Birds and fish"],
    correctAnswer: 2,
    explanation: "On the third day, God created dry land and plants.",
    bibleReference: "Genesis 1:11-13",
    category: "ot",
    difficulty: "easy",
    topic: "Creation"
  },
  {
    id: 47,
    question: "How many sons did Jacob have?",
    options: ["10", "12", "14", "16"],
    correctAnswer: 1,
    explanation: "Jacob had twelve sons who became the founders of the twelve tribes of Israel.",
    bibleReference: "Genesis 35:22",
    category: "ot",
    difficulty: "medium",
    topic: "Jacob"
  },
  {
    id: 48,
    question: "What was in the Ark of the Covenant?",
    options: ["Gold tablets", "Stone tablets, Aaron's rod, manna", "Scrolls", "Precious stones"],
    correctAnswer: 1,
    explanation: "The Ark contained the stone tablets of the law, Aaron's rod, and a pot of manna.",
    bibleReference: "Hebrews 9:4",
    category: "ot",
    difficulty: "hard",
    topic: "Tabernacle"
  },
  {
    id: 49,
    question: "Who was the judge who was left-handed?",
    options: ["Gideon", "Samson", "Ehud", "Deborah"],
    correctAnswer: 2,
    explanation: "Ehud was the left-handed judge who delivered Israel from the Moabites.",
    bibleReference: "Judges 3:15",
    category: "ot",
    difficulty: "hard",
    topic: "Judges"
  },
  {
    id: 50,
    question: "What was Jesus' first miracle?",
    options: ["Healing a leper", "Walking on water", "Turning water to wine", "Feeding 5000"],
    correctAnswer: 2,
    explanation: "Jesus' first miracle was turning water into wine at the wedding in Cana.",
    bibleReference: "John 2:11",
    category: "nt",
    difficulty: "easy",
    topic: "Jesus"
  },

  // Continue with more questions to reach 100+
  {
    id: 51,
    question: "Who was the wisest king in the Old Testament?",
    options: ["David", "Solomon", "Josiah", "Hezekiah"],
    correctAnswer: 1,
    explanation: "Solomon was known for his great wisdom given by God.",
    bibleReference: "1 Kings 3:12",
    category: "ot",
    difficulty: "easy",
    topic: "Solomon"
  },
  {
    id: 52,
    question: "What did Esau sell to Jacob?",
    options: ["His sheep", "His birthright", "His wife", "His house"],
    correctAnswer: 1,
    explanation: "Esau sold his birthright to Jacob for a bowl of stew.",
    bibleReference: "Genesis 25:33",
    category: "ot",
    difficulty: "medium",
    topic: "Jacob"
  },
  {
    id: 53,
    question: "How many people were saved in Noah's ark?",
    options: ["6", "8", "10", "12"],
    correctAnswer: 1,
    explanation: "Eight people were saved in Noah's ark: Noah, his wife, his three sons, and their wives.",
    bibleReference: "1 Peter 3:20",
    category: "ot",
    difficulty: "medium",
    topic: "Noah"
  },
  {
    id: 54,
    question: "Who was the first murderer in the Bible?",
    options: ["Adam", "Cain", "Lamech", "Esau"],
    correctAnswer: 1,
    explanation: "Cain was the first murderer, killing his brother Abel out of jealousy.",
    bibleReference: "Genesis 4:8",
    category: "ot",
    difficulty: "easy",
    topic: "Cain and Abel"
  },
  {
    id: 55,
    question: "What happened to Lot's wife?",
    options: ["She died in the fire", "She turned to salt", "She was taken captive", "She escaped"],
    correctAnswer: 1,
    explanation: "Lot's wife turned into a pillar of salt when she looked back at Sodom.",
    bibleReference: "Genesis 19:26",
    category: "ot",
    difficulty: "medium",
    topic: "Sodom and Gomorrah"
  },

  // More NT questions
  {
    id: 56,
    question: "Who was the mother of John the Baptist?",
    options: ["Mary", "Martha", "Elizabeth", "Anna"],
    correctAnswer: 2,
    explanation: "Elizabeth was the mother of John the Baptist and a relative of Mary.",
    bibleReference: "Luke 1:13",
    category: "nt",
    difficulty: "medium",
    topic: "John the Baptist"
  },
  {
    id: 57,
    question: "How many days did Jesus fast in the wilderness?",
    options: ["30", "40", "50", "60"],
    correctAnswer: 1,
    explanation: "Jesus fasted for forty days and nights in the wilderness before being tempted.",
    bibleReference: "Matthew 4:2",
    category: "nt",
    difficulty: "medium",
    topic: "Jesus"
  },
  {
    id: 58,
    question: "Who rolled away the stone from Jesus' tomb?",
    options: ["Peter", "John", "An angel", "Mary Magdalene"],
    correctAnswer: 2,
    explanation: "An angel of the Lord rolled away the stone from Jesus' tomb.",
    bibleReference: "Matthew 28:2",
    category: "nt",
    difficulty: "medium",
    topic: "Resurrection"
  },
  {
    id: 59,
    question: "What was Matthew's other name?",
    options: ["Bartholomew", "Levi", "Simon", "Thaddeus"],
    correctAnswer: 1,
    explanation: "Matthew was also called Levi before Jesus called him to follow.",
    bibleReference: "Luke 5:27",
    category: "nt",
    difficulty: "hard",
    topic: "Disciples"
  },
  {
    id: 60,
    question: "Which disciple doubted Jesus' resurrection?",
    options: ["Peter", "Thomas", "Philip", "Andrew"],
    correctAnswer: 1,
    explanation: "Thomas doubted Jesus' resurrection until he saw and touched Jesus' wounds.",
    bibleReference: "John 20:25",
    category: "nt",
    difficulty: "easy",
    topic: "Resurrection"
  },

  // More varied questions to reach 100+
  {
    id: 61,
    question: "Who was known as the 'weeping prophet'?",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    correctAnswer: 1,
    explanation: "Jeremiah was known as the weeping prophet because of his emotional messages.",
    bibleReference: "Jeremiah 9:1",
    category: "ot",
    difficulty: "medium",
    topic: "Prophets"
  },
  {
    id: 62,
    question: "What instrument did David play?",
    options: ["Flute", "Trumpet", "Harp", "Drums"],
    correctAnswer: 2,
    explanation: "David played the harp and was known for his musical abilities.",
    bibleReference: "1 Samuel 16:23",
    category: "ot",
    difficulty: "easy",
    topic: "David"
  },
  {
    id: 63,
    question: "How many books are in the New Testament?",
    options: ["25", "26", "27", "28"],
    correctAnswer: 2,
    explanation: "There are 27 books in the New Testament.",
    bibleReference: "New Testament",
    category: "books",
    difficulty: "medium",
    topic: "Bible Books"
  },
  {
    id: 64,
    question: "Who was the high priest when Jesus was crucified?",
    options: ["Annas", "Caiaphas", "Zechariah", "Simeon"],
    correctAnswer: 1,
    explanation: "Caiaphas was the high priest who played a key role in Jesus' crucifixion.",
    bibleReference: "Matthew 26:57",
    category: "nt",
    difficulty: "hard",
    topic: "Crucifixion"
  },
  {
    id: 65,
    question: "What was Paul's occupation before ministry?",
    options: ["Fisherman", "Tax collector", "Tentmaker", "Carpenter"],
    correctAnswer: 2,
    explanation: "Paul was a tentmaker by trade, which he continued during his ministry.",
    bibleReference: "Acts 18:3",
    category: "nt",
    difficulty: "medium",
    topic: "Paul"
  },

  // Continue with more questions...
  {
    id: 66,
    question: "Who interpreted dreams in the Old Testament?",
    options: ["Daniel and Joseph", "Moses and Aaron", "David and Solomon", "Elijah and Elisha"],
    correctAnswer: 0,
    explanation: "Both Daniel and Joseph were known for interpreting dreams with God's help.",
    bibleReference: "Genesis 41:16, Daniel 2:28",
    category: "ot",
    difficulty: "medium",
    topic: "Dreams"
  },
  {
    id: 67,
    question: "What did Jesus say is the second greatest commandment?",
    options: ["Honor your parents", "Love your neighbor", "Keep the Sabbath", "Do not steal"],
    correctAnswer: 1,
    explanation: "Jesus said the second greatest commandment is to love your neighbor as yourself.",
    bibleReference: "Matthew 22:39",
    category: "nt",
    difficulty: "easy",
    topic: "Commandments"
  },
  {
    id: 68,
    question: "Who was the first person to see Jesus after his resurrection?",
    options: ["Peter", "John", "Mary Magdalene", "Thomas"],
    correctAnswer: 2,
    explanation: "Mary Magdalene was the first person to see Jesus after his resurrection.",
    bibleReference: "John 20:14",
    category: "nt",
    difficulty: "medium",
    topic: "Resurrection"
  },
  {
    id: 69,
    question: "How many years did Methuselah live?",
    options: ["895", "930", "969", "1000"],
    correctAnswer: 2,
    explanation: "Methuselah lived 969 years, the longest recorded lifespan in the Bible.",
    bibleReference: "Genesis 5:27",
    category: "ot",
    difficulty: "hard",
    topic: "Genealogy"
  },
  {
    id: 70,
    question: "What did God use to destroy Sodom and Gomorrah?",
    options: ["Flood", "Fire and brimstone", "Earthquake", "Plague"],
    correctAnswer: 1,
    explanation: "God destroyed Sodom and Gomorrah with fire and brimstone from heaven.",
    bibleReference: "Genesis 19:24",
    category: "ot",
    difficulty: "easy",
    topic: "Judgment"
  },

  // Continue to reach 100+ questions...
  {
    id: 71,
    question: "Who was the mother of Moses?",
    options: ["Miriam", "Jochebed", "Zipporah", "Deborah"],
    correctAnswer: 1,
    explanation: "Jochebed was Moses' mother who hid him as a baby to save his life.",
    bibleReference: "Exodus 6:20",
    category: "ot",
    difficulty: "hard",
    topic: "Moses"
  },
  {
    id: 72,
    question: "What was the name of Abraham's nephew?",
    options: ["Isaac", "Lot", "Laban", "Nahor"],
    correctAnswer: 1,
    explanation: "Lot was Abraham's nephew who traveled with him and later lived in Sodom.",
    bibleReference: "Genesis 12:5",
    category: "ot",
    difficulty: "medium",
    topic: "Abraham"
  },
  {
    id: 73,
    question: "How many times did Jesus cleanse the temple?",
    options: ["Once", "Twice", "Three times", "Four times"],
    correctAnswer: 1,
    explanation: "Jesus cleansed the temple twice - once at the beginning and once at the end of his ministry.",
    bibleReference: "John 2:15, Matthew 21:12",
    category: "nt",
    difficulty: "medium",
    topic: "Jesus"
  },
  {
    id: 74,
    question: "Who was the Roman governor who sentenced Jesus to death?",
    options: ["Herod", "Pilate", "Felix", "Festus"],
    correctAnswer: 1,
    explanation: "Pontius Pilate was the Roman governor who reluctantly sentenced Jesus to crucifixion.",
    bibleReference: "Matthew 27:26",
    category: "nt",
    difficulty: "easy",
    topic: "Crucifixion"
  },
  {
    id: 75,
    question: "What was the name of the hill where Jesus was crucified?",
    options: ["Mount Sinai", "Golgotha", "Mount Olivet", "Mount Zion"],
    correctAnswer: 1,
    explanation: "Jesus was crucified at Golgotha, also called the place of the skull.",
    bibleReference: "Matthew 27:33",
    category: "nt",
    difficulty: "medium",
    topic: "Crucifixion"
  },

  // Final set to reach 100+
  {
    id: 76,
    question: "Who was the father of John the Baptist?",
    options: ["Joseph", "Zechariah", "Simeon", "Joachim"],
    correctAnswer: 1,
    explanation: "Zechariah was a priest and the father of John the Baptist.",
    bibleReference: "Luke 1:13",
    category: "nt",
    difficulty: "medium",
    topic: "John the Baptist"
  },
  {
    id: 77,
    question: "What did the dove represent when Jesus was baptized?",
    options: ["Peace", "The Holy Spirit", "God's approval", "New beginnings"],
    correctAnswer: 1,
    explanation: "The dove represented the Holy Spirit descending upon Jesus at his baptism.",
    bibleReference: "Matthew 3:16",
    category: "nt",
    difficulty: "easy",
    topic: "Holy Spirit"
  },
  {
    id: 78,
    question: "How many people did Jesus feed with five loaves and two fish?",
    options: ["3000", "4000", "5000", "6000"],
    correctAnswer: 2,
    explanation: "Jesus fed about 5000 men, plus women and children, with five loaves and two fish.",
    bibleReference: "Matthew 14:21",
    category: "nt",
    difficulty: "easy",
    topic: "Miracles"
  },
  {
    id: 79,
    question: "Who was the prophetess who recognized baby Jesus in the temple?",
    options: ["Mary", "Elizabeth", "Anna", "Deborah"],
    correctAnswer: 2,
    explanation: "Anna was the prophetess who recognized Jesus as the Messiah when he was presented at the temple.",
    bibleReference: "Luke 2:36",
    category: "nt",
    difficulty: "hard",
    topic: "Jesus"
  },
  {
    id: 80,
    question: "What was Zacchaeus' occupation?",
    options: ["Fisherman", "Tax collector", "Tentmaker", "Shepherd"],
    correctAnswer: 1,
    explanation: "Zacchaeus was a chief tax collector who climbed a tree to see Jesus.",
    bibleReference: "Luke 19:2",
    category: "nt",
    difficulty: "medium",
    topic: "Jesus"
  },

  // Additional questions 81-110 to ensure we have 100+
  {
    id: 81,
    question: "Who was the king of Babylon who conquered Jerusalem?",
    options: ["Cyrus", "Darius", "Nebuchadnezzar", "Belshazzar"],
    correctAnswer: 2,
    explanation: "Nebuchadnezzar was the Babylonian king who conquered Jerusalem and took the people into exile.",
    bibleReference: "2 Kings 25:1",
    category: "ot",
    difficulty: "medium",
    topic: "Exile"
  },
  {
    id: 82,
    question: "What was the name of Ruth's mother-in-law?",
    options: ["Naomi", "Rachel", "Leah", "Sarah"],
    correctAnswer: 0,
    explanation: "Naomi was Ruth's mother-in-law, and Ruth showed great loyalty to her.",
    bibleReference: "Ruth 1:4",
    category: "ot",
    difficulty: "medium",
    topic: "Ruth"
  },
  {
    id: 83,
    question: "How many days was Lazarus dead before Jesus raised him?",
    options: ["1 day", "2 days", "3 days", "4 days"],
    correctAnswer: 3,
    explanation: "Lazarus had been dead for four days when Jesus raised him from the dead.",
    bibleReference: "John 11:39",
    category: "nt",
    difficulty: "medium",
    topic: "Miracles"
  },
  {
    id: 84,
    question: "What was the first plague God sent on Egypt?",
    options: ["Frogs", "Locusts", "Water to blood", "Hail"],
    correctAnswer: 2,
    explanation: "The first plague was turning the water of the Nile River into blood.",
    bibleReference: "Exodus 7:20",
    category: "ot",
    difficulty: "medium",
    topic: "Plagues"
  },
  {
    id: 85,
    question: "Who was the physician that traveled with Paul?",
    options: ["Timothy", "Titus", "Luke", "Silas"],
    correctAnswer: 2,
    explanation: "Luke was the beloved physician who traveled with Paul and wrote the Gospel of Luke.",
    bibleReference: "Colossians 4:14",
    category: "nt",
    difficulty: "medium",
    topic: "Paul"
  },
  {
    id: 86,
    question: "What did Jacob use for a pillow when he had his dream?",
    options: ["A bag of grain", "A stone", "His cloak", "A bundle of sticks"],
    correctAnswer: 1,
    explanation: "Jacob used a stone as a pillow when he had his dream of the ladder to heaven.",
    bibleReference: "Genesis 28:11",
    category: "ot",
    difficulty: "medium",
    topic: "Jacob"
  },
  {
    id: 87,
    question: "How many Gospels are there in the New Testament?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "There are four Gospels in the New Testament: Matthew, Mark, Luke, and John.",
    bibleReference: "Matthew, Mark, Luke, John",
    category: "books",
    difficulty: "easy",
    topic: "Gospels"
  },
  {
    id: 88,
    question: "Who was the first king to rule over all Israel?",
    options: ["David", "Solomon", "Saul", "Samuel"],
    correctAnswer: 2,
    explanation: "Saul was the first king to rule over all Israel, though his reign ended badly.",
    bibleReference: "1 Samuel 10:1",
    category: "ot",
    difficulty: "medium",
    topic: "Kings"
  },
  {
    id: 89,
    question: "What sea did Moses part for the Israelites?",
    options: ["Dead Sea", "Mediterranean Sea", "Red Sea", "Sea of Galilee"],
    correctAnswer: 2,
    explanation: "Moses parted the Red Sea, allowing the Israelites to escape from Egypt.",
    bibleReference: "Exodus 14:21",
    category: "ot",
    difficulty: "easy",
    topic: "Exodus"
  },
  {
    id: 90,
    question: "Who was the disciple known as 'the beloved disciple'?",
    options: ["Peter", "John", "James", "Andrew"],
    correctAnswer: 1,
    explanation: "John was known as the beloved disciple and was very close to Jesus.",
    bibleReference: "John 13:23",
    category: "nt",
    difficulty: "medium",
    topic: "Disciples"
  },
  // Continue adding more questions to reach 110+ total
  {
    id: 91,
    question: "What was the sign of God's covenant with Noah?",
    options: ["A dove", "An olive branch", "A rainbow", "A white cloud"],
    correctAnswer: 2,
    explanation: "God set a rainbow in the sky as a sign of his covenant never to destroy the earth by flood again.",
    bibleReference: "Genesis 9:13",
    category: "ot",
    difficulty: "easy",
    topic: "Noah"
  },
  {
    id: 92,
    question: "How many silver coins did Judas receive for betraying Jesus?",
    options: ["20", "25", "30", "40"],
    correctAnswer: 2,
    explanation: "Judas received thirty pieces of silver for betraying Jesus to the chief priests.",
    bibleReference: "Matthew 26:15",
    category: "nt",
    difficulty: "medium",
    topic: "Betrayal"
  },
  {
    id: 93,
    question: "Who was the prophet that confronted King David about his sin?",
    options: ["Samuel", "Nathan", "Gad", "Elijah"],
    correctAnswer: 1,
    explanation: "Nathan the prophet confronted David about his adultery with Bathsheba and murder of Uriah.",
    bibleReference: "2 Samuel 12:7",
    category: "ot",
    difficulty: "medium",
    topic: "David"
  },
  {
    id: 94,
    question: "What was the name of the garden where Jesus prayed before his arrest?",
    options: ["Garden of Eden", "Gethsemane", "Garden of Joseph", "Kidron"],
    correctAnswer: 1,
    explanation: "Jesus prayed in the Garden of Gethsemane before his arrest and crucifixion.",
    bibleReference: "Matthew 26:36",
    category: "nt",
    difficulty: "medium",
    topic: "Jesus"
  },
  {
    id: 95,
    question: "Who was the woman judge who led Israel to victory?",
    options: ["Miriam", "Deborah", "Ruth", "Esther"],
    correctAnswer: 1,
    explanation: "Deborah was a prophetess and judge who led Israel to victory over their enemies.",
    bibleReference: "Judges 4:4",
    category: "ot",
    difficulty: "medium",
    topic: "Judges"
  },
  {
    id: 96,
    question: "What happened to Ananias and Sapphira when they lied to the Holy Spirit?",
    options: ["They were forgiven", "They were banished", "They died", "They repented"],
    correctAnswer: 2,
    explanation: "Ananias and Sapphira died immediately after lying to the Holy Spirit about their offering.",
    bibleReference: "Acts 5:5, 10",
    category: "nt",
    difficulty: "hard",
    topic: "Early Church"
  },
  {
    id: 97,
    question: "Who was the last judge of Israel?",
    options: ["Gideon", "Samson", "Samuel", "Eli"],
    correctAnswer: 2,
    explanation: "Samuel was the last judge of Israel before the monarchy was established.",
    bibleReference: "1 Samuel 7:15",
    category: "ot",
    difficulty: "medium",
    topic: "Judges"
  },
  {
    id: 98,
    question: "What did Jesus write on the ground when the woman caught in adultery was brought to him?",
    options: ["Her sins", "The accusers' sins", "Scripture verses", "Unknown"],
    correctAnswer: 3,
    explanation: "The Bible doesn't tell us what Jesus wrote on the ground - it remains unknown.",
    bibleReference: "John 8:6",
    category: "nt",
    difficulty: "hard",
    topic: "Jesus"
  },
  {
    id: 99,
    question: "How many missionary journeys did Paul take?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "Paul took three major missionary journeys, plus his final journey to Rome as a prisoner.",
    bibleReference: "Acts 13-28",
    category: "nt",
    difficulty: "medium",
    topic: "Paul"
  },
  {
    id: 100,
    question: "What was the first miracle recorded in the Old Testament?",
    options: ["Parting the Red Sea", "Water from the rock", "Aaron's rod budding", "Creation itself"],
    correctAnswer: 3,
    explanation: "The first miracle recorded is God's creation of the universe and everything in it.",
    bibleReference: "Genesis 1:1",
    category: "ot",
    difficulty: "hard",
    topic: "Creation"
  },
  {
    id: 101,
    question: "Who was the centurion whose servant Jesus healed?",
    options: ["Cornelius", "Julius", "The centurion at Capernaum", "The centurion at the cross"],
    correctAnswer: 2,
    explanation: "Jesus healed the servant of a centurion at Capernaum, praising the man's great faith.",
    bibleReference: "Matthew 8:5-13",
    category: "nt",
    difficulty: "hard",
    topic: "Miracles"
  },
  {
    id: 102,
    question: "What was the name of the mountain where Elijah challenged the prophets of Baal?",
    options: ["Mount Sinai", "Mount Horeb", "Mount Carmel", "Mount Nebo"],
    correctAnswer: 2,
    explanation: "Elijah challenged the prophets of Baal on Mount Carmel, where God sent fire from heaven.",
    bibleReference: "1 Kings 18:19",
    category: "ot",
    difficulty: "hard",
    topic: "Elijah"
  },
  {
    id: 103,
    question: "Who was the first person to be filled with the Holy Spirit in the New Testament?",
    options: ["Mary", "John the Baptist", "Jesus", "Elizabeth"],
    correctAnswer: 1,
    explanation: "John the Baptist was filled with the Holy Spirit even from his mother's womb.",
    bibleReference: "Luke 1:15",
    category: "nt",
    difficulty: "hard",
    topic: "Holy Spirit"
  },
  {
    id: 104,
    question: "What did Moses' rod turn into when he threw it down?",
    options: ["A fish", "A serpent", "A dove", "A branch"],
    correctAnswer: 1,
    explanation: "Moses' rod turned into a serpent when he threw it down before Pharaoh.",
    bibleReference: "Exodus 7:10",
    category: "ot",
    difficulty: "medium",
    topic: "Moses"
  },
  {
    id: 105,
    question: "How many people were in the upper room when the Holy Spirit came at Pentecost?",
    options: ["100", "110", "120", "144"],
    correctAnswer: 2,
    explanation: "About 120 people were in the upper room when the Holy Spirit came at Pentecost.",
    bibleReference: "Acts 1:15, 2:1",
    category: "nt",
    difficulty: "hard",
    topic: "Pentecost"
  }
];

// Helper functions for filtering questions
export const getQuestionsByCategory = (category: string): Question[] => {
  if (category === 'all') return bibleQuestions;
  return bibleQuestions.filter(q => q.category === category);
};

export const getQuestionsByDifficulty = (difficulty: string): Question[] => {
  if (difficulty === 'mixed') return bibleQuestions;
  return bibleQuestions.filter(q => q.difficulty === difficulty);
};

export const getQuestionsByTopic = (topic: string): Question[] => {
  return bibleQuestions.filter(q => q.topic.toLowerCase().includes(topic.toLowerCase()));
};

export const getRandomQuestions = (count: number, filters?: {
  category?: string;
  difficulty?: string;
  topic?: string;
}): Question[] => {
  let filteredQuestions = [...bibleQuestions];
  
  if (filters?.category && filters.category !== 'all') {
    filteredQuestions = filteredQuestions.filter(q => q.category === filters.category);
  }
  
  if (filters?.difficulty && filters.difficulty !== 'mixed') {
    filteredQuestions = filteredQuestions.filter(q => q.difficulty === filters.difficulty);
  }
  
  if (filters?.topic) {
    filteredQuestions = filteredQuestions.filter(q => 
      q.topic.toLowerCase().includes(filters.topic!.toLowerCase())
    );
  }
  
  // Shuffle and return requested count
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};