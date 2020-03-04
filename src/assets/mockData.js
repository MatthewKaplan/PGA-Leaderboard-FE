const mockNews = [
    {
      "NewsID": 8204,
      "PlayerID": 40000045,
      "Title": "An T4; tied for season lead in top 10s with 5",
      "Content": "Playing out of the eighth-to-last twosome, World No. 52 Byeong Hun An crafted a 3-under-par 31-36=67 in the final round of The Honda Classic to conclude on 3-under 277, up 10 spots to T4, three short of champion and countryman Sungjae Im, who carded a day- and week-tying-low 66.",
      "Url": "http://www.rotoworld.com/player/gol/1552/byeong-hun-an",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-03-01T19:32:00"
    },
    {
      "NewsID": 8203,
      "PlayerID": 40000115,
      "Title": "Berger connects three top 10s for first time",
      "Content": "Playing out of the third-to-last twosome, World No. 123 Daniel Berger birdied three of his final four holes for a 1-under-par 35-34=69 in the final round of The Honda Classic, up one spot to a season-best T4 on 3-under 277, three adrift of champion Sungjae Im, who fired a day- and week-tying-low 66 one group ahead.",
      "Url": "http://www.rotoworld.com/player/gol/2120/daniel-berger",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-03-01T19:11:00"
    },
    {
      "NewsID": 8202,
      "PlayerID": 40001543,
      "Title": "Westwood T4; ranked No. 2 in SGP for the week",
      "Content": "Playing out of the penultimate twosome, sponsor invite and non-member Lee Westwood carved out an even-par 36-34=70 in the final round of The Honda Classic to post 3-under 277, dipping one spot to season-best T4, three short of champion Sungjae Im, who carded a day- and week-tying-low 66 out of the fourth-to-last twosome.",
      "Url": "http://www.rotoworld.com/player/gol/166/lee-westwood",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-03-01T18:57:00"
    },
    {
      "NewsID": 8201,
      "PlayerID": 40000432,
      "Title": "Fleetwood fails to convert; settles for third",
      "Content": "Playing out of the final twosome, overnight leader by one and World No. 12 Tommy Fleetwood backed up with a 1-over-par 35-36=71 in the final round of The Honda Classic, falling two spots to solo 3rd on 4-under 276, two short of champion Sungjae Im, who fired a day- and week-tying-low 66 out of the fourth-to-last twosome.",
      "Url": "http://www.rotoworld.com/player/gol/2090/tommy-fleetwood",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-03-01T18:42:00"
    },
    {
      "NewsID": 8200,
      "PlayerID": 40000659,
      "Title": "Hughes solo 2nd after made cut on the number",
      "Content": "Playing out of the fourth-to-last twosome, World No. 308 Mackenzie Hughes tossed up a day- and week-tying-low 4-under-par 33-33=66 in the final round of The Honda Classic to reach 5-under 275, up six places to a season-best solo 2nd, one shy of playing competitor and champion Sungjae Im, who also carded a 66.",
      "Url": "http://www.rotoworld.com/player/gol/1962/mackenzie-hughes",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-03-01T18:27:00"
    },
    {
      "NewsID": 8199,
      "PlayerID": 40002605,
      "Title": "Sungjae Im claims Honda for first TOUR title",
      "Content": "Playing out of the fourth-to-last twosome, World No. 34 and reigning PGA TOUR Rookie of the Year Sungjae Im erased a three-shot deficit with a day- and week-tying-low 4-under-par 32-34=66 in the final round of The Honda Classic for a 72-hole tally of 6-under 274, up four spots on the day and good for a one-shot victory over playing competitor and runner-up Mackenzie Hughes, who also fired a 66.",
      "Url": "http://www.rotoworld.com/player/gol/2718/sungjae-im",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-03-01T18:13:00"
    },
    {
      "NewsID": 8198,
      "PlayerID": 40003478,
      "Title": "Sensational Valimaki wins the Oman Open",
      "Content": "250/1 Finnish outsider Sami Valimaki claimed the Oman Open, defeating Brandon Stone at the third extra hole after carding a 2-under-par 36-34=70 for a 13-under total of 275 at Al Mouj Golf.",
      "Url": "http://www.rotoworld.com/player/gol/2966/sami-valimaki",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-03-01T08:23:00"
    },
    {
      "NewsID": 8197,
      "PlayerID": 40000115,
      "Title": "Berger climbs the ladder at Honda with R3 69",
      "Content": "World No. 123 Daniel Berger walked off with bogey-6 but still gained ground with a 1-under-par 33-36=69 in the third round of The Honda Classic, climbing 10 places to T5 on 2-under 208, three adrift of 54-hole leader Tommy Fleetwood (67). <b>UPDATE:</b> <i>This is Berger's first time in the top 10 after 54 holes since T1 at the 2018 U.S. Open (Shinnecock Hills) 36 starts ago, where he finished T6 after a 3-over 73.</i>",
      "Url": "http://www.rotoworld.com/player/gol/2120/daniel-berger",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-29T19:00:00"
    },
    {
      "NewsID": 8196,
      "PlayerID": 40001543,
      "Title": "Westwood, 46, hanging around @ Honda w/ R3 71",
      "Content": "Playing out of the penultimate twosome, non-member and sponsor invite Lee Westwood handed in a 1-over-par 36-35=71 after the third round of The Honda Classic for a 54-hole total of 3-under 207, down one spot into a two-way T3, two shy of leader and countryman Tommy Fleetwood (67).",
      "Url": "http://www.rotoworld.com/player/gol/166/lee-westwood",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-29T18:44:00"
    },
    {
      "NewsID": 8195,
      "PlayerID": 40000345,
      "Title": "Past champ Donald stays in hunt after R3 71",
      "Content": "Playing out of the penultimate twosome, past champ (2006) and World No. 456 Luke Donald signed for a 1-over-par 34-37=71 after the third round of The Honda Classic to post 3-under 207, down one place into a two-way T3, two back of 54-hole leader and countryman Tommy Fleetwood (67).",
      "Url": "http://www.rotoworld.com/player/gol/314/luke-donald",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-29T18:32:00"
    },
    {
      "NewsID": 8194,
      "PlayerID": 40001369,
      "Title": "Steele dips after R3 71; now solo 2nd, 1 back",
      "Content": "Playing out of the final twosome, overnight leader and World No. 171 Brendan Steele patched together a 1-over-par 35-36=71 in the third round of The Honda Classic, dipping one place to solo 2nd on 4-under 206, one adrift of leader Tommy Fleetwood, who carded a 67.",
      "Url": "http://www.rotoworld.com/player/gol/1709/brendan-steele",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-29T18:20:00"
    },
    {
      "NewsID": 8193,
      "PlayerID": 40000432,
      "Title": "Fleetwood R3 67; leads Honda Classic by one",
      "Content": "Playing out of the sixth-to-last twosome, World No. 12 Tommy Fleetwood painted a 3-under-par 34-33=67 in the third round of The Honda Classic to reach 5-under 205, up eight spots on the day and good for a one-shot lead over 36-hole leader Brendan Steele, who carved out a 1-over 71 out of the final twosome.",
      "Url": "http://www.rotoworld.com/player/gol/2090/tommy-fleetwood",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-29T18:10:00"
    },
    {
      "NewsID": 8192,
      "PlayerID": 40000659,
      "Title": "Hughes made cut on number; now T8 w/ R3 66",
      "Content": "World No. 308 Mackenzie Hughes finished birdie-birdie en route to a 4-under-par 33-33=66 in the third round of The Honda Classic to post 1-under 209, up 51 places on the live leaderboard to T8, good for the low round of the day and four short of clubhouse leader Tommy Fleetwood (67).",
      "Url": "http://www.rotoworld.com/player/gol/1962/mackenzie-hughes",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-29T17:07:00"
    },
    {
      "NewsID": 8191,
      "PlayerID": 40003220,
      "Title": "Can R. Hojgaard emulate Kitayama double?",
      "Content": "Rasmus Hojgaard recovered from a front nine stumble to card 2-under-par 36-34=70, complete a total of 11-under 205 and join Sami Valimaki, Mikko Korhonen, Callum Shinkwin, Brandon Stone and Joost Luiten with the lead in the Oman Open.",
      "Url": "http://www.rotoworld.com/player/gol/2941/rasmus-hojgaard",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-29T08:13:00"
    },
    {
      "NewsID": 8190,
      "PlayerID": 40000893,
      "Title": "Luiten part of 6-way lead in Oman Open",
      "Content": "Joost Luiten crafted a 5-under-par 35-32=67 in the third round of the Oman Open at Al Mouj Golf to total 11-under 205 and join Sami Valimaki, Mikko Korhonen, Callum Shinkwin, Brandon Stone and Rasmus Hojgaard in a share of the lead.",
      "Url": "http://www.rotoworld.com/player/gol/1746/joost-luiten",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-29T07:56:00"
    },
    {
      "NewsID": 8189,
      "PlayerID": 40001632,
      "Title": "Stone joins the six-way 54-hole lead in Oman",
      "Content": "Brandon Stone joined Sami Valimaki, Mikko Korhonen, Callum Shinkwin, Joost Luiten and Rasmus Hojgaard in a share of the third round lead at the Oman Open with a Saturday 5-under-par 34-33=67 that lifted him to 11-under 205.",
      "Url": "http://www.rotoworld.com/player/gol/2322/brandon-stone",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-29T07:40:00"
    },
    {
      "NewsID": 8188,
      "PlayerID": 40003478,
      "Title": "Valimaki strikes 64, six share lead in Oman",
      "Content": "Unheralded Finn Sami Valimaki torched Al Mouj Golf with a stunning 8-under-par 32-32=64 that lifted him to 11-under 205 after 54 holes of the Oman Open, good for a share of the six-way tie at the top, alongside Mikko Korhonen, Callum Shinkwin, Brandon Stone, Joost Luiten and Rasmus Hojgaard.",
      "Url": "http://www.rotoworld.com/player/gol/2966/sami-valimaki",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-29T07:34:00"
    },
    {
      "NewsID": 8187,
      "PlayerID": 40000003,
      "Title": "Past champ Fowler lowlights MCs at Honda",
      "Content": "Past champ and World No. 25 Rickie Fowler, a pre-tourney 15/1 outright, navigated a 2-under-par 33-35=68 in the second round of The Honda Classic to post 4-over 144, up 62 spots on the day but missing the cut by one shot.",
      "Url": "http://www.rotoworld.com/player/gol/1294/rickie-fowler",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-28T19:04:00"
    },
    {
      "NewsID": 8186,
      "PlayerID": 40001525,
      "Title": "Watney R2 66; improves to 8-for-8 at Honda",
      "Content": "World No. 224 Nick Watney smoothed a bogey-free 4-under-par 33-33=66 in the second round of The Honda Classic to reach 3-under 137, up 43 places on the live leaderboard to T5, two shy of leader and fellow California native Brendan Steele (67), and matching the low round of the day with three others.",
      "Url": "http://www.rotoworld.com/player/gol/685/nick-watney",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-28T18:31:00"
    },
    {
      "NewsID": 8185,
      "PlayerID": 40000432,
      "Title": "Cold flat stick tempers Fleetwood in Round 2",
      "Content": "World No. 12 Tommy Fleetwood walked off with a disappointing three-putt par at the 18th, but is up 16 spots on the day to T7 after a 2-under-par 31-37=68 in the second round of The Honda Classic.",
      "Url": "http://www.rotoworld.com/player/gol/2090/tommy-fleetwood",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-28T18:06:00"
    },
    {
      "NewsID": 8184,
      "PlayerID": 40001369,
      "Title": "Brendan Steele has the lead by one at Honda",
      "Content": "Brendan Steele assumed control of The Honda Classic through 36 holes thanks to a second-round 3-under-par 34-33=67 and leads by one at 5-under 135. <b>UPDATE:</b> <i>This is Steele's eighth 36-hole lead/co-lead in 232 events, first in Florida. He's previously 1-for-7 converting (2011 Valero Texas Open), failing to convert his last seven chances.</i>",
      "Url": "http://www.rotoworld.com/player/gol/1709/brendan-steele",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-28T17:29:00"
    },
    {
      "NewsID": 8183,
      "PlayerID": 40001543,
      "Title": "Sponsor invite Westwood joins T1 with R2 69",
      "Content": "Beginning off No. 10 tee, sponsor invite and World No. 30 Lee Westwood authored a 1-under-par 33-36=69 in the second round of The Honda Classic for a 36-hole total of 4-under 136, up two spots into a five-way T1 and sharing the clubhouse lead with J.T. Poston (69) and Luke Donald (66). <b>UPDATE:</b> <i>With R2 completed, Westwood is T2, one back of leader Brendan Steele (67), and will play out of the penultimate twosome in R3 with countryman and past champ (2006) Luke Donald.</i>",
      "Url": "http://www.rotoworld.com/player/gol/166/lee-westwood",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-28T13:15:00"
    },
    {
      "NewsID": 8182,
      "PlayerID": 40000387,
      "Title": "Co-leader English backs up w/ R2 74 at Honda",
      "Content": "Playing this season on conditional status, overnight co-leader and World No. 194 Harris English labored to a 4-over-par 36-38=74 in the second round of The Honda Classic to post even-par 140, down 22 places on the live leaderboard to T23, four adrift of current co-leaders J.T. Poston (69) and Luke Donald (66).",
      "Url": "http://www.rotoworld.com/player/gol/1770/harris-english",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-28T12:58:00"
    },
    {
      "NewsID": 8181,
      "PlayerID": 40000266,
      "Title": "Colsaerts best of the R2 afternoon starters",
      "Content": "Two birdie-bursts allowed Nicolas Colsaerts to card 5-under-par 35-32=67 and grab a share of third on 8-under 136 at the halfway stage of the Oman Open at Al Mouj Golf.",
      "Url": "http://www.rotoworld.com/player/gol/1745/nicolas-colsaerts",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-28T08:19:00"
    },
    {
      "NewsID": 8180,
      "PlayerID": 40002732,
      "Title": "Samooja 9 birdies and 1 eagle in Oman R2 65",
      "Content": "World No. 206 Kalle Samooja had a crazy morning at the Oman Open Friday, splashing his card with 10 par breakers and a triple bogey-7 in a wild 7-under-par 33-32=65 to advance his score to 8-under 136 at the midpoint, good enough for solo third place with the afternoon session in play.",
      "Url": "http://www.rotoworld.com/player/gol/2881/kalle-samooja",
      "Source": "NBCSports.com",
      "TermsOfUse": "NBCSports.com feeds in the RSS format are provided free of charge for use by individuals for personal, non-commercial uses. More details here: http://fantasydata.com/resources/rotoworld-rss-feed.aspx",
      "Updated": "2020-02-28T05:02:00"
    }
]

