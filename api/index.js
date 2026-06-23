const jokes = [
  // --- 1 to 10: General & Pappu Jokes ---
  "Pappu failed in exam. Papa: Why? Pappu: Question paper was out of syllabus. Papa: What was the question? Pappu: Write your name.",
  "Doctor: Your teeth are weak, don't eat solid food. Patient: Okay doctor, can I drink Kingfisher?",
  "Friend: Bro, she called me 'Bhai'. Me: High five bro, now you can ask her for Rakhi gift money.",
  "Mom: Go and get some coriander (dhaniya). Me brings mint (pudina). Mom: This is why your salary is low.",
  "Teacher: Tell me an example of a machine. Raju: Fan sir. Teacher: Good. Another example? Raju: Another fan sir.",
  "Boy: I love you. Girl: I am out of your league. Boy: League match nahi, direct final khelna hai didi.",
  "Why did the middle-class man buy a big refrigerator? To store 10 old plastic bottles filled with water.",
  "Customer: Bhaiya, give me a discount. Shopkeeper: Madam, even the calculator is crying at your offer.",
  "Teacher: Where was Akbar born? Backbencher: Sir, I don't know, I was not born that time.",
  "Why Indian moms love Tupperware? Because if you lose one bottle, you lose your place in the house.",

  // --- 11 to 20: Engineering & Career Life ---
  "Sharma ji ka beta got 99%. Me got 70%. Dad: Look at him! Me: Dad, he has no social life. Dad: You have no future.",
  "HR: What is your biggest weakness? Me: I fall in love with anyone who replies to my email within 2 minutes.",
  "Interviewer: Tell me about yourself. Me: Sir, I am a simple boy, looking for a job to pay my internet bill.",
  "Manager: Why are you late? Employee: Traffic jam sir. Manager: You were walking! Employee: Footpath traffic sir.",
  "Engineering student to God: Please give me passing marks. God: Even I don't know the answer to Question 3.",
  "My wallet is like an onion. Whenever I open it, it makes me cry.",
  "Guy: I am doing business. Friend: What business? Guy: Sharing Netflix password for 50 rupees per month.",
  "Work from home reality: Formals on top, shorts on bottom. Meeting ends, immediately sleeping again.",
  "Colleague: Let's go for Chai. Me: Bro, I have no money. Colleague: My treat. Me: *runs faster than Usain Bolt*",
  "Bio on dating app: 'Simple guy, looks like standard definition, looking for 4K ultra HD girl.'",

  // --- 21 to 30: Marriage & Relationship Shenanigans ---
  "Wife: Do you love me or football? Husband: Of course you, honey! 90 minutes over, now pass the remote.",
  "Girlfriend: My parents are not home, come over. Boy: Bro, my bike has no petrol. Girlfriend: My dad left his car keys. Boy: *invents teleportation*",
  "Boy to girl: You look like a angel. Girl: Really? Boy: Yes, the one on the back of the auto rickshaw.",
  "Wife: I am going to my mom's house for one week. Husband: Oh no, so sad! *secretly orders party pizza*",
  "Pandit ji: Now husband and wife are one soul. Husband: Then why do we need two tickets for the movie?",
  "Love is blind, but marriage is the eye-opener with a tight slap.",
  "Girl: Tell me those 3 magical words. Boy: 'Chai ban gayi' (Tea is ready).",
  "Why did the guy get married in a court? Because his relatives wanted paneer, and he wanted peace.",
  "Wife: Our neighbor bought a gold necklace. Husband: Our neighbor also has a peaceful husband, look at him.",
  "Dating app matched me with my cousin. Family WhatsApp group is very quiet today.",

  // --- 31 to 40: Everyday Desi Relatability ---
  "Why did the uncle sound horn at the green light? Because he wanted the green light to become greener.",
  "Auto driver: No change for 500 rupees. Me: Keep the change. Auto driver: Real id se aao Ambani.",
  "Biggest lie told by any shopkeeper: 'Bhaiya, this is fixed price, I am not keeping any profit.'",
  "Me checking my bank balance: 45 rupees. Me ordering a 400 rupees pizza: God will manage.",
  "Why do we check the gas cylinder by shaking it? Because we don't trust science, we trust the sound.",
  "Mom: Clean your room. Me: It is clean. Mom: If I find one dust particle, you are sleeping outside with the dog.",
  "Dad typing on WhatsApp: 'Ok' (takes 45 minutes to type).",
  "Friend: Bro, help me in fight. Me: Who is the enemy? Friend: 10 local guys. Me: Bro, I have stomach ache.",
  "Why did the boy keep his phone face down? Because his father's eyes have built-in sniper vision.",
  "Customer: Is this paneer fresh? Milkman: Sir, buffalo just gave it 2 hours ago.",

  // --- 41 to 50: School & College Backbenchers ---
  "Topper: I studied only 12 hours today, I will fail. Backbencher: I know the spelling of the subject name, I am topper.",
  "Principal: Why are you bunking class? Student: Sir, outside climate is very romantic, inside fan is making noise.",
  "When the teacher says 'Group Project', it means one person works and three people eat samosa.",
  "Exam hall reality: Looking at the ceiling like the answer is written there by the government.",
  "Teacher: Use the word 'Window' in a sentence. Raju: Window-w (Window) shopping is my hobby sir.",
  "Friend: Lend me 100 rupees. Me: I have only 50. Friend: Give me 50, you owe me 50.",
  "Why do backbenchers sit in the last row? To operate mobile at 0% brightness like a undercover agent.",
  "Math teacher: If I have 5 apples and you take 2, what do you have? Student: A fight, sir.",
  "Parents when you get 95%: Where is the 5%? Did you donate it to the school?",
  "College canteen samosa has everything except potato. It has mystery and struggles inside.",

  // --- 51 to 60: Local Transport & Road Trips ---
  "Bus conductor: Move inside, there is lots of space! The space: Not even a mosquito can breathe.",
  "Google Maps: Turn right. Indian driver: There is a cow standing there, I will go straight.",
  "Why do bikers wear helmet on the elbow? To protect the elbow from police fine, obviously.",
  "Uber driver cancelled the ride because the destination was too close. Then he cancelled because it was too far.",
  "Train passenger: Seat number 23 please? Me: Sir, this is my seat. Passenger: Beta, adjust please, I am old. (He is 40).",
  "Indian roads don't have potholes. Potholes have some roads around them.",
  "Metro traveler: Stand behind the yellow line. Uncle: The yellow line is just a suggestion, beta.",
  "Why did the Scorpio driver use high beam light? To show the entire universe that he is coming.",
  "Flight passenger: Air hostess, please give me extra peanuts. Air hostess: Sir, this is budget airline, even water is chargeable.",
  "Traffic Police: Show me license. Driver: Sir, my uncle is MLA. Police: Okay, give 500 rupees for your uncle.",

  // --- 61 to 70: WhatsApp & Social Media Era ---
  "Good Morning messages on family group: 45 images of roses with fake motivational quotes.",
  "Me posting a cool picture. Relatives in comment: 'Beta, results kab aa rahe hain?' (When are results coming?)",
  "Influencer: 'Hey guys, welcome back to my channel!' Me: *skips video to see the actual content for 2 seconds*",
  "Friend marked 'Interested' in a high society event on Facebook. Reality: He is eating Maggi at home.",
  "Why do aunties use WhatsApp status? To show the world that their son-in-law bought them a mixer grinder.",
  "My friend updates status: 'Feeling lonely with 45 others at Starbucks.'",
  "Blocking your ex is old style. True legend is showing them your successful life on Instagram stories.",
  "WhatsApp group admin: Don't share political jokes. Also admin: Shares 50 fake news about NASA.",
  "Me changing my profile picture. 0 likes in 10 minutes. Me: Delete, delete, system error.",
  "Grandfather: In my times, we wrote letters. Me: In my times, blue tick means she saw it but ignored me.",

  // --- 71 to 80: Festive & Food Diatribes ---
  "Diwali sweets circle: You give Soan Papdi to Sharma ji, Sharma ji gives to Verma ji, Verma ji gives back to you.",
  "Diet plan Day 1: Only salad. Diet plan Day 1 (Evening): 2 plates of Chole Bhature because emotional damage.",
  "Biryani without Elachi (cardamom) is like life without problems—peaceful but impossible to find.",
  "Gym trainer: No sugar from today. Me: Sir, gulab jamun has no sugar, it has chashni (syrup). Trainer faints.",
  "Wedding food strategy: Eat nothing from morning, go to wedding, direct attack on the paneer counter.",
  "Mom making round chapati is geometry. Me making chapati is world map of North America.",
  "Golgappa guy: Bhaiya, give me extra dry puri at the end. That dry puri is the real trophy of life.",
  "Why is tea called 'Amrit' in India? Because water can refresh you, but Chai can resurrect you.",
  "Maggie says '2 Minutes Noodles'. Reality: It takes 10 minutes to cook and 2 seconds to finish.",
  "Relative at a feast: Beta, take one more sweet. Me: No aunty, full. Relative puts 3 sweets on my plate anyway.",

  // --- 81 to 90: Desi Parents & Household Rules ---
  "Dad: When I was your age, I used to swim across 2 rivers to go to school. Me: Dad, you lived in Rajasthan.",
  "Mom searching for something I lost: Finds it in 2 seconds in the exact place I checked 10 times. Magic.",
  "Dad watching news channel: Volume at 100%. Dad sleeping. Me changes volume to 10. Dad: I am watching that!",
  "Why do Indian parents save plastic bags inside a bigger plastic bag? It is our national heritage.",
  "Son: Dad, I want to follow my passion. Dad: Go follow it outside the house from tomorrow.",
  "Mom: Why are you always on the phone? Me: Mom, I am checking the time. Mom: Time is bad because of this phone.",
  "Dad buying vegetables: Fights for 5 rupees free coriander, then gives 50 rupees tip to valet parking.",
  "If you don't turn off the room light when leaving, your dad will calculate the electricity bill in his head instantly.",
  "Mom's logic: You have fever? It is because of that gaming laptop you bought.",
  "Son: I got a tattoo. Dad: Good, now the police can identify your body easily.",

  // --- 91 to 100: Absolute Nonsense & Tier-3 Logic ---
  "Why did the man throw his watch out the window? He wanted to see time fly. *Heavy local sigh*",
  "Friend: Do you know English? Me: Yes. Friend: Tell me the opposite of 'Come here'. Me: 'Go there'. Friend: Opposite of 'No'? Me: 'Yes'. Friend: Opposite of 'I love you'? Me: 'I hate you'. Me is English topper.",
  "Don't worry about your looks. Fair & Lovely company changed its name, but your face is still the same.",
  "Why did the banana go to the doctor? Because it was not peeling well.",
  "Mosquito in my room: *busses near my ear*. Me: *slaps myself*. Mosquito: Thanks for the applause bro.",
  "If sitting on the sofa doing nothing was an Olympic sport, my relatives would say I still didn't get Gold.",
  "Why do people say 'Sleep like a baby'? Babies wake up every 2 hours crying for milk. I want to sleep like a buffalo.",
  "Guy 1: My dog is very smart, he reads the newspaper. Guy 2: I know, my dog told me yesterday.",
  "A true friend is someone who looks at your ugly photo and says, 'Normal hi toh hai' (It looks normal only).",
  "You don't need a standalone alarm clock in India. The neighbor's motorcycle start-up noise at 6 AM is enough."
];

// Vercel serverless function format
module.exports = (req, res) => {
  // Set headers to allow anyone to fetch data (CORS) and return JSON
  res.writeHead(200, { 
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*' 
  });
  
  // Send the entire array of 100 jokes back all at once
  res.end(JSON.stringify({ 
    totalJokes: jokes.length,
    jokes: jokes 
  }));
};
