import {
  Actor,
  Movie,
  LessonTopic,
  HistoryMilestone,
  QuizQuestion,
  GlossaryTerm,
  ChecklistTask,
  StoryboardProject
} from '../types';

export const INITIAL_ACTORS: Actor[] = [
  {
    id: 'actor-ntr',
    name: 'N. T. Rama Rao',
    teluguName: 'నందమూరి తారక రామారావు',
    titleHonorific: 'Viswa Vikhyatha Nata Sarvabhouma',
    generation: 'legendary',
    debutYear: 1949,
    debutFilm: 'Mana Desam',
    portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    biography: 'Nandamuri Taraka Rama Rao (28 May 1923 – 18 January 1996), popularly known as NTR, was an iconic Indian actor, filmmaker, and statesman who served as Chief Minister of Andhra Pradesh for three terms. Across a prolific career spanning over four decades, he starred in more than 300 films, becoming universally revered for his commanding portrayal of mythological deities, particularly Lord Krishna and Lord Rama, as well as powerful social reformers and heroic folklore figures.',
    earlyLife: 'Born in Nimmakuru, Krishna District, Andhra Pradesh, Rama Rao earned his Bachelor of Arts degree from Andhra Christian College in Guntur. Before embarking into the film industry, he worked as a sub-registrar in the Madras Service Commission.',
    careerMilestones: [
      'Breakthrough success in Pathala Bhairavi (1951) and Malliswari (1951), establishing him as a top romantic and heroic star.',
      'Portrayed Lord Krishna in the monumental masterpiece Mayabazar (1957), creating a cultural benchmark in mythological cinema.',
      'Won the National Film Award for Best Feature Film in Telugu for Seetharama Kalyanam (1961), which he also directed.',
      'Directed and starred in the landmark epic Daana Veera Soora Karna (1977), playing three demanding roles: Karna, Duryodhana, and Krishna.',
      'Awarded the Padma Shri in 1968 by the Government of India for his monumental contribution to Indian cinema.'
    ],
    notablePerformances: [
      'Karna & Duryodhana in Daana Veera Soora Karna (1977)',
      'Lord Krishna in Mayabazar (1957)',
      'Ravana in Bhookailas (1958)',
      'Thota Ramudu in Pathala Bhairavi (1951)',
      'Major Chandrakanth in Major Chandrakanth (1993)'
    ],
    awards: [
      'Padma Shri (1968)',
      'National Film Award for Best Feature Film in Telugu - Seetharama Kalyanam (1961)',
      'Filmfare Award for Best Actor – Telugu - Badi Panthulu (1972)',
      'Nandi Award for Best Actor'
    ],
    collaborations: [
      'K. V. Reddy (Director: Pathala Bhairavi, Mayabazar)',
      'B. V. Kanta Rao (Frequent co-star in historical folklore)',
      'S. V. Ranga Rao (Legendary dramatic adversary on-screen)',
      'Ghantasala (Legendary playback singer providing NTR\'s iconic voice)'
    ],
    upcomingProjects: [],
    filmography: [
      { id: 'f-ntr-1', movieTitle: 'Mana Desam', releaseYear: 1949, role: 'Police Inspector (Debut)', director: 'L. V. Prasad', verdict: 'Classic' },
      { id: 'f-ntr-2', movieTitle: 'Pathala Bhairavi', releaseYear: 1951, role: 'Thota Ramudu', director: 'K. V. Reddy', verdict: 'Industry Hit' },
      { id: 'f-ntr-3', movieTitle: 'Malliswari', releaseYear: 1951, role: 'Nagaraju', director: 'B. N. Reddy', verdict: 'Classic' },
      { id: 'f-ntr-4', movieId: 'movie-mayabazar', movieTitle: 'Mayabazar', releaseYear: 1957, role: 'Lord Krishna', director: 'K. V. Reddy', verdict: 'Industry Hit', awards: ['Screened at 1957 International Film Festival of India'] },
      { id: 'f-ntr-5', movieTitle: 'Gundamma Katha', releaseYear: 1962, role: 'Anjaneya Prasad (Anji)', director: 'Kamalakara Kameswara Rao', verdict: 'Blockbuster' },
      { id: 'f-ntr-6', movieTitle: 'Daana Veera Soora Karna', releaseYear: 1977, role: 'Karna / Duryodhana / Krishna (Triple Role)', director: 'N. T. Rama Rao', verdict: 'Industry Hit' },
      { id: 'f-ntr-7', movieTitle: 'Kondaveeti Simham', releaseYear: 1981, role: 'S.P. Ranjith Kumar / Ramu', director: 'K. Raghavendra Rao', verdict: 'Industry Hit' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&auto=format&fit=crop&q=80'
    ],
    verifiedSource: 'National Film Archive of India & Telugu Cinema Historical Records',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-anr',
    name: 'Akkineni Nageswara Rao',
    teluguName: 'అక్కినేని నాగేశ్వరరావు',
    titleHonorific: 'Natasamrat',
    generation: 'legendary',
    debutYear: 1944,
    debutFilm: 'Dharmapatni',
    portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80',
    biography: 'Akkineni Nageswara Rao (20 September 1923 – 22 January 2014), fondly known as ANR, was one of the foundational pillars of Telugu cinema. Across a majestic career of over seven decades, ANR acted in more than 255 films, pioneering romantic dramas, philosophical tragedies, and sophisticated social cinema. He was pivotal in shifting the Telugu film industry\'s base from Madras to Hyderabad by founding Annapurna Studios in 1975.',
    earlyLife: 'Born in Ramapuram, Krishna District into a humble agrarian family, ANR entered theatre at the age of ten, performing female roles before transitioning to silver screen prominence.',
    careerMilestones: [
      'Immortalized tragic romance in Devadasu (1953), widely acclaimed by critics across India.',
      'Recipient of the Dadasaheb Phalke Award (1991), India\'s highest honor in cinema.',
      'Conferred Padma Vibhushan (2011), Padma Bhushan (1988), and Padma Shri (1968).',
      'Founded Annapurna Studios in Hyderabad in 1975, shaping the production infrastructure of modern Tollywood.',
      'Completed his final film Manam (2014) alongside his son Nagarjuna and grandsons Naga Chaitanya and Akhil.'
    ],
    notablePerformances: [
      'Devadasu in Devadasu (1953)',
      'Abhimanyu in Mayabazar (1957)',
      'Chaitanya in Prem Nagar (1971)',
      'Dr. Chakravarthi in Dr. Chakravarthi (1964)',
      'Chaitanya / Nageswara Rao in Manam (2014)'
    ],
    awards: [
      'Dadasaheb Phalke Award (1991)',
      'Padma Vibhushan (2011)',
      'Padma Bhushan (1988)',
      'Padma Shri (1968)',
      'Filmfare Lifetime Achievement Award – South (1988)'
    ],
    collaborations: [
      'Vedantam Raghavayya (Director: Devadasu)',
      'K. V. Reddy (Mayabazar)',
      'K. Viswanath (Saptapadi, Subhalekha)',
      'Savitri (Iconic on-screen pairing)'
    ],
    upcomingProjects: [],
    filmography: [
      { id: 'f-anr-1', movieTitle: 'Dharmapatni', releaseYear: 1944, role: 'Supporting (Debut)', director: 'P. Pullaiah', verdict: 'Hit' },
      { id: 'f-anr-2', movieId: 'movie-devadasu', movieTitle: 'Devadasu', releaseYear: 1953, role: 'Devadasu', director: 'Vedantam Raghavayya', verdict: 'Industry Hit' },
      { id: 'f-anr-3', movieId: 'movie-mayabazar', movieTitle: 'Mayabazar', releaseYear: 1957, role: 'Abhimanyu', director: 'K. V. Reddy', verdict: 'Industry Hit' },
      { id: 'f-anr-4', movieTitle: 'Dr. Chakravarthi', releaseYear: 1964, role: 'Dr. Chakravarthi', director: 'Adurthi Subba Rao', verdict: 'Classic' },
      { id: 'f-anr-5', movieTitle: 'Prem Nagar', releaseYear: 1971, role: 'Kalyan', director: 'K. S. Prakash Rao', verdict: 'Blockbuster' },
      { id: 'f-anr-6', movieTitle: 'Manam', releaseYear: 2014, role: 'Chaitanya', director: 'Vikram Kumar', verdict: 'Super Hit', awards: ['Nandi Special Jury Award'] }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80'
    ],
    verifiedSource: 'Dadasaheb Phalke Academy & Annapurna Archives',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-krishna',
    name: 'Krishna',
    teluguName: 'ఘట్టమనేని కృష్ణ',
    titleHonorific: 'Superstar',
    generation: 'legendary',
    debutYear: 1965,
    debutFilm: 'Thene Manasulu',
    portraitUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80',
    biography: 'Ghattamaneni Siva Rama Krishna Murthy (31 May 1943 – 15 November 2022), known as Superstar Krishna, was a pathbreaking actor, director, and producer who acted in over 350 feature films. Renowned as the great technological innovator of Telugu cinema, he introduced Cinemascope, 70mm stereophonic sound, DTS sound, and espionage spy thrillers (James Bond franchise format in Telugu through Goodachari 116). He built Padmalaya Studios and directed iconic classics like Alluri Seetharama Raju.',
    earlyLife: 'Born in Burripalem, Guntur district, Krishna graduated from C.R.R. College in Eluru before being cast by director Adurthi Subba Rao in the first Telugu color social film Thene Manasulu (1965).',
    careerMilestones: [
      'Introduced the spy thriller genre to South India with Goodachari 116 (1966).',
      'Pioneered South India\'s first Cinemascope film with Alluri Seetharama Raju (1974), which won the National Film Award.',
      'Introduced the first 70mm film format in South India with Simhasanam (1986), which he produced, directed, and starred in.',
      'Conferred the Padma Bhushan in 2009 by the Government of India for contributions to cinema.',
      'Introduced DTS sound technology to Telugu cinema through Telugu dubs and productions in the late 1990s.'
    ],
    notablePerformances: [
      'Alluri Seetharama Raju in Alluri Seetharama Raju (1974)',
      'Agent 116 Gopi in Goodachari 116 (1966)',
      'Vikramasimha in Simhasanam (1986)',
      'Mosagallaku Mosagadu (1971 - First Indian Cowboy Western Film)'
    ],
    awards: [
      'Padma Bhushan (2009)',
      'Nandi Award for Best Actor - Alluri Seetharama Raju (1974)',
      'Filmfare Lifetime Achievement Award – South (1997)'
    ],
    collaborations: [
      'Adurthi Subba Rao (Director: Thene Manasulu, Marapurani Katha)',
      'V. Ramachandra Rao (Director: Alluri Seetharama Raju)',
      'Vijaya Nirmala (Director & frequent co-star)'
    ],
    upcomingProjects: [],
    filmography: [
      { id: 'f-kri-1', movieTitle: 'Thene Manasulu', releaseYear: 1965, role: 'Basavaraju (Debut)', director: 'Adurthi Subba Rao', verdict: 'Super Hit' },
      { id: 'f-kri-2', movieTitle: 'Goodachari 116', releaseYear: 1966, role: 'Agent 116 Gopi', director: 'Mallikarjuna Rao', verdict: 'Blockbuster' },
      { id: 'f-kri-3', movieTitle: 'Mosagallaku Mosagadu', releaseYear: 1971, role: 'Prasad (Cowboy)', director: 'K. S. R. Doss', verdict: 'Blockbuster' },
      { id: 'f-kri-4', movieId: 'movie-alluri', movieTitle: 'Alluri Seetharama Raju', releaseYear: 1974, role: 'Alluri Seetharama Raju', director: 'V. Ramachandra Rao', verdict: 'Industry Hit', awards: ['National Film Award for Best Lyrics'] },
      { id: 'f-kri-5', movieTitle: 'Simhasanam', releaseYear: 1986, role: 'Vikramasimha', director: 'Krishna', verdict: 'Blockbuster' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&auto=format&fit=crop&q=80'
    ],
    verifiedSource: 'Padmalaya Studios Historical Archives',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-sobhanbabu',
    name: 'Sobhan Babu',
    teluguName: 'శోభన్ బాబు',
    titleHonorific: 'Natabhushana',
    generation: 'legendary',
    debutYear: 1959,
    debutFilm: 'Daiva Balam',
    portraitUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80',
    biography: 'Sobhan Babu (14 January 1937 – 20 March 2008), celebrated with the honorific Natabhushana, was an acclaimed Telugu actor renowned for his unmatched grace, family melodramas, romantic films, and societal dramas. In a career spanning over three decades, he acted in over 230 films, winning multiple Nandi and Filmfare awards.',
    earlyLife: 'Born in Chinanandigama, Krishna District, Sobhan Babu completed his degree in physics from The New College, Chennai, before pursuing acting in Madras.',
    careerMilestones: [
      'Won the Rashtrapati Award for Best Actor for his role in Bangaru Panjaram (1969).',
      'Won four Filmfare Best Actor Awards (South) and five Nandi Awards for Best Actor.',
      'Became the undisputed king of family and romantic social dramas throughout the 1970s and 1980s.'
    ],
    notablePerformances: [
      'Gopi in Manushulu Marali (1969)',
      'Venu in Soggadu (1975)',
      'Sri Rama in Sampoorna Ramayanam (1971)',
      'Karthik in Karthika Deepam (1979)'
    ],
    awards: [
      'Rashtrapati Award (1969)',
      'Filmfare Award for Best Actor – Telugu (1971, 1974, 1975, 1976)',
      'Nandi Award for Best Actor (5 times)'
    ],
    collaborations: ['Bapu (Director: Sampoorna Ramayanam)', 'K. Bapayya (Director: Soggadu)'],
    upcomingProjects: [],
    filmography: [
      { id: 'f-sb-1', movieTitle: 'Daiva Balam', releaseYear: 1959, role: 'Supporting Debut', director: 'Vasanthkumar Reddy', verdict: 'Hit' },
      { id: 'f-sb-2', movieTitle: 'Manushulu Marali', releaseYear: 1969, role: 'Gopi', director: 'V. Madhusudhana Rao', verdict: 'Blockbuster' },
      { id: 'f-sb-3', movieTitle: 'Sampoorna Ramayanam', releaseYear: 1971, role: 'Lord Rama', director: 'Bapu', verdict: 'Industry Hit' },
      { id: 'f-sb-4', movieTitle: 'Soggadu', releaseYear: 1975, role: 'Sobhanadri', director: 'K. Bapayya', verdict: 'Blockbuster' }
    ],
    galleryImages: [],
    verifiedSource: 'Telugu Cinema History Society',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-chiranjeevi',
    name: 'Chiranjeevi',
    teluguName: 'చిరంజీవి',
    titleHonorific: 'Megastar',
    generation: 'senior',
    debutYear: 1978,
    debutFilm: 'Pranam Khareedu',
    portraitUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&auto=format&fit=crop&q=80',
    biography: 'Konidela Siva Sankara Vara Prasad (born 22 August 1955), known mononymously as Chiranjeevi, is an Indian actor and former politician who dominated Telugu cinema as the undisputed "Megastar" for multiple decades. Over a four-decade career with more than 150 feature films, he revolutionized dance, fight choreography, commercial mass storytelling, and pacing in South Indian cinema. He was honored with the Padma Vibhushan (2024), Padma Bhushan (2006), and the Special Award from the Academy of Motion Picture Arts and Sciences.',
    earlyLife: 'Born in Mogalthur, West Godavari District, Chiranjeevi graduated with a commerce degree from Y.N. College, Narsapur, and attended the Madras Film Institute in 1976.',
    careerMilestones: [
      'Khaidi (1983) launched him into superstardom, redefining commercial action cinema in South India.',
      'Rudraveena (1988) won three National Film Awards, including the Nargis Dutt Award for Best Feature Film on National Integration.',
      'Gharana Mogudu (1992) became the first Telugu film to gross over ₹10 crore at the box office; India Today crowned him "Bigger than Bachchan".',
      'Honored with the Padma Bhushan in 2006 and the Padma Vibhushan in 2024.',
      'Founded the Chiranjeevi Charitable Trust (Eye & Blood Bank) in 1998, saving hundreds of thousands of lives.'
    ],
    notablePerformances: [
      'Sooryam in Khaidi (1983)',
      'Suryanarayana Sharma in Rudraveena (1988)',
      'Kalyan in Swayamkrushi (1987 - Screened at Moscow International Film Festival)',
      'Raju in Gharana Mogudu (1992)',
      'Indrasena Reddy in Indra (2002)'
    ],
    awards: [
      'Padma Vibhushan (2024)',
      'Padma Bhushan (2006)',
      'National Film Award – Special Jury Award (1996)',
      'Filmfare Awards South – 9 Best Actor Awards & Lifetime Achievement',
      'Nandi Awards – 4 Best Actor Awards'
    ],
    collaborations: [
      'K. Raghavendra Rao (Director: Jagadeka Veerudu Athiloka Sundari, Gharana Mogudu)',
      'K. Viswanath (Director: Subhalekha, Swayamkrushi, Rudraveena)',
      'Kodi Ramakrishna (Director: Intiguttu, Ankusam)'
    ],
    upcomingProjects: ['Vishwambhara (Fantasy Adventure Epic)'],
    filmography: [
      { id: 'f-chi-1', movieTitle: 'Pranam Khareedu', releaseYear: 1978, role: 'Narasimha (Debut)', director: 'K. Vasu', verdict: 'Hit' },
      { id: 'f-chi-2', movieId: 'movie-khaidi', movieTitle: 'Khaidi', releaseYear: 1983, role: 'Sooryam', director: 'A. Kodandarami Reddy', verdict: 'Industry Hit' },
      { id: 'f-chi-3', movieTitle: 'Swayamkrushi', releaseYear: 1987, role: 'Sambaiah', director: 'K. Viswanath', verdict: 'Classic', awards: ['Nandi Award for Best Actor'] },
      { id: 'f-chi-4', movieTitle: 'Rudraveena', releaseYear: 1988, role: 'Suryanarayana Sharma', director: 'K. Balachander', verdict: 'Critically Acclaimed', awards: ['National Film Award'] },
      { id: 'f-chi-5', movieTitle: 'Jagadeka Veerudu Athiloka Sundari', releaseYear: 1990, role: 'Raju', director: 'K. Raghavendra Rao', verdict: 'Industry Hit' },
      { id: 'f-chi-6', movieTitle: 'Gharana Mogudu', releaseYear: 1992, role: 'Raju', director: 'K. Raghavendra Rao', verdict: 'Industry Hit' },
      { id: 'f-chi-7', movieTitle: 'Indra', releaseYear: 2002, role: 'Indrasena Reddy / Shankar Narayana', director: 'B. Gopal', verdict: 'Industry Hit', awards: ['Filmfare Best Actor – Telugu', 'Nandi Best Actor'] }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80'
    ],
    verifiedSource: 'Film Federation of India & Government of India Gazette',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-balakrishna',
    name: 'Nandamuri Balakrishna',
    teluguName: 'నందమూరి బాలకృష్ణ',
    titleHonorific: 'Natasimham',
    generation: 'senior',
    debutYear: 1974,
    debutFilm: 'Tatamma Kala',
    portraitUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=1200&auto=format&fit=crop&q=80',
    biography: 'Nandamuri Balakrishna (born 10 June 1960), fondly referred to as NBK and Natasimham, is a celebrated Indian actor, producer, and politician. The sixth son of legendary NTR, Balakrishna has starred in over 100 films, carving an unparalleled niche in powerful high-voltage faction dramas, mythological figures, and time-travel fantasy epics.',
    earlyLife: 'Born in Madras, Balakrishna entered films as a child artist at age 14 in Tatamma Kala (1974), directed by his father N. T. Rama Rao, while studying at Nizam College, Hyderabad.',
    careerMilestones: [
      'Aditya 369 (1991) directed by Singeetam Srinivasa Rao became India\'s first landmark science-fiction time-travel film.',
      'Samarasimha Reddy (1999) created the faction genre in Telugu cinema, setting industry records across territories.',
      'Narasimha Naidu (2001) won the Nandi Award for Best Actor and set unprecedented box office records.',
      'Akhanda (2021) revived Indian cinema post-pandemic, garnering massive critical and commercial acclaim.',
      'Serves as Chairman of the Basavatarakam Indo-American Cancer Hospital & Research Institute.'
    ],
    notablePerformances: [
      'Sri Krishnadevaraya & Krishna Kumar in Aditya 369 (1991)',
      'Samarasimha Reddy in Samarasimha Reddy (1999)',
      'Akhanda / Murali Krishna in Akhanda (2021)',
      'Lord Rama in Sri Rama Rajyam (2011)',
      'Veera Simha Reddy in Veera Simha Reddy (2023)'
    ],
    awards: [
      'Nandi Award for Best Actor - Narasimha Naidu (2001)',
      'Nandi Award for Best Actor - Simha (2010)',
      'Nandi Award for Best Actor - Legend (2014)',
      'Filmfare South Special Award'
    ],
    collaborations: [
      'Boyapati Srinu (Director: Simha, Legend, Akhanda)',
      'B. Gopal (Director: Samarasimha Reddy, Narasimha Naidu, Rowdy Inspector)',
      'Singeetam Srinivasa Rao (Director: Aditya 369, Bhairava Dweepam)'
    ],
    upcomingProjects: ['NBK109 (Directed by Bobby Kolli)'],
    filmography: [
      { id: 'f-nbk-1', movieTitle: 'Tatamma Kala', releaseYear: 1974, role: 'Balakrishna (Child Artist Debut)', director: 'N. T. Rama Rao', verdict: 'Hit' },
      { id: 'f-nbk-2', movieTitle: 'Aditya 369', releaseYear: 1991, role: 'Sri Krishnadevaraya / Krishna Kumar', director: 'Singeetam Srinivasa Rao', verdict: 'Classic' },
      { id: 'f-nbk-3', movieId: 'movie-samarasimha', movieTitle: 'Samarasimha Reddy', releaseYear: 1999, role: 'Samarasimha Reddy', director: 'B. Gopal', verdict: 'Industry Hit' },
      { id: 'f-nbk-4', movieTitle: 'Narasimha Naidu', releaseYear: 2001, role: 'Narasimha Naidu', director: 'B. Gopal', verdict: 'Industry Hit', awards: ['Nandi Award for Best Actor'] },
      { id: 'f-nbk-5', movieTitle: 'Akhanda', releaseYear: 2021, role: 'Akhanda Rudra Sikandar Aghora / Murali Krishna', director: 'Boyapati Srinu', verdict: 'Blockbuster' }
    ],
    galleryImages: [],
    verifiedSource: 'Basavatarakam Indo-American Archives & Telugu Cine Guild',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-nagarjuna',
    name: 'Akkineni Nagarjuna',
    teluguName: 'అక్కినేని నాగార్జున',
    titleHonorific: 'King',
    generation: 'senior',
    debutYear: 1986,
    debutFilm: 'Vikram',
    portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
    biography: 'Akkineni Nagarjuna (born 29 August 1959) is an Indian actor, producer, television presenter, and entrepreneur. Known for his suave screen presence and experimental storytelling, he pioneered modern new-age cinematic aesthetics in Indian cinema with Ram Gopal Varma\'s pathbreaking Shiva (1989), which introduced steadycam and innovative sound design to South India.',
    earlyLife: 'The son of veteran actor ANR, Nagarjuna graduated with a Bachelor of Science in Mechanical Engineering from Eastern Michigan University, Ypsilanti, Michigan.',
    careerMilestones: [
      'Shiva (1989) revolutionized sound design, realistic fight choreography, and visual framing across Indian cinema.',
      'Geethanjali (1989) directed by Mani Ratnam won the National Film Award for Best Popular Film Providing Wholesome Entertainment.',
      'Annamayya (1997) won him the National Film Award – Special Mention and established him as a premier devotional star.',
      'Nineteen Nandi Awards and three Filmfare Awards South throughout his illustrious career.'
    ],
    notablePerformances: [
      'Shiva in Shiva (1989)',
      'Prakash in Geethanjali (1989)',
      'Annamacharya in Annamayya (1997)',
      'Major Padmapani Acharya in LOC Kargil (2003)',
      'Vikramaditya in Oopiri (2016)'
    ],
    awards: [
      'National Film Award – Special Mention (Actor) - Annamayya (1997)',
      'National Film Award for Best Feature Film in Telugu (Producer) - Ninne Pelladata (1996)',
      'Filmfare Award for Best Actor – Telugu - Shiva (1989)',
      'Nandi Award for Best Actor (Multiple)'
    ],
    collaborations: [
      'Ram Gopal Varma (Director: Shiva, Antham, Govinda Govinda)',
      'K. Raghavendra Rao (Director: Annamayya, Sri Ramadasu, Shirdi Sai)',
      'Mani Ratnam (Director: Geethanjali)'
    ],
    upcomingProjects: ['Kubera (Directed by Sekhar Kammula)'],
    filmography: [
      { id: 'f-nag-1', movieTitle: 'Vikram', releaseYear: 1986, role: 'Vikram (Debut)', director: 'V. Madhusudhana Rao', verdict: 'Hit' },
      { id: 'f-nag-2', movieId: 'movie-shiva', movieTitle: 'Shiva', releaseYear: 1989, role: 'Shiva', director: 'Ram Gopal Varma', verdict: 'Industry Hit', awards: ['Filmfare Best Actor', 'Nandi Best Director'] },
      { id: 'f-nag-3', movieTitle: 'Geethanjali', releaseYear: 1989, role: 'Prakash', director: 'Mani Ratnam', verdict: 'Classic', awards: ['National Film Award'] },
      { id: 'f-nag-4', movieTitle: 'Annamayya', releaseYear: 1997, role: 'Annamacharya', director: 'K. Raghavendra Rao', verdict: 'Industry Hit', awards: ['National Special Mention'] },
      { id: 'f-nag-5', movieTitle: 'Manam', releaseYear: 2014, role: 'Nageswara Rao / Mahendra', director: 'Vikram Kumar', verdict: 'Super Hit' }
    ],
    galleryImages: [],
    verifiedSource: 'Annapurna Studios & National Film Archives',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-venkatesh',
    name: 'Daggubati Venkatesh',
    teluguName: 'దగ్గుబాటి వెంకటేష్',
    titleHonorific: 'Victory',
    generation: 'senior',
    debutYear: 1986,
    debutFilm: 'Kaliyuga Pandavulu',
    portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    biography: 'Daggubati Venkatesh (born 13 December 1960), fondly called "Victory Venkatesh", is an Indian actor who has starred in over 70 films with one of the highest success ratios in Indian cinema. The son of legendary producer D. Ramanaidu, Venkatesh won seven Nandi Awards for Best Actor, excelling across family drama, emotional tragedy, intense cop thrillers, and family comedy.',
    earlyLife: 'Born in Karamchedu, Prakasam District, Venkatesh graduated with an MBA from the Middlebury Institute of International Studies at Monterey, California.',
    careerMilestones: [
      'Swarnakamalam (1988) directed by K. Viswanath screened at the International Film Festival of India.',
      'Bobbili Raja (1990) and Chanti (1992) established him as the beloved family hero across Andhra Pradesh and Telangana.',
      'Kshana Kshanam (1991) directed by Ram Gopal Varma set new standards in road-movie action thriller filmmaking.',
      'Won seven Nandi Awards for Best Actor, more than any other contemporary actor in the state\'s history.'
    ],
    notablePerformances: [
      'Chanti in Chanti (1992)',
      'Chandram in Swarnakamalam (1988)',
      'Ganesh in Ganesh (1998)',
      'DCP Raghavan in Gharshana (2004)',
      'Rambabu in Drushyam (2014)'
    ],
    awards: [
      'Nandi Award for Best Actor (7 times: Swarnakamalam, Dharma Chakram, Ganesh, Kalisundam Raa, etc.)',
      'Filmfare Award for Best Actor – Telugu (5 times)'
    ],
    collaborations: [
      'K. Viswanath (Director: Swarnakamalam)',
      'Ram Gopal Varma (Director: Kshana Kshanam)',
      'Gautham Vasudev Menon (Director: Gharshana)'
    ],
    upcomingProjects: ['Sankranthiki Vasthunam (Directed by Anil Ravipudi)'],
    filmography: [
      { id: 'f-ven-1', movieTitle: 'Kaliyuga Pandavulu', releaseYear: 1986, role: 'Vijay (Debut)', director: 'K. Raghavendra Rao', verdict: 'Hit' },
      { id: 'f-ven-2', movieTitle: 'Swarnakamalam', releaseYear: 1988, role: 'Chandram', director: 'K. Viswanath', verdict: 'Classic', awards: ['Nandi Award for Best Actor'] },
      { id: 'f-ven-3', movieTitle: 'Bobbili Raja', releaseYear: 1990, role: 'Raja', director: 'B. Gopal', verdict: 'Industry Hit' },
      { id: 'f-ven-4', movieTitle: 'Chanti', releaseYear: 1992, role: 'Chanti', director: 'Ravi Raja Pinisetty', verdict: 'Industry Hit' },
      { id: 'f-ven-5', movieTitle: 'Drushyam', releaseYear: 2014, role: 'Rambabu', director: 'Sripriya', verdict: 'Super Hit' }
    ],
    galleryImages: [],
    verifiedSource: 'Suresh Productions Archives',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-pawankalyan',
    name: 'Pawan Kalyan',
    teluguName: 'పవన్ కళ్యాణ్',
    titleHonorific: 'Power Star',
    generation: 'established',
    debutYear: 1996,
    debutFilm: 'Akkada Ammayi Ikkada Abbayi',
    portraitUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&auto=format&fit=crop&q=80',
    biography: 'Konidela Pawan Kalyan (born 2 September 1971) is an Indian actor, martial artist, filmmaker, and politician who serves as Deputy Chief Minister of Andhra Pradesh. With an unmatched cult following, he is recognized for introducing modern youth culture, martial arts choreography, and nuanced swagger into mainstream Telugu cinema with back-to-back trendsetters like Tholi Prema, Thammudu, Badri, and Kushi.',
    earlyLife: 'Born in Bapatla, Andhra Pradesh, the younger brother of Chiranjeevi, Kalyan holds a black belt in Karate and studied stunt design in Japan and the Shaolin disciplines.',
    careerMilestones: [
      'Tholi Prema (1998) won the National Film Award for Best Feature Film in Telugu.',
      'Directed, wrote, and choreographed Johnny (2003), showcasing realistic mixed martial arts fighting techniques.',
      'Gabbar Singh (2012) ended a decade-long wait, becoming one of the highest-grossing Telugu films of all time.',
      'Attarintiki Daredi (2013) emerged as the highest-grossing Telugu film in history at the time of its release.'
    ],
    notablePerformances: [
      'Balu in Tholi Prema (1998)',
      'Subrahmanyam (Subbu) in Thammudu (1999)',
      'Siddhartha (Siddhu) in Kushi (2001)',
      'Venkatratnam Naidu in Gabbar Singh (2012)',
      'Gowtham Nanda in Attarintiki Daredi (2013)'
    ],
    awards: [
      'Filmfare Award for Best Actor – Telugu - Gabbar Singh (2012)',
      'SIIMA Award for Best Actor – Telugu - Attarintiki Daredi (2013)',
      'National Film Award – Best Telugu Feature (Actor in lead role for Tholi Prema, 1998)'
    ],
    collaborations: [
      'Trivikram Srinivas (Director & Writer: Jalsa, Attarintiki Daredi)',
      'A. Karunakaran (Director: Tholi Prema)',
      'S. J. Suryah (Director: Kushi)'
    ],
    upcomingProjects: ['Hari Hara Veera Mallu', 'OG (They Call Him OG)', 'Ustaad Bhagat Singh'],
    filmography: [
      { id: 'f-pk-1', movieTitle: 'Akkada Ammayi Ikkada Abbayi', releaseYear: 1996, role: 'Kalyan (Debut)', director: 'E. V. V. Satyanarayana', verdict: 'Hit' },
      { id: 'f-pk-2', movieTitle: 'Tholi Prema', releaseYear: 1998, role: 'Balu', director: 'A. Karunakaran', verdict: 'Classic', awards: ['National Film Award'] },
      { id: 'f-pk-3', movieTitle: 'Kushi', releaseYear: 2001, role: 'Siddhartha Roy', director: 'S. J. Suryah', verdict: 'Industry Hit' },
      { id: 'f-pk-4', movieTitle: 'Gabbar Singh', releaseYear: 2012, role: 'Venkatratnam Naidu (Gabbar Singh)', director: 'Harish Shankar', verdict: 'Industry Hit', awards: ['Filmfare Best Actor'] },
      { id: 'f-pk-5', movieTitle: 'Attarintiki Daredi', releaseYear: 2013, role: 'Gowtham Nanda / Siddhu', director: 'Trivikram Srinivas', verdict: 'Industry Hit' }
    ],
    galleryImages: [],
    verifiedSource: 'Pawan Kalyan Creative Works & Film Guild',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-maheshbabu',
    name: 'Mahesh Babu',
    teluguName: 'ఘట్టమనేని మహేష్ బాబు',
    titleHonorific: 'Superstar',
    generation: 'established',
    debutYear: 1999,
    debutFilm: 'Raja Kumarudu',
    portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80',
    biography: 'Ghattamaneni Mahesh Babu (born 9 August 1975) is one of the biggest stars in Indian cinema. The younger son of veteran actor Superstar Krishna, Mahesh entered films as a child artist before debuting as a lead in Raja Kumarudu (1999). Known for his understated, intense screen presence and philanthropic work adopting villages in Andhra Pradesh and Telangana, he has won eight Nandi Awards and five Filmfare Awards South.',
    earlyLife: 'Born in Madras, Mahesh attended St. Bede\'s Anglo Indian Higher Secondary School and earned a Bachelor of Commerce from Loyola College, Chennai.',
    careerMilestones: [
      'Murari (2001) established him as a premier acting talent under Krishna Vamsi\'s direction.',
      'Okkadu (2003) directed by Gunasekhar set unprecedented box-office benchmarks, remade in multiple Indian languages.',
      'Pokiri (2006) directed by Puri Jagannadh became an all-time industry hit, screened at the IIFA Film Festival in Dubai.',
      'Dookudu (2011) and Srimanthudu (2015) broke overseas box office records for Telugu cinema.',
      'Adopted two villages (Burripalem in AP and Siddhapuram in Telangana), supporting pediatric heart surgeries for over 1,000 children.'
    ],
    notablePerformances: [
      'Ajay Varma in Okkadu (2003)',
      'Pandu / Krishna Manohar IPS in Pokiri (2006)',
      'Gautham in 1: Nenokkadine (2014 - Cult Psychological Thriller)',
      'Harsha Vardhan in Srimanthudu (2015)',
      'Bharat Ram in Bharat Ane Nenu (2018)'
    ],
    awards: [
      'Filmfare Award for Best Actor – Telugu (5 times: Okkadu, Pokiri, Dookudu, Seethamma Vakitlo Sirimalle Chettu, Srimanthudu)',
      'Nandi Award for Best Actor (4 times)'
    ],
    collaborations: [
      'Puri Jagannadh (Director: Pokiri, Businessman)',
      'Trivikram Srinivas (Director: Athadu, Khaleja, Guntur Kaaram)',
      'Sukumar (Director: 1: Nenokkadine)'
    ],
    upcomingProjects: ['SSMB29 (Directed by S. S. Rajamouli - Global Globe-Trotting Adventure)'],
    filmography: [
      { id: 'f-mb-1', movieTitle: 'Raja Kumarudu', releaseYear: 1999, role: 'Raj Kumar (Lead Debut)', director: 'K. Raghavendra Rao', verdict: 'Super Hit', awards: ['Nandi Best Male Debut'] },
      { id: 'f-mb-2', movieTitle: 'Murari', releaseYear: 2001, role: 'Murari', director: 'Krishna Vamsi', verdict: 'Blockbuster' },
      { id: 'f-mb-3', movieTitle: 'Okkadu', releaseYear: 2003, role: 'Ajay Varma', director: 'Gunasekhar', verdict: 'Industry Hit', awards: ['Filmfare Best Actor'] },
      { id: 'f-mb-4', movieId: 'movie-pokiri', movieTitle: 'Pokiri', releaseYear: 2006, role: 'Pandu / Krishna Manohar IPS', director: 'Puri Jagannadh', verdict: 'Industry Hit', awards: ['Filmfare Best Actor'] },
      { id: 'f-mb-5', movieTitle: 'Srimanthudu', releaseYear: 2015, role: 'Harsha Vardhan', director: 'Koratala Siva', verdict: 'Blockbuster', awards: ['Filmfare Best Actor'] }
    ],
    galleryImages: [],
    verifiedSource: 'GMB Entertainment & Telugu Film Producers Council',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-prabhas',
    name: 'Prabhas',
    teluguName: 'ప్రభాస్',
    titleHonorific: 'Rebel Star / Pan-India Pioneer',
    generation: 'established',
    debutYear: 2002,
    debutFilm: 'Eeswar',
    portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    biography: 'Uppalapati Venkata Suryanarayana Prabhas Raju (born 23 October 1979), mononymously Prabhas, is the spearhead of the modern Pan-India cinematic movement. With S. S. Rajamouli\'s monumental Baahubali: The Beginning (2015) and Baahubali: The Conclusion (2017), he became the first South Indian actor to achieve massive pan-Indian and worldwide stardom, later headlining global spectacle films like Salaar and Kalki 2898 AD.',
    earlyLife: 'Born in Madras to film producer U. Suryanarayana Raju and nephew of veteran actor Krishnam Raju, Prabhas attended DNR School in Bhimavaram and earned a B.Tech from Sri Chaitanya College, Hyderabad.',
    careerMilestones: [
      'Varsham (2004) and Chatrapathi (2005) established him as a premier mass-action hero.',
      'Dedicated five uninterrupted years exclusively to the Baahubali franchise (2012–2017), which grossed over ₹2,400 crore worldwide.',
      'Baahubali 2: The Conclusion became the highest-grossing Indian film in history domestically.',
      'First South Indian actor to receive a wax statue at Madame Tussauds, London (2017).',
      'Kalki 2898 AD (2024) crossed ₹1,200 crore globally, solidifying his status as India\'s biggest box-office powerhouse.'
    ],
    notablePerformances: [
      'Shivudu (Mahendra Baahubali) & Amarendra Baahubali in Baahubali (2015, 2017)',
      'Shivaji in Chatrapathi (2005)',
      'Bhairava in Kalki 2898 AD (2024)',
      'Deva in Salaar: Part 1 – Ceasefire (2023)'
    ],
    awards: [
      'Nandi Award for Best Actor - Mirchi (2013)',
      'SIIMA Award for Best Actor – Telugu - Baahubali 2: The Conclusion (2017)',
      'Filmfare South Nominations (Multiple)'
    ],
    collaborations: [
      'S. S. Rajamouli (Director: Chatrapathi, Baahubali franchise)',
      'Prashanth Neel (Director: Salaar)',
      'Nag Ashwin (Director: Kalki 2898 AD)'
    ],
    upcomingProjects: ['The Raja Saab', 'Salaar: Part 2 – Shouryaanga Parvam', 'Spirit (Directed by Sandeep Reddy Vanga)'],
    filmography: [
      { id: 'f-pr-1', movieTitle: 'Eeswar', releaseYear: 2002, role: 'Eeswar (Debut)', director: 'Jayanth C. Paranjee', verdict: 'Hit' },
      { id: 'f-pr-2', movieTitle: 'Varsham', releaseYear: 2004, role: 'Venkat', director: 'Sobhan', verdict: 'Blockbuster' },
      { id: 'f-pr-3', movieTitle: 'Chatrapathi', releaseYear: 2005, role: 'Shivaji / Chatrapathi', director: 'S. S. Rajamouli', verdict: 'Industry Hit' },
      { id: 'f-pr-4', movieId: 'movie-baahubali1', movieTitle: 'Baahubali: The Beginning', releaseYear: 2015, role: 'Shivudu / Amarendra Baahubali', director: 'S. S. Rajamouli', verdict: 'Industry Hit', awards: ['National Film Award for Best Feature Film'] },
      { id: 'f-pr-5', movieId: 'movie-baahubali2', movieTitle: 'Baahubali: The Conclusion', releaseYear: 2017, role: 'Amarendra Baahubali / Mahendra Baahubali', director: 'S. S. Rajamouli', verdict: 'Industry Hit', awards: ['3 National Film Awards'] },
      { id: 'f-pr-6', movieId: 'movie-kalki', movieTitle: 'Kalki 2898 AD', releaseYear: 2024, role: 'Bhairava / Karna', director: 'Nag Ashwin', verdict: 'Industry Hit' }
    ],
    galleryImages: [],
    verifiedSource: 'Vyjayanthi Movies & Arka Media Works Archives',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-ntrjr',
    name: 'Jr. NTR',
    teluguName: 'నందమూరి తారక రామారావు జూనియర్',
    titleHonorific: 'Man of Masses',
    generation: 'established',
    debutYear: 2001,
    debutFilm: 'Ninnu Choodalani',
    portraitUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&auto=format&fit=crop&q=80',
    biography: 'Nandamuri Taraka Rama Rao Jr. (born 20 May 1983), widely known as Jr. NTR or Tarak, is celebrated for his electrifying dialogue delivery, unmatched classical Kuchipudi dance virtuosity, and emotional intensity. Grandson of legendary NTR, he achieved superstardom at the tender age of 20 with Simhadri (2003) and achieved global acclaim portraying Komaram Bheem in S. S. Rajamouli\'s Oscar-winning global blockbuster RRR (2022).',
    earlyLife: 'Born in Hyderabad to Nandamuri Harikrishna and Shalini, Tarak trained as a classical Kuchipudi dancer in childhood and won the National Film Award for Best Children\'s Film starring as Lord Rama in Ramayanam (1996) at age 12.',
    careerMilestones: [
      'Aadi (2002) and Simhadri (2003) broke all-time Telugu industry box office records when he was just 19–20 years old.',
      'Portrayed tribal revolutionary Komaram Bheem in RRR (2022); his performance and "Naatu Naatu" dance choreography took the world by storm.',
      'Invited to join the prestigious Academy of Motion Picture Arts and Sciences (AMPAS) in the Actors branch in 2023.',
      'Devara: Part 1 (2024) crossed ₹500 crore at the box office.'
    ],
    notablePerformances: [
      'Komaram Bheem in RRR (2022)',
      'Simhadri in Simhadri (2003)',
      'Jai, Lava, and Kusa (Triple Role) in Jai Lava Kusa (2017)',
      'Abhiram in Nannaku Prematho (2016)',
      'Devara / Vara in Devara: Part 1 (2024)'
    ],
    awards: [
      'Filmfare Award for Best Actor – Telugu - Yamadonga (2007)',
      'Filmfare Award for Best Actor – Telugu - Nannaku Prematho (2016)',
      'Nandi Award for Best Actor - Aadi (2002)',
      'Nandi Award for Best Actor - Nannaku Prematho (2016)'
    ],
    collaborations: [
      'S. S. Rajamouli (Director: Student No. 1, Simhadri, Yamadonga, RRR)',
      'Koratala Siva (Director: Janatha Garage, Devara)',
      'Sukumar (Director: Nannaku Prematho)'
    ],
    upcomingProjects: ['War 2 (YRF Spy Universe)', 'NTR31 (Directed by Prashanth Neel)'],
    filmography: [
      { id: 'f-jntr-1', movieTitle: 'Ramayanam', releaseYear: 1996, role: 'Lord Rama (Child Artist)', director: 'Gunasekhar', verdict: 'Classic', awards: ['National Film Award'] },
      { id: 'f-jntr-2', movieTitle: 'Simhadri', releaseYear: 2003, role: 'Simhadri', director: 'S. S. Rajamouli', verdict: 'Industry Hit' },
      { id: 'f-jntr-3', movieTitle: 'Yamadonga', releaseYear: 2007, role: 'Raja', director: 'S. S. Rajamouli', verdict: 'Blockbuster', awards: ['Filmfare Best Actor'] },
      { id: 'f-jntr-4', movieTitle: 'Janatha Garage', releaseYear: 2016, role: 'Anand', director: 'Koratala Siva', verdict: 'Blockbuster' },
      { id: 'f-jntr-5', movieId: 'movie-rrr', movieTitle: 'RRR', releaseYear: 2022, role: 'Komaram Bheem', director: 'S. S. Rajamouli', verdict: 'Industry Hit', awards: ['Academy Award for Best Original Song', 'Golden Globe Award'] }
    ],
    galleryImages: [],
    verifiedSource: 'NTR Arts & AMPAS Member Directory',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-alluarjun',
    name: 'Allu Arjun',
    teluguName: 'అల్లు అర్జున్',
    titleHonorific: 'Icon Star',
    generation: 'established',
    debutYear: 2003,
    debutFilm: 'Gangotri',
    portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    biography: 'Allu Arjun (born 8 April 1982), renowned as the "Icon Star", is the first actor from Telugu cinema to win the prestigious National Film Award for Best Actor in its 69-year history, won for his volcanic performance in Pushpa: The Rise (2021). Celebrated as one of Indian cinema\'s finest dancers and style icons, he created massive fan movements across South India, North India, and international territories.',
    earlyLife: 'Born in Madras to renowned producer Allu Aravind and grandson of legendary comedian Allu Ramalingaiah, Arjun studied at St. Patrick\'s College, Chennai, and completed courses in animation and graphic design.',
    careerMilestones: [
      'Arya (2004) directed by Sukumar became a sensational trendsetter, sparking a cult fanbase across South India.',
      'First Telugu actor to win the National Film Award for Best Actor (69th National Film Awards, 2023 for Pushpa: The Rise).',
      'Pushpa: The Rise (2021) became the highest-grossing Indian film of 2021, turning into a nationwide socio-cultural phenomenon.',
      'Pushpa 2: The Rule (2024) set historic pre-release and opening day records across the country.'
    ],
    notablePerformances: [
      'Pushpa Raj in Pushpa: The Rise (2021)',
      'Arya in Arya (2004)',
      'Cable Raju in Vedam (2010)',
      'Gona Ganna Reddy in Rudhramadevi (2015)',
      'Bantu in Ala Vaikunthapurramuloo (2020)'
    ],
    awards: [
      'National Film Award for Best Actor - Pushpa: The Rise (2021)',
      'Filmfare Award for Best Actor – Telugu (6 times)',
      'Nandi Award (Multiple Special Jury & Best Actor)'
    ],
    collaborations: [
      'Sukumar (Director: Arya, Arya 2, Pushpa franchise)',
      'Trivikram Srinivas (Director: Julayi, S/O Satyamurthy, Ala Vaikunthapurramuloo)'
    ],
    upcomingProjects: ['Pushpa 2: The Rule', 'AA22 (Directed by Trivikram Srinivas)'],
    filmography: [
      { id: 'f-aa-1', movieTitle: 'Gangotri', releaseYear: 2003, role: 'Simhadri (Debut)', director: 'K. Raghavendra Rao', verdict: 'Hit' },
      { id: 'f-aa-2', movieTitle: 'Arya', releaseYear: 2004, role: 'Arya', director: 'Sukumar', verdict: 'Industry Hit', awards: ['Nandi Special Jury Award'] },
      { id: 'f-aa-3', movieTitle: 'Vedam', releaseYear: 2010, role: 'Anand "Cable" Raju', director: 'Krish Jagarlamudi', verdict: 'Critically Acclaimed', awards: ['Filmfare Best Actor'] },
      { id: 'f-aa-4', movieTitle: 'Ala Vaikunthapurramuloo', releaseYear: 2020, role: 'Bantu', director: 'Trivikram Srinivas', verdict: 'Industry Hit', awards: ['Filmfare Best Actor'] },
      { id: 'f-aa-5', movieId: 'movie-pushpa', movieTitle: 'Pushpa: The Rise', releaseYear: 2021, role: 'Pushpa Raj', director: 'Sukumar', verdict: 'Industry Hit', awards: ['National Film Award for Best Actor'] }
    ],
    galleryImages: [],
    verifiedSource: 'Mythri Movie Makers & Directorate of Film Festivals',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-ramcharan',
    name: 'Ram Charan',
    teluguName: 'రామ్ చరణ్',
    titleHonorific: 'Global Star',
    generation: 'established',
    debutYear: 2007,
    debutFilm: 'Chirutha',
    portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80',
    biography: 'Konidela Ram Charan (born 27 March 1985), known as "Global Star", is an Indian actor, film producer, and entrepreneur. Son of Megastar Chiranjeevi, Charan stunned the industry in his second film Magadheera (2009), which redefined Telugu cinema scale. His portrayal of Alluri Sitarama Raju in RRR (2022) garnered universal critical acclaim, earning nominations at international critics awards, including the Hollywood Critics Association.',
    earlyLife: 'Born in Madras, Charan trained in acting at Kishore Namit Kapoor\'s Acting School in Mumbai and learned horse riding and equestrian disciplines in Hyderabad.',
    careerMilestones: [
      'Magadheera (2009) directed by S. S. Rajamouli became the highest-grossing Telugu film ever at its time, running for over 1,000 days.',
      'Rangasthalam (2018) directed by Sukumar received unanimous critical acclaim for his raw performance as hearing-impaired Chitti Babu.',
      'RRR (2022) won an Academy Award and grossed over ₹1,300 crore globally.',
      'Elected to the Academy of Motion Picture Arts and Sciences (AMPAS) in the Actors branch in 2023.',
      'Co-founded Konidela Production Company and TruJet airline.'
    ],
    notablePerformances: [
      'Kala Bhairava & Harsha in Magadheera (2009)',
      'Chelluboina Chitti Babu in Rangasthalam (2018)',
      'Alluri Sitarama Raju in RRR (2022)',
      'Dhruva in Dhruva (2016)'
    ],
    awards: [
      'Filmfare Award for Best Actor – Telugu - Magadheera (2009)',
      'Filmfare Award for Best Actor – Telugu - Rangasthalam (2018)',
      'Nandi Special Jury Award'
    ],
    collaborations: [
      'S. S. Rajamouli (Director: Magadheera, RRR)',
      'Sukumar (Director: Rangasthalam)',
      'S. Shankar (Director: Game Changer)'
    ],
    upcomingProjects: ['Game Changer (Directed by S. Shankar)', 'RC16 (Directed by Buchi Babu Sana)'],
    filmography: [
      { id: 'f-rc-1', movieTitle: 'Chirutha', releaseYear: 2007, role: 'Charan (Debut)', director: 'Puri Jagannadh', verdict: 'Super Hit', awards: ['Filmfare Best Male Debut'] },
      { id: 'f-rc-2', movieId: 'movie-magadheera', movieTitle: 'Magadheera', releaseYear: 2009, role: 'Kala Bhairava / Harsha', director: 'S. S. Rajamouli', verdict: 'Industry Hit', awards: ['Filmfare Best Actor'] },
      { id: 'f-rc-3', movieTitle: 'Dhruva', releaseYear: 2016, role: 'Dhruva IPS', director: 'Surender Reddy', verdict: 'Super Hit' },
      { id: 'f-rc-4', movieTitle: 'Rangasthalam', releaseYear: 2018, role: 'Chelluboina Chitti Babu', director: 'Sukumar', verdict: 'Industry Hit', awards: ['Filmfare Best Actor'] },
      { id: 'f-rc-5', movieId: 'movie-rrr', movieTitle: 'RRR', releaseYear: 2022, role: 'Alluri Sitarama Raju', director: 'S. S. Rajamouli', verdict: 'Industry Hit', awards: ['Academy Award', 'Golden Globe'] }
    ],
    galleryImages: [],
    verifiedSource: 'Konidela Production Company & AMPAS',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-nani',
    name: 'Nani',
    teluguName: 'నాని',
    titleHonorific: 'Natural Star',
    generation: 'contemporary',
    debutYear: 2008,
    debutFilm: 'Ashta Chamma',
    portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    biography: 'Ghanta Naveen Babu (born 24 February 1984), known mononymously as Nani, is widely acclaimed as the "Natural Star" for his effortless realism, nuanced vulnerability, and versatile scripts. Starting his film career as an assistant director under Srinu Vaitla and Bapu, Nani climbed from an outsider to one of the most reliable and beloved leading men in Telugu cinema.',
    earlyLife: 'Born and raised in Hyderabad, Nani worked as a radio jockey for World Space Satellite Radio before assisting veteran directors.',
    careerMilestones: [
      'Eega (2012) directed by S. S. Rajamouli showcased groundbreaking VFX and won two National Film Awards.',
      'Bhale Bhale Magadivoy (2015) established him as the king of family entertainment.',
      'Jersey (2019) won two National Film Awards, regarded as one of the finest sports dramas in Indian cinema history.',
      'Dasara (2023) crossed ₹100 crore, earning him the Filmfare Award for Best Actor – Telugu.',
      'Founded Wall Poster Cinema, producing pathbreaking indie films like Awe! (2018) and HIT franchise.'
    ],
    notablePerformances: [
      'Arjun in Jersey (2019)',
      'Dharani in Dasara (2023)',
      'Nani in Eega (2012)',
      'Lucky in Bhale Bhale Magadivoy (2015)',
      'Viraj in Hi Nanna (2023)'
    ],
    awards: [
      'Filmfare Award for Best Actor – Telugu - Dasara (2023)',
      'Filmfare Critics Award for Best Actor – South - Bhale Bhale Magadivoy (2015)',
      'Nandi Special Jury Award - Yeto Vellipoyindhi Manasu (2012)'
    ],
    collaborations: [
      'Gowtam Tinnanuri (Director: Jersey)',
      'Mohana Krishna Indraganti (Director: Ashta Chamma, Gentleman, V)',
      'S. S. Rajamouli (Director: Eega)'
    ],
    upcomingProjects: ['Saripodhaa Sanivaaram', 'HIT: The 3rd Case'],
    filmography: [
      { id: 'f-na-1', movieTitle: 'Ashta Chamma', releaseYear: 2008, role: 'Mahesh (Debut)', director: 'Mohana Krishna Indraganti', verdict: 'Super Hit' },
      { id: 'f-na-2', movieId: 'movie-eega', movieTitle: 'Eega', releaseYear: 2012, role: 'Nani', director: 'S. S. Rajamouli', verdict: 'Industry Hit', awards: ['National Film Award for Best Visual Effects'] },
      { id: 'f-na-3', movieTitle: 'Bhale Bhale Magadivoy', releaseYear: 2015, role: 'Lucky', director: 'Maruthi', verdict: 'Blockbuster' },
      { id: 'f-na-4', movieId: 'movie-jersey', movieTitle: 'Jersey', releaseYear: 2019, role: 'Arjun', director: 'Gowtam Tinnanuri', verdict: 'Classic', awards: ['National Film Award for Best Feature Film in Telugu'] },
      { id: 'f-na-5', movieTitle: 'Dasara', releaseYear: 2023, role: 'Dharani', director: 'Srikanth Odela', verdict: 'Blockbuster', awards: ['Filmfare Best Actor'] }
    ],
    galleryImages: [],
    verifiedSource: 'Wall Poster Cinema & Telugu Cine Archive',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-vijaydeverakonda',
    name: 'Vijay Deverakonda',
    teluguName: 'విజయ్ దేవరకొండ',
    titleHonorific: 'Rowdy',
    generation: 'contemporary',
    debutYear: 2011,
    debutFilm: 'Nuvvila',
    portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80',
    biography: 'Vijay Deverakonda (born 9 May 1989) is an Indian actor and producer who became a cultural sensation with the blockbuster romantic drama Arjun Reddy (2017). His intense, unfiltered screen persona sparked widespread discussion and reshaped contemporary Telugu cinema character tropes.',
    earlyLife: 'Born in Achampet, Nagarkurnool district, Vijay attended Sathya Sai Higher Secondary School in Puttaparthi and graduated with a B.Com from Badruka College of Commerce, Hyderabad.',
    careerMilestones: [
      'Pelli Choopulu (2016) won the National Film Award for Best Feature Film in Telugu.',
      'Arjun Reddy (2017) won him the Filmfare Award for Best Actor – Telugu, creating a cult pan-Indian phenomenon.',
      'Geetha Govindam (2018) grossed over ₹130 crore on a modest budget, proving his mass and family appeal.'
    ],
    notablePerformances: [
      'Dr. Arjun Reddy Deshmukh in Arjun Reddy (2017)',
      'Prashanth in Pelli Choopulu (2016)',
      'Govind in Geetha Govindam (2018)',
      'Vijay Anthony in Mahanati (2018)'
    ],
    awards: [
      'Filmfare Award for Best Actor – Telugu - Arjun Reddy (2017)',
      'Nandi Special Jury Award - Yevade Subramanyam (2015)',
      'SIIMA Best Actor'
    ],
    collaborations: [
      'Sandeep Reddy Vanga (Director: Arjun Reddy)',
      'Tharun Bhascker (Director: Pelli Choopulu)',
      'Parasuram (Director: Geetha Govindam)'
    ],
    upcomingProjects: ['VD12 (Directed by Gowtam Tinnanuri)'],
    filmography: [
      { id: 'f-vd-1', movieTitle: 'Pelli Choopulu', releaseYear: 2016, role: 'Prashanth', director: 'Tharun Bhascker', verdict: 'Super Hit', awards: ['National Film Award'] },
      { id: 'f-vd-2', movieId: 'movie-arjunreddy', movieTitle: 'Arjun Reddy', releaseYear: 2017, role: 'Dr. Arjun Reddy Deshmukh', director: 'Sandeep Reddy Vanga', verdict: 'Industry Hit', awards: ['Filmfare Best Actor'] },
      { id: 'f-vd-3', movieTitle: 'Geetha Govindam', releaseYear: 2018, role: 'Vijay Govind', director: 'Parasuram', verdict: 'Blockbuster' }
    ],
    galleryImages: [],
    verifiedSource: 'King of the Hill Entertainment',
    lastVerifiedDate: '2026-10-15'
  },
  {
    id: 'actor-adivisesh',
    name: 'Adivi Sesh',
    teluguName: 'అడివి శేష్',
    generation: 'contemporary',
    debutYear: 2010,
    debutFilm: 'Karma',
    portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80',
    biography: 'Adivi Sesh Sunny Chandra (born 17 December 1985) is an Indian actor, director, and screenwriter who pioneered modern suspense, espionage, and procedural thrillers in Telugu cinema. Writing his own scripts with meticulous pre-production and storyboarding, he has established an unbroken streak of critically acclaimed blockbusters including Kshanam, Goodachari, Evaru, and Major.',
    earlyLife: 'Raised in Berkeley, California, Sesh graduated in film direction from San Francisco State University before moving to Hyderabad to make films.',
    careerMilestones: [
      'Kshanam (2016) won the Nandi Award for Best Screenplay Writer and was remade in multiple Indian languages (including Baaghi 2).',
      'Goodachari (2018) revitalized the classic Telugu spy thriller genre with high-octane narrative and visual flair.',
      'Major (2022), a biographical drama on 26/11 martyr Major Sandeep Unnikrishnan, won pan-Indian praise and a National Film Award nomination.'
    ],
    notablePerformances: [
      'Major Sandeep Unnikrishnan in Major (2022)',
      'Gopi / Agent 116 in Goodachari (2018)',
      'Rishi in Kshanam (2016)',
      'KD in HIT: The Second Case (2022)'
    ],
    awards: [
      'Nandi Award for Best Screenplay Writer - Kshanam (2016)',
      'IIFA Utsavam Award for Best Screenplay',
      'SIIMA Special Jury Award'
    ],
    collaborations: [
      'Sashi Kiran Tikka (Director: Goodachari, Major)',
      'Ravikanth Perepu (Director: Kshanam)',
      'Sailesh Kolanu (Director: HIT: The Second Case)'
    ],
    upcomingProjects: ['G2 (Goodachari 2)', 'Dacoit'],
    filmography: [
      { id: 'f-as-1', movieTitle: 'Kshanam', releaseYear: 2016, role: 'Rishi', director: 'Ravikanth Perepu', verdict: 'Super Hit', awards: ['Nandi Award for Best Screenplay'] },
      { id: 'f-as-2', movieId: 'movie-goodachari', movieTitle: 'Goodachari', releaseYear: 2018, role: 'M. Gopi / Agent 116', director: 'Sashi Kiran Tikka', verdict: 'Blockbuster' },
      { id: 'f-as-3', movieTitle: 'Major', releaseYear: 2022, role: 'Major Sandeep Unnikrishnan', director: 'Sashi Kiran Tikka', verdict: 'Blockbuster' }
    ],
    galleryImages: [],
    verifiedSource: 'A+S Movies & Sesh Screenplay Archives',
    lastVerifiedDate: '2026-10-15'
  }
];

export const INITIAL_MOVIES: Movie[] = [
  {
    id: 'movie-mayabazar',
    title: 'Mayabazar',
    teluguTitle: 'మాయాబజార్',
    releaseYear: 1957,
    releaseDate: '1957-03-27',
    genre: ['Mythological', 'Fantasy', 'Epic'],
    director: 'K. V. Reddy',
    producer: 'B. Nagi Reddy & Aluri Chakrapani',
    musicDirector: 'S. Rajeswara Rao & Ghantasala',
    cinematographer: 'Marcus Bartley',
    editor: 'C. P. Jambulingam',
    productionCompany: 'Vijaya Vauhini Studios',
    synopsis: 'A timeless mythological epic based on the folk tale Sasirekha Parinayam from the Mahabharata. When Duryodhana schemes to marry off Balarama\'s daughter Sasirekha to his nephew Lakshmana Kumara, Lord Krishna and Ghatotkacha use optical illusions, magic, and supreme wit to reunite Sasirekha with Abhimanyu.',
    leadCast: [
      { actorId: 'actor-ntr', actorName: 'N. T. Rama Rao', role: 'Lord Krishna' },
      { actorId: 'actor-anr', actorName: 'Akkineni Nageswara Rao', role: 'Abhimanyu' },
      { actorName: 'S. V. Ranga Rao', role: 'Ghatotkacha' },
      { actorName: 'Savitri', role: 'Sasirekha' }
    ],
    boxOfficeVerdict: 'All-Time Industry Hit',
    awards: [
      'Screened at 1957 International Film Festival of India',
      'Voted the Greatest Indian Film of All Time in 2013 IBN-Live National Poll'
    ],
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
    runtimeMinutes: 192,
    cbfcRating: 'U',
    technicalMilestones: [
      'Pioneered revolutionary optical illusions and trick photography by cinematographer Marcus Bartley without modern CGI.',
      'Introduced innovative miniature set photography and multi-exposure layering in Indian cinema.'
    ]
  },
  {
    id: 'movie-devadasu',
    title: 'Devadasu',
    teluguTitle: 'దేవదాసు',
    releaseYear: 1953,
    releaseDate: '1953-06-26',
    genre: ['Tragedy', 'Romance', 'Drama'],
    director: 'Vedantam Raghavayya',
    producer: 'D. L. Narayana',
    musicDirector: 'C. R. Subburaman & Viswanathan–Ramamoorthy',
    cinematographer: 'B. S. Ranga',
    editor: 'P. V. Narayanan',
    productionCompany: 'Vinoda Pictures',
    synopsis: 'The definitive cinematic adaptation of Sarat Chandra Chattopadhyay\'s novel. Devadasu and Parvati love each other since childhood, but social caste barriers separate them. Plunging into grief and alcoholism, Devadasu wanders seeking solace until his heartbreaking demise at Parvati\'s doorstep.',
    leadCast: [
      { actorId: 'actor-anr', actorName: 'Akkineni Nageswara Rao', role: 'Devadasu' },
      { actorName: 'Savitri', role: 'Parvati (Paro)' },
      { actorName: 'Lalitha', role: 'Chandramukhi' },
      { actorName: 'S. V. Ranga Rao', role: 'Narayana Rao' }
    ],
    boxOfficeVerdict: 'All-Time Classic / Industry Hit',
    awards: [
      'Voted by film historians as the definitive screen version of Devdas in Indian cinematic history'
    ],
    posterUrl: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80',
    runtimeMinutes: 184,
    cbfcRating: 'U',
    technicalMilestones: ['Masterclass in low-key expressive chiaroscuro lighting and sorrow-laden framing.']
  },
  {
    id: 'movie-alluri',
    title: 'Alluri Seetharama Raju',
    teluguTitle: 'అల్లూరి సీతారామరాజు',
    releaseYear: 1974,
    releaseDate: '1974-05-01',
    genre: ['Historical', 'Biopic', 'Action'],
    director: 'V. Ramachandra Rao',
    producer: 'Padmalaya Studios (G. Hanumantha Rao)',
    musicDirector: 'P. Adinarayana Rao',
    cinematographer: 'V. S. R. Swamy',
    editor: 'Kotagiri Gopala Rao',
    productionCompany: 'Padmalaya Studios',
    synopsis: 'A gripping historical biography of freedom fighter Alluri Sitarama Raju, who rallied the tribal communities in the Visakhapatnam and Godavari hills against the oppressive British colonial regime during the historic 1922–1924 Rampa Rebellion.',
    leadCast: [
      { actorId: 'actor-krishna', actorName: 'Krishna', role: 'Alluri Seetharama Raju' },
      { actorName: 'Vijaya Nirmala', role: 'Seetha' },
      { actorName: 'Jaggayya', role: 'Rutherford' }
    ],
    boxOfficeVerdict: 'All-Time Industry Hit',
    awards: [
      'National Film Award for Best Lyrics (Sri Sri for Telugu Veera Levara)',
      'Nandi Award for Best Feature Film'
    ],
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 175,
    cbfcRating: 'U',
    technicalMilestones: ['First Cinemascope film produced in South India, setting new standards for wide-angle landscape battles.']
  },
  {
    id: 'movie-khaidi',
    title: 'Khaidi',
    teluguTitle: 'ఖైదీ',
    releaseYear: 1983,
    releaseDate: '1983-10-28',
    genre: ['Action', 'Thriller', 'Revenge'],
    director: 'A. Kodandarami Reddy',
    producer: 'Samyuktha Movies',
    musicDirector: 'K. Chakravarthy',
    cinematographer: 'Lok Singh',
    editor: 'Kotagiri Venkateswara Rao',
    productionCompany: 'Samyuktha Movies',
    synopsis: 'Falsely accused of murder by corrupt village landlords who torture his family, a righteous young man escapes prison to hunt down the conspirators while being pursued by a relentless police squad.',
    leadCast: [
      { actorId: 'actor-chiranjeevi', actorName: 'Chiranjeevi', role: 'Sooryam' },
      { actorName: 'Madhavi', role: 'Madhu' },
      { actorName: 'Sumalatha', role: 'Sujatha' },
      { actorName: 'Rao Gopal Rao', role: 'Veeraswamy' }
    ],
    boxOfficeVerdict: 'All-Time Industry Hit',
    awards: ['Nandi Award for Best Action Sequence'],
    posterUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 148,
    cbfcRating: 'U/A',
    technicalMilestones: ['Reinvented action rhythm, dynamic pacing, and hero dance entries in commercial South Indian cinema.']
  },
  {
    id: 'movie-shiva',
    title: 'Shiva',
    teluguTitle: 'శివ',
    releaseYear: 1989,
    releaseDate: '1989-10-05',
    genre: ['Crime', 'Action', 'Drama'],
    director: 'Ram Gopal Varma',
    producer: 'Akkineni Venkat & Y. Surendra',
    musicDirector: 'Ilaiyaraaja',
    cinematographer: 'S. Gopala Reddy',
    editor: 'Shankar',
    productionCompany: 'Annapurna Studios & SS Creations',
    synopsis: 'A university fresher named Shiva refuses to bow to campus intimidation by goons backed by an untouchable underworld Don Bhavani. Taking matters into his own hands with a bicycle chain, Shiva triggers a brutal confrontation that forever reshaped action realism in Indian cinema.',
    leadCast: [
      { actorId: 'actor-nagarjuna', actorName: 'Akkineni Nagarjuna', role: 'Shiva' },
      { actorName: 'Amala', role: 'Asha' },
      { actorName: 'Raghuvaran', role: 'Bhavani' }
    ],
    boxOfficeVerdict: 'Pathbreaking Industry Hit',
    awards: [
      'Filmfare Award for Best Film – Telugu',
      'Nandi Award for Best Director (Ram Gopal Varma Debut)',
      'Screened at 13th International Film Festival of India'
    ],
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 155,
    cbfcRating: 'A',
    technicalMilestones: [
      'Introduced the Steadicam to South Indian cinema, transforming tracking shots and campus chase sequences.',
      'Sound design focused on ambient silence punctuated by hyper-impact foley and Ilaiyaraaja\'s electronic synthesizers.'
    ]
  },
  {
    id: 'movie-samarasimha',
    title: 'Samarasimha Reddy',
    teluguTitle: 'సమరసింహా రెడ్డి',
    releaseYear: 1999,
    releaseDate: '1999-01-13',
    genre: ['Action', 'Faction', 'Drama'],
    director: 'B. Gopal',
    producer: 'Chengala Venkat Rao',
    musicDirector: 'Mani Sharma',
    cinematographer: 'V. S. R. Swamy',
    editor: 'Kotagiri Venkateswara Rao',
    productionCompany: 'Sri Satya Sai Arts',
    synopsis: 'In order to protect innocent lives, a peace-seeking hotel manager in North India is forced to unveil his ferocious identity as Samarasimha Reddy, the fiercest faction leader of Rayalaseema sworn to vanquish tyrannical blood feuds.',
    leadCast: [
      { actorId: 'actor-balakrishna', actorName: 'Nandamuri Balakrishna', role: 'Samarasimha Reddy / Vaasu' },
      { actorName: 'Simran', role: 'Sampangi' },
      { actorName: 'Anjala Zaveri', role: 'Anjali' },
      { actorName: 'Jaya Prada', role: 'Rajyalakshmi' }
    ],
    boxOfficeVerdict: 'All-Time Industry Hit',
    awards: ['Nandi Award for Best Dialogue', 'CineMAA Award for Best Film'],
    posterUrl: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 165,
    cbfcRating: 'U/A',
    technicalMilestones: ['Birthed the modern Rayalaseema faction genre with high-octane slow-motion weapon combat and roaring dialogues.']
  },
  {
    id: 'movie-pokiri',
    title: 'Pokiri',
    teluguTitle: 'పోకిరి',
    releaseYear: 2006,
    releaseDate: '2006-04-28',
    genre: ['Action', 'Crime', 'Thriller'],
    director: 'Puri Jagannadh',
    producer: 'Indira Productions & Vaishno Academy',
    musicDirector: 'Mani Sharma',
    cinematographer: 'Shyam K. Naidu',
    editor: 'Marthand K. Venkatesh',
    productionCompany: 'Vaishno Academy',
    synopsis: 'A ruthless street thug named Pandu works for rival mafia gangs in Hyderabad while romancing an aerobics instructor. The ultimate climax reveals him to be Krishna Manohar IPS, an undercover police officer infiltrating the underworld to eliminate mafia kingpin Ali Bhai.',
    leadCast: [
      { actorId: 'actor-maheshbabu', actorName: 'Mahesh Babu', role: 'Pandu / Krishna Manohar IPS' },
      { actorName: 'Ileana D\'Cruz', role: 'Shruti' },
      { actorName: 'Prakash Raj', role: 'Ali Bhai' },
      { actorName: 'Nassar', role: 'Suryanarayana IPS' }
    ],
    boxOfficeVerdict: 'All-Time Industry Hit',
    awards: ['Filmfare Best Actor – Telugu (Mahesh Babu)', 'Nandi Award for Best Popular Film'],
    posterUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 161,
    cbfcRating: 'U/A',
    technicalMilestones: ['Set the all-time box office gross record for Telugu cinema, later remade in Hindi (Wanted), Tamil, and Kannada.']
  },
  {
    id: 'movie-magadheera',
    title: 'Magadheera',
    teluguTitle: 'మగధీర',
    releaseYear: 2009,
    releaseDate: '2009-07-31',
    genre: ['Fantasy', 'Action', 'Reincarnation'],
    director: 'S. S. Rajamouli',
    producer: 'Allu Aravind & B. V. S. N. Prasad',
    musicDirector: 'M. M. Keeravani',
    cinematographer: 'K. K. Senthil Kumar',
    editor: 'Kotagiri Venkateswara Rao',
    productionCompany: 'Geetha Arts',
    synopsis: 'Harsha, a bike stuntman, experiences glimpses of his previous life 400 years ago as Kala Bhairava, the heroic general of the kingdom of Udaigarh. To protect his reincarnated eternal love Mithravinda from an evil prince, he battles through destiny and ancient vendettas.',
    leadCast: [
      { actorId: 'actor-ramcharan', actorName: 'Ram Charan', role: 'Kala Bhairava / Harsha' },
      { actorName: 'Kajal Aggarwal', role: 'Mithravinda Devi / Indu' },
      { actorName: 'Dev Gill', role: 'Ranadev Billa / Raghu Veer' },
      { actorName: 'Srihari', role: 'Sher Khan / Solomon' }
    ],
    boxOfficeVerdict: 'All-Time Industry Hit',
    awards: [
      'National Film Award for Best Special Effects (Kamal Kannan)',
      'National Film Award for Best Choreography (K. Sivasankar)',
      '6 Filmfare Awards South'
    ],
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 166,
    cbfcRating: 'U/A',
    technicalMilestones: ['Benchmark in Indian VFX and pre-visualization storyboarding, running for 1000 days in Kurnool.']
  },
  {
    id: 'movie-baahubali1',
    title: 'Baahubali: The Beginning',
    teluguTitle: 'బాహుబలి: ది బిగినింగ్',
    releaseYear: 2015,
    releaseDate: '2015-07-10',
    genre: ['Epic', 'Action', 'Historical Fantasy'],
    director: 'S. S. Rajamouli',
    producer: 'Shobu Yarlagadda & Prasad Devineni',
    musicDirector: 'M. M. Keeravani',
    cinematographer: 'K. K. Senthil Kumar',
    editor: 'Kotagiri Venkateswara Rao',
    productionCompany: 'Arka Media Works',
    synopsis: 'A child found near a roaring waterfall grows into a mighty warrior named Shivudu, who climbs the insurmountable cliff to win the heart of a rebel guerilla, discovering along the way that he is the rightful heir to the legendary kingdom of Mahishmati.',
    leadCast: [
      { actorId: 'actor-prabhas', actorName: 'Prabhas', role: 'Shivudu / Amarendra Baahubali' },
      { actorName: 'Rana Daggubati', role: 'Bhallaladeva' },
      { actorName: 'Anushka Shetty', role: 'Devasena' },
      { actorName: 'Ramya Krishna', role: 'Sivagami Devi' },
      { actorName: 'Sathyaraj', role: 'Kattappa' }
    ],
    boxOfficeVerdict: 'Global Industry Hit',
    awards: [
      'National Film Award for Best Feature Film',
      'National Film Award for Best Special Effects',
      'First South Indian film to win National Best Feature Film'
    ],
    posterUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 159,
    cbfcRating: 'U/A',
    technicalMilestones: ['Spawned the Pan-India movement, creating world-class CGI, virtual world building, and concept art pipelines.']
  },
  {
    id: 'movie-baahubali2',
    title: 'Baahubali: The Conclusion',
    teluguTitle: 'బాహుబలి: ది కన్‌క్లూజన్',
    releaseYear: 2017,
    releaseDate: '2017-04-28',
    genre: ['Epic', 'Action', 'Drama'],
    director: 'S. S. Rajamouli',
    producer: 'Shobu Yarlagadda & Prasad Devineni',
    musicDirector: 'M. M. Keeravani',
    cinematographer: 'K. K. Senthil Kumar',
    editor: 'Kotagiri Venkateswara Rao',
    productionCompany: 'Arka Media Works',
    synopsis: 'Unravels the fateful tragedy behind why loyal warrior Kattappa killed Amarendra Baahubali. Amarendra\'s son Mahendra Baahubali mounts a ferocious war to vanquish the tyrannical king Bhallaladeva and liberate Queen Devasena.',
    leadCast: [
      { actorId: 'actor-prabhas', actorName: 'Prabhas', role: 'Amarendra Baahubali & Mahendra Baahubali' },
      { actorName: 'Rana Daggubati', role: 'Bhallaladeva' },
      { actorName: 'Anushka Shetty', role: 'Devasena' },
      { actorName: 'Ramya Krishna', role: 'Sivagami' },
      { actorName: 'Sathyaraj', role: 'Kattappa' }
    ],
    boxOfficeVerdict: 'All-Time Global Blockbuster (₹1,810 Cr)',
    awards: [
      '3 National Film Awards (Best Wholesome Entertainment, Best VFX, Best Stunt Choreography)',
      'Highest grossing Indian film domestically in history'
    ],
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 167,
    cbfcRating: 'U/A',
    technicalMilestones: ['Global release across thousands of IMAX screens, setting all-time box office benchmarks in Indian cinema.']
  },
  {
    id: 'movie-rrr',
    title: 'RRR (Rise Roar Revolt)',
    teluguTitle: 'ఆర్ఆర్ఆర్',
    releaseYear: 2022,
    releaseDate: '2022-03-25',
    genre: ['Action', 'Epic', 'Period Drama'],
    director: 'S. S. Rajamouli',
    producer: 'D. V. V. Danayya',
    musicDirector: 'M. M. Keeravani',
    cinematographer: 'K. K. Senthil Kumar',
    editor: 'A. Sreekar Prasad',
    productionCompany: 'DVV Entertainment',
    synopsis: 'A fictional retelling of the friendship between two iconic Indian revolutionaries — Alluri Sitarama Raju and Komaram Bheem — in 1920s Delhi, as they wage a spectacular war against the tyrannical British Governor to protect their people.',
    leadCast: [
      { actorId: 'actor-ntrjr', actorName: 'Jr. NTR', role: 'Komaram Bheem' },
      { actorId: 'actor-ramcharan', actorName: 'Ram Charan', role: 'Alluri Sitarama Raju' },
      { actorName: 'Ajay Devgn', role: 'Venkata Rama Raju' },
      { actorName: 'Alia Bhatt', role: 'Sita' },
      { actorName: 'Ray Stevenson', role: 'Governor Scott Buxton' }
    ],
    boxOfficeVerdict: 'All-Time Global Blockbuster (₹1,387 Cr)',
    awards: [
      'Academy Award for Best Original Song ("Naatu Naatu")',
      'Golden Globe Award for Best Original Song',
      'Critics\' Choice Movie Award for Best Foreign Language Film & Best Song',
      '6 National Film Awards'
    ],
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
    runtimeMinutes: 187,
    cbfcRating: 'U/A',
    technicalMilestones: [
      'Pioneered advanced virtual production, high-speed anamorphic camera rigs, and complex wild animal CG interactions.',
      'Achieved global cinematic cult status across Hollywood and Western critics circles.'
    ]
  },
  {
    id: 'movie-pushpa',
    title: 'Pushpa: The Rise',
    teluguTitle: 'పుష్ప: ది రైజ్',
    releaseYear: 2021,
    releaseDate: '2021-12-17',
    genre: ['Action', 'Crime', 'Drama'],
    director: 'Sukumar',
    producer: 'Naveen Yerneni & Y. Ravi Shankar',
    musicDirector: 'Devi Sri Prasad',
    cinematographer: 'Mirosław Kuba Brożek',
    editor: 'Karthika Srinivas & Ruben',
    productionCompany: 'Mythri Movie Makers & Muttamsetty Media',
    synopsis: 'Pushpa Raj, a coolie in the Seshachalam hills of Rayalaseema, rises through audacity, wit, and fearless grit to seize control of an international red sandalwood smuggling syndicate, sparking an intense clash with unyielding IPS officer Bhanwar Singh Shekhawat.',
    leadCast: [
      { actorId: 'actor-alluarjun', actorName: 'Allu Arjun', role: 'Pushpa Raj' },
      { actorName: 'Rashmika Mandanna', role: 'Srivalli' },
      { actorName: 'Fahadh Faasil', role: 'SP Bhanwar Singh Shekhawat IPS' },
      { actorName: 'Sunil', role: 'Mangalam Srinu' }
    ],
    boxOfficeVerdict: 'All-Time Industry Hit (Highest-grossing Indian film of 2021)',
    awards: [
      'National Film Award for Best Actor (Allu Arjun)',
      'National Film Award for Best Music Direction (Devi Sri Prasad)',
      '7 Filmfare Awards South'
    ],
    posterUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 179,
    cbfcRating: 'U/A',
    technicalMilestones: ['Naturalistic deep forest production shooting, distinct dialect coaching, and earthy atmospheric color grading.']
  },
  {
    id: 'movie-kalki',
    title: 'Kalki 2898 AD',
    teluguTitle: 'కల్కి 2898 ఏడీ',
    releaseYear: 2024,
    releaseDate: '2024-06-27',
    genre: ['Sci-Fi', 'Mythology', 'Dystopian Epic'],
    director: 'Nag Ashwin',
    producer: 'C. Aswani Dutt, Swapna Dutt & Priyanka Dutt',
    musicDirector: 'Santhosh Narayanan',
    cinematographer: 'Djordje Stojiljkovic',
    editor: 'Kotagiri Venkateswara Rao',
    productionCompany: 'Vyjayanthi Movies',
    synopsis: 'In a dystopian post-apocalyptic future in 2898 AD, the barren city of Kasi is ruled by Supreme Yaskin from the floating Complex. A bounty hunter named Bhairava is drawn into an epic clash between ancient Mahabharata warrior Ashwatthama and rebel forces protecting SUM-80, the mother destined to give birth to Lord Kalki.',
    leadCast: [
      { actorId: 'actor-prabhas', actorName: 'Prabhas', role: 'Bhairava / Karna' },
      { actorName: 'Amitabh Bachchan', role: 'Ashwatthama' },
      { actorName: 'Kamal Haasan', role: 'Supreme Yaskin' },
      { actorName: 'Deepika Padukone', role: 'SUM-80 / Sumathi' }
    ],
    boxOfficeVerdict: 'All-Time Global Blockbuster (₹1,200+ Cr)',
    awards: ['Screened at San Diego Comic-Con (SDCC) to historic acclaim'],
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 181,
    cbfcRating: 'U/A',
    technicalMilestones: [
      'India\'s first major mythological sci-fi universe, featuring the custom-built functional robotic AI vehicle Bujji.',
      'Over 4,000 VFX shots rendered across leading international visual effects studios.'
    ]
  },
  {
    id: 'movie-jersey',
    title: 'Jersey',
    teluguTitle: 'జెర్సీ',
    releaseYear: 2019,
    releaseDate: '2019-04-19',
    genre: ['Sports', 'Drama', 'Emotional'],
    director: 'Gowtam Tinnanuri',
    producer: 'Suryadevara Naga Vamsi',
    musicDirector: 'Anirudh Ravichander',
    cinematographer: 'Sanu John Varghese',
    editor: 'Naveen Nooli',
    productionCompany: 'Sithara Entertainments',
    synopsis: 'Arjun, a gifted Ranji cricketer who quit the game ten years earlier under tragic circumstances, decides to return to professional cricket at the age of 36 to fulfill his young son\'s wish for an Indian team jersey, hiding a fatal medical secret with immense dignity.',
    leadCast: [
      { actorId: 'actor-nani', actorName: 'Nani', role: 'Arjun' },
      { actorName: 'Shraddha Srinath', role: 'Sarah' },
      { actorName: 'Ronit Kamra', role: 'Nani (Son)' },
      { actorName: 'Sathyaraj', role: 'Coach Murthy' }
    ],
    boxOfficeVerdict: 'Super Hit / Modern Classic',
    awards: [
      'National Film Award for Best Feature Film in Telugu',
      'National Film Award for Best Editing (Naveen Nooli)',
      'Critics Choice Film Award'
    ],
    posterUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&auto=format&fit=crop&q=80',
    runtimeMinutes: 157,
    cbfcRating: 'U',
    technicalMilestones: ['Hyper-realistic stadium cinematography, organic sound mix, and Anirudh\'s evocative orchestral score.']
  }
];

export const PRODUCTION_LESSONS: LessonTopic[] = [
  // PRE-PRODUCTION
  {
    id: 'lesson-concept-script',
    stage: 'pre-production',
    title: 'Concept Development, Story & Screenplay Architecture',
    summary: 'How a raw thought transforms into a bulletproof narrative structure and formatted shooting script.',
    detailedContent: [
      'Every film begins with a core premise or dramatic question: "What if?" In Telugu cinema history, films like Shiva, Mayabazar, and Aditya 369 began from simple, disruptive questions.',
      'The Three-Act Structure (Aristotelian poetics): Act I (Setup & Inciting Incident, 0-25%), Act II (Confrontation, Rising Action & Midpoint Crisis, 25-75%), and Act III (Climax & Resolution, 75-100%).',
      'The Hero\'s Journey (Monomyth) applied to commercial cinema: Departure, Initiation, and Return, balanced with character agency and emotional arcs.',
      'Industry standard script formatting: Master Scene format (Scene Heading, Action description, Character cue, Parenthetical, Dialogue). 1 page of screenplay equals approximately 1 minute of screen time.'
    ],
    keyTerms: [
      { term: 'Logline', definition: 'A one-to-two sentence summary of the film stating protagonist, inciting incident, primary conflict, and stakes.' },
      { term: 'Slugline / Scene Heading', definition: 'Tells the reader where and when the scene takes place: INT./EXT. LOCATION - TIME OF DAY.' },
      { term: 'Step Outline / Beat Sheet', definition: 'A sequential index of every major plot beat and emotional transition in the story.' }
    ],
    practicalTips: [
      'Write in present tense only. Describe only what can be seen and heard by a camera.',
      'Give every protagonist a clear outer goal (what they want) and inner need (what they lack emotionally).'
    ]
  },
  {
    id: 'lesson-storyboarding-previs',
    stage: 'pre-production',
    title: 'Storyboarding, Shot Planning & Visual Continuity',
    summary: 'Translating written script pages into sequential visual panels, camera vectors, and spatial blueprints.',
    detailedContent: [
      'A storyboard is a visual script — a comic-strip-like sequence of drawings that pre-visualizes camera compositions, character movement, lens choices, and transitions before spending money on set.',
      'The 180-Degree Rule: An imaginary axis of action drawn between two interacting characters. The camera must remain on one side of this line to prevent disorienting the viewer.',
      'Framing & Eye Trace: Planning where the audience\'s gaze will land on each panel so cuts feel effortless and fluid.',
      'Animatics: Storyboard panels synchronized to recorded dialogue tracks and sound effects with rudimentary camera zooms and camera pans to test pacing before shooting.'
    ],
    keyTerms: [
      { term: 'Animatic', definition: 'A timed video of storyboard frames accompanied by scratch dialogue and temporary sound design.' },
      { term: 'Rule of Thirds', definition: 'Dividing the frame into a 3x3 grid; placing points of interest on intersections creates dynamic tension.' },
      { term: 'Coverage', definition: 'Shooting multiple camera angles of the same action (master shot, medium shots, close-ups) to give options in the edit.' }
    ],
    practicalTips: [
      'Always draw camera motion arrows outside or inside the panel clearly indicating Pan, Tilt, or Dolly movement.',
      'Maintain head room and look room consistency across reverse angle shots.'
    ]
  },
  {
    id: 'lesson-budgeting-breakdown',
    stage: 'pre-production',
    title: 'Script Breakdown, Casting, Budgeting & Scheduling',
    summary: 'The logistical transformation: stripboards, call sheets, location scouting, and above-the-line vs. below-the-line costs.',
    detailedContent: [
      'Script Breakdown: Analyzing each script page with color-coded highlighters to extract: Characters (Red), Props (Purple), Costumes (Orange), Vehicles (Pink), Special Effects (Blue), and Sound/Music (Brown).',
      'Production Stripboard: One strip per scene ordered logistically by Location, Cast Availability, Day/Night conditions, and Weather rather than script chronologic order.',
      'Budgeting Categories: Above-The-Line (ATL: Producer, Director, Writer, Lead Cast) versus Below-The-Line (BTL: Crew, Equipment, Art Department, Post-production, Sound, Catering, Insurance).'
    ],
    keyTerms: [
      { term: 'Call Sheet', definition: 'Daily document issued by the 1st Assistant Director detailing arrival times, scene order, location coordinates, and cast logistics.' },
      { term: 'Tech Scout / Recce', definition: 'A comprehensive inspection of prospective shooting locations by director, DP, gaffer, and sound mixer to verify power, ambient sound, and sunlight paths.' }
    ],
    practicalTips: [
      'Group all scenes taking place at a single location together regardless of when they occur in the movie.',
      'Always add a 10% contingency line to production budgets for unexpected weather delays.'
    ]
  },

  // PRODUCTION
  {
    id: 'lesson-cinematography-lighting',
    stage: 'production',
    title: 'Cinematography, Camera Angles & 3-Point Lighting',
    summary: 'Mastering the technical language of the lens: focal length, depth of field, exposure triangle, and chiaroscuro setups.',
    detailedContent: [
      'The Camera Angles and their psychological weight:',
      '• Eye-Level Shot: Objective, neutral, human-scale connection.',
      '• Low-Angle Shot: Makes the subject appear dominant, heroic, formidable (frequently used in Telugu hero introductions).',
      '• High-Angle Shot: Makes the subject look vulnerable, isolated, or overpowered.',
      '• Dutch Angle / Canted: Tilts the camera off horizontal axis to convey madness, disorientation, or moral decay.',
      '• Bird\'s-Eye View: God-like omniscient scale from directly above; worm\'s-eye view from ground level.',
      'The 3-Point Lighting Technique:',
      '1. Key Light: The primary source of illumination defining shape and contrast (often placed at 45° from subject).',
      '2. Fill Light: Soft source positioned opposite the key light to fill harsh shadows and control contrast ratio.',
      '3. Back Light / Rim Light: Placed behind the subject to separate them from the background with a glowing outline.'
    ],
    keyTerms: [
      { term: 'Focal Length (mm)', definition: 'Wide lenses (18-28mm) exaggerate depth and spatial distortion; Telephoto (85-135mm) compress background planes and isolate subjects with shallow depth of field.' },
      { term: 'Color Temperature (Kelvin)', definition: 'Tungsten/Warm indoor light (~3200K) vs Daylight/Cool blue light (~5600K).' },
      { term: 'Chiaroscuro', definition: 'High contrast treatment of light and dark, creating moody, painterly shadows.' }
    ],
    practicalTips: [
      'Always light the background separately from the actors to create spatial separation.',
      'Use diffusion flags or softboxes to eliminate unflattering hard facial glare on close-ups.'
    ]
  },
  {
    id: 'lesson-direction-actors',
    stage: 'production',
    title: 'Film Direction, Blocking & Sound Recording on Set',
    summary: 'Directing human performance, choreographing geometric camera blocking, and recording pristine production audio.',
    detailedContent: [
      'Blocking: The precise choreography of actors\' physical movements and camera positions within the scene architecture.',
      'Subtext: Directing actors not by giving line-readings or emotional adjectives ("be angry"), but through active verbs and character objectives ("belittle him", "beg for his forgiveness").',
      'Location Sound Recording: The Sound Recordist operates boom microphones and wireless lavaliers. Capturing Room Tone (60 seconds of silent room ambience) is mandatory for seamless audio patching in post-production.'
    ],
    keyTerms: [
      { term: 'Room Tone', definition: 'The ambient sound of an empty set recorded specifically for audio continuity patching in editing.' },
      { term: 'Boom Pole & Shotgun Mic', definition: 'Directional hyper-cardioid microphone mounted on an extendable boom to capture dialogue overhead without appearing in frame.' }
    ],
    practicalTips: [
      'Never yell "Cut!" the exact second the last dialogue ends; let the camera roll for 3 extra seconds to capture lingering emotion.',
      'Keep your eye on the boom shadow: always ensure key lights do not cast microphone shadows into the frame.'
    ]
  },

  // POST-PRODUCTION
  {
    id: 'lesson-editing-rhythm',
    stage: 'post-production',
    title: 'Video Editing, Pacing, Cuts & Scene Assembly',
    summary: 'The final rewrite of the movie: pacing, montage theory, matching on action, and dramatic rhythm.',
    detailedContent: [
      'Editing is the distinct artistic language unique to cinema. As director Stanley Kubrick observed, "Editing is the only aspect of the cinematic art that is unique. It does not exist in theatre, literature, or painting."',
      'Types of Cuts:',
      '• Cut on Action: Cutting in the middle of a physical motion (e.g., throwing a punch or opening a door) masks the edit, making it invisible.',
      '• J-Cut & L-Cut: J-cut introduces the audio of the next scene before the video cuts; L-cut allows the audio of the previous scene to linger into the next shot.',
      '• Match Cut: Cutting between two visually or thematically identical objects (e.g., the bone transforming into a spaceship in 2001: A Space Odyssey).',
      '• Jump Cut: Deliberate temporal ellipsis cutting within the same shot to create urgency or psychological disorientation.'
    ],
    keyTerms: [
      { term: 'Assembly Cut', definition: 'The first chronological arrangement of all good takes according to the script, often 40-60% longer than the final film.' },
      { term: 'Rough Cut vs. Fine Cut', definition: 'Rough cut refines pacing and trims excess; Fine cut locks every frame and edit before handing over to VFX, sound, and color.' },
      { term: 'Picture Lock', definition: 'The crucial milestone when no more visual cuts may be altered, allowing sound and VFX departments to work on fixed timecodes.' }
    ],
    practicalTips: [
      'Cut for emotion first, story second, and physical continuity third. An emotional cut always triumphs over a technically perfect continuity cut.',
      'Use J-cuts to make dialogue scenes feel natural, just as in real human conversation.'
    ]
  },
  {
    id: 'lesson-sound-foley-score',
    stage: 'post-production',
    title: 'Sound Design, Foley, ADR & Background Score (BGM)',
    summary: '50% of the cinematic experience is sound: crafting atmospheres, custom foley footsteps, dubbing, and thematic orchestral motifs.',
    detailedContent: [
      'Sound Design layers in cinema:',
      '1. Dialogue: Clean production audio + Automated Dialogue Replacement (ADR / Dubbing) for lines marred by noise or needing heightened performance.',
      '2. Foley: Performing and recording everyday physical sound effects in sync with the picture on specialized Foley stages (footsteps on gravel, cloth rustles, sword clashes, punches).',
      '3. Hard Sound Effects (SFX): Gunshots, explosions, car engine revs, and monster roars synthesized or sourced from libraries.',
      '4. Ambience / Backgrounds: Wind, city traffic, crickets, murmurs that establish geographic reality.',
      '5. Original Score (BGM): Melodic motifs and orchestral instrumentation (e.g., Keeravani\'s Baahubali & RRR scores, Thaman\'s Akhanda, DSP\'s Pushpa) that guide the viewer\'s emotional subconscious.'
    ],
    keyTerms: [
      { term: 'Foley Artist', definition: 'A sound specialist who watches the projected screen and physically mimics character actions using diverse everyday props to generate synchronized sound effects.' },
      { term: 'ADR (Dubbing)', definition: 'Automated Dialogue Replacement: re-recording dialogue in an acoustically treated studio.' },
      { term: 'Stem Mixing', definition: 'Delivering the final audio split into isolated groups: Dialogue (DX), Music (MX), and Effects (FX) for international dubbing and distribution.' }
    ],
    practicalTips: [
      'In fight scenes, layers of fruit being struck (cabbages, melons) combined with leather jackets create satisfying visceral bone-breaking impact sounds.',
      'Never allow background score to compete with dialogue frequencies in the 1kHz - 4kHz range.'
    ]
  },
  {
    id: 'lesson-color-vfx-mastering',
    stage: 'post-production',
    title: 'Color Grading, CGI, Compositing & Final DCP Mastering',
    summary: 'From flat LOG camera sensor data to calibrated cinematic brilliance: LUTs, node trees, rotoscoping, and theatrical digital cinema packages.',
    detailedContent: [
      'Color Correction vs. Color Grading:',
      '• Color Correction: Balancing neutral black points, white points, and skin tones so every shot across different lighting setups matches consistently.',
      '• Color Grading: Applying artistic stylization (e.g., teal & orange complementary split, desaturated gritty bleach bypass, golden warmth) to evoke psychological mood.',
      'Visual Effects (VFX) Pipeline:',
      '• Pre-visualization -> Matchmoving & Camera Tracking -> 3D Modeling & Texturing -> Rigging & Animation -> FX Simulation (fire, water, dust) -> Lighting & Rendering -> 2D Compositing (merging green-screen actors with digital sets).',
      'Theatrical Mastering: Exporting the final film as a Digital Cinema Package (DCP) formatted in DCI-P3 color space, XYZ color transformation, and JPEG 2000 image wrapping at 24.000 fps.'
    ],
    keyTerms: [
      { term: 'LOG Recording', definition: 'A logarithmic camera gamma profile that preserves maximum dynamic range and detail in extreme highlights and deep shadows.' },
      { term: 'LUT (Look-Up Table)', definition: 'A mathematical formula converting color values from one color profile to another (technical LUTs or creative aesthetic LUTs).' },
      { term: 'DCP (Digital Cinema Package)', definition: 'The standardized collection of digital files (MXF video/audio and XML metadata) used to project movies in digital cinemas worldwide.' }
    ],
    practicalTips: [
      'Always protect human skin tones: regardless of how stylized your color grade is, natural skin tones should align near the skin-tone vector on a vectorscope.',
      'When shooting green screen, keep the actor at least 8 to 10 feet away from the screen to prevent green light spill on hair and clothes.'
    ]
  }
];

export const CAMERA_ANGLES_EXPLORER = [
  {
    id: 'angle-eye-level',
    name: 'Eye-Level Shot',
    teluguTerm: 'కంటి స్థాయి కోణం (Eye Level)',
    cameraHeight: 'Neutral (~5.5 ft / 1.7 m)',
    emotionalImpact: 'Objectivity, equality, realism. The audience views the character as a peer.',
    cinematicUse: 'Standard conversational scenes, dialogue coverage, documentary realism.',
    diagramType: 'eye-level',
    illustrationDescription: 'Camera positioned horizontally parallel to the subject\'s eye line.'
  },
  {
    id: 'angle-low-angle',
    name: 'Low-Angle Shot',
    teluguTerm: 'క్రింది కోణం (Low Angle)',
    cameraHeight: 'Below waist level, tilted upwards',
    emotionalImpact: 'Dominance, power, intimidation, heroic stature, invincibility.',
    cinematicUse: 'Telugu mass hero introduction scenes, royal proclamations, menacing villains.',
    diagramType: 'low-angle',
    illustrationDescription: 'Camera looks upward from below, exaggerating height against the sky.'
  },
  {
    id: 'angle-high-angle',
    name: 'High-Angle Shot',
    teluguTerm: 'పై కోణం (High Angle)',
    cameraHeight: 'Above head level, tilted downwards',
    emotionalImpact: 'Vulnerability, helplessness, weakness, entrapment, smallness in the world.',
    cinematicUse: 'Characters facing defeat, children, grief-stricken moments, cornered protagonists.',
    diagramType: 'high-angle',
    illustrationDescription: 'Camera angles down, compressing the subject against the floor or ground.'
  },
  {
    id: 'angle-birds-eye',
    name: 'Bird\'s-Eye View (Top-Down)',
    teluguTerm: 'విహంగ వీక్షణం (Bird\'s Eye)',
    cameraHeight: 'Extreme overhead (90° vertical downward)',
    emotionalImpact: 'Omniscient, divine observation, geometric patterns, destiny, fate.',
    cinematicUse: 'Massive battle choreography, maze navigation, aftermath of tragic events.',
    diagramType: 'birds-eye',
    illustrationDescription: 'Camera looking directly down from crane or drone perpendicular to ground.'
  },
  {
    id: 'angle-worms-eye',
    name: 'Worm\'s-Eye View',
    teluguTerm: 'నేల స్థాయి కోణం (Worm\'s Eye)',
    cameraHeight: 'Ground-level, tilted steeply upward',
    emotionalImpact: 'Extreme towering scale, mythological grandeur, grounded perspective.',
    cinematicUse: 'Colossal statues, temple architecture, vehicle wheels screeching on pavement.',
    diagramType: 'worms-eye',
    illustrationDescription: 'Camera placed flat on dirt/concrete pointing upward.'
  },
  {
    id: 'angle-ots',
    name: 'Over-the-Shoulder (OTS)',
    teluguTerm: 'భుజం పైనుండి కోణం (Over the Shoulder)',
    cameraHeight: 'Shoulder level behind speaking partner',
    emotionalImpact: 'Intimacy, confrontation, spatial orientation, conversational connection.',
    cinematicUse: 'Intense two-character confrontations, romantic dialogues, interrogations.',
    diagramType: 'ots',
    illustrationDescription: 'Includes the back of one character\'s shoulder/head framing the other\'s face.'
  },
  {
    id: 'angle-close-up',
    name: 'Close-Up (CU)',
    teluguTerm: 'సమీప దృశ్యం (Close-Up)',
    cameraHeight: 'Facial frame (chin to crown)',
    emotionalImpact: 'Intense emotional intimacy, psychological truth, micro-expressions.',
    cinematicUse: 'Climactic emotional decisions, subtle eye twitches, tearful confessions.',
    diagramType: 'close-up',
    illustrationDescription: 'Subject\'s face fills the frame, eliminating background distractions.'
  },
  {
    id: 'angle-medium-shot',
    name: 'Medium Shot (MS)',
    teluguTerm: 'మధ్యస్థ దృశ్యం (Medium Shot)',
    cameraHeight: 'Waist-up framing',
    emotionalImpact: 'Natural balance of character body language and surrounding environment.',
    cinematicUse: 'Expository dialogue, character interactions, moderate action.',
    diagramType: 'medium-shot',
    illustrationDescription: 'Frames subject from waist up, showing both facial expression and gestures.'
  },
  {
    id: 'angle-wide-shot',
    name: 'Wide Shot / Establishing Shot (WS)',
    teluguTerm: 'విశాల దృశ్యం (Wide / Establishing Shot)',
    cameraHeight: 'Distant, capturing entire figure and environment',
    emotionalImpact: 'Context, scale, isolation, grandeur of setting, geography.',
    cinematicUse: 'Opening of new scenes, epic desert/kingdom vistas, royal palaces.',
    diagramType: 'wide-shot',
    illustrationDescription: 'Full human figure occupies 1/3 or less of the frame amidst landscape.'
  }
];

export const HISTORY_TIMELINE: HistoryMilestone[] = [
  {
    decade: '1930s',
    year: 1932,
    title: 'The Dawn of Telugu Talkies — Bhakta Prahlada',
    description: 'Directed by H. M. Reddy, Bhakta Prahlada was released in 1932, marking the historic transition from silent cinema to the first full-length Telugu sound film.',
    significance: 'Established Telugu cinema as an independent regional industry with its own linguistic and musical identity.',
    notableFigures: ['H. M. Reddy', 'V. V. Subba Rao', 'Surabhi Kamalabai'],
    keyFilms: ['Bhakta Prahlada (1932)', 'Seeta Kalyanam (1934)']
  },
  {
    decade: '1940s',
    year: 1949,
    title: 'Social Consciousness & The Rise of Iconic Legends',
    description: 'Telugu cinema shifted from purely mythological themes to socially conscious dramas, reformist literature, and the debuts of generational titans N. T. Rama Rao and Akkineni Nageswara Rao.',
    significance: 'Marked the emergence of legendary production houses like Vauhini Pictures and Vijaya Productions.',
    notableFigures: ['B. N. Reddy', 'K. V. Reddy', 'N. T. Rama Rao', 'Akkineni Nageswara Rao'],
    keyFilms: ['Devata (1941)', 'Swargaseema (1945)', 'Mana Desam (1949)']
  },
  {
    decade: '1950s',
    year: 1957,
    title: 'The Golden Age of Classical Telugu Cinema',
    description: 'The release of Mayabazar (1957) and Devadasu (1953) proved Telugu cinema\'s mastery over visual trick photography, literary dialogue, and timeless music.',
    significance: 'Technically and narratively matched international cinema; Marcus Bartley\'s camera tricks became legend.',
    notableFigures: ['K. V. Reddy', 'Marcus Bartley', 'NTR', 'ANR', 'Savitri', 'S. V. Ranga Rao'],
    keyFilms: ['Pathala Bhairavi (1951)', 'Malliswari (1951)', 'Devadasu (1953)', 'Mayabazar (1957)']
  },
  {
    decade: '1960s',
    year: 1965,
    title: 'Color Revolution, Bond Thrillers & Commercial Expansion',
    description: 'Adurthi Subba Rao introduced full color with Thene Manasulu (1965), while Superstar Krishna revolutionized the screen with spy thrillers (Goodachari 116).',
    significance: 'Transition from black & white to Eastman color; introduction of contemporary western genres.',
    notableFigures: ['Krishna', 'Sobhan Babu', 'Adurthi Subba Rao', 'Ghantasala'],
    keyFilms: ['Gundamma Katha (1962)', 'Thene Manasulu (1965)', 'Goodachari 116 (1966)']
  },
  {
    decade: '1970s',
    year: 1974,
    title: 'Cinemascope Innovations & Shift to Hyderabad',
    description: 'Superstar Krishna brought South India\'s first Cinemascope film with Alluri Seetharama Raju (1974). In 1975, ANR built Annapurna Studios in Hyderabad, anchoring Tollywood in its native capital.',
    significance: 'The Telugu film industry officially shifted its production headquarters from Madras to Hyderabad.',
    notableFigures: ['NTR', 'Krishna', 'ANR', 'K. Viswanath', 'Bapu'],
    keyFilms: ['Alluri Seetharama Raju (1974)', 'Sankarabharanam (1979)', 'Daana Veera Soora Karna (1977)']
  },
  {
    decade: '1980s',
    year: 1989,
    title: 'Megastar Phenomenon, New Wave Realism & The Steadicam',
    description: 'Chiranjeevi revolutionized dance, action, and commercial stardom with Khaidi (1983). In 1989, Ram Gopal Varma\'s Shiva introduced Steadicam tracking and gritty realistic sound, while K. Viswanath gained global praise with classical cinema.',
    significance: 'Telugu cinema redefined Indian action kinetics and sound engineering.',
    notableFigures: ['Chiranjeevi', 'Nagarjuna', 'Venkatesh', 'Balakrishna', 'Ram Gopal Varma', 'K. Viswanath'],
    keyFilms: ['Khaidi (1983)', 'Swathi Muthyam (1986)', 'Rudraveena (1988)', 'Shiva (1989)']
  },
  {
    decade: '1990s',
    year: 1999,
    title: 'DTS Audio, Faction Epics & The Modern Hero Era',
    description: 'Introduction of digital DTS stereophonic sound, high-voltage faction storytelling (Samarasimha Reddy), and the debuts of Pawan Kalyan, Mahesh Babu, and Jr. NTR.',
    significance: 'Box office collections broke the ₹10 crore ceiling; DTS sound mixing became the industry gold standard.',
    notableFigures: ['Chiranjeevi', 'Balakrishna', 'Nagarjuna', 'Venkatesh', 'Pawan Kalyan', 'Mahesh Babu'],
    keyFilms: ['Jagadeka Veerudu Athiloka Sundari (1990)', 'Aditya 369 (1991)', 'Gharana Mogudu (1992)', 'Samarasimha Reddy (1999)']
  },
  {
    decade: '2000s',
    year: 2009,
    title: 'VFX Breakthroughs & The Rise of S. S. Rajamouli',
    description: 'S. S. Rajamouli and Ram Charan\'s Magadheera (2009) set new visual standards with CGI and storyboard pre-visualization. Pokiri (2006) rewrote all commercial box-office records.',
    significance: 'Tollywood proved it could build world-class computer-generated worlds with indigenous VFX studios.',
    notableFigures: ['S. S. Rajamouli', 'Mahesh Babu', 'Prabhas', 'Jr. NTR', 'Allu Arjun', 'Ram Charan'],
    keyFilms: ['Okkadu (2003)', 'Pokiri (2006)', 'Yamadonga (2007)', 'Magadheera (2009)']
  },
  {
    decade: '2010s',
    year: 2015,
    title: 'The Pan-India Era — Baahubali Changes Indian Cinema',
    description: 'Baahubali: The Beginning (2015) and Baahubali 2: The Conclusion (2017) shattered linguistic barriers across India, grossing thousands of crores and establishing Telugu cinema as the epicenter of Indian filmmaking.',
    significance: 'Dismantled regional cinema boundaries; Tollywood films commanded highest national theater occupancy.',
    notableFigures: ['S. S. Rajamouli', 'Prabhas', 'Rana Daggubati', 'Sukumar', 'Nani'],
    keyFilms: ['Eega (2012)', 'Baahubali: The Beginning (2015)', 'Baahubali 2 (2017)', 'Rangasthalam (2018)', 'Jersey (2019)']
  },
  {
    decade: '2020s',
    year: 2022,
    title: 'Global Conquest — Academy Awards & Cinematic Universes',
    description: 'RRR (2022) won the Academy Award for Best Original Song ("Naatu Naatu") and historic acclaim across Hollywood. Pushpa (2021) and Kalki 2898 AD (2024) proved the global appeal of Telugu mythology and action spectacle.',
    significance: 'First Indian feature film song to win an Oscar; Tollywood creators invited to the Academy of Motion Picture Arts and Sciences.',
    notableFigures: ['S. S. Rajamouli', 'Jr. NTR', 'Ram Charan', 'Allu Arjun', 'Prabhas', 'Nag Ashwin'],
    keyFilms: ['Pushpa: The Rise (2021)', 'RRR (2022)', 'Kalki 2898 AD (2024)', 'Devara: Part 1 (2024)']
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'History',
    question: 'Which film holds the distinction of being the first full-length sound film (Talkie) produced in the Telugu language?',
    options: ['Mayabazar', 'Bhakta Prahlada', 'Devadasu', 'Pathala Bhairavi'],
    correctOptionIndex: 1,
    explanation: 'Bhakta Prahlada, directed by H. M. Reddy and released in 1932, is officially celebrated as the first Telugu sound film.'
  },
  {
    id: 'q2',
    category: 'Filmmaking',
    question: 'In cinematography and visual continuity, what rule dictates that the camera must remain on one side of an imaginary axis of action between two subjects?',
    options: ['The Golden Ratio', 'The 180-Degree Rule', 'The Rule of Thirds', 'Inverse Square Law'],
    correctOptionIndex: 1,
    explanation: 'The 180-degree rule establishes an imaginary line connecting two interacting characters. Crossing this axis flips screen direction and disorients viewers.'
  },
  {
    id: 'q3',
    category: 'Actors',
    question: 'Who was the first actor from Telugu cinema to win the National Film Award for Best Actor in a Leading Role in its 69-year history?',
    options: ['N. T. Rama Rao', 'Chiranjeevi', 'Allu Arjun', 'Prabhas'],
    correctOptionIndex: 2,
    explanation: 'Allu Arjun made history at the 69th National Film Awards (2023) by winning Best Actor for his performance in Pushpa: The Rise.'
  },
  {
    id: 'q4',
    category: 'Storyboarding',
    question: 'What is an "Animatic" in the pre-production workflow?',
    options: [
      'A software used for color grading cinema footage',
      'A video sequence of storyboard panels timed to scratch dialogue and sound',
      'The final DCP package delivered to movie theaters',
      'A physical drawing easel used by art directors'
    ],
    correctOptionIndex: 1,
    explanation: 'An animatic strings together storyboard sketches along with temp dialogue, music, and camera moves to test screen timing and rhythm before shooting.'
  },
  {
    id: 'q5',
    category: 'Animation & VFX',
    question: 'Which of the following is considered one of Disney\'s 12 Fundamental Principles of Animation?',
    options: ['Squash and Stretch', 'Depth of Field', 'Chiaroscuro', 'Foley Synchronicity'],
    correctOptionIndex: 0,
    explanation: 'Squash and Stretch gives drawn and 3D objects the illusion of weight and volume as they move and interact with physical forces.'
  },
  {
    id: 'q6',
    category: 'History',
    question: 'Which South Indian film introduced the 70mm stereophonic sound format to audiences in 1986?',
    options: ['Simhasanam', 'Khaidi', 'Shiva', 'Geethanjali'],
    correctOptionIndex: 0,
    explanation: 'Simhasanam (1986), directed, produced, and starring Superstar Krishna, was the first film in South India released in 70mm 6-track stereophonic sound.'
  },
  {
    id: 'q7',
    category: 'Filmmaking',
    question: 'What is the primary role of a "Foley Artist" during the post-production stage?',
    options: [
      'Operating camera cranes on set',
      'Physically creating and recording synchronized everyday sound effects on a Foley stage',
      'Designing visual effects simulations in Maya or Houdini',
      'Designing costumes for the lead actors'
    ],
    correctOptionIndex: 1,
    explanation: 'Foley artists recreate everyday sound effects (footsteps, clothing rustle, glass clinks, weapon handling) while watching the picture in real time.'
  },
  {
    id: 'q8',
    category: 'Filmmaking',
    question: 'What is the difference between a J-Cut and an L-Cut in film editing?',
    options: [
      'In a J-Cut, audio from the incoming shot precedes its video; in an L-Cut, audio from the outgoing shot continues after the cut',
      'J-Cuts are used only in action films while L-Cuts are used in comedies',
      'J-Cuts cut between two cameras while L-Cuts cut between two microphones',
      'There is no technical difference between them'
    ],
    correctOptionIndex: 0,
    explanation: 'Named after the shape their clip tracks make in an editing timeline: a J-cut lets you hear the next scene before seeing it, while an L-cut lets dialogue linger.'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'term-anamorphic',
    term: 'Anamorphic Lens',
    category: 'Cinematography',
    definition: 'A specialized optical lens that squeezes a wide panoramic image onto a standard sensor or film frame, resulting in an ultra-wide 2.39:1 aspect ratio, oval bokeh, and horizontal lens flares.',
    exampleInCinema: 'Commonly utilized in modern grand Telugu epics like RRR, Kalki 2898 AD, and Devara.'
  },
  {
    id: 'term-steadicam',
    term: 'Steadicam',
    category: 'Cinematography',
    definition: 'A camera stabilizer system isolating the camera from the operator\'s footsteps, enabling fluid, smooth moving shots across complex physical terrain.',
    exampleInCinema: 'Pioneered in Telugu cinema by Ram Gopal Varma and S. Gopala Reddy in the campus chase sequences of Shiva (1989).'
  },
  {
    id: 'term-chiaroscuro',
    term: 'Chiaroscuro',
    category: 'Cinematography',
    definition: 'An artistic lighting technique employing bold contrasts between deep dark shadows and bright directional highlights to generate psychological depth.',
    exampleInCinema: 'Mastered in black-and-white Telugu cinema in Devadasu (1953) and Mayabazar (1957).'
  },
  {
    id: 'term-foley',
    term: 'Foley',
    category: 'Sound',
    definition: 'The reproduction of everyday sound effects (such as footsteps, cloth movement, doors creaking, punches) recorded by sound artists in sync with picture.',
    exampleInCinema: 'Extensively performed on dedicated stages for fight sequences in Pushpa and Salaar.'
  },
  {
    id: 'term-room-tone',
    term: 'Room Tone',
    category: 'Sound',
    definition: 'The natural ambient acoustic signature of an empty room or filming location, recorded for 60 seconds without dialogue to smooth audio edits in post.',
    exampleInCinema: 'Standard protocol on all professional film sets to eliminate abrupt silence gaps between cut dialogue tracks.'
  },
  {
    id: 'term-animatic',
    term: 'Animatic',
    category: 'Storyboarding',
    definition: 'A preliminary timed video version of a film created by stringing storyboard panels together with temporary sound effects and dialogue.',
    exampleInCinema: 'Used extensively by director S. S. Rajamouli to meticulously plan battle strategies in Baahubali and RRR before shooting.'
  },
  {
    id: 'term-match-cut',
    term: 'Match Cut',
    category: 'Editing',
    definition: 'A cut between two different shots that matches the visual composition, subject action, or thematic idea between the tail of the first shot and the head of the second.',
    exampleInCinema: 'Used in Mayabazar to seamlessly match character transformations and magical illusions.'
  },
  {
    id: 'term-dcp',
    term: 'Digital Cinema Package (DCP)',
    category: 'Editing',
    definition: 'The standardized worldwide digital distribution format containing encrypted JPEG 2000 video frames and uncompressed 24-bit audio delivered to commercial movie theaters.',
    exampleInCinema: 'The final master output shipped to over 10,000 cinema screens worldwide for Pan-Indian releases.'
  },
  {
    id: 'term-squash-stretch',
    term: 'Squash and Stretch',
    category: 'Animation',
    definition: 'The foundational principle of animation that distorts an object or character to convey flexibility, weight, impact, and momentum without altering its overall volume.',
    exampleInCinema: 'Heavily applied in 3D character animation in Eega (2012) to make the fly\'s frantic acrobatics dynamic.'
  },
  {
    id: 'term-rotoscoping',
    term: 'Rotoscoping',
    category: 'Animation',
    definition: 'An animation and VFX technique of tracing frame-by-frame over live-action footage to extract matte silhouettes of actors or props without green screens.',
    exampleInCinema: 'Crucial in complex VFX shots in Kalki 2898 AD and Baahubali to integrate real actors into virtual CG environments.'
  },
  {
    id: 'term-industry-hit',
    term: 'Industry Hit',
    category: 'Telugu Cinema',
    definition: 'A rare and prestigious classification in Telugu cinema reserved solely for a movie that surpasses the all-time box office earnings of every prior film in Telugu cinema history.',
    exampleInCinema: 'Pathala Bhairavi (1951), Mayabazar (1957), Alluri Seetharama Raju (1974), Khaidi (1983), Shiva (1989), Samarasimha Reddy (1999), Pokiri (2006), Magadheera (2009), Baahubali (2015), Baahubali 2 (2017), RRR (2022).'
  }
];

export const PRODUCTION_CHECKLIST_TEMPLATE: ChecklistTask[] = [
  // Pre-production
  { id: 'chk-1', stage: 'pre-production', category: 'Script & Concept', title: 'Lock Final Draft Shooting Script', description: 'Complete table read with director, dialogue writer, and principal cast; lock scene numbers.', isCompleted: true },
  { id: 'chk-2', stage: 'pre-production', category: 'Storyboarding', title: 'Complete Key Scene Storyboards', description: 'Pre-visualize complex action choreography, VFX setups, and high-risk stunts into panels.', isCompleted: true },
  { id: 'chk-3', stage: 'pre-production', category: 'Location', title: 'Location Tech Recce & Permissions', description: 'Confirm power availability, sun trajectory, noise pollution, and police/municipal permits.', isCompleted: false },
  { id: 'chk-4', stage: 'pre-production', category: 'Production Logistics', title: 'Stripboard & Daily Schedule', description: 'Organize scenes by actor date availability, location cluster, and day/night requirements.', isCompleted: false },
  { id: 'chk-5', stage: 'pre-production', category: 'Art & Wardrobe', title: 'Approve Set Blueprints & Costume Fittings', description: 'Finalize props master list, weaponry safety approvals, and lead actor costume changes.', isCompleted: false },
  
  // Production
  { id: 'chk-6', stage: 'production', category: 'Camera & Lighting', title: 'Camera Package & Sensor Calibration', description: 'Test sensor shading, lens back focus, wireless follow-focus, and camera monitor LUTs.', isCompleted: false },
  { id: 'chk-7', stage: 'production', category: 'Audio', title: 'Record Daily Room Tone', description: 'Capture clean 60-second room ambience at every new interior location before wrap.', isCompleted: false },
  { id: 'chk-8', stage: 'production', category: 'Continuity', title: 'Script Supervisor Continuity Log', description: 'Record lens focal lengths, take ratings, eye line positions, and prop placements.', isCompleted: false },
  { id: 'chk-9', stage: 'production', category: 'Data Management', title: 'Dual DIT Checksum Backup', description: 'Verify camera card offload with MD5 checksum verification onto two independent raid drives.', isCompleted: false },
  
  // Post-production
  { id: 'chk-10', stage: 'post-production', category: 'Editorial', title: 'Lock Picture Cut', description: 'Sign off on final fine cut timing with director and producer before handing off to VFX & Sound.', isCompleted: false },
  { id: 'chk-11', stage: 'post-production', category: 'Sound', title: 'ADR Dubbing & Foley Recording', description: 'Record clean actor dubbing in studio and perform synchronized footsteps and physical impacts.', isCompleted: false },
  { id: 'chk-12', stage: 'post-production', category: 'Color & Mastering', title: 'Final DCI-P3 Color Grade & DCP Export', description: 'Master HDR color pass, Dolby Atmos 7.1.4 sound mix, and compile DCI-compliant DCP theater hard drive.', isCompleted: false }
];

export const SAMPLE_STORYBOARD_PROJECT: StoryboardProject = {
  id: 'proj-sample-1',
  title: 'Veera Vanam (The Ancient Courtyard Encounter)',
  logline: 'Under the flickering torches of a 16th-century fortress, an exiled warrior confronts his estranged mentor before dawn breaks.',
  aspectRatio: '2.39:1 Anamorphic',
  directorName: 'K. S. Narayana',
  createdAt: '2026-10-10',
  updatedAt: '2026-10-18',
  scenes: [
    {
      id: 'sc-1',
      sceneNumber: 1,
      sceneHeading: 'EXT. FORTRESS COURTYARD - NIGHT',
      description: 'Wind howls across ancient stone arches. Mist sweeps the cobblestones.',
      panels: [
        {
          id: 'p-1',
          panelNumber: 1,
          shotType: 'Extreme Wide Shot',
          cameraAngle: 'Low Angle',
          cameraMovement: 'Static',
          actionDescription: 'Lightning illuminates the towering stone arch. A cloaked figure stands motionless at the central fountain.',
          dialogueAudio: 'AUDIO: Deep thunder rumble rolls across the valley; wind whistles.',
          timingDurationSec: 4.5
        },
        {
          id: 'p-2',
          panelNumber: 2,
          shotType: 'Medium Shot',
          cameraAngle: 'Eye Level',
          cameraMovement: 'Dolly / Tracking',
          actionDescription: 'Slow forward dolly towards the warrior. His hand rests on the ornate hilt of his sword.',
          dialogueAudio: 'WARRIOR (V.O.): "Twelve winters since this sword was drawn in honour."',
          timingDurationSec: 3.5
        },
        {
          id: 'p-3',
          panelNumber: 3,
          shotType: 'Over-the-Shoulder',
          cameraAngle: 'Eye Level',
          cameraMovement: 'Pan',
          actionDescription: 'Over the warrior\'s right shoulder. From the dark corridor, the Master emerges holding a burning brass torch.',
          dialogueAudio: 'MASTER: "Honor was never buried, my son. Only patience."',
          timingDurationSec: 5.0
        },
        {
          id: 'p-4',
          panelNumber: 4,
          shotType: 'Extreme Close-Up',
          cameraAngle: 'Dutch Angle',
          cameraMovement: 'Static',
          actionDescription: 'Tight focus on the warrior\'s eyes. The golden torchlight reflects across his determined gaze.',
          dialogueAudio: 'WARRIOR: "Patience has expired. The kingdom calls."',
          timingDurationSec: 3.0
        }
      ]
    }
  ]
};