const mockCleanNews = [
    {
      "Title": "An T4; tied for season lead in top 10s with 5"
    },
    {
      "Title": "Berger connects three top 10s for first time"
    },
    {
      "Title": "Westwood T4; ranked No. 2 in SGP for the week"
    },
    {
      "Title": "Fleetwood fails to convert; settles for third"
    },
    {
      "Title": "Hughes solo 2nd after made cut on the number"
    },
    {
      "Title": "Sungjae Im claims Honda for first TOUR title"
    },
    {
      "Title": "Sensational Valimaki wins the Oman Open"
    },
    {
      "Title": "Berger climbs the ladder at Honda with R3 69"
    },
    {
      "Title": "Westwood, 46, hanging around @ Honda w/ R3 71"
    },
    {
      "Title": "Past champ Donald stays in hunt after R3 71"
    },
    {
      "Title": "Steele dips after R3 71; now solo 2nd, 1 back"
    },
    {
      "Title": "Fleetwood R3 67; leads Honda Classic by one"
    },
    {
      "Title": "Hughes made cut on number; now T8 w/ R3 66"
    },
    {
      "Title": "Can R. Hojgaard emulate Kitayama double?"
    },
    {
      "Title": "Luiten part of 6-way lead in Oman Open"
    },
    {
      "Title": "Stone joins the six-way 54-hole lead in Oman"
    },
    {
      "Title": "Valimaki strikes 64, six share lead in Oman"
    },
    {
      "Title": "Past champ Fowler lowlights MCs at Honda"
    },
    {
      "Title": "Watney R2 66; improves to 8-for-8 at Honda"
    },
    {
      "Title": "Cold flat stick tempers Fleetwood in Round 2"
    },
    {
      "Title": "Brendan Steele has the lead by one at Honda"
    },
    {
      "Title": "Sponsor invite Westwood joins T1 with R2 69"
    },
    {
      "Title": "Co-leader English backs up w/ R2 74 at Honda"
    },
    {
      "Title": "Colsaerts best of the R2 afternoon starters"
    },
    {
      "Title": "Samooja 9 birdies and 1 eagle in Oman R2 65"
    }
  ]

