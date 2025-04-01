const lessonData = {
    "Nahuatl": {
      basicInfo: {
        nativeName: "Nāhuatlahtōlli",
        regions: ["Mexico"],
        speakers: "1.7 million",
        familyBranch: "Uto-Aztecan",
        writingSystem: "Latin (modern), Aztec pictographs (historical)"
      },
      lessons: [
        {
          id: "nahuatl-basics-1",
          title: "Basic Greetings",
          difficulty: "beginner",
          vocabulary: [
            { word: "Niltze", translation: "Hello" },
            { word: "Tlazohcamati", translation: "Thank you" },
            { word: "Quema", translation: "Yes" },
            { word: "Ahmo", translation: "No" }
          ],
          exercises: [
            {
              type: "multipleChoice",
              question: "Hello",
              correctAnswer: "Niltze",
              options: ["Niltze", "Tlazohcamati", "Quema", "Ahmo"]
            },
            {
              type: "matching",
              pairs: [
                { word: "Niltze", translation: "Hello" },
                { word: "Tlazohcamati", translation: "Thank you" },
                { word: "Quema", translation: "Yes" },
                { word: "Ahmo", translation: "No" }
              ]
            }
          ]
        },
        {
          id: "nahuatl-basics-2",
          title: "Numbers 1-5",
          difficulty: "beginner",
          vocabulary: [
            { word: "Ce", translation: "One" },
            { word: "Ome", translation: "Two" },
            { word: "Yei", translation: "Three" },
            { word: "Nahui", translation: "Four" },
            { word: "Macuilli", translation: "Five" }
        ],
          exercises: [
            {
              type: "pronunciation",
              words: [
                { word: "Ce", translation: "One" },
                { word: "Ome", translation: "Two" },
                { word: "Yei", translation: "Three" },
                { word: "Nahui", translation: "Four" },
                { word: "Macuilli", translation: "Five" }
              ]
            }
          ]
        }
      ]
    },
    "Inuktitut": {
      basicInfo: {
        nativeName: "Inuktitut",
        regions: ["Canada (Nunavut, Northwest Territories, Nunavik, Nunatsiavut)"],
        speakers: "About 40,000",
        familyBranch: "Eskimo-Aleut",
        writingSystem: "Inuktitut syllabics, Latin alphabet"
      },
      lessons: [
        {
          id: "inuktitut-basics-1",
          title: "Basic Greetings",
          difficulty: "beginner",
          vocabulary: [
            { word: "Ainngai", translation: "Hello" },
            { word: "Nakurmiik", translation: "Thank you" },
            { word: "Ii", translation: "Yes" },
            { word: "Aagaa", translation: "No" },
            { word: "Tavvauvutit", translation: "Goodbye" }
          ],
          exercises: [
            {
              type: "matching",
              pairs: [
                { word: "Ainngai", translation: "Hello" },
                { word: "Nakurmiik", translation: "Thank you" },
                { word: "Ii", translation: "Yes" },
                { word: "Aagaa", translation: "No" }
              ]
            }
          ]
        },
        {
          id: "inuktitut-basics-2",
          title: "Numbers 1-5",
          difficulty: "beginner",
          vocabulary: [
            { word: "Atausiq", translation: "One" },
            { word: "Malruk", translation: "Two" },
            { word: "Pingasut", translation: "Three" },
            { word: "Sitamat", translation: "Four" },
            { word: "Tallimat", translation: "Five" }
          ],
          exercises: [
            {
              type: "pronunciation",
              words: [
                { word: "Atausiq", translation: "One" },
                { word: "Malruk", translation: "Two" },
                { word: "Pingasut", translation: "Three" },
                { word: "Sitamat", translation: "Four" },
                { word: "Tallimat", translation: "Five" }
              ]
            }
          ]
        }
      ]
    },
    "Kwak'wala": {
        basicInfo: {
            nativeName: "Kwak'wala",
            regions: ["Canada (British Columbia)"],
            speakers: "Less than 200",
            familyBranch: "Wakashan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "kwakwala-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Gilakas'la", translation: "Welcome/Hello" },
                    { word: "Gałan", translation: "Thank you" },
                    { word: "Ə'm", translation: "Yes" },
                    { word: "K̓i's", translation: "No" },
                    { word: "ʔəm'əyəgəla", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Gilakas'la", translation: "Welcome/Hello" },
                            { word: "Gałan", translation: "Thank you" },
                            { word: "Ə'm", translation: "Yes" },
                            { word: "K̓i's", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "kwakwala-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "N̓əm", translation: "One" },
                    { word: "Maʔł", translation: "Two" },
                    { word: "Yudəxʷ", translation: "Three" },
                    { word: "Mu", translation: "Four" },
                    { word: "Sək̓a", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "N̓əm", translation: "One" },
                            { word: "Maʔł", translation: "Two" },
                            { word: "Yudəxʷ", translation: "Three" },
                            { word: "Mu", translation: "Four" },
                            { word: "Sək̓a", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Navajo": {
        basicInfo: {
            nativeName: "Diné bizaad",
            regions: ["United States (Arizona, New Mexico, Utah)"],
            speakers: "About 170,000",
            familyBranch: "Na-Dené",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "navajo-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Yá'át'ééh", translation: "Hello" },
                    { word: "Ahéhee'", translation: "Thank you" },
                    { word: "Aoo'", translation: "Yes" },
                    { word: "Dooda", translation: "No" },
                    { word: "Hágoónee'", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Yá'át'ééh", translation: "Hello" },
                            { word: "Ahéhee'", translation: "Thank you" },
                            { word: "Aoo'", translation: "Yes" },
                            { word: "Dooda", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "navajo-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Tʼááłáʼí", translation: "One" },
                    { word: "Naaki", translation: "Two" },
                    { word: "Táá'", translation: "Three" },
                    { word: "Dį́į́'", translation: "Four" },
                    { word: "Ashdla'", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Tʼááłáʼí", translation: "One" },
                            { word: "Naaki", translation: "Two" },
                            { word: "Táá'", translation: "Three" },
                            { word: "Dį́į́'", translation: "Four" },
                            { word: "Ashdla'", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Yucatec Mayan": {
        basicInfo: {
            nativeName: "Mayaa t'aan",
            regions: ["Mexico (Yucatán Peninsula)"],
            speakers: "About 800,000",
            familyBranch: "Mayan",
            writingSystem: "Latin alphabet, Mayan hieroglyphs (historical)"
        },
        lessons: [
            {
                id: "yucatec-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ma'alob k'iin", translation: "Hello/Good day" },
                    { word: "Jach dyos bo'otik", translation: "Thank you" },
                    { word: "Je'el", translation: "Yes" },
                    { word: "Ma'", translation: "No" },
                    { word: "Tak tu'ux ka bin", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Ma'alob k'iin", translation: "Hello/Good day" },
                            { word: "Jach dyos bo'otik", translation: "Thank you" },
                            { word: "Je'el", translation: "Yes" },
                            { word: "Ma'", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "yucatec-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Jun", translation: "One" },
                    { word: "Ka'a", translation: "Two" },
                    { word: "Óox", translation: "Three" },
                    { word: "Kan", translation: "Four" },
                    { word: "Jo'", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Jun", translation: "One" },
                            { word: "Ka'a", translation: "Two" },
                            { word: "Óox", translation: "Three" },
                            { word: "Kan", translation: "Four" },
                            { word: "Jo'", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Nivkh": {
        basicInfo: {
            nativeName: "Нивх диф (Nivx dif)",
            regions: ["Russia (Sakhalin Island, Lower Amur region)"],
            speakers: "approximately 200",
            familyBranch: "Language isolate",
            writingSystem: "Cyrillic script (currently); Latin script (historically)"
        },
        lessons: [
            {
                id: "nivkh-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Чмоӽ!", translation: "Hello!" },
                    { word: "Ньӽрох", translation: "Thank you" },
                    { word: "Ӽе", translation: "Yes" },
                    { word: "Кʼауӽа", translation: "No" },
                    { word: "Пандудь", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Чмоӽ!", translation: "Hello!" },
                            { word: "Ньӽрох", translation: "Thank you" },
                            { word: "Ӽе", translation: "Yes" },
                            { word: "Кʼауӽа", translation: "No" },
                            { word: "Пандудь", translation: "Goodbye" }
                        ]
                    }
                ]
            },
            {
                id: "nivkh-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Нь", translation: "One" },
                    { word: "Ми", translation: "Two" },
                    { word: "Ча", translation: "Three" },
                    { word: "Ны", translation: "Four" },
                    { word: "Тʼоӽ", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Нь", translation: "One" },
                            { word: "Ми", translation: "Two" },
                            { word: "Ча", translation: "Three" },
                            { word: "Ны", translation: "Four" },
                            { word: "Тʼоӽ", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Quechua": {
        basicInfo: {
            nativeName: "Runa Simi",
            regions: ["South America (Andes region)"],
            speakers: "About 8-10 million",
            familyBranch: "Quechuan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "quechua-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Allianchu", translation: "Hello" },
                    { word: "Sulpayki", translation: "Thank you" },
                    { word: "Arí", translation: "Yes" },
                    { word: "Mana", translation: "No" },
                    { word: "Tupananchiskama", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Allianchu", translation: "Hello" },
                            { word: "Sulpayki", translation: "Thank you" },
                            { word: "Arí", translation: "Yes" },
                            { word: "Mana", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "quechua-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Huk", translation: "One" },
                    { word: "Iskay", translation: "Two" },
                    { word: "Kimsa", translation: "Three" },
                    { word: "Tawa", translation: "Four" },
                    { word: "Pichqa", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Huk", translation: "One" },
                            { word: "Iskay", translation: "Two" },
                            { word: "Kimsa", translation: "Three" },
                            { word: "Tawa", translation: "Four" },
                            { word: "Pichqa", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Tagalog": {
        basicInfo: {
            nativeName: "Wikang Tagalog",
            regions: ["Philippines"],
            speakers: "About 28 million",
            familyBranch: "Austronesian",
            writingSystem: "Latin alphabet, Baybayin script (historical)"
        },
        lessons: [
            {
                id: "tagalog-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Magandang umaga", translation: "Good morning" },
                    { word: "Magandang hapon", translation: "Good afternoon" },
                    { word: "Salamat", translation: "Thank you" },
                    { word: "Oo", translation: "Yes" },
                    { word: "Hindi", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Magandang umaga", translation: "Good morning" },
                            { word: "Magandang hapon", translation: "Good afternoon" },
                            { word: "Salamat", translation: "Thank you" },
                            { word: "Oo", translation: "Yes" }
                        ]
                    }
                ]
            },
            {
                id: "tagalog-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Isa", translation: "One" },
                    { word: "Dalawa", translation: "Two" },
                    { word: "Tatlo", translation: "Three" },
                    { word: "Apat", translation: "Four" },
                    { word: "Lima", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Isa", translation: "One" },
                            { word: "Dalawa", translation: "Two" },
                            { word: "Tatlo", translation: "Three" },
                            { word: "Apat", translation: "Four" },
                            { word: "Lima", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Cherokee": {
        basicInfo: {
            nativeName: "ᏣᎳᎩ (Tsalagi)",
            regions: ["United States (Oklahoma, North Carolina)"],
            speakers: "About 2,000",
            familyBranch: "Iroquoian",
            writingSystem: "Cherokee syllabary"
        },
        lessons: [
            {
                id: "cherokee-basics-1",
                title: "Basic Syllabary",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ꭴ", translation: "u" },
                    { word: "Ꭱ", translation: "e" },
                    { word: "Ꭲ", translation: "i" },
                    { word: "Ꭳ", translation: "o" },
                    { word: "Ꭰ", translation: "a" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Ꭴ", translation: "u" },
                            { word: "Ꭱ", translation: "e" },
                            { word: "Ꭲ", translation: "i" },
                            { word: "Ꭳ", translation: "o" },
                            { word: "Ꭰ", translation: "a" }
                        ]
                    }
                ]
            },
            {
                id: "cherokee-basics-2",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ᎣᏏᏲ", translation: "Hello/Welcome" },
                    { word: "ᎤᎵᎮᎵᏍᏗ", translation: "Thank you/It is good" },
                    { word: "ᎬᏩᏙᏓ", translation: "See you later/Until we meet again" },
                    { word: "ᎰᏩ", translation: "Yes/Okay" },
                    { word: "ᎥᏝ", translation: "No/Not" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "ᎣᏏᏲ", translation: "Hello/Welcome" },
                            { word: "ᎤᎵᎮᎵᏍᏗ", translation: "Thank you/It is good" },
                            { word: "ᎬᏩᏙᏓ", translation: "See you later/Until we meet again" },
                            { word: "ᎰᏩ", translation: "Yes/Okay" },
                            { word: "ᎥᏝ", translation: "No/Not" }
                        ]
                    }
                ]
            }
        ]
    },
    "Mohawk": {
        basicInfo: {
            nativeName: "Kanien'kéha",
            regions: ["Canada (Quebec, Ontario), United States (New York)"],
            speakers: "About 3,500",
            familyBranch: "Iroquoian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "mohawk-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Shé:kon", translation: "Hello" },
                    { word: "Niá:wen", translation: "Thank you" },
                    { word: "Ó:nen", translation: "Goodbye" },
                    { word: "Hén", translation: "Yes" },
                    { word: "Iáh", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Shé:kon", translation: "Hello" },
                            { word: "Niá:wen", translation: "Thank you" },
                            { word: "Ó:nen", translation: "Goodbye" },
                            { word: "Hén", translation: "Yes" },
                            { word: "Iáh", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "mohawk-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Énska", translation: "One" },
                    { word: "Tékeni", translation: "Two" },
                    { word: "Áhsen", translation: "Three" },
                    { word: "Kaié:ri", translation: "Four" },
                    { word: "Wísk", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Énska", translation: "One" },
                            { word: "Tékeni", translation: "Two" },
                            { word: "Áhsen", translation: "Three" },
                            { word: "Kaié:ri", translation: "Four" },
                            { word: "Wísk", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Cree":{
        basicInfo: {
            nativeName: "Nehiyaw",
            regions: ["Canada (Saskatchewan, Manitoba, Ontario)"],
            speakers: "About 100,000",
            familyBranch: "Algonquian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "cree-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Tânisi", translation: "Hello" },
                    { word: "Ay-hay", translation: "Thank you" },
                    { word: "Ekosi", translation: "Goodbye" },
                    { word: "Êhê", translation: "Yes" },
                    { word: "Namôya", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Tânisi", translation: "Hello" },
                            { word: "Ay-hay", translation: "Thank you" },
                            { word: "Ekosi", translation: "Goodbye" },
                            { word: "Êhê", translation: "Yes" },
                            { word: "Namôya", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "cree-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Peyak", translation: "One" },
                    { word: "Nîso", translation: "Two" },
                    { word: "Nisto", translation: "Three" },
                    { word: "Newo", translation: "Four" },
                    { word: "Niyânan", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Peyak", translation: "One" },
                            { word: "Nîso", translation: "Two" },
                            { word: "Nisto", translation: "Three" },
                            { word: "Newo", translation: "Four" },
                            { word: "Niyânan", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Mapudungun": {
        basicInfo: {
            nativeName: "Mapudungun",
            regions: ["Chile, Argentina"],
            speakers: "About 260,000",
            familyBranch: "Araucanian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "mapudungun-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Mari mari", translation: "Hello" },
                    { word: "Chaltu mai", translation: "Thank you" },
                    { word: "Pewkallal", translation: "Goodbye" },
                    { word: "May", translation: "Yes" },
                    { word: "No", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Mari mari", translation: "Hello" },
                            { word: "Chaltu mai", translation: "Thank you" },
                            { word: "Pewkallal", translation: "Goodbye" },
                            { word: "May", translation: "Yes" },
                            { word: "No", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "mapudungun-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Kiñe", translation: "One" },
                    { word: "Epu", translation: "Two" },
                    { word: "Küla", translation: "Three" },
                    { word: "Meli", translation: "Four" },
                    { word: "Kechu", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Kiñe", translation: "One" },
                            { word: "Epu", translation: "Two" },
                            { word: "Küla", translation: "Three" },
                            { word: "Meli", translation: "Four" },
                            { word: "Kechu", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Hawaiian": {
        basicInfo: {
            nativeName: "ʻŌlelo Hawaiʻi",
            regions: ["United States (Hawaii)"],
            speakers: "About 24,000",
            familyBranch: "Austronesian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "hawaiian-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Aloha", translation: "Hello/Goodbye" },
                    { word: "Mahalo", translation: "Thank you" },
                    { word: "ʻAe", translation: "Yes" },
                    { word: "ʻAʻole", translation: "No" },
                    { word: "A hui hou", translation: "Until we meet again" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Aloha", translation: "Hello/Goodbye" },
                            { word: "Mahalo", translation: "Thank you" },
                            { word: "ʻAe", translation: "Yes" },
                            { word: "ʻAʻole", translation: "No" },
                            { word: "A hui hou", translation: "Until we meet again" }
                        ]
                    }
                ]
            },
            {
                id: "hawaiian-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Kahi", translation: "One" },
                    { word: "Lua", translation: "Two" },
                    { word: "Kolu", translation: "Three" },
                    { word: "Hā", translation: "Four" },
                    { word: "Lima", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Kahi", translation: "One" },
                            { word: "Lua", translation: "Two" },
                            { word: "Kolu", translation: "Three" },
                            { word: "Hā", translation: "Four" },
                            { word: "Lima", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Kildin Sami": {
        basicInfo: {
            nativeName: "Кӣллт са̄мь кӣлл (Kīllt sām' kīll)",
            regions: ["Russia (Kola Peninsula)"],
            speakers: "Less than 400",
            familyBranch: "Uralic",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "kildin-sami-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Тӣрв", translation: "Hello" },
                    { word: "Пассьпе", translation: "Thank you" },
                    { word: "Пэ̄ййв", translation: "Goodbye" },
                    { word: "Нэ", translation: "Yes" },
                    { word: "Ӣлл", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Тӣрв", translation: "Hello" },
                            { word: "Пассьпе", translation: "Thank you" },
                            { word: "Пэ̄ййв", translation: "Goodbye" },
                            { word: "Нэ", translation: "Yes" },
                            { word: "Ӣлл", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "kildin-sami-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "э̄ххт", translation: "One" },
                    { word: "кӯххт", translation: "Two" },
                    { word: "колльм", translation: "Three" },
                    { word: "нелльй", translation: "Four" },
                    { word: "вӣдт", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "э̄ххт", translation: "One" },
                            { word: "кӯххт", translation: "Two" },
                            { word: "колльм", translation: "Three" },
                            { word: "нелльй", translation: "Four" },
                            { word: "вӣдт", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Tlingit": {
        basicInfo: {
            nativeName: "Lingít",
            regions: ["United States (Alaska)"],
            speakers: "About 200",
            familyBranch: "Tlingit",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "tlingit-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Gunalchéesh", translation: "Thank you" },
                    { word: "Aaa", translation: "Yes" },
                    { word: "Tléik", translation: "No" },
                    { word: "Yak'éi", translation: "Good" },
                    { word: "Haagú", translation: "Come here" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Gunalchéesh", translation: "Thank you" },
                            { word: "Aaa", translation: "Yes" },
                            { word: "Tléik", translation: "No" },
                            { word: "Yak'éi", translation: "Good" },
                            { word: "Haagú", translation: "Come here" }
                        ]
                    }
                ]
            },
            {
                id: "tlingit-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Tléix'", translation: "One" },
                    { word: "Déix", translation: "Two" },
                    { word: "Nás'k", translation: "Three" },
                    { word: "Daax'oon", translation: "Four" },
                    { word: "Keijín", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Tléix'", translation: "One" },
                            { word: "Déix", translation: "Two" },
                            { word: "Nás'k", translation: "Three" },
                            { word: "Daax'oon", translation: "Four" },
                            { word: "Keijín", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Abkhaz": {
        basicInfo: {
            nativeName: "Аҧсуа (Aṗsua)",
            regions: ["Georgia (Abkhazia)"],
            speakers: "About 100,000",
            familyBranch: "Northwest Caucasian",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "abkhaz-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Бзиа збаша", translation: "Hello" },
                    { word: "Аа", translation: "Yes" },
                    { word: "Мап", translation: "No" },
                    { word: "Ибзиоуп", translation: "Good" },
                    { word: "Иҭабуп", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Бзиа збаша", translation: "Hello" },
                            { word: "Аа", translation: "Yes" },
                            { word: "Мап", translation: "No" },
                            { word: "Ибзиоуп", translation: "Good" },
                            { word: "Иҭабуп", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "abkhaz-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Акы", translation: "One" },
                    { word: "Ҩба", translation: "Two" },
                    { word: "Хҧа", translation: "Three" },
                    { word: "Ҧшьба", translation: "Four" },
                    { word: "Хәба", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Акы", translation: "One" },
                            { word: "Ҩба", translation: "Two" },
                            { word: "Хҧа", translation: "Three" },
                            { word: "Ҧшьба", translation: "Four" },
                            { word: "Хәба", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Tsez": {
        basicInfo: {
            nativeName: "Цезйас мец (Cezjas mec)",
            regions: ["Russia (Dagestan)"],
            speakers: "About 15,000",
            familyBranch: "Northeast Caucasian",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "tsez-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Салам", translation: "Hello" },
                    { word: "Йо", translation: "Yes" },
                    { word: "Ме", translation: "No" },
                    { word: "Беци", translation: "Good" },
                    { word: "Баркалла", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Салам", translation: "Hello" },
                            { word: "Йо", translation: "Yes" },
                            { word: "Ме", translation: "No" },
                            { word: "Беци", translation: "Good" },
                            { word: "Баркалла", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "tsez-basics-2", 
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Сис", translation: "One" },
                    { word: "Къано", translation: "Two" },
                    { word: "Лъабно", translation: "Three" },
                    { word: "Уйно", translation: "Four" },
                    { word: "Лъино", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Сис", translation: "One" },
                            { word: "Къано", translation: "Two" },
                            { word: "Лъабно", translation: "Three" },
                            { word: "Уйно", translation: "Four" },
                            { word: "Лъино", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Tabasaran": {
        basicInfo: {
            nativeName: "Табасаран чӀал (Tabasaran č'al)",
            regions: ["Russia (Dagestan)"],
            speakers: "About 130,000",
            familyBranch: "Northeast Caucasian",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
          {
              id: "tabasaran-basics-1",
              title: "Basic Greetings",
              difficulty: "beginner",
              vocabulary: [
                  { word: "Салам", translation: "Hello" },
                  { word: "Чухсагул", translation: "Thank you" },
                  { word: "Гьа", translation: "Yes" },
                  { word: "Ваъ", translation: "No" },
                  { word: "Сагъди гъузай", translation: "Goodbye" }
              ],
              exercises: [
                  {
                      type: "matching",
                      pairs: [
                          { word: "Салам", translation: "Hello" },
                          { word: "Чухсагул", translation: "Thank you" },
                          { word: "Гьа", translation: "Yes" },
                          { word: "Ваъ", translation: "No" }
                      ]
                  }
              ]
          },
          {
              id: "tabasaran-basics-2",
              title: "Numbers 1-5",
              difficulty: "beginner",
              vocabulary: [
                  { word: "Сад", translation: "One" },
                  { word: "Кьюб", translation: "Two" },
                  { word: "Шубуб", translation: "Three" },
                  { word: "Юкьуб", translation: "Four" },
                  { word: "Хьуб", translation: "Five" }
              ],
              exercises: [
                  {
                      type: "pronunciation",
                      words: [
                          { word: "Сад", translation: "One" },
                          { word: "Кьюб", translation: "Two" },
                          { word: "Шубуб", translation: "Three" },
                          { word: "Юкьуб", translation: "Four" },
                          { word: "Хьуб", translation: "Five" }
                      ]
                  }
              ]
          }
        ]
    },
    "Nenets": {
        basicInfo: {
            nativeName: "Ненэцяʼ вада (Nenecia' vada)",
            regions: ["Russia (Yamalo-Nenets Autonomous Okrug)"],
            speakers: "About 40,000",
            familyBranch: "Uralic",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "nenets-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Торова", translation: "Hello" },
                    { word: "Ңани торов", translation: "Goodbye" },
                    { word: "Тарем", translation: "Yes" },
                    { word: "Яңгу", translation: "No" },
                    { word: "Сава", translation: "Good" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Торова", translation: "Hello" },
                            { word: "Ңани торов", translation: "Goodbye" },
                            { word: "Тарем", translation: "Yes" },
                            { word: "Яңгу", translation: "No" },
                            { word: "Сава", translation: "Good" }
                        ]
                    }
                ]
            },
            {
                id: "nenets-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ңопой", translation: "One" },
                    { word: "Сидя", translation: "Two" },
                    { word: "Няхар", translation: "Three" },
                    { word: "Тет", translation: "Four" },
                    { word: "Самляңг", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ңопой", translation: "One" },
                            { word: "Сидя", translation: "Two" },
                            { word: "Няхар", translation: "Three" },
                            { word: "Тет", translation: "Four" },
                            { word: "Самляңг", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Ket": {
        basicInfo: {
            nativeName: "Остыганна (Ostygan'na)",
            regions: ["Russia (Yenisei River region)"],
            speakers: "About 200",
            familyBranch: "Yeniseian",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "ket-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Бисәӈ", translation: "Hello" },
                    { word: "Ассано", translation: "Goodbye" },
                    { word: "Э", translation: "Yes" },
                    { word: "Бән", translation: "No" },
                    { word: "Ам", translation: "Good" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Бисәӈ", translation: "Hello" },
                            { word: "Ассано", translation: "Goodbye" },
                            { word: "Э", translation: "Yes" },
                            { word: "Бән", translation: "No" },
                            { word: "Ам", translation: "Good" }
                        ]
                    }
                ]
            },
            {
                id: "ket-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Қусь", translation: "One" },
                    { word: "Ын", translation: "Two" },
                    { word: "Доӈ", translation: "Three" },
                    { word: "Сяӈ", translation: "Four" },
                    { word: "Қак", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Қусь", translation: "One" },
                            { word: "Ын", translation: "Two" },
                            { word: "Доӈ", translation: "Three" },
                            { word: "Сяӈ", translation: "Four" },
                            { word: "Қак", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Abenaki": {
        basicInfo: {
            nativeName: "Alnôbak",
            regions: ["United States (Maine, Vermont), Canada (Quebec)"],
            speakers: "Less than 10",
            familyBranch: "Algonquian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "abenaki-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Kwai", translation: "Hello" },
                    { word: "Wliwni", translation: "Thank you" },
                    { word: "Wôwi", translation: "Yes" },
                    { word: "Ôda", translation: "No" },
                    { word: "Wli", translation: "Good" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Kwai", translation: "Hello" },
                            { word: "Wliwni", translation: "Thank you" },
                            { word: "Wôwi", translation: "Yes" },
                            { word: "Ôda", translation: "No" },
                            { word: "Wli", translation: "Good" }
                        ]
                    }
                ]
            },
            {
                id: "abenaki-basics-2", 
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Pezôgw", translation: "One" },
                    { word: "Nis", translation: "Two" },
                    { word: "Nas", translation: "Three" },
                    { word: "Iaw", translation: "Four" },
                    { word: "Nôlan", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Pezôgw", translation: "One" },
                            { word: "Nis", translation: "Two" },
                            { word: "Nas", translation: "Three" },
                            { word: "Iaw", translation: "Four" },
                            { word: "Nôlan", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Ainu": {
        basicInfo: {
            nativeName: "アィヌ イタク (Ainu Itak)",
            regions: ["Japan (Hokkaido)"],
            speakers: "Less than 15",
            familyBranch: "Language isolate",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "ainu-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Irankarapte", translation: "Hello" },
                    { word: "Iyayraykere", translation: "Thank you" },
                    { word: "Somo", translation: "No" },
                    { word: "Ruwe ne", translation: "Yes" },
                    { word: "Apunno apa yan", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Irankarapte", translation: "Hello" },
                            { word: "Iyayraykere", translation: "Thank you" },
                            { word: "Somo", translation: "No" },
                            { word: "Ruwe ne", translation: "Yes" }
                        ]
                    }
                ]
            },
            {
                id: "ainu-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Shine", translation: "One" },
                    { word: "Tu", translation: "Two" },
                    { word: "Re", translation: "Three" },
                    { word: "Ine", translation: "Four" },
                    { word: "Ashikne", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Shine", translation: "One" },
                            { word: "Tu", translation: "Two" },
                            { word: "Re", translation: "Three" },
                            { word: "Ine", translation: "Four" },
                            { word: "Ashikne", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Aymara": {
        basicInfo: {
            nativeName: "Aymar aru",
            regions: ["Bolivia, Peru, Chile"],
            speakers: "About 2 million",
            familyBranch: "Aymaran",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "aymara-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Kamisaki", translation: "Hello" },
                    { word: "Waliki", translation: "Good" },
                    { word: "Juspagara", translation: "Thank you" },
                    { word: "Jisa", translation: "Yes" },
                    { word: "Jani", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Kamisaki", translation: "Hello" },
                            { word: "Waliki", translation: "Good" },
                            { word: "Juspagara", translation: "Thank you" },
                            { word: "Jisa", translation: "Yes" },
                            { word: "Jani", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "aymara-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Maya", translation: "One" },
                    { word: "Paya", translation: "Two" },
                    { word: "Kimsa", translation: "Three" },
                    { word: "Pusi", translation: "Four" },
                    { word: "Phisqa", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Maya", translation: "One" },
                            { word: "Paya", translation: "Two" },
                            { word: "Kimsa", translation: "Three" },
                            { word: "Pusi", translation: "Four" },
                            { word: "Phisqa", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Shoshone": {
        basicInfo: {
            nativeName: "newe ta̲i̲kwappe",
            regions: ["United States (Idaho, Utah, Nevada, Wyoming)"],
            speakers: "About 1,000",
            familyBranch: "Uto-Aztecan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "shoshone-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Haa'", translation: "Hello" },
                    { word: "Tsaa", translation: "Good" },
                    { word: "Aise", translation: "Thank you" },
                    { word: "Haa", translation: "Yes" },
                    { word: "Kai", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Haa'", translation: "Hello" },
                            { word: "Tsaa", translation: "Good" },
                            { word: "Aise", translation: "Thank you" },
                            { word: "Haa", translation: "Yes" },
                            { word: "Kai", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "shoshone-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Semmeh", translation: "One" },
                    { word: "Waha", translation: "Two" },
                    { word: "Pahai", translation: "Three" },
                    { word: "Watsuiwih", translation: "Four" },
                    { word: "Manegi", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Semmeh", translation: "One" },
                            { word: "Waha", translation: "Two" },
                            { word: "Pahai", translation: "Three" },
                            { word: "Watsuiwih", translation: "Four" },
                            { word: "Manegi", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "O'odham": {
        basicInfo: {
            nativeName: "O'odham",
            regions: ["United States (Arizona, Sonora)"],
            speakers: "About 10,000",
            familyBranch: "Uto-Aztecan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "oodham-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "D ha-cegia", translation: "Hello" },
                    { word: "S-ap 'i masma", translation: "Good morning" },
                    { word: "T o wa:k", translation: "Goodbye" },
                    { word: "Heu'u", translation: "Yes" },
                    { word: "Pi", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "D ha-cegia", translation: "Hello" },
                            { word: "S-ap 'i masma", translation: "Good morning" },
                            { word: "T o wa:k", translation: "Goodbye" },
                            { word: "Heu'u", translation: "Yes" },
                            { word: "Pi", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "oodham-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Hemako", translation: "One" },
                    { word: "Go:k", translation: "Two" },
                    { word: "Waik", translation: "Three" },
                    { word: "Gi'ik", translation: "Four" },
                    { word: "Hetasp", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Hemako", translation: "One" },
                            { word: "Go:k", translation: "Two" },
                            { word: "Waik", translation: "Three" },
                            { word: "Gi'ik", translation: "Four" },
                            { word: "Hetasp", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Pitjantjatjara": {
        basicInfo: {
            nativeName: "Pitjantjatjara",
            regions: ["Australia (Central Australia)"],
            speakers: "About 4,000",
            familyBranch: "Pama-Nyungan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "pitjantjatjara-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Palya", translation: "Hello/Good" },
                    { word: "Ngalypa", translation: "Good" },
                    { word: "Uwa", translation: "Yes" },
                    { word: "Wiya", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Palya", translation: "Hello/Good" },
                            { word: "Ngalypa", translation: "Good" },
                            { word: "Uwa", translation: "Yes" },
                            { word: "Wiya", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "pitjantjatjara-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Kutju", translation: "One" },
                    { word: "Kutjara", translation: "Two" },
                    { word: "Mankurpa", translation: "Three" },
                    { word: "Kutjara-kutjara", translation: "Four" },
                    { word: "Mara kutju", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Kutju", translation: "One" },
                            { word: "Kutjara", translation: "Two" },
                            { word: "Mankurpa", translation: "Three" },
                            { word: "Kutjara-kutjara", translation: "Four" },
                            { word: "Mara kutju", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Djambarrpuyngu": {
        basicInfo: {
            nativeName: "Djambarrpuyngu",
            regions: ["Australia (Northern Territory)"],
            speakers: "About 1,000",
            familyBranch: "Yolŋu",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "djambarrpuyngu-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Yo", translation: "Hello" },
                    { word: "Manymak", translation: "Good" },
                    { word: "Yo", translation: "Yes" },
                    { word: "Yaka", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Yo", translation: "Hello" },
                            { word: "Manymak", translation: "Good" },
                            { word: "Yo", translation: "Yes" },
                            { word: "Yaka", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "djambarrpuyngu-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Waŋgany", translation: "One" },
                    { word: "Märrma'", translation: "Two" },
                    { word: "Ḻurrkun'", translation: "Three" },
                    { word: "Ḏämbumirri", translation: "Four" },
                    { word: "Goŋ-waŋgany", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Waŋgany", translation: "One" },
                            { word: "Märrma'", translation: "Two" },
                            { word: "Ḻurrkun'", translation: "Three" },
                            { word: "Ḏämbumirri", translation: "Four" },
                            { word: "Goŋ-waŋgany", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Siberian Yupik": {
        basicInfo: {
            nativeName: "Юпик (Yupik)",
            regions: ["Russia (Chukotka)"],
            speakers: "About 1,000",
            familyBranch: "Eskimo-Aleut",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "siberian-yupik-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Сяю", translation: "Hello" },
                    { word: "Игаҳпагуҳтуҳ", translation: "Good" },
                    { word: "Аа", translation: "Yes" },
                    { word: "Накаа", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Сяю", translation: "Hello" },
                            { word: "Игаҳпагуҳтуҳ", translation: "Good" },
                            { word: "Аа", translation: "Yes" },
                            { word: "Накаа", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "siberian-yupik-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Атасиҳ", translation: "One" },
                    { word: "Малҕук", translation: "Two" },
                    { word: "Пиңают", translation: "Three" },
                    { word: "Стамат", translation: "Four" },
                    { word: "Талимат", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Атасиҳ", translation: "One" },
                            { word: "Малҕук", translation: "Two" },
                            { word: "Пиңают", translation: "Three" },
                            { word: "Стамат", translation: "Four" },
                            { word: "Талимат", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Jeju": {
        basicInfo: {
            nativeName: "제주어 (Jeju-eo)",
            regions: ["South Korea (Jeju Island)"],
            speakers: "Less than 10",
            familyBranch: "Koreanic",
            writingSystem: "Hangul"
        },
        lessons: [
            {
                id: "jeju-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "안녕하우과", translation: "Hello" },
                    { word: "좋수다", translation: "Good" },
                    { word: "예", translation: "Yes" },
                    { word: "아니", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "안녕하우과", translation: "Hello" },
                            { word: "좋수다", translation: "Good" },
                            { word: "예", translation: "Yes" },
                            { word: "아니", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "jeju-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "하나", translation: "One" },
                    { word: "둘", translation: "Two" },
                    { word: "셋", translation: "Three" },
                    { word: "넷", translation: "Four" },
                    { word: "다섯", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "하나", translation: "One" },
                            { word: "둘", translation: "Two" },
                            { word: "셋", translation: "Three" },
                            { word: "넷", translation: "Four" },
                            { word: "다섯", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Kikuyu": {
        basicInfo: {
            nativeName: "Gĩkũyũ",
            regions: ["Kenya"],
            speakers: "About 7 million",
            familyBranch: "Bantu",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "kikuyu-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Wĩmwega", translation: "Hello" },
                    { word: "Nĩ wega", translation: "Good" },
                    { word: "Ĩĩ", translation: "Yes" },
                    { word: "Aca", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Wĩmwega", translation: "Hello" },
                            { word: "Nĩ wega", translation: "Good" },
                            { word: "Ĩĩ", translation: "Yes" },
                            { word: "Aca", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "kikuyu-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ĩmwe", translation: "One" },
                    { word: "Igĩrĩ", translation: "Two" },
                    { word: "Ithatũ", translation: "Three" },
                    { word: "Inya", translation: "Four" },
                    { word: "Ithano", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ĩmwe", translation: "One" },
                            { word: "Igĩrĩ", translation: "Two" },
                            { word: "Ithatũ", translation: "Three" },
                            { word: "Inya", translation: "Four" },
                            { word: "Ithano", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Kumeyaay": {
        basicInfo: {
            nativeName: "Kumeyaay",
            regions: ["United States (California, Baja California)"],
            speakers: "550",
            familyBranch: "Yuman",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "kumeyaay-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Haawka", translation: "Hello" },
                    { word: "'Ahan", translation: "Yes" },
                    { word: "Nyaa", translation: "No" },
                    { word: "Kwaayii", translation: "Good" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Haawka", translation: "Hello" },
                            { word: "'Ahan", translation: "Yes" },
                            { word: "Nyaa", translation: "No" },
                            { word: "Kwaayii", translation: "Good" }
                        ]
                    }
                ]
            },
            {
                id: "kumeyaay-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Chinypay", translation: "One" },
                    { word: "Hawuk", translation: "Two" },
                    { word: "Hamok", translation: "Three" },
                    { word: "Chapap", translation: "Four" },
                    { word: "Shahlyip", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Chinypay", translation: "One" },
                            { word: "Hawuk", translation: "Two" },
                            { word: "Hamok", translation: "Three" },
                            { word: "Chapap", translation: "Four" },
                            { word: "Shahlyip", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Guugu Yimithirr": {
        basicInfo: {
            nativeName: "Guugu Yimithirr",
            regions: ["Australia (Queensland)"],
            speakers: "About 800",
            familyBranch: "Pama-Nyungan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "guugu-yimithirr-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Yawo", translation: "Hello" },
                    { word: "Ngayu", translation: "Yes" },
                    { word: "Yagu", translation: "No" },
                    { word: "Gala", translation: "Good" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Yawo", translation: "Hello" },
                            { word: "Ngayu", translation: "Yes" },
                            { word: "Yagu", translation: "No" },
                            { word: "Gala", translation: "Good" }
                        ]
                    }
                ]
            },
            {
                id: "guugu-yimithirr-basics-2", 
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Nhila", translation: "One" },
                    { word: "Gudhiira", translation: "Two" },
                    { word: "Guriir", translation: "Three" },
                    { word: "Nharba", translation: "Four" },
                    { word: "Maguli", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Nhila", translation: "One" },
                            { word: "Gudhiira", translation: "Two" },
                            { word: "Guriir", translation: "Three" },
                            { word: "Nharba", translation: "Four" },
                            { word: "Maguli", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Mi'kmaq": {
        basicInfo: {
            nativeName: "Mi'kmaq",
            regions: ["Canada (Nova Scotia, New Brunswick, Prince Edward Island)"],
            speakers: "About 8,000",
            familyBranch: "Algonquian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "mikmaq-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Kwe'", translation: "Hello" },
                    { word: "E'e", translation: "Yes" },
                    { word: "Moqwa", translation: "No" },
                    { word: "Wela'lin", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Kwe'", translation: "Hello" },
                            { word: "E'e", translation: "Yes" },
                            { word: "Moqwa", translation: "No" },
                            { word: "Wela'lin", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "mikmaq-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner", 
                vocabulary: [
                    { word: "Ne'wt", translation: "One" },
                    { word: "Ta'pu", translation: "Two" },
                    { word: "Si'st", translation: "Three" },
                    { word: "Ne'w", translation: "Four" },
                    { word: "Na'n", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ne'wt", translation: "One" },
                            { word: "Ta'pu", translation: "Two" },
                            { word: "Si'st", translation: "Three" },
                            { word: "Ne'w", translation: "Four" },
                            { word: "Na'n", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Aleut": {
        basicInfo: {
            nativeName: "Unangam Tunuu",
            regions: ["United States (Alaska)"],
            speakers: "About 100",
            familyBranch: "Eskimo-Aleut",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "aleut-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Aang", translation: "Hello" },
                    { word: "Qaĝaasakuq", translation: "Thank you" },
                    { word: "Aa", translation: "Yes" },
                    { word: "Naaga", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Aang", translation: "Hello" },
                            { word: "Qaĝaasakuq", translation: "Thank you" },
                            { word: "Aa", translation: "Yes" },
                            { word: "Naaga", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "aleut-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ataqan", translation: "One" },
                    { word: "Alax", translation: "Two" },
                    { word: "Qankun", translation: "Three" },
                    { word: "Sichin", translation: "Four" },
                    { word: "Chaan", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ataqan", translation: "One" },
                            { word: "Alax", translation: "Two" },
                            { word: "Qankun", translation: "Three" },
                            { word: "Sichin", translation: "Four" },
                            { word: "Chaan", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Maasai": {
        basicInfo: {
            nativeName: "ɔl Maa",
            regions: ["Kenya, Tanzania"],
            speakers: "About 1 million",
            familyBranch: "Nilo-Saharan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "maasai-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Supa", translation: "Hello" },
                    { word: "Ashe", translation: "Thank you" },
                    { word: "Ee", translation: "Yes" },
                    { word: "Aa", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Supa", translation: "Hello" },
                            { word: "Ashe", translation: "Thank you" },
                            { word: "Ee", translation: "Yes" },
                            { word: "Aa", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "maasai-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Nabo", translation: "One" },
                    { word: "Are", translation: "Two" },
                    { word: "Uni", translation: "Three" },
                    { word: "Ong'wan", translation: "Four" },
                    { word: "Imiet", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Nabo", translation: "One" },
                            { word: "Are", translation: "Two" },
                            { word: "Uni", translation: "Three" },
                            { word: "Ong'wan", translation: "Four" },
                            { word: "Imiet", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Nuu-Chah-Nulth": {
        basicInfo: {
            nativeName: "Nuučaan̓uł",
            regions: ["Canada (Vancouver Island)"],
            speakers: "About 1000",
            familyBranch: "Wakashan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "nuu-chah-nulth-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Čuu", translation: "Hello/Goodbye" },
                    { word: "Kleko kleko", translation: "Thank you" },
                    { word: "Haa", translation: "Yes" },
                    { word: "Wik", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Čuu", translation: "Hello/Goodbye" },
                            { word: "Kleko kleko", translation: "Thank you" },
                            { word: "Haa", translation: "Yes" },
                            { word: "Wik", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "nuu-chah-nulth-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "C̓awaak", translation: "One" },
                    { word: "ʔaƛa", translation: "Two" },
                    { word: "Qacc̓a", translation: "Three" },
                    { word: "Muu", translation: "Four" },
                    { word: "Suč̓a", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "C̓awaak", translation: "One" },
                            { word: "ʔaƛa", translation: "Two" },
                            { word: "Qacc̓a", translation: "Three" },
                            { word: "Muu", translation: "Four" },
                            { word: "Suč̓a", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Nez Perce": {
        basicInfo: {
            nativeName: "Nimíipuu",
            regions: ["United States (Idaho, Washington, Oregon)"],
            speakers: "Less than 10",
            familyBranch: "Sahaptian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "nez-perce-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Qe'ciyéw'yew'", translation: "Hello" },
                    { word: "Wáaqo'", translation: "Thank you" },
                    { word: "'éehe", translation: "Yes" },
                    { word: "wéet'u", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Qe'ciyéw'yew'", translation: "Hello" },
                            { word: "Wáaqo'", translation: "Thank you" },
                            { word: "'éehe", translation: "Yes" },
                            { word: "wéet'u", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "nez-perce-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "nááqc", translation: "One" },
                    { word: "léepwe", translation: "Two" },
                    { word: "mitáat", translation: "Three" },
                    { word: "píilept", translation: "Four" },
                    { word: "páaxat", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "nááqc", translation: "One" },
                            { word: "léepwe", translation: "Two" },
                            { word: "mitáat", translation: "Three" },
                            { word: "píilept", translation: "Four" },
                            { word: "páaxat", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "ǃKung": {
        basicInfo: {
            nativeName: "ǃKung",
            regions: ["Namibia, Botswana"],
            speakers: "About 5,000",
            familyBranch: "Kx'a",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "kung-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "!xo", translation: "Hello" },
                    { word: "ǂoa", translation: "Thank you" },
                    { word: "ʘoa", translation: "Yes" },
                    { word: "!hui", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "!xo", translation: "Hello" },
                            { word: "ǂoa", translation: "Thank you" },
                            { word: "ʘoa", translation: "Yes" },
                            { word: "!hui", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "kung-basics-2", 
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ǂ'ui", translation: "One" },
                    { word: "ǁam", translation: "Two" },
                    { word: "!nona", translation: "Three" },
                    { word: "ǁhaka", translation: "Four" },
                    { word: "ǂ'un", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "ǂ'ui", translation: "One" },
                            { word: "ǁam", translation: "Two" },
                            { word: "!nona", translation: "Three" },
                            { word: "ǁhaka", translation: "Four" },
                            { word: "ǂ'un", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Xavante": {
        basicInfo: {
            nativeName: "A'uwẽ",
            regions: ["Brazil"],
            speakers: "About 9,000",
            familyBranch: "Jê",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "xavante-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "rowẽ", translation: "Hello" },
                    { word: "ĩhe", translation: "Thank you" },
                    { word: "ĩhẽ", translation: "Yes" },
                    { word: "mare di", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "rowẽ", translation: "Hello" },
                            { word: "ĩhe", translation: "Thank you" },
                            { word: "ĩhẽ", translation: "Yes" },
                            { word: "mare di", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "xavante-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "misi", translation: "One" },
                    { word: "maparane", translation: "Two" },
                    { word: "si'ubdatõ", translation: "Three" },
                    { word: "maparane si'uiwana", translation: "Four" },
                    { word: "ĩmrotõ", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "misi", translation: "One" },
                            { word: "maparane", translation: "Two" },
                            { word: "si'ubdatõ", translation: "Three" },
                            { word: "maparane si'uiwana", translation: "Four" },
                            { word: "ĩmrotõ", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Uyghur": {
        basicInfo: {
            nativeName: "Уйғурчә (Uyghurche)",
            regions: ["China (Xinjiang)"],
            speakers: "About 10 million",
            familyBranch: "Turkic",
            writingSystem: "Arabic script, Latin alphabet, Cyrillic alphabet"
        },
        lessons: [
            {
                id: "uyghur-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Яхшимусиз", translation: "Hello" },
                    { word: "Рәхмәт", translation: "Thank you" },
                    { word: "Һə'ə", translation: "Yes" },
                    { word: "Яқ", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Яхшимусиз", translation: "Hello" },
                            { word: "Рәхмәт", translation: "Thank you" },
                            { word: "Һə'ə", translation: "Yes" },
                            { word: "Яқ", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "uyghur-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "бир", translation: "One" },
                    { word: "икки", translation: "Two" },
                    { word: "үч", translation: "Three" },
                    { word: "төрт", translation: "Four" },
                    { word: "бәш", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "бир", translation: "One" },
                            { word: "икки", translation: "Two" },
                            { word: "үч", translation: "Three" },
                            { word: "төрт", translation: "Four" },
                            { word: "бәш", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Sumerian": {
        basicInfo: {
            nativeName: "𒅴𒂠 (eme-ĝir₁₅)",
            regions: ["Mesopotamia (modern Iraq)"],
            speakers: "Extinct",
            familyBranch: "Language isolate",
            writingSystem: "Cuneiform script"
        },
        lessons: [
            {
                id: "sumerian-basics-1",
                title: "Basic Cuneiform Signs",
                difficulty: "beginner",
                vocabulary: [
                    { word: "𒀭", translation: "God, Heaven", transcription: "an" },
                    { word: "𒌷", translation: "City", transcription: "uru" },
                    { word: "𒂗", translation: "Lord", transcription: "en" },
                    { word: "𒃲", translation: "Great", transcription: "gal" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "𒀭", translation: "God, Heaven", transcription: "an" },
                            { word: "𒌷", translation: "City", transcription: "uru" },
                            { word: "𒂗", translation: "Lord", transcription: "en" },
                            { word: "𒃲", translation: "Great", transcription: "gal" }
                        ]
                    }
                ]
            },
            {
                id: "sumerian-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "𒐕", translation: "One", transcription: "diš" },
                    { word: "𒈫", translation: "Two", transcription: "min" },
                    { word: "𒐈", translation: "Three", transcription: "eš" },
                    { word: "𒐉", translation: "Four", transcription: "limmu" },
                    { word: "𒐊", translation: "Five", transcription: "ia" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "𒐕", translation: "One", transcription: "diš" },
                            { word: "𒈫", translation: "Two", transcription: "min" },
                            { word: "𒐈", translation: "Three", transcription: "eš" },
                            { word: "𒐉", translation: "Four", transcription: "limmu" },
                            { word: "𒐊", translation: "Five", transcription: "ia" }
                        ]
                    }
                ]
            }
        ]
    },
    "Rusyn": {
        basicInfo: {
            nativeName: "Русиньскый язык (Rusin'skyj jazyk)",
            regions: ["Ukraine, Slovakia, Poland, Hungary, Romania, Serbia"],
            speakers: "About 1 million",
            familyBranch: "Indo-European (Slavic)",
            writingSystem: "Cyrillic alphabet, Latin alphabet"
        },
        lessons: [
            {
                id: "rusyn-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Добрый день", translation: "Good day" },
                    { word: "Дякую", translation: "Thank you" },
                    { word: "Прошу", translation: "Please" },
                    { word: "Як ся маєте", translation: "How are you" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Добрый день", translation: "Good day" },
                            { word: "Дякую", translation: "Thank you" },
                            { word: "Прошу", translation: "Please" },
                            { word: "Як ся маєте", translation: "How are you" }
                        ]
                    }
                ]
            },
            {
                id: "rusyn-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "один", translation: "one", transcription: "odin" },
                    { word: "два", translation: "two", transcription: "dva" },
                    { word: "три", translation: "three", transcription: "tri" },
                    { word: "чотири", translation: "four", transcription: "chotiri" },
                    { word: "п'ять", translation: "five", transcription: "pyat'" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "один", translation: "one" },
                            { word: "два", translation: "two" },
                            { word: "три", translation: "three" },
                            { word: "чотири", translation: "four" },
                            { word: "п'ять", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Zuni": {
        basicInfo: {
            nativeName: "Shiwi'ma",
            regions: ["United States (New Mexico)"],
            speakers: "About 9,000",
            familyBranch: "Language isolate",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "zuni-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Keshi", translation: "Hello" },
                    { word: "Elahkwa", translation: "Thank you" },
                    { word: "Ho'n a:wan tehya", translation: "Good morning" },
                    { word: "K'yanna", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Keshi", translation: "Hello" },
                            { word: "Elahkwa", translation: "Thank you" },
                            { word: "Ho'n a:wan tehya", translation: "Good morning" },
                            { word: "K'yanna", translation: "Goodbye" }
                        ]
                    }
                ]
            },
            {
                id: "zuni-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Topinte", translation: "one" },
                    { word: "Kwili", translation: "two" },
                    { word: "Ha'i", translation: "three" },
                    { word: "A:wide", translation: "four" },
                    { word: "Appde", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Topinte", translation: "one" },
                            { word: "Kwili", translation: "two" },
                            { word: "Ha'i", translation: "three" },
                            { word: "A:wide", translation: "four" },
                            { word: "Appde", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Basque": {
        basicInfo: {
            nativeName: "Euskara",
            regions: ["Spain, France"],
            speakers: "About 750,000",
            familyBranch: "Language isolate",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "basque-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Kaixo", translation: "Hello" },
                    { word: "Eskerrik asko", translation: "Thank you" },
                    { word: "Egun on", translation: "Good morning" },
                    { word: "Agur", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Kaixo", translation: "Hello" },
                            { word: "Eskerrik asko", translation: "Thank you" },
                            { word: "Egun on", translation: "Good morning" },
                            { word: "Agur", translation: "Goodbye" }
                        ]
                    }
                ]
            },
            {
                id: "basque-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Bat", translation: "one" },
                    { word: "Bi", translation: "two" },
                    { word: "Hiru", translation: "three" },
                    { word: "Lau", translation: "four" },
                    { word: "Bost", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Bat", translation: "one" },
                            { word: "Bi", translation: "two" },
                            { word: "Hiru", translation: "three" },
                            { word: "Lau", translation: "four" },
                            { word: "Bost", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Welsh": {
        basicInfo: {
            nativeName: "Cymraeg",
            regions: ["United Kingdom (Wales)"],
            speakers: "About 700,000",
            familyBranch: "Indo-European (Celtic)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "welsh-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Bore da", translation: "Good morning" },
                    { word: "Diolch", translation: "Thank you" },
                    { word: "Hwyl fawr", translation: "Goodbye" },
                    { word: "Croeso", translation: "Welcome" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Bore da", translation: "Good morning" },
                            { word: "Diolch", translation: "Thank you" },
                            { word: "Hwyl fawr", translation: "Goodbye" },
                            { word: "Croeso", translation: "Welcome" }
                        ]
                    }
                ]
            },
            {
                id: "welsh-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Un", translation: "one" },
                    { word: "Dau", translation: "two" },
                    { word: "Tri", translation: "three" },
                    { word: "Pedwar", translation: "four" },
                    { word: "Pump", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Un", translation: "one" },
                            { word: "Dau", translation: "two" },
                            { word: "Tri", translation: "three" },
                            { word: "Pedwar", translation: "four" },
                            { word: "Pump", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Quapaw": {
        basicInfo: {
            nativeName: "Ugakhpa",
            regions: ["United States (Oklahoma)"],
            speakers: "Less than 10",
            familyBranch: "Siouan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "quapaw-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Hau", translation: "Hello" },
                    { word: "Wíblaho", translation: "Thank you" },
                    { word: "Ayó", translation: "Goodbye" },
                    { word: "Kaké", translation: "Friend" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Hau", translation: "Hello" },
                            { word: "Wíblaho", translation: "Thank you" },
                            { word: "Ayó", translation: "Goodbye" },
                            { word: "Kaké", translation: "Friend" }
                        ]
                    }
                ]
            },
            {
                id: "quapaw-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Míⁿxe", translation: "one" },
                    { word: "Núⁿba", translation: "two" },
                    { word: "Dáni", translation: "three" },
                    { word: "Dóba", translation: "four" },
                    { word: "Satá", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Míⁿxe", translation: "one" },
                            { word: "Núⁿba", translation: "two" },
                            { word: "Dáni", translation: "three" },
                            { word: "Dóba", translation: "four" },
                            { word: "Satá", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Nheengatu": {
        basicInfo: {
            nativeName: "Nheengatu",
            regions: ["Brazil"],
            speakers: "About 200,000",
            familyBranch: "Tupian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "nheengatu-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Puranga ara", translation: "Good day" },
                    { word: "Kwekatú", translation: "Hello" },
                    { word: "Asuí kurí", translation: "Goodbye" },
                    { word: "Marama", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Puranga ara", translation: "Good day" },
                            { word: "Kwekatú", translation: "Hello" },
                            { word: "Asuí kurí", translation: "Goodbye" },
                            { word: "Marama", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "nheengatu-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Yepé", translation: "one" },
                    { word: "Mukũi", translation: "two" },
                    { word: "Musapiri", translation: "three" },
                    { word: "Irundi", translation: "four" },
                    { word: "Yepé-pusé", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Yepé", translation: "one" },
                            { word: "Mukũi", translation: "two" },
                            { word: "Musapiri", translation: "three" },
                            { word: "Irundi", translation: "four" },
                            { word: "Yepé-pusé", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Powhatan": {
        basicInfo: {
            nativeName: "Powhatan",
            regions: ["United States (Virginia)"],
            speakers: "Extinct",
            familyBranch: "Algonquian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "powhatan-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Wingapo", translation: "Welcome" },
                    { word: "Netah", translation: "Friend" },
                    { word: "Anah", translation: "Goodbye" },
                    { word: "Wanishi", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Wingapo", translation: "Welcome" },
                            { word: "Netah", translation: "Friend" },
                            { word: "Anah", translation: "Goodbye" },
                            { word: "Wanishi", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "powhatan-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Nekut", translation: "one" },
                    { word: "Nish", translation: "two" },
                    { word: "Nuss", translation: "three" },
                    { word: "Yaw", translation: "four" },
                    { word: "Paranske", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Nekut", translation: "one" },
                            { word: "Nish", translation: "two" },
                            { word: "Nuss", translation: "three" },
                            { word: "Yaw", translation: "four" },
                            { word: "Paranske", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Samogitian": {
        basicInfo: {
            nativeName: "Žemaitiu ruoda",
            regions: ["Lithuania"],
            speakers: "Less than 500,000",
            familyBranch: "Indo-European (Baltic)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "samogitian-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Svēks", translation: "Hello" },
                    { word: "Aš", translation: "I" },
                    { word: "Iki", translation: "Goodbye" },
                    { word: "Ačiū", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Svēks", translation: "Hello" },
                            { word: "Aš", translation: "I" },
                            { word: "Iki", translation: "Goodbye" },
                            { word: "Ačiū", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "samogitian-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Vīns", translation: "one" },
                    { word: "Du", translation: "two" },
                    { word: "Trīs", translation: "three" },
                    { word: "Keturi", translation: "four" },
                    { word: "Penki", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Vīns", translation: "one" },
                            { word: "Du", translation: "two" },
                            { word: "Trīs", translation: "three" },
                            { word: "Keturi", translation: "four" },
                            { word: "Penki", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Yaqui": {
        basicInfo: {
            nativeName: "Yoeme",
            regions: ["Mexico (Sonora)"],
            speakers: "About 15,000",
            familyBranch: "Uto-Aztecan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "yaqui-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Lios enchi anía", translation: "Hello" },
                    { word: "Nee", translation: "I" },
                    { word: "Dios enchi anía", translation: "Goodbye" },
                    { word: "Enchi nee baisae", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Lios enchi anía", translation: "Hello" },
                            { word: "Nee", translation: "I" },
                            { word: "Dios enchi anía", translation: "Goodbye" },
                            { word: "Enchi nee baisae", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "yaqui-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Senu", translation: "one" },
                    { word: "Wooi", translation: "two" },
                    { word: "Baji", translation: "three" },
                    { word: "Naiki", translation: "four" },
                    { word: "Mamni", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Senu", translation: "one" },
                            { word: "Wooi", translation: "two" },
                            { word: "Baji", translation: "three" },
                            { word: "Naiki", translation: "four" },
                            { word: "Mamni", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Tsimshian": {
        basicInfo: {
            nativeName: "Sm'algyax",
            regions: ["Canada (British Columbia), United States (Alaska)"],
            speakers: "About 2,000",
            familyBranch: "Tsimshianic",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "tsimshian-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ndaa 'nüüyu", translation: "Hello" },
                    { word: "Naa", translation: "I/me" },
                    { word: "T'oyaxsut 'nüüsm", translation: "Thank you" },
                    { word: "Łoomsk", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ndaa 'nüüyu", translation: "Hello" },
                            { word: "Naa", translation: "I/me" },
                            { word: "T'oyaxsut 'nüüsm", translation: "Thank you" },
                            { word: "Łoomsk", translation: "Goodbye" }
                        ]
                    }
                ]
            },
            {
                id: "tsimshian-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "K'ül", translation: "one" },
                    { word: "Gyupel", translation: "two" },
                    { word: "Gwila", translation: "three" },
                    { word: "Txalpx", translation: "four" },
                    { word: "Kxshil", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "K'ül", translation: "one" },
                            { word: "Gyupel", translation: "two" },
                            { word: "Gwila", translation: "three" },
                            { word: "Txalpx", translation: "four" },
                            { word: "Kxshil", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Passamaquoddy": {
        basicInfo: {
            nativeName: "Peskotomuhkati",
            regions: ["United States (Maine), Canada (New Brunswick)"],
            speakers: "455",
            familyBranch: "Algonquian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "passamaquoddy-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Kwe", translation: "Hello" },
                    { word: "Woliwon", translation: "Thank you" },
                    { word: "Kulahsuwel", translation: "Goodbye" },
                    { word: "Nil", translation: "I/me" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Kwe", translation: "Hello" },
                            { word: "Woliwon", translation: "Thank you" },
                            { word: "Kulahsuwel", translation: "Goodbye" },
                            { word: "Nil", translation: "I/me" }
                        ]
                    }
                ]
            },
            {
                id: "passamaquoddy-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Pesq", translation: "one" },
                    { word: "Nis", translation: "two" },
                    { word: "Nuhus", translation: "three" },
                    { word: "New", translation: "four" },
                    { word: "Nan", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Pesq", translation: "one" },
                            { word: "Nis", translation: "two" },
                            { word: "Nuhus", translation: "three" },
                            { word: "New", translation: "four" },
                            { word: "Nan", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Mohave": {
        basicInfo: {
            nativeName: "Hamakhav",
            regions: ["United States (Arizona, California)"],
            speakers: "About 100",
            familyBranch: "Yuman",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "mohave-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Nya", translation: "Hello" },
                    { word: "Ahav", translation: "Thank you" },
                    { word: "Mat nyak", translation: "Goodbye" },
                    { word: "Nya", translation: "I/me" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Nya", translation: "Hello" },
                            { word: "Ahav", translation: "Thank you" },
                            { word: "Mat nyak", translation: "Goodbye" },
                            { word: "Nya", translation: "I/me" }
                        ]
                    }
                ]
            },
            {
                id: "mohave-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "seta", translation: "one" },
                    { word: "havika", translation: "two" },
                    { word: "hamoka", translation: "three" },
                    { word: "hopa", translation: "four" },
                    { word: "tharaba", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "seta", translation: "one" },
                            { word: "havika", translation: "two" },
                            { word: "hamoka", translation: "three" },
                            { word: "hopa", translation: "four" },
                            { word: "tharaba", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Lushootseed": {
        basicInfo: {
            nativeName: "dxʷləšucid",
            regions: ["United States (Washington)"],
            speakers: "Less than 100",
            familyBranch: "Salishan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "lushootseed-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ʔu", translation: "Hello" },
                    { word: "hay̓əb", translation: "Thank you" },
                    { word: "ʔuhuy", translation: "Goodbye" },
                    { word: "ti dəgʷi", translation: "I/me" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "ʔu", translation: "Hello" },
                            { word: "hay̓əb", translation: "Thank you" },
                            { word: "ʔuhuy", translation: "Goodbye" },
                            { word: "ti dəgʷi", translation: "I/me" }
                        ]
                    }
                ]
            },
            {
                id: "lushootseed-basics-2", 
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "dəčuʔ", translation: "one" },
                    { word: "saliʔ", translation: "two" },
                    { word: "ɬixʷ", translation: "three" },
                    { word: "buus", translation: "four" },
                    { word: "cəlac", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "dəčuʔ", translation: "one" },
                            { word: "saliʔ", translation: "two" },
                            { word: "ɬixʷ", translation: "three" },
                            { word: "buus", translation: "four" },
                            { word: "cəlac", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Maori": {
        basicInfo: {
            nativeName: "te reo Māori",
            regions: ["New Zealand"],
            speakers: "About 150,000",
            familyBranch: "Austronesian (Polynesian)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "maori-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Kia ora", translation: "Hello" },
                    { word: "Ka pai", translation: "Good/Well done" },
                    { word: "Haere rā", translation: "Goodbye" },
                    { word: "Tēnā koe", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Kia ora", translation: "Hello" },
                            { word: "Ka pai", translation: "Good/Well done" },
                            { word: "Haere rā", translation: "Goodbye" },
                            { word: "Tēnā koe", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "maori-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "tahi", translation: "one" },
                    { word: "rua", translation: "two" },
                    { word: "toru", translation: "three" },
                    { word: "whā", translation: "four" },
                    { word: "rima", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "tahi", translation: "one" },
                            { word: "rua", translation: "two" },
                            { word: "toru", translation: "three" },
                            { word: "whā", translation: "four" },
                            { word: "rima", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Lhasa Tibetan": {
        basicInfo: {
            nativeName: "ལྷ་སའི་སྐད་ (Lhasa skad)",
            regions: ["China (Tibet)"],
            speakers: "About 1.2 million",
            familyBranch: "Sino-Tibetan (Tibetic)",
            writingSystem: "Tibetan script"
        },
        lessons: [
            {
                id: "tibetan-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "བཀྲ་ཤིས་བདེ་ལེགས", translation: "Hello/Greetings" },
                    { word: "ཐུགས་རྗེ་ཆེ", translation: "Thank you" },
                    { word: "བཀྲ་ཤིས་བདེ་ལེགས་ཞུ", translation: "Goodbye" },
                    { word: "དགོངས་དག", translation: "Sorry/Excuse me" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "བཀྲ་ཤིས་བདེ་ལེགས", translation: "Hello/Greetings" },
                            { word: "ཐུགས་རྗེ་ཆེ", translation: "Thank you" },
                            { word: "བཀྲ་ཤིས་བདེ་ལེགས་ཞུ", translation: "Goodbye" },
                            { word: "དགོངས་དག", translation: "Sorry/Excuse me" }
                        ]
                    }
                ]
            },
            {
                id: "tibetan-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "གཅིག", translation: "one" },
                    { word: "གཉིས", translation: "two" },
                    { word: "གསུམ", translation: "three" },
                    { word: "བཞི", translation: "four" },
                    { word: "ལྔ", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "གཅིག", translation: "one" },
                            { word: "གཉིས", translation: "two" },
                            { word: "གསུམ", translation: "three" },
                            { word: "བཞི", translation: "four" },
                            { word: "ལྔ", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Khoekhoe": {
        basicInfo: {
            nativeName: "Khoekhoegowab",
            regions: ["Namibia, Botswana, South Africa"],
            speakers: "About 300,000",
            familyBranch: "Khoe-Kwadi",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "khoekhoe-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Mâtisa", translation: "Hello" },
                    { word: "Gangans", translation: "Thank you" },
                    { word: "ǁKhai ǁgâs", translation: "Goodbye" },
                    { word: "Tare", translation: "Please" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Mâtisa", translation: "Hello" },
                            { word: "Gangans", translation: "Thank you" },
                            { word: "ǁKhai ǁgâs", translation: "Goodbye" },
                            { word: "Tare", translation: "Please" }
                        ]
                    }
                ]
            },
            {
                id: "khoekhoe-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ǁguî", translation: "one" },
                    { word: "ǁgam", translation: "two" },
                    { word: "ǁnona", translation: "three" },
                    { word: "haka", translation: "four" },
                    { word: "koro", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "ǁguî", translation: "one" },
                            { word: "ǁgam", translation: "two" },
                            { word: "ǁnona", translation: "three" },
                            { word: "haka", translation: "four" },
                            { word: "koro", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Katu": {
        basicInfo: {
            nativeName: "Ktua",
            regions: ["Vietnam, Laos"],
            speakers: "About 10,000",
            familyBranch: "Austroasiatic (Katuic)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "katu-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Adôi", translation: "Hello" },
                    { word: "Mây", translation: "Thank you" },
                    { word: "Tâm biệt", translation: "Goodbye" },
                    { word: "Xin", translation: "Please" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Adôi", translation: "Hello" },
                            { word: "Mây", translation: "Thank you" },
                            { word: "Tâm biệt", translation: "Goodbye" },
                            { word: "Xin", translation: "Please" }
                        ]
                    }
                ]
            },
            {
                id: "katu-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Muội", translation: "one" },
                    { word: "Bar", translation: "two" },
                    { word: "Pai", translation: "three" },
                    { word: "Pôn", translation: "four" },
                    { word: "Sông", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Muội", translation: "one" },
                            { word: "Bar", translation: "two" },
                            { word: "Pai", translation: "three" },
                            { word: "Pôn", translation: "four" },
                            { word: "Sông", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Itelmen": {
        basicInfo: {
            nativeName: "Итэнмэн (Itәnmәn)",
            regions: ["Russia (Kamchatka)"],
            speakers: "Less than 100",
            familyBranch: "Chukotko-Kamchatkan",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "itelmen-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Кза", translation: "Hello" },
                    { word: "Чах", translation: "Thank you" },
                    { word: "Кзаллах", translation: "Goodbye" },
                    { word: "Тхсах", translation: "Please" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Кза", translation: "Hello" },
                            { word: "Чах", translation: "Thank you" },
                            { word: "Кзаллах", translation: "Goodbye" },
                            { word: "Тхсах", translation: "Please" }
                        ]
                    }
                ]
            },
            {
                id: "itelmen-basics-2", 
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Қʼом", translation: "one" },
                    { word: "Кас'х", translation: "two" },
                    { word: "Чоқ", translation: "three" },
                    { word: "Чаақ", translation: "four" },
                    { word: "Кʼиллақ", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Қʼом", translation: "one" },
                            { word: "Кас'х", translation: "two" },
                            { word: "Чоқ", translation: "three" },
                            { word: "Чаақ", translation: "four" },
                            { word: "Кʼиллақ", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Icelandic": {
        basicInfo: {
            nativeName: "Íslenska",
            regions: ["Iceland"],
            speakers: "About 330,000",
            familyBranch: "Indo-European (Germanic)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
          // Corrected number of speakers and family branch
          {
              id: "icelandic-basics-1",
              title: "Common Phrases",
              difficulty: "beginner",
              vocabulary: [
                  { word: "Halló", translation: "Hello" },
                  { word: "Takk", translation: "Thank you" },
                  { word: "Bless", translation: "Goodbye" },
                  { word: "Vinsamlegast", translation: "Please" }
              ],
              exercises: [
                  {
                      type: "pronunciation",
                      words: [
                          { word: "Halló", translation: "Hello" },
                          { word: "Takk", translation: "Thank you" },
                          { word: "Bless", translation: "Goodbye" },
                          { word: "Vinsamlegast", translation: "Please" }
                        ]
                    }
                ]
            },
            {
                id: "icelandic-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner", 
                vocabulary: [
                    { word: "Einn", translation: "one" },
                    { word: "Tveir", translation: "two" },
                    { word: "Þrír", translation: "three" },
                    { word: "Fjórir", translation: "four" },
                    { word: "Fimm", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Einn", translation: "one" },
                            { word: "Tveir", translation: "two" },
                            { word: "Þrír", translation: "three" },
                            { word: "Fjórir", translation: "four" },
                            { word: "Fimm", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Haida": {
        basicInfo: {
            nativeName: "X̱aad Kíl / X̱aaydaa Kil",
            regions: ["Canada (British Columbia), United States (Alaska)"],
            speakers: "About 20",
            familyBranch: "Language isolate",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "haida-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Háw'aa", translation: "Thank you" },
                    { word: "Sán uu dáng gidáang", translation: "How are you?" },
                    { word: "Díi gudangáay 'láagang", translation: "I am fine" },
                    { word: "Húu", translation: "Hello" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Háw'aa", translation: "Thank you" },
                            { word: "Sán uu dáng gidáang", translation: "How are you?" },
                            { word: "Díi gudangáay 'láagang", translation: "I am fine" },
                            { word: "Húu", translation: "Hello" }
                        ]
                    }
                ]
            },
            {
                id: "haida-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Sgwáansang", translation: "one" },
                    { word: "Sdáng", translation: "two" },
                    { word: "Hlghúnahl", translation: "three" },
                    { word: "Stánsang", translation: "four" },
                    { word: "Tléehl", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Sgwáansang", translation: "one" },
                            { word: "Sdáng", translation: "two" },
                            { word: "Hlghúnahl", translation: "three" },
                            { word: "Stánsang", translation: "four" },
                            { word: "Tléehl", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Elfdalian": {
        basicInfo: {
            nativeName: "Övdalsk / Älvdalska",
            regions: ["Sweden"],
            speakers: "About 2,000",
            familyBranch: "Indo-European (Germanic)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "elfdalian-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Tack", translation: "Thank you" },
                    { word: "Ur ir ą̊ dig?", translation: "How are you?" },
                    { word: "Ig ir bra", translation: "I am fine" },
                    { word: "Gu dag", translation: "Hello" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Tack", translation: "Thank you" },
                            { word: "Ur ir ą̊ dig?", translation: "How are you?" },
                            { word: "Ig ir bra", translation: "I am fine" },
                            { word: "Gu dag", translation: "Hello" }
                        ]
                    }
                ]
            },
            {
                id: "elfdalian-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Įett", translation: "one" },
                    { word: "Twą̊", translation: "two" },
                    { word: "Try", translation: "three" },
                    { word: "Fyra", translation: "four" },
                    { word: "Fem", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Įett", translation: "one" },
                            { word: "Twą̊", translation: "two" },
                            { word: "Try", translation: "three" },
                            { word: "Fyra", translation: "four" },
                            { word: "Fem", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Deg Xinag": {
        basicInfo: {
            nativeName: "Deg Xinag",
            regions: ["United States (Alaska)"],
            speakers: "About 40",
            familyBranch: "Na-Dené (Athabaskan)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "deg-xinag-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Dołt'onh", translation: "Thank you" },
                    { word: "Ngiłneyh?", translation: "How are you?" },
                    { word: "Xełt'ey", translation: "Good" },
                    { word: "Naxinłnig", translation: "Hello" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Dołt'onh", translation: "Thank you" },
                            { word: "Ngiłneyh?", translation: "How are you?" },
                            { word: "Xełt'ey", translation: "Good" },
                            { word: "Naxinłnig", translation: "Hello" }
                        ]
                    }
                ]
            },
            {
                id: "deg-xinag-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Łtth'ok", translation: "one" },
                    { word: "Nonton'", translation: "two" },
                    { word: "Toko", translation: "three" },
                    { word: "Deno", translation: "four" },
                    { word: "Łt'aqʼi", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Łtth'ok", translation: "one" },
                            { word: "Nonton'", translation: "two" },
                            { word: "Toko", translation: "three" },
                            { word: "Deno", translation: "four" },
                            { word: "Łt'aqʼi", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Chukchi": {
        basicInfo: {
            nativeName: "Ԯыгъоравэтԯьэн йиԯыйиԯ (Ḷygʺoravètḷʹèn jiḷyjiḷ)",
            regions: ["Russia (Chukotka)"],
            speakers: "About 5,000",
            familyBranch: "Chukotko-Kamchatkan",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "chukchi-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Етти", translation: "Hello" },
                    { word: "Ыммэмэт", translation: "Thank you" },
                    { word: "Гымнан", translation: "Yes" },
                    { word: "Вэнӄо", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Етти", translation: "Hello" },
                            { word: "Ыммэмэт", translation: "Thank you" },
                            { word: "Гымнан", translation: "Yes" },
                            { word: "Вэнӄо", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "chukchi-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ыннэн", translation: "one" },
                    { word: "Ӈирэӄ", translation: "two" },
                    { word: "Ӈыроӄ", translation: "three" },
                    { word: "Ӈыраӄ", translation: "four" },
                    { word: "Мынгыткэн", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ыннэн", translation: "one" },
                            { word: "Ӈирэӄ", translation: "two" },
                            { word: "Ӈыроӄ", translation: "three" },
                            { word: "Ӈыраӄ", translation: "four" },
                            { word: "Мынгыткэн", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Chulym": {
        basicInfo: {
            nativeName: "Чулым тили (Chulym tili)",
            regions: ["Russia (Siberia)"],
            speakers: "Less than 100",
            familyBranch: "Turkic",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "chulym-basics-1",
                title: "Common Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Изенер", translation: "Hello" },
                    { word: "Рахмат", translation: "Thank you" },
                    { word: "Я", translation: "Yes" },
                    { word: "Чок", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Изенер", translation: "Hello" },
                            { word: "Рахмат", translation: "Thank you" },
                            { word: "Я", translation: "Yes" },
                            { word: "Чок", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "chulym-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Пир", translation: "one" },
                    { word: "Ики", translation: "two" },
                    { word: "Уч", translation: "three" },
                    { word: "Торт", translation: "four" },
                    { word: "Пеш", translation: "five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Пир", translation: "one" },
                            { word: "Ики", translation: "two" },
                            { word: "Уч", translation: "three" },
                            { word: "Торт", translation: "four" },
                            { word: "Пеш", translation: "five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Comanche": {
        basicInfo: {
            nativeName: "Nʉmʉ tekwapʉ",
            regions: ["United States (Oklahoma, Texas)"],
            speakers: "About 25",
            familyBranch: "Uto-Aztecan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "comanche-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Haa", translation: "Hello" },
                    { word: "Ura", translation: "Thank you" },
                    { word: "Haa", translation: "Yes" },
                    { word: "Kee", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Haa", translation: "Hello" },
                            { word: "Ura", translation: "Thank you" },
                            { word: "Haa", translation: "Yes" },
                            { word: "Kee", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "comanche-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Sʉmʉ", translation: "One" },
                    { word: "Waha", translation: "Two" },
                    { word: "Pahe", translation: "Three" },
                    { word: "Haikya", translation: "Four" },
                    { word: "Manʉ", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Sʉmʉ", translation: "One" },
                            { word: "Waha", translation: "Two" },
                            { word: "Pahe", translation: "Three" },
                            { word: "Haikya", translation: "Four" },
                            { word: "Manʉ", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Beothuk": {
        basicInfo: {
            nativeName: "Beothuk",
            regions: ["Canada (Newfoundland)"],
            speakers: "Extinct",
            familyBranch: "Language isolate",
            writingSystem: "None, possibly Latin"
        },
        lessons: [
            {
                id: "beothuk-basics-1",
                title: "Common Words",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Mammasaveet", translation: "Good" },
                    { word: "Haddabothic", translation: "Body" },
                    { word: "Keathut", translation: "Boat" },
                    { word: "Osaveet", translation: "Child" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Mammasaveet", translation: "Good" },
                            { word: "Haddabothic", translation: "Body" },
                            { word: "Keathut", translation: "Boat" },
                            { word: "Osaveet", translation: "Child" }
                        ]
                    }
                ]
            },
            {
                id: "beothuk-basics-2",
                title: "Basic Terms",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Eemommoos", translation: "Woman" },
                    { word: "Bukashaman", translation: "Man" },
                    { word: "Moosin", translation: "Iron" },
                    { word: "Washewnishite", translation: "White person" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Eemommoos", translation: "Woman" },
                            { word: "Bukashaman", translation: "Man" },
                            { word: "Moosin", translation: "Iron" },
                            { word: "Washewnishite", translation: "White person" }
                        ]
                    }
                ]
            },
            {
                id: "beothuk-basics-3",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Yāsun", translation: "One" },
                    { word: "Adāthe", translation: "Two" },
                    { word: "Shāshabāth", translation: "Three" },
                    { word: "Dabooset", translation: "Four" },
                    { word: "Nijuk", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Yāsun", translation: "One" },
                            { word: "Adāthe", translation: "Two" },
                            { word: "Shāshabāth", translation: "Three" },
                            { word: "Dabooset", translation: "Four" },
                            { word: "Nijuk", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Bashkir": {
        basicInfo: {
            nativeName: "Башҡорт теле (Bashqort tele)",
            regions: ["Russia (Bashkortostan)"],
            speakers: "About 1.2 million",
            familyBranch: "Turkic",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "bashkir-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Һаумыһығыҙ", translation: "Hello" },
                    { word: "Рәхмәт", translation: "Thank you" },
                    { word: "Һау булығыҙ", translation: "Goodbye" },
                    { word: "Эйе", translation: "Yes" },
                    { word: "Юҡ", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Һаумыһығыҙ", translation: "Hello" },
                            { word: "Рәхмәт", translation: "Thank you" },
                            { word: "Һау булығыҙ", translation: "Goodbye" },
                            { word: "Эйе", translation: "Yes" },
                            { word: "Юҡ", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "bashkir-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Бер", translation: "One" },
                    { word: "Ике", translation: "Two" },
                    { word: "Өс", translation: "Three" },
                    { word: "Дүрт", translation: "Four" },
                    { word: "Биш", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Бер", translation: "One" },
                            { word: "Ике", translation: "Two" },
                            { word: "Өс", translation: "Three" },
                            { word: "Дүрт", translation: "Four" },
                            { word: "Биш", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },    
    "Selkup": {
        basicInfo: {
            nativeName: "Шӧльӄумыт әты (Shöl'qumyt əty)",
            regions: ["Russia (Tomsk Oblast, Yamalo-Nenets Autonomous Okrug)"],
            speakers: "About 1,000",
            familyBranch: "Uralic (Samoyedic)",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "selkup-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Таммыл", translation: "Hello" },
                    { word: "Варгылак", translation: "Thank you" },
                    { word: "Чаптэ", translation: "Goodbye" },
                    { word: "Аа", translation: "Yes" },
                    { word: "Аса", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Таммыл", translation: "Hello" },
                            { word: "Варгылак", translation: "Thank you" },
                            { word: "Чаптэ", translation: "Goodbye" },
                            { word: "Аа", translation: "Yes" },
                            { word: "Аса", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "selkup-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Укыр", translation: "One" },
                    { word: "Шитты", translation: "Two" },
                    { word: "Нагыр", translation: "Three" },
                    { word: "Тетты", translation: "Four" },
                    { word: "Сомбла", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Укыр", translation: "One" },
                            { word: "Шитты", translation: "Two" },
                            { word: "Нагыр", translation: "Three" },
                            { word: "Тетты", translation: "Four" },
                            { word: "Сомбла", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Djeoromitxí": {
        basicInfo: {
            nativeName: "Djeoromitxí",
            regions: ["Brazil (Rondônia)"],
            speakers: "About 10",
            familyBranch: "Jabuti",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "djeoromitxi-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Hõnõ", translation: "Hello" },
                    { word: "Kũnĩ", translation: "Thank you" },
                    { word: "Tchiê", translation: "Goodbye" },
                    { word: "Hã", translation: "Yes" },
                    { word: "Hãwa", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Hõnõ", translation: "Hello" },
                            { word: "Kũnĩ", translation: "Thank you" },
                            { word: "Tchiê", translation: "Goodbye" },
                            { word: "Hã", translation: "Yes" },
                            { word: "Hãwa", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "djeoromitxi-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Psiê", translation: "One" },
                    { word: "Psikũ", translation: "Two" },
                    { word: "Hikũtã", translation: "Three" },
                    { word: "Djiri-hõpsikũ", translation: "Four" },
                    { word: "Djiri-psie", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Psiê", translation: "One" },
                            { word: "Psikũ", translation: "Two" },
                            { word: "Hikũtã", translation: "Three" },
                            { word: "Djiri-hõpsikũ", translation: "Four" },
                            { word: "Djiri-psie", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Yakut": {
        basicInfo: {
            nativeName: "Саха тыла (Sakha tyla)",
            regions: ["Russia (Sakha Republic)"],
            speakers: "About 450,000",
            familyBranch: "Turkic",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "yakut-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Дорообо", translation: "Hello" },
                    { word: "Баһыыба", translation: "Thank you" },
                    { word: "Көрсүөххэ диэри", translation: "Goodbye" },
                    { word: "Ээ", translation: "Yes" },
                    { word: "Суох", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Дорообо", translation: "Hello" },
                            { word: "Баһыыба", translation: "Thank you" },
                            { word: "Көрсүөххэ диэри", translation: "Goodbye" },
                            { word: "Ээ", translation: "Yes" },
                            { word: "Суох", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "yakut-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Биир", translation: "One" },
                    { word: "Икки", translation: "Two" },
                    { word: "Үс", translation: "Three" },
                    { word: "Түөрт", translation: "Four" },
                    { word: "Биэс", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Биир", translation: "One" },
                            { word: "Икки", translation: "Two" },
                            { word: "Үс", translation: "Three" },
                            { word: "Түөрт", translation: "Four" },
                            { word: "Биэс", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Kokborok": {
        basicInfo: {
            nativeName: "কক্‌বরক্‌ (Kokborok)",
            regions: ["India (Tripura)"],
            speakers: "About 800,000",
            familyBranch: "Sino-Tibetan (Bodo-Garo)",
            writingSystem: "Bengali script, Latin alphabet"
        },
        lessons: [
            {
                id: "kokborok-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Khulumma", translation: "Hello" },
                    { word: "Naising", translation: "Thank you" },
                    { word: "Phaimani", translation: "Goodbye" },
                    { word: "Hoi", translation: "Yes" },
                    { word: "Yagwi", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Khulumma", translation: "Hello" },
                            { word: "Naising", translation: "Thank you" },
                            { word: "Phaimani", translation: "Goodbye" },
                            { word: "Hoi", translation: "Yes" },
                            { word: "Yagwi", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "kokborok-basics-2", 
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Sa", translation: "One" },
                    { word: "Nwi", translation: "Two" },
                    { word: "Tham", translation: "Three" },
                    { word: "Brwi", translation: "Four" },
                    { word: "Ba", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Sa", translation: "One" },
                            { word: "Nwi", translation: "Two" },
                            { word: "Tham", translation: "Three" },
                            { word: "Brwi", translation: "Four" },
                            { word: "Ba", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Kabardian": {
        basicInfo: {
            nativeName: "Адыгэбзэ (Adygebze)",
            regions: ["Russia (Kabardino-Balkaria, Karachay-Cherkessia), Turkey, Jordan, Syria"],
            speakers: "About 1.6 million",
            familyBranch: "Northwest Caucasian",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "kabardian-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Фӏыуэ фыщыӏэ", translation: "Hello" },
                    { word: "Упсэу", translation: "Thank you" },
                    { word: "ФӀыкӏэ", translation: "Goodbye" },
                    { word: "Нтӏэ", translation: "Yes" },
                    { word: "Хьэуэ", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Фӏыуэ фыщыӏэ", translation: "Hello" },
                            { word: "Упсэу", translation: "Thank you" },
                            { word: "ФӀыкӏэ", translation: "Goodbye" },
                            { word: "Нтӏэ", translation: "Yes" },
                            { word: "Хьэуэ", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "kabardian-basics-2",
                title: "Numbers 1-5", 
                difficulty: "beginner",
                vocabulary: [
                    { word: "Зы", translation: "One" },
                    { word: "ТӀу", translation: "Two" },
                    { word: "Щы", translation: "Three" },
                    { word: "ПлӀы", translation: "Four" },
                    { word: "Тху", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Зы", translation: "One" },
                            { word: "ТӀу", translation: "Two" },
                            { word: "Щы", translation: "Three" },
                            { word: "ПлӀы", translation: "Four" },
                            { word: "Тху", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Quileute": {
        basicInfo: {
            nativeName: "Kʷoʔlí·yot̓",
            regions: ["United States (Washington)"],
            speakers: "Extinct (last fluent speaker died in 1999)",
            familyBranch: "Chimakuan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "quileute-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ʔaláʔa", translation: "Hello" },
                    { word: "hó·ʔo", translation: "Thank you" },
                    { word: "ʔayó·qʷa", translation: "Goodbye" },
                    { word: "háʔa", translation: "Yes" },
                    { word: "qʷáyi", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "ʔaláʔa", translation: "Hello" },
                            { word: "hó·ʔo", translation: "Thank you" },
                            { word: "ʔayó·qʷa", translation: "Goodbye" },
                            { word: "háʔa", translation: "Yes" },
                            { word: "qʷáyi", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "quileute-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ʔíta", translation: "One" },
                    { word: "ʔáxʷi", translation: "Two" },
                    { word: "qʷáli", translation: "Three" },
                    { word: "báyo", translation: "Four" },
                    { word: "łáka", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "ʔíta", translation: "One" },
                            { word: "ʔáxʷi", translation: "Two" },
                            { word: "qʷáli", translation: "Three" },
                            { word: "báyo", translation: "Four" },
                            { word: "łáka", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Tsakhur": {
        basicInfo: {
            nativeName: "Цӏаӏхна мизь (Ts'a'khna miz')",
            regions: ["Russia (Dagestan)", "Azerbaijan"],
            speakers: "About 13,000",
            familyBranch: "Northeast Caucasian (Lezgic)",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "tsakhur-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Салам", translation: "Hello" },
                    { word: "Сагъол", translation: "Thank you" },
                    { word: "Хайырлы йол", translation: "Goodbye" },
                    { word: "Гьо", translation: "Yes" },
                    { word: "Дешь", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Салам", translation: "Hello" },
                            { word: "Сагъол", translation: "Thank you" },
                            { word: "Хайырлы йол", translation: "Goodbye" },
                            { word: "Гьо", translation: "Yes" },
                            { word: "Дешь", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "tsakhur-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Са", translation: "One" },
                    { word: "Кьоʼб", translation: "Two" },
                    { word: "Хьиб", translation: "Three" },
                    { word: "Йыгъыʼб", translation: "Four" },
                    { word: "Хуʼб", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Са", translation: "One" },
                            { word: "Кьоʼб", translation: "Two" },
                            { word: "Хьиб", translation: "Three" },
                            { word: "Йыгъыʼб", translation: "Four" },
                            { word: "Хуʼб", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Dënesųłiné": {
        basicInfo: {
            nativeName: "Dënesųłiné",
            regions: ["Canada (Alberta, Saskatchewan, Manitoba, Northwest Territories)"],
            speakers: "About 11,000",
            familyBranch: "Na-Dene (Athabaskan)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "denesutline-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Mársı", translation: "Thank you" },
                    { word: "Edlą́ną́", translation: "How are you?" },
                    { word: "Hęɂę", translation: "Yes" },
                    { word: "Ĺle", translation: "No" },
                    { word: "Edlánįthę", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Mársı", translation: "Thank you" },
                            { word: "Edlą́ną́", translation: "How are you?" },
                            { word: "Hęɂę", translation: "Yes" },
                            { word: "Ĺle", translation: "No" },
                            { word: "Edlánįthę", translation: "Goodbye" }
                        ]
                    }
                ]
            },
            {
                id: "denesutline-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Įłághe", translation: "One" },
                    { word: "Náke", translation: "Two" },
                    { word: "Tághe", translation: "Three" },
                    { word: "Dįghį", translation: "Four" },
                    { word: "Sųlái", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Įłághe", translation: "One" },
                            { word: "Náke", translation: "Two" },
                            { word: "Tághe", translation: "Three" },
                            { word: "Dįghį", translation: "Four" },
                            { word: "Sųlái", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Belarusian": {
            basicInfo: {
                nativeName: "Беларуская мова",
                regions: ["Belarus"],
                speakers: "About 5 million",
                familyBranch: "Indo-European (East Slavic)",
                writingSystem: "Cyrillic alphabet"
            },
            lessons: [
                {
                    id: "belarusian-basics-1", 
                    title: "Basic Phrases",
                    difficulty: "beginner",
                    vocabulary: [
                        { word: "Прывітанне", translation: "Hello"},
                        { word: "Дзякуй", translation: "Thank you"},
                        { word: "Да пабачэння", translation: "Goodbye"},
                        { word: "Так", translation: "Yes"},
                        { word: "Не", translation: "No"}
                    ],
                    exercises: [
                        {
                            type: "pronunciation",
                            words: [
                                { word: "Прывітанне", translation: "Hello"},
                                { word: "Дзякуй", translation: "Thank you"},
                                { word: "Да пабачэння", translation: "Goodbye"},
                                { word: "Так", translation: "Yes"},
                                { word: "Не", translation: "No"}
                            ]
                        }
                    ]
                },
                {
                    id: "belarusian-basics-2",
                    title: "Numbers 1-5",
                    difficulty: "beginner",
                    vocabulary: [
                        { word: "Адзін", translation: "One"},
                        { word: "Два", translation: "Two"},
                        { word: "Тры", translation: "Three"},
                        { word: "Чатыры", translation: "Four"},
                        { word: "Пяць", translation: "Five"}
                    ],
                    exercises: [
                        {
                            type: "pronunciation",
                            words: [
                                { word: "Адзін", translation: "One"},
                                { word: "Два", translation: "Two"},
                                { word: "Тры", translation: "Three"},
                                { word: "Чатыры", translation: "Four"},
                                { word: "Пяць", translation: "Five"}
                            ]
                        }
                    ]
                }
            ]
        },
    "Kolyma Yukaghir": {
            basicInfo: {
                nativeName: "Одул ажуу",
                regions: ["Russia (Kolyma Region)"],
                speakers: "About 50",
                familyBranch: "Yukaghir",
                writingSystem: "Cyrillic alphabet"
            },
            lessons: [
                {
                    id: "kolyma-yukaghir-basics-1",
                    title: "Basic Phrases",
                    difficulty: "beginner",
                    vocabulary: [
                        { word: "Здорово", translation: "Hello" },
                        { word: "Пасиибэ", translation: "Thank you" },
                        { word: "Айаат кэлук", translation: "Goodbye" },
                        { word: "Эйк", translation: "Yes" },
                        { word: "Эл", translation: "No" }
                    ],
                    exercises: [
                        {
                            type: "pronunciation",
                            words: [
                                { word: "Здорово", translation: "Hello" },
                                { word: "Пасиибэ", translation: "Thank you" },
                                { word: "Айаат кэлук", translation: "Goodbye" },
                                { word: "Эйк", translation: "Yes" },
                                { word: "Эл", translation: "No" }
                            ]
                        }
                    ]
                },
                {
                    id: "kolyma-yukaghir-basics-2",
                    title: "Numbers 1-5",
                    difficulty: "beginner",
                    vocabulary: [
                        { word: "Мархиль", translation: "One" },
                        { word: "Атахлоҕи", translation: "Two" },
                        { word: "Йалоҕи", translation: "Three" },
                        { word: "Йалклоҕи", translation: "Four" },
                        { word: "Имдалдьи", translation: "Five" }
                    ],
                    exercises: [
                        {
                            type: "pronunciation",
                            words: [
                                { word: "Мархиль", translation: "One" },
                                { word: "Атахлоҕи", translation: "Two" },
                                { word: "Йалоҕи", translation: "Three" },
                                { word: "Йалклоҕи", translation: "Four" },
                                { word: "Имдалдьи", translation: "Five" }
                            ]
                        }
                    ]
                }
            ]
        },
    "Yokuts": {
        basicInfo: {
            nativeName: "Yawʼlamnin ṭeexil",
            regions: ["USA (California)"],
            speakers: "About 15",
            familyBranch: "Yokuts",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "yokuts-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "hoʔoːm", translation: "Hello/Greetings" },
                    { word: "dɨkʰɨy", translation: "Thank you" },
                    { word: "watʰin", translation: "Goodbye" },
                    { word: "heʔen", translation: "Yes" },
                    { word: "ohom", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "hoʔoːm", translation: "Hello/Greetings" },
                            { word: "dɨkʰɨy", translation: "Thank you" },
                            { word: "watʰin", translation: "Goodbye" },
                            { word: "heʔen", translation: "Yes" },
                            { word: "ohom", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "yokuts-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "yet", translation: "One" },
                    { word: "ponoi", translation: "Two" },
                    { word: "soopin", translation: "Three" },
                    { word: "hatpanoi", translation: "Four" },
                    { word: "yitsínla", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "yet", translation: "One" },
                            { word: "ponoi", translation: "Two" },
                            { word: "soopin", translation: "Three" },
                            { word: "hatpanoi", translation: "Four" },
                            { word: "yitsínla", translation: "Five" }
                        ]
                    }
                ]
            }            
        ]   
    },
    "Kutenai": {
        basicInfo: {
            nativeName: "Ktunaxa",
            regions: ["USA (Montana, Idaho)", "Canada (British Columbia)"],
            speakers: "About 25 fluent speakers",
            familyBranch: "Language isolate",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "kutenai-basics-1",
                title: "Basic Phrases",
                difficulty: "beginner",
                vocabulary: [
                    { word: "hu", translation: "Hello" },
                    { word: "sukⱡiⱡ", translation: "Thank you" },
                    { word: "taxas", translation: "Goodbye" },
                    { word: "huy", translation: "Yes" },
                    { word: "miyaⱡ", translation: "No" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "hu", translation: "Hello" },
                            { word: "sukⱡiⱡ", translation: "Thank you" },
                            { word: "taxas", translation: "Goodbye" },
                            { word: "huy", translation: "Yes" },
                            { word: "miyaⱡ", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "kutenai-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ʔaⱡqa", translation: "One" },
                    { word: "ʔasa", translation: "Two" },
                    { word: "qaⱡsa", translation: "Three" },
                    { word: "xaxa", translation: "Four" },
                    { word: "yikxa", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "ʔaⱡqa", translation: "One" },
                            { word: "ʔasa", translation: "Two" },
                            { word: "qaⱡsa", translation: "Three" },
                            { word: "xaxa", translation: "Four" },
                            { word: "yikxa", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Adyghe": {
        basicInfo: {
            nativeName: "Адыгабзэ (Adygabzə)",
            regions: ["Russia (Caucasus), Turkey, Jordan, Syria"],
            speakers: "About 500,000",
            familyBranch: "Northwest Caucasian",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "adyghe-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Сэлам", translation: "Hello" },
                    { word: "Тхьэм уигъэпсэу", translation: "Thank you" },
                    { word: "Хъунщ", translation: "Yes" },
                    { word: "Хьау", translation: "No" },
                    { word: "Гъогумаф", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Сэлам", translation: "Hello" },
                            { word: "Тхьэм уигъэпсэу", translation: "Thank you" },
                            { word: "Хъунщ", translation: "Yes" },
                            { word: "Хьау", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "adyghe-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Зы", translation: "One" },
                    { word: "ТӀу", translation: "Two" },
                    { word: "Щы", translation: "Three" },
                    { word: "ПлӀы", translation: "Four" },
                    { word: "Тфы", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Зы", translation: "One" },
                            { word: "ТӀу", translation: "Two" },
                            { word: "Щы", translation: "Three" },
                            { word: "ПлӀы", translation: "Four" },
                            { word: "Тфы", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Arapaho": {
        basicInfo: {
            nativeName: "Hinónoʼeitíít",
            regions: ["United States (Wyoming, Oklahoma)"],
            speakers: "About 1,000",
            familyBranch: "Algonquian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "arapaho-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Heetóu'u", translation: "Hello" },
                    { word: "Hohou", translation: "Thank you" },
                    { word: "Héé'", translation: "Yes" },
                    { word: "Néhe'", translation: "No" },
                    { word: "Nee'eesítooni", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Heetóu'u", translation: "Hello" },
                            { word: "Hohou", translation: "Thank you" },
                            { word: "Héé'", translation: "Yes" },
                            { word: "Néhe'", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "arapaho-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Chésoo", translation: "One" },
                    { word: "Néése", translation: "Two" },
                    { word: "Néhe", translation: "Three" },
                    { word: "Yéin", translation: "Four" },
                    { word: "Yóhoot", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Chésoo", translation: "One" },
                            { word: "Néése", translation: "Two" },
                            { word: "Néhe", translation: "Three" },
                            { word: "Yéin", translation: "Four" },
                            { word: "Yóhoot", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Blackfoot": {
        basicInfo: {
            nativeName: "Siksiká",
            regions: ["Canada (Alberta), United States (Montana)"],
            speakers: "About 5,000",
            familyBranch: "Algonquian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "blackfoot-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Oki", translation: "Hello" },
                    { word: "Nitsíkohtaahsipowahsin", translation: "Thank you" },
                    { word: "Aa", translation: "Yes" },
                    { word: "Saa", translation: "No" },
                    { word: "Matónni", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Oki", translation: "Hello" },
                            { word: "Nitsíkohtaahsipowahsin", translation: "Thank you" },
                            { word: "Aa", translation: "Yes" },
                            { word: "Saa", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "blackfoot-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Nííkssoka", translation: "One" },
                    { word: "Náátoka", translation: "Two" },
                    { word: "Niókska", translation: "Three" },
                    { word: "Níísoka", translation: "Four" },
                    { word: "Nísitssika", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Nííkssoka", translation: "One" },
                            { word: "Náátoka", translation: "Two" },
                            { word: "Niókska", translation: "Three" },
                            { word: "Níísoka", translation: "Four" },
                            { word: "Nísitssika", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Buryat": {
        basicInfo: {
            nativeName: "Буряад хэлэн (Buryaad khelen)",
            regions: ["Russia (Buryatia), Mongolia, China"],
            speakers: "About 300,000",
            familyBranch: "Mongolic",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "buryat-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Сайн байна", translation: "Hello" },
                    { word: "Баярлалаа", translation: "Thank you" },
                    { word: "Тиимэ", translation: "Yes" },
                    { word: "Үгы", translation: "No" },
                    { word: "Баяртай", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Сайн байна", translation: "Hello" },
                            { word: "Баярлалаа", translation: "Thank you" },
                            { word: "Тиимэ", translation: "Yes" },
                            { word: "Үгы", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "buryat-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Нэгэн", translation: "One" },
                    { word: "Хоёр", translation: "Two" },
                    { word: "Гурбан", translation: "Three" },
                    { word: "Дүрбэн", translation: "Four" },
                    { word: "Табан", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Нэгэн", translation: "One" },
                            { word: "Хоёр", translation: "Two" },
                            { word: "Гурбан", translation: "Three" },
                            { word: "Дүрбэн", translation: "Four" },
                            { word: "Табан", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Chamorro": {
        basicInfo: {
            nativeName: "Chamoru",
            regions: ["Guam, Northern Mariana Islands"],
            speakers: "About 60,000",
            familyBranch: "Austronesian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "chamorro-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Håfa adai", translation: "Hello" },
                    { word: "Si Yu'os Ma'åse'", translation: "Thank you" },
                    { word: "Hunggan", translation: "Yes" },
                    { word: "Åhe'", translation: "No" },
                    { word: "Adios", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Håfa adai", translation: "Hello" },
                            { word: "Si Yu'os Ma'åse'", translation: "Thank you" },
                            { word: "Hunggan", translation: "Yes" },
                            { word: "Åhe'", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "chamorro-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Maisa", translation: "One" },
                    { word: "Dos", translation: "Two" },
                    { word: "Tres", translation: "Three" },
                    { word: "Kuåttro", translation: "Four" },
                    { word: "Sinko", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Maisa", translation: "One" },
                            { word: "Dos", translation: "Two" },
                            { word: "Tres", translation: "Three" },
                            { word: "Kuåttro", translation: "Four" },
                            { word: "Sinko", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Dakota": {
        basicInfo: {
            nativeName: "Dakȟótiyapi",
            regions: ["United States (Minnesota, South Dakota, Nebraska), Canada (Manitoba, Saskatchewan)"],
            speakers: "About 20,000",
            familyBranch: "Siouan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "dakota-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Háu", translation: "Hello" },
                    { word: "Philámayaye", translation: "Thank you" },
                    { word: "Háŋ", translation: "Yes" },
                    { word: "Hiyá", translation: "No" },
                    { word: "Tókša akhé waŋčhíyaŋkiŋ kte", translation: "See you later" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Háu", translation: "Hello" },
                            { word: "Philámayaye", translation: "Thank you" },
                            { word: "Háŋ", translation: "Yes" },
                            { word: "Hiyá", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "dakota-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Waŋží", translation: "One" },
                    { word: "Núŋpa", translation: "Two" },
                    { word: "Yámni", translation: "Three" },
                    { word: "Tópa", translation: "Four" },
                    { word: "Záptaŋ", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Waŋží", translation: "One" },
                            { word: "Núŋpa", translation: "Two" },
                            { word: "Yámni", translation: "Three" },
                            { word: "Tópa", translation: "Four" },
                            { word: "Záptaŋ", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Evenki": {
        basicInfo: {
            nativeName: "Эвэды̄ турэ̄н (Evedī turēn)",
            regions: ["Russia (Siberia), China, Mongolia"],
            speakers: "About 30,000",
            familyBranch: "Tungusic",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "evenki-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Торово", translation: "Hello" },
                    { word: "Аят", translation: "Thank you" },
                    { word: "Э̄хэ", translation: "Yes" },
                    { word: "Э̄чэ", translation: "No" },
                    { word: "Аят бикэллу", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Торово", translation: "Hello" },
                            { word: "Аят", translation: "Thank you" },
                            { word: "Э̄хэ", translation: "Yes" },
                            { word: "Э̄чэ", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "evenki-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Умун", translation: "One" },
                    { word: "Дюр", translation: "Two" },
                    { word: "Илан", translation: "Three" },
                    { word: "Дыгин", translation: "Four" },
                    { word: "Тунӈа", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Умун", translation: "One" },
                            { word: "Дюр", translation: "Two" },
                            { word: "Илан", translation: "Three" },
                            { word: "Дыгин", translation: "Four" },
                            { word: "Тунӈа", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Fijian": {
        basicInfo: {
            nativeName: "Na Vosa Vakaviti",
            regions: ["Fiji"],
            speakers: "About 600,000",
            familyBranch: "Austronesian",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "fijian-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Bula", translation: "Hello" },
                    { word: "Vinaka", translation: "Thank you" },
                    { word: "Io", translation: "Yes" },
                    { word: "Sega", translation: "No" },
                    { word: "Moce", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Bula", translation: "Hello" },
                            { word: "Vinaka", translation: "Thank you" },
                            { word: "Io", translation: "Yes" },
                            { word: "Sega", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "fijian-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Dua", translation: "One" },
                    { word: "Rua", translation: "Two" },
                    { word: "Tolu", translation: "Three" },
                    { word: "Vā", translation: "Four" },
                    { word: "Lima", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Dua", translation: "One" },
                            { word: "Rua", translation: "Two" },
                            { word: "Tolu", translation: "Three" },
                            { word: "Vā", translation: "Four" },
                            { word: "Lima", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Gwich'in": {
        basicInfo: {
            nativeName: "Dinjii Zhu' Ginjik",
            regions: ["United States (Alaska), Canada (Yukon, Northwest Territories)"],
            speakers: "About 700",
            familyBranch: "Athabaskan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "gwichin-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Neerahnyaa", translation: "Hello" },
                    { word: "Mahsi' choo", translation: "Thank you" },
                    { word: "Aaha'", translation: "Yes" },
                    { word: "Nakwaa", translation: "No" },
                    { word: "K'eegwaadhat neerahnyaa", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Neerahnyaa", translation: "Hello" },
                            { word: "Mahsi' choo", translation: "Thank you" },
                            { word: "Aaha'", translation: "Yes" },
                            { word: "Nakwaa", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "gwichin-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ch'ihłak", translation: "One" },
                    { word: "Neekaii", translation: "Two" },
                    { word: "Tik", translation: "Three" },
                    { word: "Dǫǫ", translation: "Four" },
                    { word: "Ch'ihłoaatin", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ch'ihłak", translation: "One" },
                            { word: "Neekaii", translation: "Two" },
                            { word: "Tik", translation: "Three" },
                            { word: "Dǫǫ", translation: "Four" },
                            { word: "Ch'ihłoaatin", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Hopi": {
        basicInfo: {
            nativeName: "Hopílavayi",
            regions: ["United States (Arizona)"],
            speakers: "About 6,000",
            familyBranch: "Uto-Aztecan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "hopi-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ha'u", translation: "Hello" },
                    { word: "Kwakwhay", translation: "Thank you" },
                    { word: "Owí", translation: "Yes" },
                    { word: "Qa'e", translation: "No" },
                    { word: "Pay himu", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Ha'u", translation: "Hello" },
                            { word: "Kwakwhay", translation: "Thank you" },
                            { word: "Owí", translation: "Yes" },
                            { word: "Qa'e", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "hopi-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Sūkya", translation: "One" },
                    { word: "Lööyöm", translation: "Two" },
                    { word: "Paykom", translation: "Three" },
                    { word: "Naalöyöm", translation: "Four" },
                    { word: "Tsivot", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Sūkya", translation: "One" },
                            { word: "Lööyöm", translation: "Two" },
                            { word: "Paykom", translation: "Three" },
                            { word: "Naalöyöm", translation: "Four" },
                            { word: "Tsivot", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Igbo": {
        basicInfo: {
            nativeName: "Asụsụ Igbo",
            regions: ["Nigeria"],
            speakers: "About 24 million",
            familyBranch: "Niger-Congo",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "igbo-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Nnọọ", translation: "Welcome/Hello" },
                    { word: "Daalụ", translation: "Thank you" },
                    { word: "Ee", translation: "Yes" },
                    { word: "Mba", translation: "No" },
                    { word: "Ka ọ dị", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Nnọọ", translation: "Welcome/Hello" },
                            { word: "Daalụ", translation: "Thank you" },
                            { word: "Ee", translation: "Yes" },
                            { word: "Mba", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "igbo-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Otu", translation: "One" },
                    { word: "Abụọ", translation: "Two" },
                    { word: "Atọ", translation: "Three" },
                    { word: "Anọ", translation: "Four" },
                    { word: "Ise", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Otu", translation: "One" },
                            { word: "Abụọ", translation: "Two" },
                            { word: "Atọ", translation: "Three" },
                            { word: "Anọ", translation: "Four" },
                            { word: "Ise", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Jingpo": {
        basicInfo: {
            nativeName: "Jinghpaw",
            regions: ["Myanmar, China, India"],
            speakers: "About 950,000",
            familyBranch: "Sino-Tibetan",
            writingSystem: "Latin alphabet, Chinese characters"
        },
        lessons: [
            {
                id: "jingpo-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Hkying-ga", translation: "Hello" },
                    { word: "Chyeju kaba sai", translation: "Thank you" },
                    { word: "Rai sai", translation: "Yes" },
                    { word: "N-rai", translation: "No" },
                    { word: "Hkying-ga", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Hkying-ga", translation: "Hello" },
                            { word: "Chyeju kaba sai", translation: "Thank you" },
                            { word: "Rai sai", translation: "Yes" },
                            { word: "N-rai", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "jingpo-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Langai", translation: "One" },
                    { word: "Lahkawng", translation: "Two" },
                    { word: "Masum", translation: "Three" },
                    { word: "Mali", translation: "Four" },
                    { word: "Manga", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Langai", translation: "One" },
                            { word: "Lahkawng", translation: "Two" },
                            { word: "Masum", translation: "Three" },
                            { word: "Mali", translation: "Four" },
                            { word: "Manga", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Kalaallisut": {
        basicInfo: {
            nativeName: "Kalaallisut",
            regions: ["Greenland"],
            speakers: "About 56,000",
            familyBranch: "Eskimo-Aleut",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "kalaallisut-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Aluu", translation: "Hello" },
                    { word: "Qujanaq", translation: "Thank you" },
                    { word: "Aap", translation: "Yes" },
                    { word: "Naamik", translation: "No" },
                    { word: "Takuss", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Aluu", translation: "Hello" },
                            { word: "Qujanaq", translation: "Thank you" },
                            { word: "Aap", translation: "Yes" },
                            { word: "Naamik", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "kalaallisut-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ataaseq", translation: "One" },
                    { word: "Marluk", translation: "Two" },
                    { word: "Pingasut", translation: "Three" },
                    { word: "Sisamat", translation: "Four" },
                    { word: "Tallimat", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ataaseq", translation: "One" },
                            { word: "Marluk", translation: "Two" },
                            { word: "Pingasut", translation: "Three" },
                            { word: "Sisamat", translation: "Four" },
                            { word: "Tallimat", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Lakota": {
        basicInfo: {
            nativeName: "Lakȟótiyapi",
            regions: ["United States (North Dakota, South Dakota, Minnesota, Nebraska, Montana)"],
            speakers: "About 2,000",
            familyBranch: "Siouan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "lakota-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Háu", translation: "Hello" },
                    { word: "Philámayaye", translation: "Thank you" },
                    { word: "Háŋ", translation: "Yes" },
                    { word: "Hiyá", translation: "No" },
                    { word: "Tókša akhé waŋčhíyaŋkiŋ kte", translation: "See you later" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Háu", translation: "Hello" },
                            { word: "Philámayaye", translation: "Thank you" },
                            { word: "Háŋ", translation: "Yes" },
                            { word: "Hiyá", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "lakota-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Waŋží", translation: "One" },
                    { word: "Núŋpa", translation: "Two" },
                    { word: "Yámni", translation: "Three" },
                    { word: "Tópa", translation: "Four" },
                    { word: "Záptaŋ", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Waŋží", translation: "One" },
                            { word: "Núŋpa", translation: "Two" },
                            { word: "Yámni", translation: "Three" },
                            { word: "Tópa", translation: "Four" },
                            { word: "Záptaŋ", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Mansi": {
        basicInfo: {
            nativeName: "Маньси ясынг (Mańsi jasyng)",
            regions: ["Russia (Khanty-Mansi Autonomous Okrug)"],
            speakers: "About 1,000",
            familyBranch: "Uralic (Ugric)",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "mansi-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Пася олэн", translation: "Hello" },
                    { word: "Пумасипа", translation: "Thank you" },
                    { word: "Ос ёхтын", translation: "Goodbye" },
                    { word: "Аты", translation: "Yes" },
                    { word: "Ати", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Пася олэн", translation: "Hello" },
                            { word: "Пумасипа", translation: "Thank you" },
                            { word: "Аты", translation: "Yes" },
                            { word: "Ати", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "mansi-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Акв", translation: "One" },
                    { word: "Китыг", translation: "Two" },
                    { word: "Хурум", translation: "Three" },
                    { word: "Нила", translation: "Four" },
                    { word: "Ат", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Акв", translation: "One" },
                            { word: "Китыг", translation: "Two" },
                            { word: "Хурум", translation: "Three" },
                            { word: "Нила", translation: "Four" },
                            { word: "Ат", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Naxi": {
        basicInfo: {
            nativeName: "Naqxi",
            regions: ["China (Yunnan Province)"],
            speakers: "About 300,000",
            familyBranch: "Sino-Tibetan",
            writingSystem: "Dongba pictographs, Geba syllabary, Latin alphabet"
        },
        lessons: [
            {
                id: "naxi-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ngvq-ssaq", translation: "Hello" },
                    { word: "Ssei-lei", translation: "Thank you" },
                    { word: "Waq", translation: "Yes" },
                    { word: "Maq", translation: "No" },
                    { word: "Tei-tei", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Ngvq-ssaq", translation: "Hello" },
                            { word: "Ssei-lei", translation: "Thank you" },
                            { word: "Waq", translation: "Yes" },
                            { word: "Maq", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "naxi-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ddiq", translation: "One" },
                    { word: "Gvl", translation: "Two" },
                    { word: "Svl", translation: "Three" },
                    { word: "Lvq", translation: "Four" },
                    { word: "Ngvq", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ddiq", translation: "One" },
                            { word: "Gvl", translation: "Two" },
                            { word: "Svl", translation: "Three" },
                            { word: "Lvq", translation: "Four" },
                            { word: "Ngvq", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Ojibwe": {
        basicInfo: {
            nativeName: "Anishinaabemowin",
            regions: ["Canada (Ontario, Manitoba), United States (Michigan, Wisconsin, Minnesota)"],
            speakers: "About 50,000",
            familyBranch: "Algonquian",
            writingSystem: "Latin alphabet, syllabics"
        },
        lessons: [
            {
                id: "ojibwe-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Aaniin", translation: "Hello" },
                    { word: "Miigwech", translation: "Thank you" },
                    { word: "Eya'", translation: "Yes" },
                    { word: "Gaawiin", translation: "No" },
                    { word: "Giga-waabamin", translation: "See you later" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Aaniin", translation: "Hello" },
                            { word: "Miigwech", translation: "Thank you" },
                            { word: "Eya'", translation: "Yes" },
                            { word: "Gaawiin", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "ojibwe-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Bezhig", translation: "One" },
                    { word: "Niizh", translation: "Two" },
                    { word: "Niswi", translation: "Three" },
                    { word: "Niiwin", translation: "Four" },
                    { word: "Naanan", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Bezhig", translation: "One" },
                            { word: "Niizh", translation: "Two" },
                            { word: "Niswi", translation: "Three" },
                            { word: "Niiwin", translation: "Four" },
                            { word: "Naanan", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Pawnee": {
        basicInfo: {
            nativeName: "Pâriki",
            regions: ["United States (Oklahoma, Nebraska)"],
            speakers: "About 10",
            familyBranch: "Caddoan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "pawnee-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Hau", translation: "Hello" },
                    { word: "Iriwakutaku", translation: "Thank you" },
                    { word: "Hâu", translation: "Yes" },
                    { word: "Kaki", translation: "No" },
                    { word: "Náwa", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Hau", translation: "Hello" },
                            { word: "Iriwakutaku", translation: "Thank you" },
                            { word: "Hâu", translation: "Yes" },
                            { word: "Kaki", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "pawnee-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Pitku", translation: "One" },
                    { word: "Pitku", translation: "Two" },
                    { word: "Tawit", translation: "Three" },
                    { word: "Sîkis", translation: "Four" },
                    { word: "Sihuks", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Pitku", translation: "One" },
                            { word: "Pitku", translation: "Two" },
                            { word: "Tawit", translation: "Three" },
                            { word: "Sîkis", translation: "Four" },
                            { word: "Sihuks", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Rapanui": {
        basicInfo: {
            nativeName: "Vananga Rapa Nui",
            regions: ["Chile (Easter Island)"],
            speakers: "About 3,000",
            familyBranch: "Austronesian (Polynesian)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "rapanui-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Iorana", translation: "Hello" },
                    { word: "Maururu", translation: "Thank you" },
                    { word: "Ē", translation: "Yes" },
                    { word: "Ina", translation: "No" },
                    { word: "A hui atu", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Iorana", translation: "Hello" },
                            { word: "Maururu", translation: "Thank you" },
                            { word: "Ē", translation: "Yes" },
                            { word: "Ina", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "rapanui-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ka tahi", translation: "One" },
                    { word: "Ka rua", translation: "Two" },
                    { word: "Ka toru", translation: "Three" },
                    { word: "Ka hā", translation: "Four" },
                    { word: "Ka rima", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ka tahi", translation: "One" },
                            { word: "Ka rua", translation: "Two" },
                            { word: "Ka toru", translation: "Three" },
                            { word: "Ka hā", translation: "Four" },
                            { word: "Ka rima", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Sandawe": {
        basicInfo: {
            nativeName: "Sandaweeki",
            regions: ["Tanzania"],
            speakers: "About 60,000",
            familyBranch: "Khoe-Sandawe (or language isolate)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "sandawe-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Hátsà", translation: "Hello" },
                    { word: "Sóbá", translation: "Thank you" },
                    { word: "ʔÉʔé", translation: "Yes" },
                    { word: "Hìnká", translation: "No" },
                    { word: "Kàlé", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Hátsà", translation: "Hello" },
                            { word: "Sóbá", translation: "Thank you" },
                            { word: "ʔÉʔé", translation: "Yes" },
                            { word: "Hìnká", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "sandawe-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ǀKʼwá", translation: "One" },
                    { word: "ǀNá", translation: "Two" },
                    { word: "ǀNqóá", translation: "Three" },
                    { word: "Hátsʼè", translation: "Four" },
                    { word: "Sóò", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "ǀKʼwá", translation: "One" },
                            { word: "ǀNá", translation: "Two" },
                            { word: "ǀNqóá", translation: "Three" },
                            { word: "Hátsʼè", translation: "Four" },
                            { word: "Sóò", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Tuvan": {
        basicInfo: {
            nativeName: "Тыва дыл (Tyva dyl)",
            regions: ["Russia (Tuva Republic)"],
            speakers: "About 280,000",
            familyBranch: "Turkic",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "tuvan-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Экии!", translation: "Hello" },
                    { word: "Четтирдим", translation: "Thank you" },
                    { word: "Ийе", translation: "Yes" },
                    { word: "Чок", translation: "No" },
                    { word: "Байырлыг", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Экии!", translation: "Hello" },
                            { word: "Четтирдим", translation: "Thank you" },
                            { word: "Ийе", translation: "Yes" },
                            { word: "Чок", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "tuvan-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Бир", translation: "One" },
                    { word: "Ийи", translation: "Two" },
                    { word: "Үш", translation: "Three" },
                    { word: "Дөрт", translation: "Four" },
                    { word: "Беш", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Бир", translation: "One" },
                            { word: "Ийи", translation: "Two" },
                            { word: "Үш", translation: "Three" },
                            { word: "Дөрт", translation: "Four" },
                            { word: "Беш", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Udmurt": {
        basicInfo: {
            nativeName: "Удмурт кыл (Udmurt kyl)",
            regions: ["Russia (Udmurtia)"],
            speakers: "About 340,000",
            familyBranch: "Uralic (Permic)",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "udmurt-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ӟечбур", translation: "Hello" },
                    { word: "Тау", translation: "Thank you" },
                    { word: "Бен", translation: "Yes" },
                    { word: "Ӧвӧл", translation: "No" },
                    { word: "Ӟеч луэ", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Ӟечбур", translation: "Hello" },
                            { word: "Тау", translation: "Thank you" },
                            { word: "Бен", translation: "Yes" },
                            { word: "Ӧвӧл", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "udmurt-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Одӥг", translation: "One" },
                    { word: "Кык", translation: "Two" },
                    { word: "Куинь", translation: "Three" },
                    { word: "Ньыль", translation: "Four" },
                    { word: "Вить", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Одӥг", translation: "One" },
                            { word: "Кык", translation: "Two" },
                            { word: "Куинь", translation: "Three" },
                            { word: "Ньыль", translation: "Four" },
                            { word: "Вить", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Veps": {
        basicInfo: {
            nativeName: "Vepsän kel'",
            regions: ["Russia (Republic of Karelia, Leningrad Oblast, Vologda Oblast)"],
            speakers: "About 5,000",
            familyBranch: "Uralic (Finnic)",
            writingSystem: "Latin alphabet, Cyrillic alphabet"
        },
        lessons: [
            {
                id: "veps-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Tervhen", translation: "Hello" },
                    { word: "Spasib", translation: "Thank you" },
                    { word: "Ka", translation: "Yes" },
                    { word: "Ei", translation: "No" },
                    { word: "Nägemižhesai", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Tervhen", translation: "Hello" },
                            { word: "Spasib", translation: "Thank you" },
                            { word: "Ka", translation: "Yes" },
                            { word: "Ei", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "veps-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Üks'", translation: "One" },
                    { word: "Kaks'", translation: "Two" },
                    { word: "Koume", translation: "Three" },
                    { word: "Nel'l'", translation: "Four" },
                    { word: "Viž", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Üks'", translation: "One" },
                            { word: "Kaks'", translation: "Two" },
                            { word: "Koume", translation: "Three" },
                            { word: "Nel'l'", translation: "Four" },
                            { word: "Viž", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Warlpiri": {
        basicInfo: {
            nativeName: "Warlpiri",
            regions: ["Australia (Northern Territory)"],
            speakers: "About 3,000",
            familyBranch: "Pama-Nyungan",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "warlpiri-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ngurrju mayinpa", translation: "Hello (Are you well?)" },
                    { word: "Yuwayi", translation: "Yes" },
                    { word: "Lawa", translation: "No" },
                    { word: "Ngurrju", translation: "Good" },
                    { word: "Yati", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Ngurrju mayinpa", translation: "Hello (Are you well?)" },
                            { word: "Yuwayi", translation: "Yes" },
                            { word: "Lawa", translation: "No" },
                            { word: "Ngurrju", translation: "Good" }
                        ]
                    }
                ]
            },
            {
                id: "warlpiri-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Jinta", translation: "One" },
                    { word: "Jirrama", translation: "Two" },
                    { word: "Marnkurrpa", translation: "Three" },
                    { word: "Rdaka jinta", translation: "Four" },
                    { word: "Rdaka jinta jinta", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Jinta", translation: "One" },
                            { word: "Jirrama", translation: "Two" },
                            { word: "Marnkurrpa", translation: "Three" },
                            { word: "Rdaka jinta", translation: "Four" },
                            { word: "Rdaka jinta jinta", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Xhosa": {
        basicInfo: {
            nativeName: "isiXhosa",
            regions: ["South Africa, Zimbabwe"],
            speakers: "About 8.2 million",
            familyBranch: "Niger-Congo (Bantu)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "xhosa-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Molo", translation: "Hello (to one person)" },
                    { word: "Molweni", translation: "Hello (to multiple people)" },
                    { word: "Enkosi", translation: "Thank you" },
                    { word: "Ewe", translation: "Yes" },
                    { word: "Hayi", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Molo", translation: "Hello (to one person)" },
                            { word: "Molweni", translation: "Hello (to multiple people)" },
                            { word: "Enkosi", translation: "Thank you" },
                            { word: "Ewe", translation: "Yes" },
                            { word: "Hayi", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "xhosa-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Inye", translation: "One" },
                    { word: "Zimbini", translation: "Two" },
                    { word: "Zintathu", translation: "Three" },
                    { word: "Zine", translation: "Four" },
                    { word: "Zintlanu", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Inye", translation: "One" },
                            { word: "Zimbini", translation: "Two" },
                            { word: "Zintathu", translation: "Three" },
                            { word: "Zine", translation: "Four" },
                            { word: "Zintlanu", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Yoruba": {
        basicInfo: {
            nativeName: "Èdè Yorùbá",
            regions: ["Nigeria, Benin, Togo"],
            speakers: "About 45 million",
            familyBranch: "Niger-Congo (Atlantic-Congo)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "yoruba-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ẹ nlẹ", translation: "Hello" },
                    { word: "Ẹ ṣeun", translation: "Thank you" },
                    { word: "Bẹẹni", translation: "Yes" },
                    { word: "Bẹẹkọ", translation: "No" },
                    { word: "Ọdabo", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Ẹ nlẹ", translation: "Hello" },
                            { word: "Ẹ ṣeun", translation: "Thank you" },
                            { word: "Bẹẹni", translation: "Yes" },
                            { word: "Bẹẹkọ", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "yoruba-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ọkan", translation: "One" },
                    { word: "Èjì", translation: "Two" },
                    { word: "Ẹta", translation: "Three" },
                    { word: "Ẹrin", translation: "Four" },
                    { word: "Àrún", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ọkan", translation: "One" },
                            { word: "Èjì", translation: "Two" },
                            { word: "Ẹta", translation: "Three" },
                            { word: "Ẹrin", translation: "Four" },
                            { word: "Àrún", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Zhuang": {
        basicInfo: {
            nativeName: "Vahcuengh (Sawndip: 话壮)",
            regions: ["China (Guangxi Zhuang Autonomous Region)"],
            speakers: "About 16 million",
            familyBranch: "Tai-Kadai",
            writingSystem: "Latin alphabet, Chinese characters (Sawndip)"
        },
        lessons: [
            {
                id: "zhuang-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Mwngz ndei", translation: "Hello" },
                    { word: "Canghnaeuz", translation: "Thank you" },
                    { word: "Dwg", translation: "Yes" },
                    { word: "Mbouj", translation: "No" },
                    { word: "Baij ndei", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Mwngz ndei", translation: "Hello" },
                            { word: "Canghnaeuz", translation: "Thank you" },
                            { word: "Dwg", translation: "Yes" },
                            { word: "Mbouj", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "zhuang-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ndaej", translation: "One" },
                    { word: "Ngeih", translation: "Two" },
                    { word: "Sam", translation: "Three" },
                    { word: "Seiq", translation: "Four" },
                    { word: "Haj", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ndaej", translation: "One" },
                            { word: "Ngeih", translation: "Two" },
                            { word: "Sam", translation: "Three" },
                            { word: "Seiq", translation: "Four" },
                            { word: "Haj", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Zulu": {
        basicInfo: {
            nativeName: "isiZulu",
            regions: ["South Africa"],
            speakers: "About 12 million",
            familyBranch: "Niger-Congo (Bantu)",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "zulu-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Sawubona", translation: "Hello" },
                    { word: "Ngiyabonga", translation: "Thank you" },
                    { word: "Yebo", translation: "Yes" },
                    { word: "Cha", translation: "No" },
                    { word: "Hamba kahle", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Sawubona", translation: "Hello" },
                            { word: "Ngiyabonga", translation: "Thank you" },
                            { word: "Yebo", translation: "Yes" },
                            { word: "Cha", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "zulu-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Kunye", translation: "One" },
                    { word: "Kubili", translation: "Two" },
                    { word: "Kuthathu", translation: "Three" },
                    { word: "Kune", translation: "Four" },
                    { word: "Kuhlanu", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Kunye", translation: "One" },
                            { word: "Kubili", translation: "Two" },
                            { word: "Kuthathu", translation: "Three" },
                            { word: "Kune", translation: "Four" },
                            { word: "Kuhlanu", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Hadza": {
        basicInfo: {
            nativeName: "Hadzane",
            regions: ["Tanzania"],
            speakers: "About 1,000",
            familyBranch: "Language isolate",
            writingSystem: "Latin alphabet"
        },
        lessons: [
            {
                id: "hadza-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Heke", translation: "Hello" },
                    { word: "Asante", translation: "Thank you" },
                    { word: "Ee", translation: "Yes" },
                    { word: "Haka", translation: "No" },
                    { word: "Tutaonana", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Heke", translation: "Hello" },
                            { word: "Asante", translation: "Thank you" },
                            { word: "Ee", translation: "Yes" },
                            { word: "Haka", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "hadza-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Mako", translation: "One" },
                    { word: "Piye", translation: "Two" },
                    { word: "Tamo", translation: "Three" },
                    { word: "Tsetse", translation: "Four" },
                    { word: "Tsawate", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Mako", translation: "One" },
                            { word: "Piye", translation: "Two" },
                            { word: "Tamo", translation: "Three" },
                            { word: "Tsetse", translation: "Four" },
                            { word: "Tsawate", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },

    "Khanty": {
        basicInfo: {
            nativeName: "Ханты ясаӈ (Khanty yasang)",
            regions: ["Russia (Khanty-Mansi Autonomous Okrug)"],
            speakers: "About 9,500",
            familyBranch: "Uralic (Ugric)",
            writingSystem: "Cyrillic alphabet"
        },
        lessons: [
            {
                id: "khanty-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Вўща вўԓаты", translation: "Hello" },
                    { word: "Пумасипа", translation: "Thank you" },
                    { word: "Па", translation: "Yes" },
                    { word: "Антә", translation: "No" },
                    { word: "Ям вўԓаты", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Вўща вўԓаты", translation: "Hello" },
                            { word: "Пумасипа", translation: "Thank you" },
                            { word: "Па", translation: "Yes" },
                            { word: "Антә", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "khanty-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "И", translation: "One" },
                    { word: "Кат", translation: "Two" },
                    { word: "Хәԓум", translation: "Three" },
                    { word: "Няӆ", translation: "Four" },
                    { word: "Вет", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "И", translation: "One" },
                            { word: "Кат", translation: "Two" },
                            { word: "Хәԓум", translation: "Three" },
                            { word: "Няӆ", translation: "Four" },
                            { word: "Вет", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Rohingya": {
        basicInfo: {
            nativeName: "Ruáingga",
            regions: ["Myanmar (Rakhine State)", "Bangladesh"],
            speakers: "About 1.8 million",
            familyBranch: "Indo-European (Indo-Aryan)",
            writingSystem: "Hanifi Rohingya script, Arabic script, Latin script"
        },
        lessons: [
            {
                id: "rohingya-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "آسلام علاىكم", translation: "Hello/Peace be upon you" },
                    { word: "شُكْرِيَا", translation: "Thank you" },
                    { word: "أُوّ", translation: "Yes" },
                    { word: "نَا", translation: "No" },
                    { word: "خُدا هافِظ", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "آسلام علاىكم", translation: "Hello/Peace be upon you" },
                            { word: "شُكْرِيَا", translation: "Thank you" },
                            { word: "أُوّ", translation: "Yes" },
                            { word: "نَا", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "rohingya-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "اِك", translation: "One" },
                    { word: "دوى", translation: "Two" },
                    { word: "تين", translation: "Three" },
                    { word: "سار", translation: "Four" },
                    { word: "فانْس", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "اِك", translation: "One" },
                            { word: "دوى", translation: "Two" },
                            { word: "تين", translation: "Three" },
                            { word: "سار", translation: "Four" },
                            { word: "فانْس", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Scots Gaelic": {
        basicInfo: {
            nativeName: "Gàidhlig",
            regions: ["Scotland"],
            speakers: "About 57,000",
            familyBranch: "Indo-European (Celtic)",
            writingSystem: "Latin script"
        },
        lessons: [
            {
                id: "scots-gaelic-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Halò", translation: "Hello" },
                    { word: "Madainn mhath", translation: "Good morning" },
                    { word: "Feasgar math", translation: "Good afternoon" },
                    { word: "Tapadh leat", translation: "Thank you (singular)" },
                    { word: "Tapadh leibh", translation: "Thank you (plural/formal)" },
                    { word: "Tha", translation: "Yes" },
                    { word: "Chan eil", translation: "No" },
                    { word: "Mar sin leat", translation: "Goodbye (singular)" },
                    { word: "Mar sin leibh", translation: "Goodbye (plural/formal)" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Halò", translation: "Hello" },
                            { word: "Tapadh leat", translation: "Thank you (singular)" },
                            { word: "Tha", translation: "Yes" },
                            { word: "Chan eil", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "scots-gaelic-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "aon", translation: "One" },
                    { word: "dhà", translation: "Two" },
                    { word: "trì", translation: "Three" },
                    { word: "ceithir", translation: "Four" },
                    { word: "còig", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "aon", translation: "One" },
                            { word: "dhà", translation: "Two" },
                            { word: "trì", translation: "Three" },
                            { word: "ceithir", translation: "Four" },
                            { word: "còig", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Koryak": {
        basicInfo: {
            nativeName: "Нымылан",
            regions: ["Kamchatka Peninsula, Russia"],
            speakers: "Around 1,700",
            familyBranch: "Chukotko-Kamchatkan",
            writingSystem: "Cyrillic script"
        },
        lessons: [
            {
                id: "koryak-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Этӄэйли", translation: "Hello" },
                    { word: "Ӄояӈа тыкояӈалаӈ", translation: "Good morning" },
                    { word: "Мэтӄэ тыкояӈалаӈ", translation: "Good afternoon" },
                    { word: "Вэлвыӈӄо тыкояӈалаӈ", translation: "Good evening" },
                    { word: "Ӄонпыӈ ӄыюлэӄ", translation: "Good night" },
                    { word: "Ӄыгитэ", translation: "Goodbye" },
                    { word: "Чавчываӈ", translation: "Thank you" },
                    { word: "Ыйе", translation: "Yes" },
                    { word: "Уйӈэ", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Этӄэйли", translation: "Hello" },
                            { word: "Ӄояӈа тыкояӈалаӈ", translation: "Good morning" },
                            { word: "Мэтӄэ тыкояӈалаӈ", translation: "Good afternoon" },
                            { word: "Вэлвыӈӄо тыкояӈалаӈ", translation: "Good evening" },
                            { word: "Ӄонпыӈ ӄыюлэӄ", translation: "Good night" },
                            { word: "Ӄыгитэ", translation: "Goodbye" },
                            { word: "Чавчываӈ", translation: "Thank you" },
                            { word: "Ыйе", translation: "Yes" },
                            { word: "Уйӈэ", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "koryak-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ыннэн", translation: "One" },
                    { word: "Ӈыёӄ", translation: "Two" },
                    { word: "Ӈыёӄӄал", translation: "Three" },
                    { word: "Ӈыяӄӄал", translation: "Four" },
                    { word: "Мыллыӈэн", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "pronunciation",
                        words: [
                            { word: "Ыннэн", translation: "One" },
                            { word: "Ӈыёӄ", translation: "Two" },
                            { word: "Ӈыёӄӄал", translation: "Three" },
                            { word: "Ӈыяӄӄал", translation: "Four" },
                            { word: "Мыллыӈэн", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Nganasan": {
        basicInfo: {
            nativeName: "Няˮ",
            regions: ["Taymyr Peninsula, Krasnoyarsk Krai, Russia"],
            speakers: "Around 125 (severely endangered)",
            familyBranch: "Uralic (Samoyedic)",
            writingSystem: "Cyrillic script (no standardized orthography)"
        },
        lessons: [
            {
                id: "nganasan-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Дорәбә", translation: "Hello" },
                    { word: "Тәндә дялы", translation: "Good day" },
                    { word: "Нәмбә дялы", translation: "Good day (response)" },
                    { word: "Тәтирә", translation: "Goodbye" },
                    { word: "Баарбә", translation: "Thank you" },
                    { word: "Тәндә", translation: "Yes" },
                    { word: "Нинтуˮ", translation: "No" }
                ]
            },
            {
                id: "nganasan-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ӈуоиˮ", translation: "One" },
                    { word: "Сити", translation: "Two" },
                    { word: "Нагүр", translation: "Three" },
                    { word: "Чета", translation: "Four" },
                    { word: "Сәӈхәляӈкә", translation: "Five" }
                ]
            }
        ]
    },
    "Yurok": {
        basicInfo: {
            nativeName: "Oohl",
            regions: ["Northwestern California, USA"],
            speakers: "Around 20-100 (severely endangered)",
            familyBranch: "Algic",
            writingSystem: "Latin script"
        },
        lessons: [
            {
                id: "yurok-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Aiy-yu-kwee", translation: "Hello" },
                    { word: "Ho", translation: "Yes" },
                    { word: "Pa'ah", translation: "No" },
                    { word: "Woo-mehl", translation: "Thank you" },
                    { word: "Ne-puy", translation: "Goodbye" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Aiy-yu-kwee", translation: "Hello" },
                            { word: "Ho", translation: "Yes" },
                            { word: "Pa'ah", translation: "No" },
                            { word: "Woo-mehl", translation: "Thank you" },
                            { word: "Ne-puy", translation: "Goodbye" }
                        ]
                    }
                ]
            },
            {
                id: "yurok-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Koh'oyee", translation: "One" },
                    { word: "Ni'iihl", translation: "Two" },
                    { word: "Nahksee", translation: "Three" },
                    { word: "Choone'", translation: "Four" },
                    { word: "Mahrrahhl", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Koh'oyee", translation: "One" },
                            { word: "Ni'iihl", translation: "Two" },
                            { word: "Nahksee", translation: "Three" },
                            { word: "Choone'", translation: "Four" },
                            { word: "Mahrrahhl", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Komi": {
        basicInfo: {
            nativeName: "Коми кыв",
            regions: ["Komi Republic, Russia"],
            speakers: "156,099",
            familyBranch: "Uralic > Finno-Permic > Permic > Komi",
            writingSystem: "Molodtsov alphabet (historical), Modern Komi Cyrillic"
        },
        lessons: [
            {
                id: "komi-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Видза оланныд", translation: "Hello (formal)" },
                    { word: "Видза олан", translation: "Hello (informal)" },
                    { word: "Бур асыв", translation: "Good morning" },
                    { word: "Аддзысьлытӧдз", translation: "Goodbye" },
                    { word: "Аттьӧ", translation: "Thank you" },
                    { word: "Истя", translation: "Yes" },
                    { word: "Абу", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Видза оланныд", translation: "Hello (formal)" },
                            { word: "Видза олан", translation: "Hello (informal)" },
                            { word: "Бур асыв", translation: "Good morning" },
                            { word: "Аддзысьлытӧдз", translation: "Goodbye" },
                            { word: "Аттьӧ", translation: "Thank you" },
                            { word: "Истя", translation: "Yes" },
                            { word: "Абу", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "komi-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Ӧти", translation: "One" },
                    { word: "Кык", translation: "Two" },
                    { word: "Куим", translation: "Three" },
                    { word: "Нёль", translation: "Four" },
                    { word: "Вит", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Ӧти", translation: "One" },
                            { word: "Кык", translation: "Two" },
                            { word: "Куим", translation: "Three" },
                            { word: "Нёль", translation: "Four" },
                            { word: "Вит", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Kalmyk" : {
        basicInfo: {
            nativeName: "Хальмг",
            regions: ["Kalmykia, Russia"],
            speakers: "110,000",
            familyBranch: "Mongolic",
            writingSystem: "Cyrillic"
        },
        lessons: [
            {
                id: "kalmyk-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Менд", translation: "Hello" },
                    { word: "Мендвт", translation: "Hello (formal)" },
                    { word: "Сән өрүн", translation: "Good morning" },
                    { word: "Сән үд", translation: "Good afternoon" },
                    { word: "Сән асхн", translation: "Good evening" },
                    { word: "Байрта", translation: "Goodbye" },
                    { word: "Ханҗанав", translation: "Thank you" },
                    { word: "Тиим", translation: "Yes" },
                    { word: "Уга", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Менд", translation: "Hello" },
                            { word: "Мендвт", translation: "Hello (formal)" },
                            { word: "Сән өрүн", translation: "Good morning" },
                            { word: "Сән үд", translation: "Good afternoon" },
                            { word: "Сән асхн", translation: "Good evening" },
                            { word: "Байрта", translation: "Goodbye" },
                            { word: "Ханҗанав", translation: "Thank you" },
                            { word: "Тиим", translation: "Yes" },
                            { word: "Уга", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "kalmyk-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Негн", translation: "One" },
                    { word: "Хойр", translation: "Two" },
                    { word: "Һурвн", translation: "Three" },
                    { word: "Дөрвн", translation: "Four" },
                    { word: "Тавн", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Негн", translation: "One" },
                            { word: "Хойр", translation: "Two" },
                            { word: "Һурвн", translation: "Three" },
                            { word: "Дөрвн", translation: "Four" },
                            { word: "Тавн", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Caddo": {
        basicInfo: {
            nativeName: "Hasí:nay",
            regions: ["Oklahoma, USA"],
            speakers: "25",
            familyBranch: "Caddoan",
            writingSystem: "Latin"
        },
        lessons: [
            {
                id: "caddo-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Nawah", translation: "Hello" },
                    { word: "Nawah háh", translation: "Hello (formal)" },
                    { word: "Bah háhkuku", translation: "Good morning" },
                    { word: "Bah háhtay'", translation: "Good afternoon" },
                    { word: "Bah háhkay'", translation: "Good evening" },
                    { word: "Bah háhnuh", translation: "Good night" },
                    { word: "Náy'usdi", translation: "Goodbye" },
                    { word: "Náy'usdi háh", translation: "Goodbye (formal)" },
                    { word: "Ahóy", translation: "Thank you" },
                    { word: "Ahóy háh", translation: "Thank you (formal)" },
                    { word: "Háh", translation: "Yes" },
                    { word: "Káyah", translation: "No" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Nawah", translation: "Hello" },
                            { word: "Nawah háh", translation: "Hello (formal)" },
                            { word: "Bah háhkuku", translation: "Good morning" },
                            { word: "Bah háhtay'", translation: "Good afternoon" },
                            { word: "Bah háhkay'", translation: "Good evening" },
                            { word: "Bah háhnuh", translation: "Good night" },
                            { word: "Náy'usdi", translation: "Goodbye" },
                            { word: "Náy'usdi háh", translation: "Goodbye (formal)" },
                            { word: "Ahóy", translation: "Thank you" },
                            { word: "Ahóy háh", translation: "Thank you (formal)" },
                            { word: "Háh", translation: "Yes" },
                            { word: "Káyah", translation: "No" }
                        ]
                    }
                ]
            },
            {
                id: "caddo-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "Bihi'", translation: "One" },
                    { word: "Bit", translation: "Two" },
                    { word: "Dáh'", translation: "Three" },
                    { word: "Bit-sah", translation: "Four" },
                    { word: "Dasáh", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "Bihi'", translation: "One" },
                            { word: "Bit", translation: "Two" },
                            { word: "Dáh'", translation: "Three" },
                            { word: "Bit-sah", translation: "Four" },
                            { word: "Dasáh", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Chinook": {
        basicInfo: {
            nativeName: "Chinúk",
            regions: ["Northwestern United States", "Lower Columbia River"],
            speakers: "Extinct",
            familyBranch: "Lower Chinookan",
            writingSystem: "Latin"
        },
        lessons: [
            {
                id: "chinook-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "qʰáta", translation: "Hello" },
                    { word: "šáx̣ali", translation: "Up/Above/High" },
                    { word: "q'íx̣ali", translation: "Morning" },
                    { word: "čakwa", translation: "Come here" },
                    { word: "kʰapa", translation: "There/Then" },
                    { word: "nayka", translation: "I/Me" },
                    { word: "mayka", translation: "You" },
                    { word: "łax̣", translation: "Day" },
                    { word: "púlakłi", translation: "Night" },
                    { word: "k'a", translation: "Where" },
                    { word: "k'ánim", translation: "Canoe" },
                    { word: "wáwa", translation: "Talk/Speak" },
                    { word: "míłayt", translation: "Sit/Stay/Live" },
                    { word: "hayu-masi", translation: "Thank you" },
                    { word: "nawitka", translation: "Yes/Indeed" },
                    { word: "wik", translation: "No/Not" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "qʰáta", translation: "Hello" },
                            { word: "šáx̣ali", translation: "Up/Above/High" },
                            { word: "q'íx̣ali", translation: "Morning" },
                            { word: "čakwa", translation: "Come here" },
                            { word: "kʰapa", translation: "There/Then" },
                            { word: "nayka", translation: "I/Me" },
                            { word: "mayka", translation: "You" },
                            { word: "łax̣", translation: "Day" },
                            { word: "púlakłi", translation: "Night" },
                            { word: "k'a", translation: "Where" },
                            { word: "k'ánim", translation: "Canoe" },
                            { word: "wáwa", translation: "Talk/Speak" },
                            { word: "míłayt", translation: "Sit/Stay/Live" },
                            { word: "hayu-masi", translation: "Thank you" },
                            { word: "nawitka", translation: "Yes/Indeed" },
                            { word: "wik", translation: "No/Not" }
                        ]
                    }
                ]
            },
            {
                id: "chinook-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "íxt", translation: "One" },
                    { word: "mákst", translation: "Two" },
                    { word: "łún", translation: "Three" },
                    { word: "lákit", translation: "Four" },
                    { word: "qʰínčix", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "íxt", translation: "One" },
                            { word: "mákst", translation: "Two" },
                            { word: "łún", translation: "Three" },
                            { word: "lákit", translation: "Four" },
                            { word: "qʰínčix", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Guarani": {
        basicInfo: {
            nativeName: "Avañe'ẽ",
            regions: ["Paraguay", "Bolivia", "Argentina"],
            speakers: "1.5 million",
            familyBranch: "Tupí-Guaraní",
            writingSystem: "Latin"
        },
        lessons: [
            {
                id: "guarani-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "mba'éichapa", translation: "Hello" },
                    { word: "jajohecha peve", translation: "Goodbye" },
                    { word: "mba'éichapa ko'ẽ", translation: "Good morning" },
                    { word: "mba'éichapa ka'aru", translation: "Good afternoon" },
                    { word: "mba'éichapa pyhare", translation: "Good evening" },
                    { word: "japyhare porã", translation: "Good night" },
                    { word: "mba'éichapa reiko", translation: "How are you?" },
                    { word: "iporã", translation: "I am fine" },
                    { word: "ndaiporãi", translation: "I am not fine" },
                    { word: "heẽ", translation: "Yes" },
                    { word: "nahániri", translation: "No" },
                    { word: "aguyje", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "mba'éichapa", translation: "Hello" },
                            { word: "jajohecha peve", translation: "Goodbye" },
                            { word: "mba'éichapa ko'ẽ", translation: "Good morning" },
                            { word: "mba'éichapa ka'aru", translation: "Good afternoon" },
                            { word: "mba'éichapa pyhare", translation: "Good evening" },
                            { word: "japyhare porã", translation: "Good night" },
                            { word: "mba'éichapa reiko", translation: "How are you?" },
                            { word: "iporã", translation: "I am fine" },
                            { word: "ndaiporãi", translation: "I am not fine" },
                            { word: "heẽ", translation: "Yes" },
                            { word: "nahániri", translation: "No" },
                            { word: "aguyje", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "guarani-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "peteĩ", translation: "One" },
                    { word: "mokõi", translation: "Two" },
                    { word: "mbohapy", translation: "Three" },
                    { word: "irundy", translation: "Four" },
                    { word: "po", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "peteĩ", translation: "One" },
                            { word: "mokõi", translation: "Two" },
                            { word: "mbohapy", translation: "Three" },
                            { word: "irundy", translation: "Four" },
                            { word: "po", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Wichita": {
        basicInfo: {
            nativeName: "Wichita",
            regions: ["United States"],
            speakers: "1",
            familyBranch: "Caddoan",
            writingSystem: "Latin"
        },
        lessons: [
            {
                id: "wichita-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "chiraha", translation: "Hello" },
                    { word: "hina'a", translation: "Goodbye" },
                    { word: "haah", translation: "Yes" },
                    { word: "kirik", translation: "No" },
                    { word: "aho", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "chiraha", translation: "Hello" },
                            { word: "hina'a", translation: "Goodbye" },
                            { word: "haah", translation: "Yes" },
                            { word: "kirik", translation: "No" },
                            { word: "aho", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "wichita-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "chis", translation: "One" },
                    { word: "witch", translation: "Two" },
                    { word: "tah", translation: "Three" },
                    { word: "hid:us", translation: "Four" },
                    { word: "kis:us", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "chis", translation: "One" },
                            { word: "witch", translation: "Two" },
                            { word: "tah", translation: "Three" },
                            { word: "hid:us", translation: "Four" },
                            { word: "kis:us", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Keres": {
        basicInfo: {
            nativeName: "Keres",
            regions: ["United States"],
            speakers: "13,000",
            familyBranch: "Keresan",
            writingSystem: "Latin"
        },
        lessons: [
            {
                id: "keres-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "guwaatsi", translation: "Hello" },
                    { word: "hawuu", translation: "Goodbye" },
                    { word: "haa'a", translation: "Yes" },
                    { word: "daa'ee", translation: "No" },
                    { word: "ku'shruu", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "guwaatsi", translation: "Hello" },
                            { word: "hawuu", translation: "Goodbye" },
                            { word: "haa'a", translation: "Yes" },
                            { word: "daa'ee", translation: "No" },
                            { word: "ku'shruu", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "keres-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ishkina", translation: "One" },
                    { word: "wishi", translation: "Two" },
                    { word: "chamisha", translation: "Three" },
                    { word: "wisha", translation: "Four" },
                    { word: "tamaya", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "ishkina", translation: "One" },
                            { word: "wishi", translation: "Two" },
                            { word: "chamisha", translation: "Three" },
                            { word: "wisha", translation: "Four" },
                            { word: "tamaya", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Muscogee": {
        basicInfo: {
            nativeName: "Mvskoke",
            regions: ["United States"],
            speakers: "4,500",
            familyBranch: "Muscogean",
            writingSystem: "Latin"
        },
        lessons: [
            {
                id: "muscogee-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "hesci", translation: "Hello" },
                    { word: "herákko", translation: "Goodbye" },
                    { word: "henká", translation: "Yes" },
                    { word: "móntós", translation: "No" },
                    { word: "mvto", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "hesci", translation: "Hello" },
                            { word: "herákko", translation: "Goodbye" },
                            { word: "henká", translation: "Yes" },
                            { word: "móntós", translation: "No" },
                            { word: "mvto", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "muscogee-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "hvmken", translation: "One" },
                    { word: "hokkólen", translation: "Two" },
                    { word: "tutcénen", translation: "Three" },
                    { word: "osténen", translation: "Four" },
                    { word: "cháhkepen", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "hvmken", translation: "One" },
                            { word: "hokkólen", translation: "Two" },
                            { word: "tutcénen", translation: "Three" },
                            { word: "osténen", translation: "Four" },
                            { word: "cháhkepen", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Kiliwa": {
        basicInfo: {
            nativeName: "Kooleu ñaja'",
            regions: ["Mexico"],
            speakers: "About 80",
            familyBranch: "Yuman",
            writingSystem: "Latin"
        },
        lessons: [
            {
                id: "kiliwa-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "maa", translation: "Hello" },
                    { word: "xwaa", translation: "Goodbye" },
                    { word: "ee", translation: "Yes" },
                    { word: "uu", translation: "No" },
                    { word: "kwanchu", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "maa", translation: "Hello" },
                            { word: "xwaa", translation: "Goodbye" },
                            { word: "ee", translation: "Yes" },
                            { word: "uu", translation: "No" },
                            { word: "kwanchu", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "kiliwa-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "salti", translation: "One" },
                    { word: "xuwak", translation: "Two" },
                    { word: "xamyay", translation: "Three" },
                    { word: "msipi", translation: "Four" },
                    { word: "saltiwak", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "salti", translation: "One" },
                            { word: "xuwak", translation: "Two" },
                            { word: "xamyay", translation: "Three" },
                            { word: "msipi", translation: "Four" },
                            { word: "saltiwak", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Pirahã": {
        basicInfo: {
            nativeName: "Pirahã",
            regions: ["Brazil"],
            speakers: "About 800",
            familyBranch: "Mura",
            writingSystem: "No traditional writing system"
        },
        lessons: [
            {
                id: "piraha-basics-1",
                title: "Basic Words",
                difficulty: "beginner",
                vocabulary: [
                    { word: "xói", translation: "Going" },
                    { word: "xíi", translation: "I" },
                    { word: "xahaí", translation: "Want" },
                    { word: "xopái", translation: "Afraid" },
                    { word: "hoí", translation: "Come" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "xói", translation: "Going" },
                            { word: "xíi", translation: "I" },
                            { word: "xahaí", translation: "Want" },
                            { word: "xopái", translation: "Afraid" },
                            { word: "hoí", translation: "Come" }
                        ]
                    }
                ]
            },
            {
                id: "piraha-basics-2",
                title: "Quantity Words",
                difficulty: "beginner",
                vocabulary: [
                    { word: "hói", translation: "Small amount" },
                    { word: "hoí", translation: "Larger amount" },
                    { word: "baágiso", translation: "Many" },
                    { word: "xogií", translation: "Big" },
                    { word: "xitií", translation: "Much" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "hói", translation: "Small amount" },
                            { word: "hoí", translation: "Larger amount" },
                            { word: "baágiso", translation: "Many" },
                            { word: "xogií", translation: "Big" },
                            { word: "xitií", translation: "Much" }
                        ]
                    }
                ]
            }
        ]
    },
    "Chechen": {
        basicInfo: {
            nativeName: "Нохчийн мотт",
            regions: ["Russia"],
            speakers: "About 1.2 million",
            familyBranch: "Northeast Caucasian",
            writingSystem: "Cyrillic"
        },
        lessons: [
            {
                id: "chechen-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "салам", translation: "Hello" },
                    { word: "муха ву хьо", translation: "How are you?"},
                    { word: "хӏаъ", translation: "Yes"},
                    { word: "хӏан-хӏа", translation: "No" },
                    { word: "баркалла", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "салам", translation: "Hello" },
                            { word: "муха ву хьо", translation: "How are you?"},
                            { word: "хӏаъ", translation: "Yes"},
                            { word: "хӏан-хӏа", translation: "No" },
                            { word: "баркалла", translation: "Thank you" }
                        ]
                    }
                ]            },
            {
                id: "chechen-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "цхьаъ", translation: "One" },
                    { word: "шиъ", translation: "Two" },
                    { word: "кхоъ", translation: "Three" },
                    { word: "диъ", translation: "Four" },
                    { word: "пхиъ", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "цхьаъ", translation: "One" },
                            { word: "шиъ", translation: "Two" },
                            { word: "кхоъ", translation: "Three" },
                            { word: "диъ", translation: "Four" },
                            { word: "пхиъ", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Alyutor": {
        basicInfo: {
            nativeName: "алуталг’у",
            regions: ["Russia"],
            speakers: "25",
            familyBranch: "Chukotko-Kamchatkan",
            writingSystem: "Cyrillic"
        },
        lessons: [
            {
                id: "alyutor-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "тыԓԓывэ", translation: "Hello" },
                    { word: "миӈкые", translation: "How are you?" },
                    { word: "и", translation: "Yes" },
                    { word: "вутку", translation: "No" },
                    { word: "чавычваӈ", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "тыԓԓывэ", translation: "Hello" },
                            { word: "миӈкые", translation: "How are you?" },
                            { word: "и", translation: "Yes" },
                            { word: "вутку", translation: "No" },
                            { word: "чавычваӈ", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "alyutor-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ыннэн", translation: "One" },
                    { word: "ӈыёққы", translation: "Two" },
                    { word: "ӈыёққы ыннэн", translation: "Three" },
                    { word: "ӈыёққы ӈыёққы", translation: "Four" },
                    { word: "миԓԓыӈэн", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "ыннэн", translation: "One" },
                            { word: "ӈыёққы", translation: "Two" },
                            { word: "ӈыёққы ыннэн", translation: "Three" },
                            { word: "ӈыёққы ӈыёққы", translation: "Four" },
                            { word: "миԓԓыӈэн", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    },
    "Sirenik": {
        basicInfo: {
            nativeName: "Сиӷы́ных",
            regions: ["Russia (Chukotka)"],
            speakers: "Extinct",
            familyBranch: "Eskimo-Aleut (Yupik)",
            writingSystem: "Cyrillic"
        },
        lessons: [
            {
                id: "sirenik-basics-1",
                title: "Basic Greetings",
                difficulty: "beginner",
                vocabulary: [
                    { word: "ӄуякамкын", translation: "Hello" },
                    { word: "ӄаӈта итаӄсин?", translation: "How are you?" },
                    { word: "аа", translation: "Yes" },
                    { word: "ӄаӄа", translation: "No" },
                    { word: "иӷалиӷутамкын", translation: "Thank you" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "ӄуякамкын", translation: "Hello" },
                            { word: "ӄаӈта итаӄсин?", translation: "How are you?" },
                            { word: "аа", translation: "Yes" },
                            { word: "ӄаӄа", translation: "No" },
                            { word: "иӷалиӷутамкын", translation: "Thank you" }
                        ]
                    }
                ]
            },
            {
                id: "sirenik-basics-2",
                title: "Numbers 1-5",
                difficulty: "beginner",
                vocabulary: [
                    { word: "атасиӄ", translation: "One" },
                    { word: "малӷуӄ", translation: "Two" },
                    { word: "пиӈаюӈ", translation: "Three" },
                    { word: "стамаӈ", translation: "Four" },
                    { word: "талимаӈ", translation: "Five" }
                ],
                exercises: [
                    {
                        type: "matching",
                        pairs: [
                            { word: "атасиӄ", translation: "One" },
                            { word: "малӷуӄ", translation: "Two" },
                            { word: "пиӈаюӈ", translation: "Three" },
                            { word: "стамаӈ", translation: "Four" },
                            { word: "талимаӈ", translation: "Five" }
                        ]
                    }
                ]
            }
        ]
    }
}