dataSetVersion = "2021-08-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Expansion",
    key: "expansion",
    tooltip: "Check this to restrict to specific expansions.",
    checked: true,
    sub: [
      { name: "Core", key: "C" },
      { name: "Dark City", key: "DC" },
      { name: "Fantastic Four", key: "F4" },
	  { name: "Paint the Town Red", key: "PTTR" },
	  { name: "Villains", key: "V" },
	  { name: "Guardians of the Galaxy", key: "GG" },
	  { name: "Fear Itself", key: "FI" },
	  { name: "Secret Wars, Volume 1", key: "SW1" },
	  { name: "Secret Wars, Volume 2", key: "SW2" },
	  { name: "Captain America 75th Anniversary", key: "CA" },
	  { name: "Civil War", key: "CW" },
	  { name: "Deadpool", key: "DP" },
	  { name: "Noir", key: "NOIR" },
	  { name: "X-Men", key: "X" },
	  { name: "Spider-Man Homecoming", key: "SMH" },
	  { name: "Champions", key: "CHP" },
	  { name: "World War Hulk", key: "WWH" },
	  { name: "Marvel Studios, Phase 1", key: "MS" },
	  { name: "Ant-Man", key: "AM" },
	  { name: "Venom", key: "VN" },
	  { name: "Dimensions", key: "DM" },
	  { name: "Revelations", key: "RV" },
	  { name: "S.H.I.E.L.D.", key: "S" },
	  { name: "Heroes of Asgard", key: "HOA" },
	  { name: "The New Mutants", key: "NM" },
	  { name: "Into the Cosmos", key: "ITC" },
	  { name: "Realm of Kings", key: "ROK" }
    ]
  }
  ];

