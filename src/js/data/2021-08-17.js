dataSetVersion = "2021-08-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Expansion",
    key: "expansion",
    tooltip: "Check this to restrict to specific expansions.",
    checked: false,
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
    img: "9mUrBIU.jpg",
    opts: {
      expansion: ["C"]
    }
  },
   {
    name: "Magneto",
    img: "YBK3QpZ.jpg",
    opts: {
      expansion: ["C"]
    }
  },
   {
    name: "Loki",
    img: "IwiansB.jpg",
    opts: {
      expansion: ["C"]
    }
  },
   {
    name: "Red Skull",
    img: "j1VTwE4.png",
    opts: {
      expansion: ["C"]
    }
  },
   {
    name: "Galactus",
    img: "NzdWbSc.png",
    opts: {
      expansion: ["F4"]
    }
  },
   {
    name: "Mole Man",
    img: "hJWugvw.png",
    opts: {
      expansion: ["F4"]
    }
  },
   {
    name: "Apocalypse",
    img: "5vsO7rI.png",
    opts: {
      expansion: ["DC"]
    }
  },
   {
    name: "Carnage",
    img: "CD3y6JM.png",
    opts: {
      expansion: ["PTTR"]
    }
  },
   {
    name: "Doctor Strange",
    img: "QTlTvcT.png",
    opts: {
      expansion: ["V"]
    }
  },
   {
    name: "Kingpin",
    img: "lvbptYB.png",
    opts: {
      expansion: ["DC"]
    }
  },
   {
    name: "Mephisto",
    img: "4dbjD8K.png",
    opts: {
      expansion: ["DC"]
    }
  },
   {
    name: "Mr. Sinister",
    img: "gkdKO0e.png",
    opts: {
      expansion: ["DC"]
    }
  },
   {
    name: "Mysterio",
    img: "5rk76F3.png",
    opts: {
      expansion: ["PTTR"]
    }
  },
   {
    name: "Nick Fury",
    img: "fwodfxi.png",
    opts: {
      expansion: ["V"]
    }
  },
   {
    name: "Odin",
    img: "pwPHJfd.png",
    opts: {
      expansion: ["V"]
    }
  },
   {
    name: "Professor X",
    img: "5KFM9G0.png",
    opts: {
      expansion: ["V"]
    }
  },
   {
    name: "Stryfe",
    img: "mCZriT0.png",
    opts: {
      expansion: ["DC"]
    }
  },
   {
    name: "Adrian Toomes",
    img: "aNmtKEr.png",
    opts: {
      expansion: ["SMH"]
    }
  },
    {
    name: "Arcade",
    img: "smkjp4v.png",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Authoritarian Iron Man",
    img: "bXItwUo.png",
    opts: {
      expansion: ["CW"]
    }
  },
    {
    name: "Belasco, Demon Lord of Limbo",
    img: "qnNxIAL.png",
    opts: {
      expansion: ["NM"]
    }
  },
    {
    name: "The Beyonder",
    img: "ESyOc9o.png",
    opts: {
      expansion: ["ITC"]
    }
  },
    {
    name: "Dark Phoenix",
    img: "B4QpaAH.png",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Deathbird",
    img: "FTNUQRt.png",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Emma Frost, The White Queen",
    img: "PRUVD8k.png",
    opts: {
      expansion: ["NM"]
    }
  },
    {
    name: "Evil Deadpool",
    img: "gLJohsu.png",
    opts: {
      expansion: ["DP"]
    }
  },
    {
    name: "Fin Fang Foom",
    img: "HGalPfZ.png",
    opts: {
      expansion: ["CHP"]
    }
  },
    {
    name: "The Grandmaster",
    img: "qNMWbZ0.png",
    opts: {
      expansion: ["ITC"]
    }
  },
    {
    name: "Grim Reaper",
    img: "ilElYcP.png",
    opts: {
      expansion: ["RV"]
    }
  },
    {
    name: "Baron Heinrich Zemo",
    img: "nCfYoY8.png",
    opts: {
      expansion: ["CA"]
    }
  },
    {
    name: "Hela, Goddess of Death",
    img: "Bjfh1Qf.png",
    opts: {
      expansion: ["HOA"]
    }
  },
    {
    name: "Baron Helmut Zemo",
    img: "lgaQIxW.png",
    opts: {
      expansion: ["CW"]
    }
  },
    {
    name: "Hybrid",
    img: "nxNFrnj.png",
    opts: {
      expansion: ["VN"]
    }
  },
    {
    name: "Hydra High Council",
    img: "DeVuLMU.png",
    opts: {
      expansion: ["S"]
    }
  },
    {
    name: "King Hyperion",
    img: "HruqisG.png",
    opts: {
      expansion: ["SW2"]
    }
  },
    {
    name: "Illuminati, Secret Society",
    img: "JwrTVg3.png",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "Iron Monger",
    img: "OX6PxkK.png",
    opts: {
      expansion: ["MS1"]
    }
  },
    {
    name: "J. Jonah Jameson",
    img: "0p11YUh.png",
    opts: {
      expansion: ["DM"]
    }
  },
    {
    name: "King Hulk, Sakaarson",
    img: "xjEQ3yC.png",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "Macho Gomez",
    img: "u0GGgP3.png",
    opts: {
      expansion: ["DP"]
    }
  },
    {
    name: "Madelyne Pryor, Goblin Queen",
    img: "Z1wfRWT.png",
    opts: {
      expansion: ["SW1"]
    }
  },
    {
    name: "Magus",
    img: "oqXlbQ8.png",
    opts: {
      expansion: ["ITC"]
    }
  },
    {
    name: "Malekith the Accursed",
    img: "zAERoy1.png",
    opts: {
      expansion: ["HOA"]
    }
  },
    {
    name: "Mandarin",
    img: "RQIaASJ.png",
    opts: {
      expansion: ["RV"]
    }
  },
    {
    name: "Maria Hill, Director of S.H.I.E.L.D.",
    img: "8zspPW8.png",
    opts: {
      expansion: ["CW"]
    }
  },
    {
    name: "Maximus the Mad",
    img: "MAdHr21.png",
    opts: {
      expansion: ["ROK"]
    }
  },
    {
    name: "Misty Knight",
    img: "hlYCHXE.png",
    opts: {
      expansion: ["CW"]
    }
  },
    {
    name: "M.O.D.O.K.",
    img: "vLfiuL2.png",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "Mojo",
    img: "NjJQ2nZ.png",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Morgan Le Fay",
    img: "1TxnaFL.png",
    opts: {
      expansion: ["AM"]
    }
  },
    {
    name: "Nimrod, Super Sentinel",
    img: "qabX2ZK.png",
    opts: {
      expansion: ["SW1"]
    }
  },
    {
    name: "Onslaught",
    img: "6lybFsO.png",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Pagliacci",
    img: "RkMSxZ7.png",
    opts: {
      expansion: ["CHP"]
    }
  },
    {
    name: "Poison Thanos",
    img: "3bUPWLb.png",
    opts: {
      expansion: ["VN"]
    }
  },
    {
    name: "Charles Xavier, Professor of Crime",
    img: "lxJRUIR.png",
    opts: {
      expansion: ["NOIR"]
    }
  },
    {
    name: "Ragnarok",
    img: "GtiMfAu.png",
    opts: {
      expansion: ["CW"]
    }
  },
    {
    name: "The Red King",
    img: "eOhVyOR.png",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "General “Thunderbolt” Ross/Red Hulk",
    img: "3LYM1zy.png",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "The Sentry/The Void",
    img: "HHY0rmL.png",
    opts: {
      expansion: ["WWH"]
    }
  },
    {
    name: "Shadow King",
    img: "DO2y4Pd.png",
    opts: {
      expansion: ["X"]
    }
  },
    {
    name: "Shiklah, the Demon Bride",
    img: "6QTOWYc.png",
    opts: {
      expansion: ["SW2"]
    }
  },
    {
    name: "Spider-Queen",
    img: "ZFy4CpU.png",
    opts: {
      expansion: ["SW2"]
    }
  },
    {
    name: "Hydra Super-Adaptoid",
    img: "nDPNVdU.png",
    opts: {
      expansion: ["S"]
    }
  },
    {
    name: "Supreme Intelligence of the Kree",
    img: "IjYY53Z.png",
    opts: {
      expansion: ["GG"]
    }
  },
    {
    name: "Thanos",
    img: "flxCgFX.png",
    opts: {
      expansion: ["GG"]
    }
  },
    {
    name: "The Goblin, Underworld Boss",
    img: "Ze8kMip.png",
    opts: {
      expansion: ["NOIR"]
    }
  },
    {
    name: "The Hood",
    img: "C4DDzXN.png",
    opts: {
      expansion: ["RV"]
    }
  },
    {
    name: "Immortal Emperor Zheng-Zhu",
    img: "WRx4D3x.png",
    opts: {
      expansion: ["SW2"]
    }
  },
    {
    name: "Emperor Vulcan of the Shi'ar",
    img: "Xlf83U7.png",
    opts: {
      expansion: ["ROK"]
    }
  },
    {
    name: "Ultron",
    img: "GuFyyAo.png",
    opts: {
      expansion: ["AM"]
    }
  },
    {
    name: "Uru-Enchanted Iron Man",
    img: "6cz6ot8.png",
    opts: {
      expansion: ["FI"]
    }
  },
    {
    name: "Emperor Vulcan of the Shi'ar",
    img: "JYNLZ93.png",
    opts: {
      expansion: ["ROK"]
    }
  },
    {
    name: "Vulture",
    img: "3C7CnvX.png",
    opts: {
      expansion: ["SMH"]
    }
  },
    {
    name: "Wasteland Hulk",
    img: "u2O6Mx2.png",
    opts: {
      expansion: ["SW1"]
    }
  },
    {
    name: "Zombie Green Goblin",
    img: "qNxZmXR.png",
    opts: {
      expansion: ["SW1"]
    }
  },
    {
    name: "Arnim Zola",
    img: "W0Xfdqt.png",
    opts: {
      expansion: ["CA"]
    },

  }
   
];
