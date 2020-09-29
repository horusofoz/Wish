// Oracle Tables

const table_question = {
    "1": {
        "answer": "Extreme No"
    },
    "2": {
        "answer": "No"
    },
    "3": {
        "answer": "No"
    },
    "4": {
        "answer": "No"
    },
    "5": {
        "answer": "No, but"
    },
    "6": {
        "answer": "Yes, but"
    },
    "7": {
        "answer": "Yes"
    },
    "8": {
        "answer": "Yes"
    },
    "9": {
        "answer": "Yes"
    },
    "10": {
        "answer": "Extreme Yes"
    }
}

const table_question_count = Object.keys(table_question).length;

const table_verb = {
    "1": {
        "verb": "Explode"
    },
    "2": {
        "verb": "Berate"
    },
    "3": {
        "verb": "Declare"
    },
    "4": {
        "verb": "Fumble"
    },
    "5": {
        "verb": "Defend"
    },
    "6": {
        "verb": "Alert"
    },
    "7": {
        "verb": "Plunder"
    },
    "8": {
        "verb": "Sleep"
    },
    "9": {
        "verb": "Consecrate"
    },
    "10": {
        "verb": "Forge"
    },
    "11": {
        "verb": "Force"
    },
    "12": {
        "verb": "Construct"
    },
    "13": {
        "verb": "Collaborate"
    },
    "14": {
        "verb": "Amuse"
    },
    "15": {
        "verb": "Segregate"
    },
    "16": {
        "verb": "Beg"
    },
    "17": {
        "verb": "Prophesize"
    },
    "18": {
        "verb": "Seize"
    },
    "19": {
        "verb": "Witness"
    },
    "20": {
        "verb": "Inflame"
    },
    "21": {
        "verb": "Rage"
    },
    "22": {
        "verb": "Blurt"
    },
    "23": {
        "verb": "Bid"
    },
    "24": {
        "verb": "Dishonor"
    },
    "25": {
        "verb": "Attend"
    },
    "26": {
        "verb": "Climb"
    },
    "27": {
        "verb": "Stage"
    },
    "28": {
        "verb": "Purchase"
    },
    "29": {
        "verb": "Ridicule"
    },
    "30": {
        "verb": "Betray"
    },
    "31": {
        "verb": "Dodge"
    },
    "32": {
        "verb": "March"
    },
    "33": {
        "verb": "Spy"
    },
    "34": {
        "verb": "Decay"
    },
    "35": {
        "verb": "Order"
    },
    "36": {
        "verb": "Congratulate"
    },
    "37": {
        "verb": "Catch"
    },
    "38": {
        "verb": "Jaywalk"
    },
    "39": {
        "verb": "Confront"
    },
    "40": {
        "verb": "Banish"
    },
    "41": {
        "verb": "Distill"
    },
    "42": {
        "verb": "Gesture"
    },
    "43": {
        "verb": "Tempt"
    },
    "44": {
        "verb": "Entice"
    },
    "45": {
        "verb": "Disguise"
    },
    "46": {
        "verb": "Beautify"
    },
    "47": {
        "verb": "Hurry"
    },
    "48": {
        "verb": "Build"
    },
    "49": {
        "verb": "Transform"
    },
    "50": {
        "verb": "Reward"
    },
    "51": {
        "verb": "Glare"
    },
    "52": {
        "verb": "Observe"
    },
    "53": {
        "verb": "Choke"
    },
    "54": {
        "verb": "Mutate"
    },
    "55": {
        "verb": "Practice"
    },
    "56": {
        "verb": "Enlighten"
    },
    "57": {
        "verb": "Defeat"
    },
    "58": {
        "verb": "Bait"
    },
    "59": {
        "verb": "Enrage"
    },
    "60": {
        "verb": "Sob"
    },
    "61": {
        "verb": "Punish"
    },
    "62": {
        "verb": "Laugh"
    },
    "63": {
        "verb": "Narrate"
    },
    "64": {
        "verb": "Slaughter"
    },
    "65": {
        "verb": "Bleed"
    },
    "66": {
        "verb": "Rescue"
    },
    "67": {
        "verb": "Invite"
    },
    "68": {
        "verb": "Decorate"
    },
    "69": {
        "verb": "Wound"
    },
    "70": {
        "verb": "Unload"
    },
    "71": {
        "verb": "Dazzle"
    },
    "72": {
        "verb": "Rush"
    },
    "73": {
        "verb": "Pollute"
    },
    "74": {
        "verb": "Destroy"
    },
    "75": {
        "verb": "Hurtle"
    },
    "76": {
        "verb": "Promote"
    },
    "77": {
        "verb": "Infuriate"
    },
    "78": {
        "verb": "Harass"
    },
    "79": {
        "verb": "Insult"
    },
    "80": {
        "verb": "Foretell"
    },
    "81": {
        "verb": "Gob"
    },
    "82": {
        "verb": "Stop"
    },
    "83": {
        "verb": "Investigate"
    },
    "84": {
        "verb": "Collapse"
    },
    "85": {
        "verb": "Divert"
    },
    "86": {
        "verb": "Notify"
    },
    "87": {
        "verb": "Congregate"
    },
    "88": {
        "verb": "Defuse"
    },
    "89": {
        "verb": "Near"
    },
    "90": {
        "verb": "Warn"
    },
    "91": {
        "verb": "Massacre"
    },
    "92": {
        "verb": "Alter"
    },
    "93": {
        "verb": "Subdue"
    },
    "94": {
        "verb": "Confiscate"
    },
    "95": {
        "verb": "Fake"
    },
    "96": {
        "verb": "Take"
    },
    "97": {
        "verb": "Abandon"
    },
    "98": {
        "verb": "Avenge"
    },
    "99": {
        "verb": "Terrorize"
    },
    "100": {
        "verb": "Inflict"
    },
    "101": {
        "verb": "Torment"
    },
    "102": {
        "verb": "Resist"
    },
    "103": {
        "verb": "Trade"
    },
    "104": {
        "verb": "Guard"
    },
    "105": {
        "verb": "Meddle"
    },
    "106": {
        "verb": "Examine"
    },
    "107": {
        "verb": "Bawl"
    },
    "108": {
        "verb": "Exclude"
    },
    "109": {
        "verb": "Disrupt"
    },
    "110": {
        "verb": "Auction"
    },
    "111": {
        "verb": "Foresee"
    },
    "112": {
        "verb": "Grab"
    },
    "113": {
        "verb": "Wink"
    },
    "114": {
        "verb": "Drink"
    },
    "115": {
        "verb": "Drown"
    },
    "116": {
        "verb": "Escort"
    },
    "117": {
        "verb": "Agitate"
    },
    "118": {
        "verb": "Love"
    },
    "119": {
        "verb": "Humiliate"
    },
    "120": {
        "verb": "Injure"
    },
    "121": {
        "verb": "Silence"
    },
    "122": {
        "verb": "Bewilder"
    },
    "123": {
        "verb": "Prohibit"
    },
    "124": {
        "verb": "Solicit"
    },
    "125": {
        "verb": "Attempt"
    },
    "126": {
        "verb": "Aim"
    },
    "127": {
        "verb": "Excavate"
    },
    "128": {
        "verb": "Mock"
    },
    "129": {
        "verb": "Concoct"
    },
    "130": {
        "verb": "Hold"
    },
    "131": {
        "verb": "Summon"
    },
    "132": {
        "verb": "Cremate"
    },
    "133": {
        "verb": "Provoke"
    },
    "134": {
        "verb": "Babble"
    },
    "135": {
        "verb": "Aid"
    },
    "136": {
        "verb": "Preach"
    },
    "137": {
        "verb": "Claim"
    },
    "138": {
        "verb": "Fund"
    },
    "139": {
        "verb": "Expose"
    },
    "140": {
        "verb": "Chase"
    },
    "141": {
        "verb": "Debate"
    },
    "142": {
        "verb": "Smash"
    },
    "143": {
        "verb": "Loot"
    },
    "144": {
        "verb": "Sell"
    },
    "145": {
        "verb": "Persuade"
    },
    "146": {
        "verb": "Arrange"
    },
    "147": {
        "verb": "Exclaim"
    },
    "148": {
        "verb": "Infringe"
    },
    "149": {
        "verb": "Offend"
    },
    "150": {
        "verb": "Dream"
    },
    "151": {
        "verb": "Irritate"
    },
    "152": {
        "verb": "Whittle"
    },
    "153": {
        "verb": "Give"
    },
    "154": {
        "verb": "Enquire"
    },
    "155": {
        "verb": "Elude"
    },
    "156": {
        "verb": "Inform"
    },
    "157": {
        "verb": "Ensnare"
    },
    "158": {
        "verb": "Ambush"
    },
    "159": {
        "verb": "Broadcast"
    },
    "160": {
        "verb": "Command"
    },
    "161": {
        "verb": "Recruit"
    },
    "162": {
        "verb": "Deride"
    },
    "163": {
        "verb": "Escape"
    },
    "164": {
        "verb": "Bargain"
    },
    "165": {
        "verb": "Distress"
    },
    "166": {
        "verb": "Denounce"
    },
    "167": {
        "verb": "Leap"
    },
    "168": {
        "verb": "Gather"
    },
    "169": {
        "verb": "Free"
    },
    "170": {
        "verb": "Wave"
    },
    "171": {
        "verb": "End"
    },
    "172": {
        "verb": "Deal"
    },
    "173": {
        "verb": "Praise"
    },
    "174": {
        "verb": "Collide"
    },
    "175": {
        "verb": "Bite"
    },
    "176": {
        "verb": "Obscure"
    },
    "177": {
        "verb": "Rejoice"
    },
    "178": {
        "verb": "Bark"
    },
    "179": {
        "verb": "Complain"
    },
    "180": {
        "verb": "Conceal"
    },
    "181": {
        "verb": "Trap"
    },
    "182": {
        "verb": "Intoxicate"
    },
    "183": {
        "verb": "Suffer"
    },
    "184": {
        "verb": "Travel"
    },
    "185": {
        "verb": "Endorse"
    },
    "186": {
        "verb": "Volunteer"
    },
    "187": {
        "verb": "Wait"
    },
    "188": {
        "verb": "Ban"
    },
    "189": {
        "verb": "Deceive"
    },
    "190": {
        "verb": "Leer"
    },
    "191": {
        "verb": "Spit"
    },
    "192": {
        "verb": "Riot"
    },
    "193": {
        "verb": "Stab"
    },
    "194": {
        "verb": "Dress"
    },
    "195": {
        "verb": "Befriend"
    },
    "196": {
        "verb": "Mesmerize"
    },
    "197": {
        "verb": "Unite"
    },
    "198": {
        "verb": "Drop"
    },
    "199": {
        "verb": "Grapple"
    },
    "200": {
        "verb": "Bow"
    },
    "201": {
        "verb": "Faint"
    },
    "202": {
        "verb": "Run"
    },
    "203": {
        "verb": "Transport"
    },
    "204": {
        "verb": "Eat"
    },
    "205": {
        "verb": "Wreck"
    },
    "206": {
        "verb": "Enjoy"
    },
    "207": {
        "verb": "Gallop"
    },
    "208": {
        "verb": "Endanger"
    },
    "209": {
        "verb": "Abuse"
    },
    "210": {
        "verb": "Carve"
    },
    "211": {
        "verb": "Lunge"
    },
    "212": {
        "verb": "Resurrect"
    },
    "213": {
        "verb": "Push"
    },
    "214": {
        "verb": "Maim"
    },
    "215": {
        "verb": "Erect"
    },
    "216": {
        "verb": "Queue"
    },
    "217": {
        "verb": "Carry"
    },
    "218": {
        "verb": "Frighten"
    },
    "219": {
        "verb": "Decree"
    },
    "220": {
        "verb": "Displease"
    },
    "221": {
        "verb": "Unveil"
    },
    "222": {
        "verb": "Frame"
    },
    "223": {
        "verb": "Blab"
    },
    "224": {
        "verb": "Enter"
    },
    "225": {
        "verb": "Threaten"
    },
    "226": {
        "verb": "Recount"
    },
    "227": {
        "verb": "Patrol"
    },
    "228": {
        "verb": "Petition"
    },
    "229": {
        "verb": "Belittle"
    },
    "230": {
        "verb": "Break"
    },
    "231": {
        "verb": "Bestow"
    },
    "232": {
        "verb": "Scrounge"
    },
    "233": {
        "verb": "Gossip"
    },
    "234": {
        "verb": "Bemoan"
    },
    "235": {
        "verb": "Hit"
    },
    "236": {
        "verb": "Bash"
    },
    "237": {
        "verb": "Imprison"
    },
    "238": {
        "verb": "Conjure"
    },
    "239": {
        "verb": "Entertain"
    },
    "240": {
        "verb": "Throw"
    },
    "241": {
        "verb": "Ship"
    },
    "242": {
        "verb": "Shout"
    },
    "243": {
        "verb": "Bother"
    },
    "244": {
        "verb": "Market"
    },
    "245": {
        "verb": "Capture"
    },
    "246": {
        "verb": "Seduce"
    },
    "247": {
        "verb": "Falsify"
    },
    "248": {
        "verb": "Flaunt"
    },
    "249": {
        "verb": "Glimpse"
    },
    "250": {
        "verb": "Fracture"
    },
    "251": {
        "verb": "Celebrate"
    },
    "252": {
        "verb": "Compliment"
    },
    "253": {
        "verb": "Evacuate"
    },
    "254": {
        "verb": "Show"
    },
    "255": {
        "verb": "Vandalize"
    },
    "256": {
        "verb": "Punch"
    },
    "257": {
        "verb": "Drag"
    },
    "258": {
        "verb": "Fuss"
    },
    "259": {
        "verb": "Nag"
    },
    "260": {
        "verb": "Jostle"
    },
    "261": {
        "verb": "Gleam"
    },
    "262": {
        "verb": "Consider"
    },
    "263": {
        "verb": "Cheat"
    },
    "264": {
        "verb": "Implore"
    },
    "265": {
        "verb": "Violate"
    },
    "266": {
        "verb": "Scream"
    },
    "267": {
        "verb": "Pounce"
    },
    "268": {
        "verb": "Gift"
    },
    "269": {
        "verb": "Mimic"
    },
    "270": {
        "verb": "Persecute"
    },
    "271": {
        "verb": "Wield"
    },
    "272": {
        "verb": "Deface"
    },
    "273": {
        "verb": "Weep"
    },
    "274": {
        "verb": "Ignite"
    },
    "275": {
        "verb": "Enchant"
    },
    "276": {
        "verb": "Frustrate"
    },
    "277": {
        "verb": "Provide"
    },
    "278": {
        "verb": "Manhandle"
    },
    "279": {
        "verb": "Audition"
    },
    "280": {
        "verb": "Help"
    },
    "281": {
        "verb": "Discipline"
    },
    "282": {
        "verb": "Dismount"
    },
    "283": {
        "verb": "Blame"
    },
    "284": {
        "verb": "Barter"
    },
    "285": {
        "verb": "Charm"
    },
    "286": {
        "verb": "Search"
    },
    "287": {
        "verb": "Devour"
    },
    "288": {
        "verb": "Execute"
    },
    "289": {
        "verb": "Scamper"
    },
    "290": {
        "verb": "Arise"
    },
    "291": {
        "verb": "Flee"
    },
    "292": {
        "verb": "Secure"
    },
    "293": {
        "verb": "Abolish"
    },
    "294": {
        "verb": "Entangle"
    },
    "295": {
        "verb": "Amaze"
    },
    "296": {
        "verb": "Dispel"
    },
    "297": {
        "verb": "Decompose"
    },
    "298": {
        "verb": "Approach"
    },
    "299": {
        "verb": "Exchange"
    },
    "300": {
        "verb": "Address"
    },
    "301": {
        "verb": "Terrify"
    },
    "302": {
        "verb": "Perform"
    },
    "303": {
        "verb": "Enshrine"
    },
    "304": {
        "verb": "Drum"
    },
    "305": {
        "verb": "Raid"
    },
    "306": {
        "verb": "Unleash"
    },
    "307": {
        "verb": "Brag"
    },
    "308": {
        "verb": "Damage"
    },
    "309": {
        "verb": "Conflict"
    },
    "310": {
        "verb": "Careen"
    },
    "311": {
        "verb": "Arouse"
    },
    "312": {
        "verb": "Inspect"
    },
    "313": {
        "verb": "Goggle"
    },
    "314": {
        "verb": "Assemble"
    },
    "315": {
        "verb": "Murder"
    },
    "316": {
        "verb": "Lurk"
    },
    "317": {
        "verb": "Intimidate"
    },
    "318": {
        "verb": "Welcome"
    },
    "319": {
        "verb": "Victimize"
    },
    "320": {
        "verb": "Speak"
    },
    "321": {
        "verb": "Contact"
    },
    "322": {
        "verb": "Ransack"
    },
    "323": {
        "verb": "Apprehend"
    },
    "324": {
        "verb": "Steal"
    },
    "325": {
        "verb": "Cook"
    },
    "326": {
        "verb": "Goad"
    },
    "327": {
        "verb": "Play"
    },
    "328": {
        "verb": "Remark"
    },
    "329": {
        "verb": "Involve"
    },
    "330": {
        "verb": "Assault"
    },
    "331": {
        "verb": "Attack"
    },
    "332": {
        "verb": "Vanish"
    },
    "333": {
        "verb": "Discriminate"
    },
    "334": {
        "verb": "Accuse"
    },
    "335": {
        "verb": "Crowd"
    },
    "336": {
        "verb": "Besiege"
    },
    "337": {
        "verb": "Salute"
    },
    "338": {
        "verb": "Contestconverse"
    },
    "339": {
        "verb": "Reveal"
    },
    "340": {
        "verb": "Blunder"
    },
    "341": {
        "verb": "Astonish"
    },
    "342": {
        "verb": "Applaud"
    },
    "343": {
        "verb": "Overturn"
    },
    "344": {
        "verb": "Pelt"
    },
    "345": {
        "verb": "Alarm"
    },
    "346": {
        "verb": "Engage"
    },
    "347": {
        "verb": "Pursue"
    },
    "348": {
        "verb": "Quarrel"
    },
    "349": {
        "verb": "Pry"
    },
    "350": {
        "verb": "Inspire"
    },
    "351": {
        "verb": "Enforce"
    },
    "352": {
        "verb": "Revolt"
    },
    "353": {
        "verb": "Surround"
    },
    "354": {
        "verb": "Grieve"
    },
    "355": {
        "verb": "Lecture"
    },
    "356": {
        "verb": "Prosecute"
    },
    "357": {
        "verb": "Duplicate"
    },
    "358": {
        "verb": "Dispute"
    },
    "359": {
        "verb": "Oppress"
    },
    "360": {
        "verb": "Fret"
    },
    "361": {
        "verb": "Renege"
    },
    "362": {
        "verb": "Jeer"
    },
    "363": {
        "verb": "Repair"
    },
    "364": {
        "verb": "Recite"
    },
    "365": {
        "verb": "Despair"
    },
    "366": {
        "verb": "Beguile"
    },
    "367": {
        "verb": "Fling"
    },
    "368": {
        "verb": "Aggravate"
    },
    "369": {
        "verb": "Scavenge"
    },
    "370": {
        "verb": "Translate"
    },
    "371": {
        "verb": "Exaggerate"
    },
    "372": {
        "verb": "Wrestle"
    },
    "373": {
        "verb": "Blast"
    },
    "374": {
        "verb": "Prowl"
    },
    "375": {
        "verb": "Disturb"
    },
    "376": {
        "verb": "Deliver"
    },
    "377": {
        "verb": "Startle"
    },
    "378": {
        "verb": "Evict"
    },
    "379": {
        "verb": "Challenge"
    },
    "380": {
        "verb": "Protest"
    },
    "381": {
        "verb": "Parade"
    },
    "382": {
        "verb": "Thank"
    },
    "383": {
        "verb": "Pronounce"
    },
    "384": {
        "verb": "Plead"
    },
    "385": {
        "verb": "Badmouth"
    },
    "386": {
        "verb": "Infest"
    },
    "387": {
        "verb": "Annoy"
    },
    "388": {
        "verb": "Impede"
    },
    "389": {
        "verb": "Kick"
    },
    "390": {
        "verb": "Evade"
    },
    "391": {
        "verb": "Bequeath"
    },
    "392": {
        "verb": "Dedicate"
    },
    "393": {
        "verb": "Strangle"
    },
    "394": {
        "verb": "Kill"
    },
    "395": {
        "verb": "Enrich"
    },
    "396": {
        "verb": "Caress"
    },
    "397": {
        "verb": "Misspell"
    },
    "398": {
        "verb": "Annihilate"
    },
    "399": {
        "verb": "Strike"
    },
    "400": {
        "verb": "Suspect"
    },
    "401": {
        "verb": "Hamper"
    },
    "402": {
        "verb": "Follow"
    },
    "403": {
        "verb": "Sing"
    },
    "404": {
        "verb": "Gaze"
    },
    "405": {
        "verb": "Corner"
    },
    "406": {
        "verb": "Boast"
    },
    "407": {
        "verb": "Harm"
    },
    "408": {
        "verb": "Contaminate"
    },
    "409": {
        "verb": "Demolish"
    },
    "410": {
        "verb": "Dance"
    },
    "411": {
        "verb": "Gamble"
    },
    "412": {
        "verb": "Lose"
    },
    "413": {
        "verb": "Bellow"
    },
    "414": {
        "verb": "Assassinate"
    },
    "415": {
        "verb": "Restrain"
    },
    "416": {
        "verb": "Instigate"
    },
    "417": {
        "verb": "Crown"
    },
    "418": {
        "verb": "Ask"
    },
    "419": {
        "verb": "Joke"
    },
    "420": {
        "verb": "Rob"
    },
    "421": {
        "verb": "Obstruct"
    },
    "422": {
        "verb": "Arrest"
    },
    "423": {
        "verb": "Bewitch"
    },
    "424": {
        "verb": "Disperse"
    },
    "425": {
        "verb": "Proclaim"
    },
    "426": {
        "verb": "Bless"
    },
    "427": {
        "verb": "Customize"
    },
    "428": {
        "verb": "Discover"
    },
    "429": {
        "verb": "Argue"
    },
    "430": {
        "verb": "Disgust"
    },
    "431": {
        "verb": "Dash"
    },
    "432": {
        "verb": "Write"
    },
    "433": {
        "verb": "Rebel"
    },
    "434": {
        "verb": "Engineer"
    },
    "435": {
        "verb": "Barricade"
    },
    "436": {
        "verb": "Antagonize"
    },
    "437": {
        "verb": "Freeze"
    },
    "438": {
        "verb": "Dupe"
    },
    "439": {
        "verb": "Penalize"
    },
    "440": {
        "verb": "Enlarge"
    },
    "441": {
        "verb": "Discuss"
    },
    "442": {
        "verb": "Employ"
    },
    "443": {
        "verb": "Disappear"
    },
    "444": {
        "verb": "Fall"
    },
    "445": {
        "verb": "Worship"
    },
    "446": {
        "verb": "Dump"
    },
    "447": {
        "verb": "Lament"
    },
    "448": {
        "verb": "Display"
    },
    "449": {
        "verb": "Enlist"
    },
    "450": {
        "verb": "Research"
    },
    "451": {
        "verb": "Avert"
    },
    "452": {
        "verb": "Look"
    },
    "453": {
        "verb": "Infect"
    },
    "454": {
        "verb": "Torture"
    },
    "455": {
        "verb": "Flirt"
    },
    "456": {
        "verb": "Query"
    },
    "457": {
        "verb": "Dare"
    },
    "458": {
        "verb": "Beckon"
    },
    "459": {
        "verb": "Earn"
    },
    "460": {
        "verb": "Bribe"
    },
    "461": {
        "verb": "Parley"
    },
    "462": {
        "verb": "Overhear"
    },
    "463": {
        "verb": "Taunt"
    },
    "464": {
        "verb": "Endear"
    },
    "465": {
        "verb": "Exhibit"
    },
    "466": {
        "verb": "Baptize"
    },
    "467": {
        "verb": "Condemn"
    },
    "468": {
        "verb": "Disrespect"
    },
    "469": {
        "verb": "Overpower"
    },
    "470": {
        "verb": "Dig"
    },
    "471": {
        "verb": "Fashion"
    },
    "472": {
        "verb": "Deduce"
    },
    "473": {
        "verb": "Yell"
    },
    "474": {
        "verb": "Bet"
    },
    "475": {
        "verb": "Hide"
    },
    "476": {
        "verb": "Spill"
    },
    "477": {
        "verb": "Belch"
    },
    "478": {
        "verb": "Decline"
    },
    "479": {
        "verb": "Protect"
    },
    "480": {
        "verb": "Yield"
    },
    "481": {
        "verb": "Interfere"
    },
    "482": {
        "verb": "Shove"
    },
    "483": {
        "verb": "Enroll"
    },
    "484": {
        "verb": "Corrupt"
    },
    "485": {
        "verb": "Kiss"
    },
    "486": {
        "verb": "Mob"
    },
    "487": {
        "verb": "Giggle"
    },
    "488": {
        "verb": "Tease"
    },
    "489": {
        "verb": "Mutilate"
    },
    "490": {
        "verb": "Confuse"
    },
    "491": {
        "verb": "Disarm"
    },
    "492": {
        "verb": "Forgive"
    },
    "493": {
        "verb": "Experiment"
    },
    "494": {
        "verb": "Tug"
    },
    "495": {
        "verb": "Win"
    },
    "496": {
        "verb": "Demand"
    },
    "497": {
        "verb": "Interrogate"
    },
    "498": {
        "verb": "Scare"
    },
    "499": {
        "verb": "Appeal"
    },
    "500": {
        "verb": "Disgrace"
    }
}

const table_verb_count = Object.keys(table_verb).length;