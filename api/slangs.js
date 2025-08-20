const slangs = [
  {
    "Word/Phrase": "Bop",
    "Definition": "A song that's really good.",
    "Example Sentence": "That new track is a bop.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Bounce",
    "Definition": "To leave or exit.",
    "Example Sentence": "I'm bouncing, see you later.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Cancelled",
    "Definition": "Publicly denounced and rejected.",
    "Example Sentence": "She got cancelled after that post.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Chill",
    "Definition": "Relaxed or easy-going.",
    "Example Sentence": "I'm just chilling today.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Cringe",
    "Definition": "Embarrassing or awkward.",
    "Example Sentence": "That video was cringe.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "DM",
    "Definition": "Direct Message on social media.",
    "Example Sentence": "I'll DM you the details.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Dope",
    "Definition": "Cool or excellent.",
    "Example Sentence": "That jacket is dope.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Flex",
    "Definition": "To show off or boast.",
    "Example Sentence": "He's flexing his new phone.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "GOAT",
    "Definition": "Greatest Of All Time.",
    "Example Sentence": "Jordan is the GOAT.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "High-Key",
    "Definition": "Emphatically or openly.",
    "Example Sentence": "I'm high-key excited for this.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Hype",
    "Definition": "Intense excitement.",
    "Example Sentence": "The hype is real.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Karen",
    "Definition": "Entitled or demanding woman.",
    "Example Sentence": "Don't be such a Karen.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "L",
    "Definition": "Loss or failure.",
    "Example Sentence": "We took the L on that one.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Noob",
    "Definition": "Newbie or beginner.",
    "Example Sentence": "He's such a noob at this game.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Oof",
    "Definition": "An expression of sympathy.",
    "Example Sentence": "Oof, that must have hurt.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Periodt",
    "Definition": "Used to emphasize the end of a statement.",
    "Example Sentence": "And that's the truth, periodt.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Receipts",
    "Definition": "Proof or evidence.",
    "Example Sentence": "Show me the receipts for your claims.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Shade",
    "Definition": "Subtle insult.",
    "Example Sentence": "She's throwing shade at her ex.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Simp",
    "Definition": "Someone who does too much for someone they like.",
    "Example Sentence": "He's such a simp for her.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Slaps",
    "Definition": "Really good.",
    "Example Sentence": "This beat slaps.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Spill",
    "Definition": "Reveal the truth.",
    "Example Sentence": "Spill the tea, what happened?",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Stan",
    "Definition": "Obsessive fan.",
    "Example Sentence": "I'm a stan for that band.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Sus",
    "Definition": "Suspicious or questionable.",
    "Example Sentence": "That sounds sus to me.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Thirsty",
    "Definition": "Desperate for attention or affection.",
    "Example Sentence": "He's so thirsty for likes.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Vibes",
    "Definition": "Good energy.",
    "Example Sentence": "I'm loving the vibes here.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Wig",
    "Definition": "A reaction to something surprising or shocking.",
    "Example Sentence": "My wig was snatched by that performance.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Yeet",
    "Definition": "To throw something with force; also used for excitement.",
    "Example Sentence": "He yeeted the ball across the field.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Zoomer",
    "Definition": "A member of Generation Z.",
    "Example Sentence": "As a Zoomer, she knows all the trends.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Boujee",
    "Definition": "Luxurious or fancy.",
    "Example Sentence": "She's living the boujee life.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Clout",
    "Definition": "Influence or power.",
    "Example Sentence": "He's just doing it for the clout.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Deadass",
    "Definition": "Seriously; genuinely.",
    "Example Sentence": "I'm deadass not joking.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Drip",
    "Definition": "Stylish or fashionable, especially in clothing.",
    "Example Sentence": "Check out my drip today.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Extra",
    "Definition": "Over the top, excessive.",
    "Example Sentence": "She's so extra with her outfits.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Finesse",
    "Definition": "To handle something skillfully.",
    "Example Sentence": "He finessed his way into the club.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Ghosting",
    "Definition": "Suddenly cutting off all communication with someone.",
    "Example Sentence": "He ghosted me after our date.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Hits Different",
    "Definition": "Something that resonates on a deep level.",
    "Example Sentence": "That song hits different.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "JOMO",
    "Definition": "Joy Of Missing Out.",
    "Example Sentence": "I'm all about JOMO these days.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Living Rent-Free",
    "Definition": "Taking up a lot of mental space.",
    "Example Sentence": "She's living rent-free in my mind.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Main Character",
    "Definition": "Acting like the main character in life.",
    "Example Sentence": "She's totally giving main character vibes.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Normalize",
    "Definition": "Make something the norm.",
    "Example Sentence": "We need to normalize self-care.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Oof",
    "Definition": "An expression of sympathy.",
    "Example Sentence": "Oof, that must have hurt.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Pressed",
    "Definition": "Angry or annoyed.",
    "Example Sentence": "He's so pressed about the situation.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Resonate",
    "Definition": "Something that deeply connects or makes sense.",
    "Example Sentence": "That quote really resonates with me.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Shooketh",
    "Definition": "Extremely shocked.",
    "Example Sentence": "I am shooketh by that twist.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Swerve",
    "Definition": "To avoid or move away from something.",
    "Example Sentence": "I had to swerve to avoid the drama.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Tight",
    "Definition": "Angry or frustrated.",
    "Example Sentence": "He's tight about what happened.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Unbothered",
    "Definition": "Not caring; unaffected.",
    "Example Sentence": "She's completely unbothered by the hate.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Wavy",
    "Definition": "Cool or trendy.",
    "Example Sentence": "That outfit is wavy.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Whip",
    "Definition": "Car.",
    "Example Sentence": "Check out my new whip.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Wildin",
    "Definition": "Acting wild or out of control.",
    "Example Sentence": "He was wildin' at the party.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Wylin",
    "Definition": "Acting wild or out of control.",
    "Example Sentence": "She's wylin out here.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Zooted",
    "Definition": "Under the influence.",
    "Example Sentence": "He's zooted right now.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Zoomies",
    "Definition": "Sudden burst of energy, often used to describe pets.",
    "Example Sentence": "My dog has the zoomies.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Vibe Check",
    "Definition": "Evaluating someone's mood or the atmosphere.",
    "Example Sentence": "Let's do a vibe check.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Spill the Tea",
    "Definition": "To share gossip or the latest news.",
    "Example Sentence": "Come on, spill the tea.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Big Yikes",
    "Definition": "Something extremely embarrassing or cringeworthy.",
    "Example Sentence": "That was a big yikes moment.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Boujee",
    "Definition": "Luxurious or fancy.",
    "Example Sentence": "Living the boujee life.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Bodega",
    "Definition": "A small grocery store, typically in an urban area.",
    "Example Sentence": "I'm heading to the bodega.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Gassed Up",
    "Definition": "Feeling excited or confident.",
    "Example Sentence": "I'm so gassed up for the concert.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Swerve",
    "Definition": "To avoid or dodge something.",
    "Example Sentence": "She had to swerve that awkward conversation.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Tight",
    "Definition": "Angry or frustrated.",
    "Example Sentence": "Why are you so tight today?",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Drip",
    "Definition": "Stylish or fashionable.",
    "Example Sentence": "Check out my drip.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Facts",
    "Definition": "Used to agree with something true.",
    "Example Sentence": "That's facts.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Fire",
    "Definition": "Really good or excellent.",
    "Example Sentence": "That song is fire.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Hypebeast",
    "Definition": "Someone obsessed with fashion, especially streetwear.",
    "Example Sentence": "He's such a hypebeast.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Keep it 100",
    "Definition": "To be honest and truthful.",
    "Example Sentence": "I'm just keeping it 100 with you.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Lit",
    "Definition": "Exciting, fun, or excellent.",
    "Example Sentence": "That party was lit.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "No Cap",
    "Definition": "No lie; truth.",
    "Example Sentence": "That's the best movie, no cap.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Plug",
    "Definition": "Someone who can supply something needed.",
    "Example Sentence": "He's the plug for all the best snacks.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Salty",
    "Definition": "Bitter or upset.",
    "Example Sentence": "Why are you so salty?",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Slay",
    "Definition": "To do something exceptionally well.",
    "Example Sentence": "You slayed that presentation.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Sneak Diss",
    "Definition": "A subtle or indirect insult.",
    "Example Sentence": "Was that a sneak diss?",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Stay Woke",
    "Definition": "Stay aware, especially of social issues.",
    "Example Sentence": "Stay woke about what's happening.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Thicc",
    "Definition": "Describing someone with a curvy figure.",
    "Example Sentence": "She's so thicc.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Vibe",
    "Definition": "The mood or atmosphere.",
    "Example Sentence": "I love the vibe here.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Wild",
    "Definition": "Crazy or out of control.",
    "Example Sentence": "That party was wild.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Woke",
    "Definition": "Being aware of social issues.",
    "Example Sentence": "Stay woke, everyone.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Yeet",
    "Definition": "To throw something with force; also used for excitement.",
    "Example Sentence": "He yeeted the ball.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Zoomer",
    "Definition": "A member of Generation Z.",
    "Example Sentence": "She's such a Zoomer.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Bet",
    "Definition": "Used to confirm something or agree.",
    "Example Sentence": "Bet, I'll be there.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Big Mood",
    "Definition": "A strong feeling or sentiment that others relate to.",
    "Example Sentence": "That nap was a big mood.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Bounce",
    "Definition": "To leave or exit quickly.",
    "Example Sentence": "I'm gonna bounce now.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Clap Back",
    "Definition": "A quick, sharp, and witty retort.",
    "Example Sentence": "That clap back was on point.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Dope",
    "Definition": "Cool or awesome.",
    "Example Sentence": "That outfit is dope.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Extra",
    "Definition": "Over the top, excessive.",
    "Example Sentence": "She's so extra with her drama.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Finna",
    "Definition": "Fixing to, about to.",
    "Example Sentence": "I'm finna go now.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "FOMO",
    "Definition": "Fear of Missing Out; anxiety about missing something.",
    "Example Sentence": "I have FOMO from missing that party.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Gucci",
    "Definition": "Good or cool.",
    "Example Sentence": "Everything's Gucci.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "High-Key",
    "Definition": "Emphatically or openly.",
    "Example Sentence": "I'm high-key excited for this.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Low-Key",
    "Definition": "Subtly or secretly.",
    "Example Sentence": "I'm low-key worried about the test.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Shook",
    "Definition": "Shocked or surprised.",
    "Example Sentence": "I was shook when I heard the news.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Simp",
    "Definition": "Someone who does too much for someone they like.",
    "Example Sentence": "He's such a simp for her.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Slaps",
    "Definition": "Really good or excellent.",
    "Example Sentence": "This beat slaps.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Vibes",
    "Definition": "Good energy or atmosphere.",
    "Example Sentence": "I love the vibes here.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Woke",
    "Definition": "Being aware of social issues.",
    "Example Sentence": "We need to stay woke.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Yolo",
    "Definition": "You Only Live Once; a call to take risks.",
    "Example Sentence": "I'm gonna do it, YOLO!",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Bop",
    "Definition": "A song that's really good.",
    "Example Sentence": "That new track is a bop.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Boujee",
    "Definition": "Luxurious or fancy.",
    "Example Sentence": "She's so boujee with her style.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Bruh",
    "Definition": "A casual term for \"bro\" or \"dude.",
    "Example Sentence": "Come on, bruh, let's go.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Chill",
    "Definition": "Relaxed or easy-going.",
    "Example Sentence": "I'm just chilling today.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Clap Back",
    "Definition": "A sharp, witty retort.",
    "Example Sentence": "That clap back was savage.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Dank",
    "Definition": "High-quality, especially used for memes.",
    "Example Sentence": "That meme is dank.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Deadass",
    "Definition": "Seriously; genuinely.",
    "Example Sentence": "I'm deadass serious.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Drip",
    "Definition": "Stylish or fashionable, especially in clothing.",
    "Example Sentence": "Check out my drip today.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Fire",
    "Definition": "Really good or excellent.",
    "Example Sentence": "This pizza is fire.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Flex",
    "Definition": "To show off or boast.",
    "Example Sentence": "He's always flexing his new car.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Goat",
    "Definition": "Greatest Of All Time.",
    "Example Sentence": "Messi is the goat of football.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Glow Up",
    "Definition": "A significant improvement in appearance or style.",
    "Example Sentence": "She had a major glow-up over the summer.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Gucci",
    "Definition": "Good or cool.",
    "Example Sentence": "Everything's Gucci.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "High-Key",
    "Definition": "Emphatically or openly.",
    "Example Sentence": "I'm high-key loving this weather.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Hits Different",
    "Definition": "Something that resonates on a deep level.",
    "Example Sentence": "That song hits different.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Hype",
    "Definition": "Intense excitement.",
    "Example Sentence": "The hype is real for this movie.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "JOMO",
    "Definition": "Joy Of Missing Out.",
    "Example Sentence": "I prefer JOMO to FOMO any day.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Karen",
    "Definition": "Entitled or demanding woman.",
    "Example Sentence": "She's such a Karen.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "L",
    "Definition": "Loss or failure.",
    "Example Sentence": "We took the L on that one.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Living Rent-Free",
    "Definition": "Taking up a lot of mental space.",
    "Example Sentence": "That comment is living rent-free in my mind.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Main Character",
    "Definition": "Acting like the main character in life.",
    "Example Sentence": "She's totally giving main character vibes.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Normalize",
    "Definition": "Make something the norm.",
    "Example Sentence": "We need to normalize mental health talks.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Oof",
    "Definition": "An expression of sympathy.",
    "Example Sentence": "Oof, that's tough.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Receipts",
    "Definition": "Proof or evidence.",
    "Example Sentence": "Where are the receipts for your claim?",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Salty",
    "Definition": "Bitter or upset.",
    "Example Sentence": "Why are you so salty today?",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Shade",
    "Definition": "Subtle insult.",
    "Example Sentence": "She threw some serious shade at the party.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Simp",
    "Definition": "Someone who does too much for someone they like.",
    "Example Sentence": "Stop simping over her.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Slaps",
    "Definition": "Really good or excellent.",
    "Example Sentence": "This beat slaps hard.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Vibes",
    "Definition": "Good energy or atmosphere.",
    "Example Sentence": "I love the vibes here.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Woke",
    "Definition": "Being aware of social issues.",
    "Example Sentence": "Stay woke.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Yolo",
    "Definition": "You Only Live Once; a call to take risks.",
    "Example Sentence": "I'm gonna do it, YOLO!",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Zoomer",
    "Definition": "A member of Generation Z.",
    "Example Sentence": "As a Zoomer, she's all about TikTok.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Cancelled",
    "Definition": "Publicly denounced and rejected.",
    "Example Sentence": "She's cancelled after that scandal.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Cap",
    "Definition": "A lie or something untrue.",
    "Example Sentence": "That's cap, you didn't do that.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Dead",
    "Definition": "Used to describe something very funny.",
    "Example Sentence": "I'm dead, that was hilarious.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Extra",
    "Definition": "Over the top, excessive.",
    "Example Sentence": "She's so extra with her drama.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Finna",
    "Definition": "Fixing to, about to.",
    "Example Sentence": "I'm finna go now.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Finesse",
    "Definition": "To handle something skillfully.",
    "Example Sentence": "He finessed his way in.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Flex",
    "Definition": "To show off or boast.",
    "Example Sentence": "He's flexing his new watch.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Goat",
    "Definition": "Greatest Of All Time.",
    "Example Sentence": "Tom Brady is the GOAT.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Gucci",
    "Definition": "Good or cool.",
    "Example Sentence": "Everything's Gucci here.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Hype",
    "Definition": "Intense excitement.",
    "Example Sentence": "The hype is real.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "JOMO",
    "Definition": "Joy Of Missing Out.",
    "Example Sentence": "I prefer JOMO to FOMO.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "L",
    "Definition": "Loss or failure.",
    "Example Sentence": "We took an L today.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Lit",
    "Definition": "Exciting, fun, or excellent.",
    "Example Sentence": "This party is lit.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Low-Key",
    "Definition": "Subtly or secretly.",
    "Example Sentence": "I'm low-key enjoying this.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Mood",
    "Definition": "An expression of a relatable feeling or vibe.",
    "Example Sentence": "That's such a mood.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Salty",
    "Definition": "Bitter or upset.",
    "Example Sentence": "Why are you so salty?",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Savage",
    "Definition": "Acting fierce, confident, and unfiltered.",
    "Example Sentence": "Her clap back was savage.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Shook",
    "Definition": "Shocked or surprised.",
    "Example Sentence": "I was shook by the news.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Slay",
    "Definition": "To do something exceptionally well.",
    "Example Sentence": "She slayed that outfit.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Stan",
    "Definition": "An enthusiastic or obsessive fan.",
    "Example Sentence": "I'm a stan for that band.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Sus",
    "Definition": "Suspicious or questionable.",
    "Example Sentence": "That seems sus.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Tea",
    "Definition": "Gossip or the latest news.",
    "Example Sentence": "Spill the tea, what happened?",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Thicc",
    "Definition": "Describing someone with a curvy figure.",
    "Example Sentence": "She's so thicc.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Woke",
    "Definition": "Being aware of social issues.",
    "Example Sentence": "We need to stay woke.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Yeet",
    "Definition": "To throw something with force; also used for excitement.",
    "Example Sentence": "He yeeted the ball.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Zoomer",
    "Definition": "A member of Generation Z.",
    "Example Sentence": "As a Zoomer, she's into TikTok.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Big Yikes",
    "Definition": "Something extremely embarrassing or cringeworthy.",
    "Example Sentence": "That was a big yikes moment.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Bop",
    "Definition": "A song that's really good.",
    "Example Sentence": "That new track is a bop.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Bounce",
    "Definition": "To leave or exit.",
    "Example Sentence": "I'm bouncing, see you later.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Cancelled",
    "Definition": "Publicly denounced and rejected.",
    "Example Sentence": "She's cancelled after that scandal.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Chill",
    "Definition": "Relaxed or easy-going.",
    "Example Sentence": "I'm just chilling today.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Clout",
    "Definition": "Influence or power.",
    "Example Sentence": "He's just doing it for the clout.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Deadass",
    "Definition": "Seriously; genuinely.",
    "Example Sentence": "I'm deadass not joking.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Drip",
    "Definition": "Stylish or fashionable, especially in clothing.",
    "Example Sentence": "Check out my drip today.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Extra",
    "Definition": "Over the top, excessive.",
    "Example Sentence": "She's so extra with her outfits.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Finesse",
    "Definition": "To handle something skillfully.",
    "Example Sentence": "He finessed his way into the club.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Ghosting",
    "Definition": "Suddenly cutting off all communication with someone.",
    "Example Sentence": "He ghosted me after our date.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Hits Different",
    "Definition": "Something that resonates on a deep level.",
    "Example Sentence": "That song hits different.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "JOMO",
    "Definition": "Joy Of Missing Out.",
    "Example Sentence": "I'm all about JOMO these days.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Living Rent-Free",
    "Definition": "Taking up a lot of mental space.",
    "Example Sentence": "She's living rent-free in my mind.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Main Character",
    "Definition": "Acting like the main character in life.",
    "Example Sentence": "She's totally giving main character vibes.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Normalize",
    "Definition": "Make something the norm.",
    "Example Sentence": "We need to normalize self-care.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Oof",
    "Definition": "An expression of sympathy.",
    "Example Sentence": "Oof, that must have hurt.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Pressed",
    "Definition": "Angry or annoyed.",
    "Example Sentence": "He's so pressed about the situation.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Resonate",
    "Definition": "Something that deeply connects or makes sense.",
    "Example Sentence": "That quote really resonates with me.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Shooketh",
    "Definition": "Extremely shocked.",
    "Example Sentence": "I am shooketh by that twist.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Swerve",
    "Definition": "To avoid or move away from something.",
    "Example Sentence": "I had to swerve to avoid the drama.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Tight",
    "Definition": "Angry or frustrated.",
    "Example Sentence": "He's tight about what happened.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Unbothered",
    "Definition": "Not caring; unaffected.",
    "Example Sentence": "She's completely unbothered by the hate.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Wavy",
    "Definition": "Cool or trendy.",
    "Example Sentence": "That outfit is wavy.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Whip",
    "Definition": "Car.",
    "Example Sentence": "Check out my new whip.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Wildin",
    "Definition": "Acting wild or out of control.",
    "Example Sentence": "He was wildin' at the party.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Wylin",
    "Definition": "Acting wild or out of control.",
    "Example Sentence": "She's wylin out here.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Zooted",
    "Definition": "Under the influence.",
    "Example Sentence": "He's zooted right now.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Zoomies",
    "Definition": "Sudden burst of energy, often used to describe pets.",
    "Example Sentence": "My dog has the zoomies.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Vibe Check",
    "Definition": "Evaluating someone's mood or the atmosphere.",
    "Example Sentence": "Let's do a vibe check.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Spill the Tea",
    "Definition": "To share gossip or the latest news.",
    "Example Sentence": "Come on, spill the tea.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Big Yikes",
    "Definition": "Something extremely embarrassing or cringeworthy.",
    "Example Sentence": "That was a big yikes moment.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Boujee",
    "Definition": "Luxurious or fancy.",
    "Example Sentence": "Living the boujee life.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Bodega",
    "Definition": "A small grocery store, typically in an urban area.",
    "Example Sentence": "I'm heading to the bodega.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Gassed Up",
    "Definition": "Feeling excited or confident.",
    "Example Sentence": "I'm so gassed up for the concert.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Swerve",
    "Definition": "To avoid or dodge something.",
    "Example Sentence": "She had to swerve that awkward conversation.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Tight",
    "Definition": "Angry or frustrated.",
    "Example Sentence": "Why are you so tight today?",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Drip",
    "Definition": "Stylish or fashionable.",
    "Example Sentence": "Check out my drip.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Facts",
    "Definition": "Used to agree with something true.",
    "Example Sentence": "That's facts.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Fire",
    "Definition": "Really good or excellent.",
    "Example Sentence": "That song is fire.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Hypebeast",
    "Definition": "Someone obsessed with fashion, especially streetwear.",
    "Example Sentence": "He's such a hypebeast.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Keep it 100",
    "Definition": "To be honest and truthful.",
    "Example Sentence": "I'm just keeping it 100 with you.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Lit",
    "Definition": "Exciting, fun, or excellent.",
    "Example Sentence": "That party was lit.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "No Cap",
    "Definition": "No lie; truth.",
    "Example Sentence": "That's the best movie, no cap.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Plug",
    "Definition": "Someone who can supply something needed.",
    "Example Sentence": "He's the plug for all the best snacks.",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Salty",
    "Definition": "Bitter or upset.",
    "Example Sentence": "Why are you so salty?",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Slay",
    "Definition": "To do something exceptionally well.",
    "Example Sentence": "You slayed that presentation.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Sneak Diss",
    "Definition": "A subtle or indirect insult.",
    "Example Sentence": "Was that a sneak diss?",
    "Popularity/Trend Level": "Medium"
  },
  {
    "Word/Phrase": "Stay Woke",
    "Definition": "Stay aware, especially of social issues.",
    "Example Sentence": "Stay woke about what's happening.",
    "Popularity/Trend Level": "High"
  },
  {
    "Word/Phrase": "Thicc",
    "Definition": "Describing someone with a curvy figure.",
    "Example Sentence": "She's so thicc",
    "Popularity/Trend Level": ""
  }
]

export default slangs