dataSet[dataSetVersion].characterData = [
  {
    name: "Doctor Doom",
    img: "https://i.imgur.com/oF8NBSL.jpg",
    opts: {
      expansion: ["C"]
    }
  },
   {
    name: "Magneto",
    img: "https://i.imgur.com/WOozHHk.jpg",
    opts: {
      expansion: ["C"]
    }
  },
   {
    name: "Loki",
    img: "https://i.imgur.com/NBIxkb4.jpg",
    opts: {
      expansion: ["C"]
    }
  },
   {
    name: "Red Skull",
    img: "https://i.imgur.com/AiRgqgP.jpg",
    opts: {
      expansion: ["C"]
    }
  },
   {
    name: "Galactus",
    img: "https://i.imgur.com/V3g3MNA.jpg",
    opts: {
      expansion: ["F4"]
    }
  },
   {
    name: "Mole Man",
    img: "https://i.imgur.com/biQ96VW.jpg",
    opts: {
      expansion: ["F4"]
    }
  },
   {
    name: "Apocalypse",
    img: "https://i.imgur.com/Xm26XdI.jpg",
    opts: {
      expansion: ["DC"]
    }
  },
   {
    name: "Carnage",
    img: "https://i.imgur.com/m1o0Ug1.jpg",
    opts: {
      expansion: ["PTTR"]
    }
  },
   {
    name: "Doctor Strange",
    img: "https://i.imgur.com/Q07eY5D.jpg",
    opts: {
      expansion: ["V"]
    }
  },
   {
    name: "Kingpin",
    img: "https://i.imgur.com/Vaadaen.jpg",
    opts: {
      expansion: ["DC"]
    }
  },
   {
    name: "Mephisto",
    img: "https://i.imgur.com/P6Rhpy9.jpg",
    opts: {
      expansion: ["DC"]
    }
  },
   {
    name: "Mr. Sinister",
    img: "https://i.imgur.com/k1yRPvF.jpg",
    opts: {
      expansion: ["DC"]
    }
  },
   {
    name: "Mysterio",
    img: "https://i.imgur.com/3UViAZx.jpg",
    opts: {
      expansion: ["PTTR"]
    }
  },
   {
    name: "Nick Fury",
    img: "https://i.imgur.com/OSXoAhN.jpg",
    opts: {
      expansion: ["V"]
    }
  },
   {
    name: "Odin",
    img: "https://i.imgur.com/UHYQLrP.jpg",
    opts: {
      expansion: ["V"]
    }
  },
   {
    name: "Professor X",
    img: "https://i.imgur.com/qCR6GaX.jpg",
    opts: {
      expansion: ["V"]
    }
  },
   {
    name: "Stryfe",
    img: "https://i.imgur.com/NAGs35H.jpg",
    opts: {
      expansion: ["DC"]
    }
  },
   {
    name: "Adrian Toomes",
    img: "https://i.imgur.com/HRtOV0m.jpeg",
    opts: {
      expansion: ["SMH"]
    }
  },
    {
    name: "Arcade",
    img: "https://i.imgur.com/mpNA0Wi.jpeg",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Authoritarian Iron Man",
    img: "https://i.imgur.com/6mPbNxZ.jpg",
    opts: {
      expansion: ["CW"]
    }
  },
    {
    name: "Belasco, Demon Lord of Limbo",
    img: "https://i.imgur.com/RI3jbkV.jpeg",
    opts: {
      expansion: ["NM"]
    }
  },
    {
    name: "The Beyonder",
    img: "https://i.imgur.com/Fh73cMz.jpeg",
    opts: {
      expansion: ["ITC"]
    }
  },
    {
    name: "Dark Phoenix",
    img: "https://i.imgur.com/e4waWEr.jpeg",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Deathbird",
    img: "https://i.imgur.com/sBJevOt.jpeg",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Emma Frost, The White Queen",
    img: "https://i.imgur.com/qnWMu2l.jpeg",
    opts: {
      expansion: ["NM"]
    }
  },
    {
    name: "Evil Deadpool",
    img: "https://i.imgur.com/hPxoqWt.jpeg",
    opts: {
      expansion: ["DP"]
    }
  },
    {
    name: "Fin Fang Foom",
    img: "https://i.imgur.com/eZ96qed.png",
    opts: {
      expansion: ["CHP"]
    }
  },
    {
    name: "The Grandmaster",
    img: "https://i.imgur.com/g0pjsfD.jpeg",
    opts: {
      expansion: ["ITC"]
    }
  },
    {
    name: "Grim Reaper",
    img: "https://i.imgur.com/Z6bH7RB.jpeg",
    opts: {
      expansion: ["RV"]
    }
  },
    {
    name: "Baron Heinrich Zemo",
    img: "https://i.imgur.com/jE99c7j.jpeg",
    opts: {
      expansion: ["CA"]
    }
  },
    {
    name: "Hela, Goddess of Death",
    img: "https://i.imgur.com/ggOm7qZ.jpeg",
    opts: {
      expansion: ["HOA"]
    }
  },
    {
    name: "Baron Helmut Zemo",
    img: "https://i.imgur.com/9mHIVgK.jpg",
    opts: {
      expansion: ["CW"]
    }
  },
    {
    name: "Hybrid",
    img: "https://i.imgur.com/zEd48qz.png",
    opts: {
      expansion: ["VN"]
    }
  },
    {
    name: "Hydra High Council",
    img: "https://i.imgur.com/2psMFmn.jpg",
    opts: {
      expansion: ["S"]
    }
  },
    {
    name: "King Hyperion",
    img: "https://i.imgur.com/Ak4Bwzy.jpg",
    opts: {
      expansion: ["SW2"]
    }
  },
    {
    name: "Illuminati, Secret Society",
    img: "https://i.imgur.com/1xcyRJx.jpg",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "Iron Monger",
    img: "https://i.imgur.com/vJgT7uM.jpg",
    opts: {
      expansion: ["MS1"]
    }
  },
    {
    name: "J. Jonah Jameson",
    img: "https://i.imgur.com/VPNcjIq.png",
    opts: {
      expansion: ["DM"]
    }
  },
    {
    name: "King Hulk, Sakaarson",
    img: "https://i.imgur.com/3hwXYxz.jpg",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "Macho Gomez",
    img: "https://i.imgur.com/gNl0w9l.jpg",
    opts: {
      expansion: ["DP"]
    }
  },
    {
    name: "Madelyne Pryor, Goblin Queen",
    img: "https://i.imgur.com/oQkXIJ1.jpg",
    opts: {
      expansion: ["SW1"]
    }
  },
    {
    name: "Magus",
    img: "https://i.imgur.com/PCNQLVl.jpg",
    opts: {
      expansion: ["ITC"]
    }
  },
    {
    name: "Malekith the Accursed",
    img: "https://i.imgur.com/Ldt2iWt.jpg",
    opts: {
      expansion: ["HOA"]
    }
  },
    {
    name: "Mandarin",
    img: "https://i.imgur.com/I0sStiP.jpg",
    opts: {
      expansion: ["RV"]
    }
  },
    {
    name: "Maria Hill, Director of S.H.I.E.L.D.",
    img: "https://i.imgur.com/0MMPXjf.jpg",
    opts: {
      expansion: ["CW"]
    }
  },
    {
    name: "Maximus the Mad",
    img: "https://i.imgur.com/NPsHEJT.png",
    opts: {
      expansion: ["ROK"]
    }
  },
    {
    name: "Misty Knight",
    img: "https://i.imgur.com/uwhlSOk.jpg",
    opts: {
      expansion: ["CW"]
    }
  },
    {
    name: "M.O.D.O.K.",
    img: "https://i.imgur.com/5KXr78w.jpg",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "Mojo",
    img: "https://i.imgur.com/sIlmyRY.png",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Morgan Le Fay",
    img: "https://i.imgur.com/5h43bVw.png",
    opts: {
      expansion: ["AM"]
    }
  },
    {
    name: "Nimrod, Super Sentinel",
    img: "https://i.imgur.com/FLZNulc.jpg",
    opts: {
      expansion: ["SW1"]
    }
  },
    {
    name: "Onslaught",
    img: "https://i.imgur.com/ZKvforo.png",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Pagliacci",
    img: "https://i.imgur.com/hvo7PVV.png",
    opts: {
      expansion: ["CHP"]
    }
  },
    {
    name: "Poison Thanos",
    img: "https://i.imgur.com/7Wer6wD.png",
    opts: {
      expansion: ["VN"]
    }
  },
    {
    name: "Charles Xavier, Professor of Crime",
    img: "https://i.imgur.com/CHuhpzq.jpg",
    opts: {
      expansion: ["NOIR"]
    }
  },
    {
    name: "Ragnarok",
    img: "https://i.imgur.com/By13Vzi.jpg",
    opts: {
      expansion: ["CW"]
    }
  },
    {
    name: "The Red King",
    img: "https://i.imgur.com/a2Anfbj.jpg",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "General “Thunderbolt” Ross/Red Hulk",
    img: "https://i.imgur.com/aCDS6SJ.jpg",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "The Sentry/The Void",
    img: "https://i.imgur.com/eCxaGyC.jpg",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "Shadow King",
    img: "https://i.imgur.com/dVKuSLk.png",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Shiklah, the Demon Bride",
    img: "https://i.imgur.com/8LfsApV.jpg",
    opts: {
      expansion: ["SW2"]
    }
  },
    {
    name: "Spider-Queen",
    img: "https://i.imgur.com/4GK4deT.jpg",
    opts: {
      expansion: ["SW2"]
    }
  },
    {
    name: "Hydra Super-Adaptoid",
    img: "https://i.imgur.com/GjMFFeJ.jpg",
    opts: {
      expansion: ["S"]
    }
  },
    {
    name: "Supreme Intelligence of the Kree",
    img: "https://i.imgur.com/vgDLNuq.jpg",
    opts: {
      expansion: ["GG"]
    }
  },
    {
    name: "Thanos",
    img: "https://i.imgur.com/5cUUpH1.jpg",
    opts: {
      expansion: ["GG"]
    }
  },
    {
    name: "The Goblin, Underworld Boss",
    img: "https://i.imgur.com/f3Cgtu5.jpg",
    opts: {
      expansion: ["NOIR"]
    }
  },
    {
    name: "The Hood",
    img: "https://i.imgur.com/5J3BxdC.jpg",
    opts: {
      expansion: ["RV"]
    }
  },
    {
    name: "Immortal Emperor Zheng-Zhu",
    img: "https://i.imgur.com/CBNAZqg.jpg",
    opts: {
      expansion: ["SW2"]
    }
  },
    {
    name: "Ultron",
    img: "https://i.imgur.com/Cg2PDvr.png",
    opts: {
      expansion: ["AM"]
    }
  },
    {
    name: "Uru-Enchanted Iron Man",
    img: "https://i.imgur.com/BmspGPa.jpg",
    opts: {
      expansion: ["FI"]
    }
  },
    {
    name: "Emperor Vulcan of the Shi'ar",
    img: "https://i.imgur.com/yuVFXFx.png",
    opts: {
      expansion: ["ROK"]
    }
  },
    {
    name: "Vulture",
    img: "https://i.imgur.com/sw1f6wS.png",
    opts: {
      expansion: ["SMH"]
    }
  },
    {
    name: "Wasteland Hulk",
    img: "https://i.imgur.com/x6TeLGy.jpg",
    opts: {
      expansion: ["SW1"]
    }
  },
    {
    name: "Zombie Green Goblin",
    img: "https://i.imgur.com/RAGMyGm.jpg",
    opts: {
      expansion: ["SW1"]
    }
  },
    {
    name: "Iron Monger",
    img: "https://i.imgur.com/eg4sxdR.jpg",
    opts: {
      expansion: ["MS"]
    }
  },
    {
    name: "Arnim Zola",
    img: "https://i.imgur.com/Dcdpl25.jpg",
    opts: {
      expansion: ["CA"]
    },
  }

];