const mockPlayerData = [
  {
    "id": 1,
    "first_name": "Hideki",
    "last_name": "Matsuyama",
    "score": "75",
    "created_at": "2020-02-27T15:59:16.634Z",
    "updated_at": "2020-02-27T15:59:16.634Z"
  },
  {
    "id": 2,
    "first_name": "Tiger",
    "last_name": "Woods",
    "score": "71",
    "created_at": "2020-02-27T15:57:23.590Z",
    "updated_at": "2020-02-27T15:57:23.590Z"
  },
  {
    "id": 3,
    "first_name": "Chris",
    "last_name": "Stroud",
    "score": "68",
    "created_at": "2020-02-27T15:58:51.769Z",
    "updated_at": "2020-02-27T15:58:51.769Z"
  }
]

const mockSinglePlayerData = [
  {
    "id": 1,
    "first_name": "Hideki",
    "last_name": "Matsuyama",
    "score": "75",
    "created_at": "2020-02-27T15:59:16.634Z",
    "updated_at": "2020-02-27T15:59:16.634Z"
  }
]

const mockSinglePlayerObj = {
  "id": 22,
  "first_name": "Hideki",
  "last_name": "Matsuyama",
  "score": "75",
  "created_at": "2020-02-27T15:59:16.634Z",
  "updated_at": "2020-02-27T15:59:16.634Z"
}

module.exports = {
    mockNews,
    mockCleanNews,
    mockPlayerData,
    mockSinglePlayerData,
    mockSinglePlayerObj
}