var sources = [
  {
    name: "Tesla Website",
    link: "https://www.tesla.com"
  },
  {
    name: "Tesla Unveils Model 3",
    link: "https://vimeo.com/161138986"
  },
  {
    name: "Tesla Motors (TSLA) 1Q 2016 Sales: 14,820 Model S, Model X Cars Were Delivered In First Three Months; Model S Sales Jumped 45%",
    link: "http://www.ibtimes.com/tesla-motors-tsla-1q-2016-sales-14820-model-s-model-x-cars-were-delivered-first-three-2348000"
  },
  {
    name: "The Big Privacy Takeaway From Tesla vs. The New York Times",
    link: "http://www.forbes.com/sites/kashmirhill/2013/02/19/the-big-privacy-takeaway-from-tesla-vs-the-new-york-times/#74a975ef1630"
  },
  {
    name: "All Tesla Cars Being Produced Now Have Full Self-Driving Hardware",
    link: "https://www.tesla.com/blog/all-tesla-cars-being-produced-now-have-full-self-driving-hardware"
  },
  {
    name: "Tesla’s Self-Driving Car Plan Seems Insane, But It Just Might Work",
    link: "https://www.wired.com/2016/10/teslas-self-driving-car-plan-seems-insane-just-might-work/"
  },
  {
    name: "Elon Musk Says Every New Tesla Can Drive Itself",
    link: "https://www.wired.com/2016/10/elon-musk-says-every-new-tesla-can-drive/"
  },
  {
    name: "Top Misconceptions of Autonomous Cars and Self-Driving Vehicles",
    link: "http://www.driverless-future.com/?page_id=774"
  },
  {
    name: "How Tesla Will Change The World",
    link: "http://waitbutwhy.com/2015/06/how-tesla-will-change-your-life.html"
  },
  {
    name: "Why Is It So Hard To Convince People To Care About Privacy?",
    link: "https://www.theguardian.com/technology/2015/oct/02/why-is-it-so-hard-to-convince-people-to-care-about-privacy"
  },
  {
    name: "Tesla driver killed in crash with Autopilot active, NHTSA investigating",
    link: "http://www.theverge.com/2016/6/30/12072408/tesla-autopilot-car-crash-death-autonomous-model-s"
  },
  {
    name: "The Potential Societal Advantages of a Telematics Data Exchange",
    link: "http://www.propertycasualty360.com/2016/04/27/the-potential-societal-advantages-of-a-telematics"
  },
  {
    name: "How Will Consumers Benefit From Connected Cars?",
    link: "http://www.forbes.com/sites/janakirammsv/2016/06/06/how-will-consumers-benefit-from-connected-cars/#5f6bbdc64051"
  },
  {
    name: "Tesla Model S P100D: The App!",
    link: "https://www.youtube.com/watch?v=KXr6ZNwWPXE"
  },
  {
    name: "Tesla Model S P100D: The Options!",
    link: "https://www.youtube.com/watch?v=iHwC92t2yQ4"
  },
  {
    name: "Here's What Happened With Faraday Future's Failed Self-Driving Demo",
    link: "http://jalopnik.com/heres-what-happened-with-faraday-futures-failed-self-dr-1791005619"
  },
  {
    name: "5 Important Things The Movies Teach Us About Self-Driving Cars",
    link: "http://gearheads.org/5-important-things-the-movies-teach-us-about-self-driving-cars/"
  },
  {
    name: "A Tragic Loss",
    link: "https://www.tesla.com/blog/tragic-loss"
  },
  {
    name: "Tesla Hackers Explain How They Did It At Defcon",
    link: "https://www.cnet.com/roadshow/news/tesla-hackers-explain-how-they-did-it-at-def-con-23/"
  },
  {
    name: "DEF CON",
    link: "https://en.wikipedia.org/wiki/DEF_CON"
  },
  {
    name: "Definition of Metadata",
    link: "http://whatis.techtarget.com/definition/metadata"
  },
  {
    name: "George Orwell’s 1984",
    link: "http://www.sparknotes.com/lit/1984/"
  },
  {
    name: "Tesla Motors (TSLA) 1Q 2016 Sales: 14,820 Model S, Model X Cars Were Delivered In First Three Months; Model S Sales Jumped 45%",
    link: "http://www.ibtimes.com/tesla-motors-tsla-1q-2016-sales-14820-model-s-model-x-cars-were-delivered-first-three-2348000"
  },
  {
    name: "Americans Spend an Average of 17,600 Minutes Driving Each Year",
    link: "http://newsroom.aaa.com/2016/09/americans-spend-average-17600-minutes-driving-year/"
  }
]

for (var i = 0; i < sources.length; i++) {
  var lowest = sources[i] // Set initial lowest
  var lowestIndex = i // Initial index

  for (var j = i; j < sources.length; j++) {
    // Find any that are lower in the rest of the array
    var current = sources[j]
    if (current.name.charAt(0) <= lowest.name.charAt(0)) { // First character lower
      lowest = current
      lowestIndex = j
    }
  }

  // Swap
  var temp = sources[i]
  sources[i] = lowest
  sources[lowestIndex] = temp
}

// Print alphabetized
for (var i = 0; i < sources.length; i++) {
  console.log(sources[i].name);
  console.log(sources[i].link);
  console.log(); // Line break
}
