let all_members = [
    
    // PRESIDENTS
    {name: "Jakob Kruse", department: "IT & Infrastructure", management: "President, Mentor", studies: "M.Sc Electrical Engineering", image: "jakob_kruse.webp", description: "Focus on Software Engineering and AI", linkedin: "https://www.linkedin.com/in/jakob-kruse-b7293a197/", },
    {name: "Nicolas Remerscheid", department: "Community", management: "President, Mentor", studies: "M.Sc Data Engineering and Analytics", image: "nicolas_remerscheid.webp", description: "Privacy Preserving ML Enthusiast", linkedin: "https://www.linkedin.com/in/nicolas-remerscheid/", },
    {name: "Tobias Zeulner", department: "Makeathon", management: "President, Mentor Makeathon", studies: "M.Sc Robitics, Coginition, Intelligence", image: "tobias_zeulner.webp", description: "Passion for leadership in a tech-oriented environment", linkedin: "https://www.linkedin.com/in/tobias-zeulner-893080169/", },
    
    // FOUNDERS
    {name: "Florian Mysliwetz", department: "Founders", management: "Founder, Alumni", studies: "Co-Founder @ PatentPlus", image: "florian_mysliwetz.webp", description: "", linkedin: "https://www.linkedin.com/in/florian-mysliwetz-bb98b015a/", },
    {name: "Jakob Kruse", department: "Founders", management: "President, Founder, Mentor", studies: "M.Sc Electrical Engineering", image: "jakob_kruse.webp", description: "Focus on Software Engineering and AI", linkedin: "https://www.linkedin.com/in/jakob-kruse-b7293a197/", },
    {name: "Nico Henning", department: "Founders", management: "Founder, Alumni", studies: "Venture Development @ Alaiko", image: "nico_henning.webp", description: "", linkedin: "https://www.linkedin.com/in/nicohenning/", },
    {name: "Nicolas Remerscheid", department: "Founders", management: "President, Founder, Mentor", studies: "M.Sc Data Engineering and Analytics", image: "nicolas_remerscheid.webp", description: "Privacy Preserving ML Enthusiast", linkedin: "https://www.linkedin.com/in/nicolas-remerscheid/", },
    {name: "Sebastian Lettner", department: "Founders", management: "Founder, Alumni", studies: "M.Sc Electrical Engineering", image: "sebastian_lettner.webp", description: "", linkedin: "", },
    {name: "TUM.ai", department: "Founders", management: "Follow us on Linkedin!", studies: "TUM.ai student initiative, established in December 2019", image: "est2019.webp", description: "We are reads to take action in the field of AI and contribute to pushing data driven solutions into new domains!", linkedin: "https://www.linkedin.com/company/tum-ai/", },
    
    // TEAMLEADS
    {name: "Alexander Schwarz", department: "Partners & Sponsors", management: "Teamlead Partners & Sponsors", studies: "M.Sc Robitics, Coginition, Intelligence", image: "alexander_schwarz.webp", description: "Passionate about innovations through AI", linkedin: "https://www.linkedin.com/in/alxschwrz", },
    {name: "Armin Schöpf", department: "Makeathon", management: "Teamlead Makeathon", studies: "", image: "armin_schöpf.webp", description: "", linkedin: "https://www.linkedin.com/in/schoepfarmin/", },
    {name: "Christoph Kecht", department: "Legal & Finance", management: "Teamlead Legal & Finance", studies: "M.Sc Finance & Information Management", image: "christoph_kecht.webp", description: "Passionate about AI-based Information Systems", linkedin: "https://www.linkedin.com/in/christoph-kecht/", },
    {name: "David Podolskyi", department: "Industry", management: "Teamlead Industry", studies: "B.Sc Information Systems", image: "david_podolskyi.webp", description: "ML & Entrepreneurship enthusiast with focus on IoT and Recommender Systems", linkedin: "https://www.linkedin.com/in/davidpodolsky/", },
    {name: "Ferdinand Eberding", department: "Legal & Finance", management: "Teamlead Legal & Finance", studies: "M.Sc Robitics, Coginition, Intelligence", image: "ferdinand_eberding.webp", description: "Open minded, technical student that wants to make an impact.", linkedin: "", },
    {name: "Hai Dang", department: "Education", management: "Teamlead Education", studies: "PhD Human Computer Interaction", image: "hai_dang.webp", description: "", linkedin: "", },
	{name: "Leonard Wolters", department: "Venture", management: "Teamlead Venture", studies: "M.Sc Management & Innovation", image: "leonard_wolters.webp", description: "", linkedin: "", },
	{name: "Leonhard Zirus", department: "Marketing & PR", management: "Teamlead Marketing", studies: "B.Sc Informatics", image: "leonhard_zirus.webp", description: "Society oriented thinker, entrepreneur and tech-enthusiast", linkedin: "https://www.linkedin.com/in/leonhard-zirus/", },
    {name: "Maximilian Forstenhäusler", department: "IT & Infrastructure", management: "Teamlead IT & Infrastructure", studies: "M.Sc Robitics, Coginition, Intelligence", image: "maximilian_forstenhaeusler.webp", description: "Enthusiastic about applied ML and DL", linkedin: "https://www.linkedin.com/in/maximilian-forstenhaeusler/", },
    {name: "Mohd Toaha Umar", department: "Community", management: "Teamlead Community", studies: "M.Sc Communications Engineering", image: "mohd_toaha_umar.webp", description: "", linkedin: "", },
    {name: "Nejira Hadzalic", department: "Makeathon", management: "Teamlead Makeathon", studies: "M.Sc Electrical Engineering", image: "nejira_hadzalic.webp", description: "Passionate about future ML applications", linkedin:   "https://www.linkedin.com/in/nejira-hadzalic-595863181/", },
    {name: "Omar Hedeya", department: "Partners & Sponsors", management: "Teamlead Partners & Sponsors", studies: "M.Sc Robitics, Coginition, Intelligence", image: "omar_hedeya.webp", description: "I love connecting ideas from different branches of human knowledge", linkedin: "https://www.linkedin.com/in/omar-hedeya-7698841b8/", },
	{name: "Patrick Remerscheid", department: "Venture", management: "Teamlead Venture", studies: "M.Sc Robitics, Coginition, Intelligence", image: "patrick_remerscheid.webp", description: "Robotics & AI student with a background in mechanical engineering", linkedin: "https://www.linkedin.com/in/patrickremerscheid/", },
	{name: "Rafi Al Attrach", department: "Community", management: "Teamlead Community", studies: "B.Sc Information Systems", image: "rafi_attrach.webp", description: "Sitting at the intersection of IT & Business", linkedin: "https://www.linkedin.com/in/rafi-attrach-ab2a2b196/", },
    {name: "Stefan Rummer", department: "IT & Infrastructure", management: "Teamlead IT & Infrastructure", studies: "B.Sc Electrical Engineering", image: "stefan_rummer.webp", description: "Enthusiastic about deep learning and predictive modeling", linkedin: "https://www.linkedin.com/in/stefanrmmr/", },
	{name: "Stefanie Manger", department: "Marketing & PR", management: "Teamlead Marketing", studies: "B.Sc Informatics", image: "stefanie_manger.webp", description: "Open minded and enthusiastic team player, always striving for the best", linkedin: "https://www.linkedin.com/in/stefanie-manger-29456b20b", },
    {name: "Tara Gürel", department: "Education", management: "Teamlead Education", studies: "B.Sc Management & Technology", image: "tara_gürel.webp", description: "", linkedin: "", },
    {name: "Viktoria Harmel", department: "Industry", management: "Teamlead Industry", studies: "B.Sc Management & Technology", image: "viktoria_harmel.webp", description: "Passion for AI applications having knowledge on different business use cases", linkedin: "", },
	
    // MENTORS
    {name: "Andreas Döring", department: "Education", management: "Mentor Education", studies: "M.Sc Robitics, Coginition, Intelligence", image: "andreas_doering.webp", description: "Robotics & Vision", linkedin: "https://www.linkedin.com/in/andreas-doering", },
    {name: "Ekin Karabulut", department: "Makeathon", management: "Mentor Makeathon", studies: "M.Sc Robitics, Coginition, Intelligence", image: "ekin_karabulut.webp", description: "Passionate about ML applications in Healthcare", linkedin: "https://www.linkedin.com/in/ekin-karabulut-40baa2187/", },
    {name: "Kerstin Forster", department: "Education", management: "Mentor Education", studies: "M.Sc Electrical Engineering", image: "kerstin_forster.webp", description: "Committed to encouraging beneficial AI", linkedin: "https://www.linkedin.com/in/kerstin-forster-746763201/", },
    {name: "Leonie Freisinger", department: "Partners & Sponsors", management: "Mentor Partners & Sponsors", studies: "M.Sc Mechatronics & Robotics", image: "leonie_freisinger.webp", description: "", linkedin: "", },
    {name: "Luca Dombetzki", department: "Venture", management: "Multiple department Mentor", studies: "M.Sc Finance & Information Management", image: "luca_dombetzki.webp", description: "", linkedin: "https://www.linkedin.com/in/luca-dombetzki/", },
    {name: "Petar Petrov", department: "Makeathon", management: "Mentor Makeathon", studies: "M.Sc Informatics", image: "petar_petrov.webp", description: "", linkedin: "", },
	{name: "Philipp Wolters", department: "Industry", management: "Mentor Industry", studies: "M.Sc Robitics, Coginition, Intelligence", image: "philipp_wolters.webp", description: "Passionate about Machine Learning, Computer Vision & Highly Automated Driving", linkedin: "https://www.linkedin.com/in/philippwolters/", },
    {name: "Richard Gaus", department: "Industry", management: "Mentor Industry", studies: "M.D. Informatics,Medicine", image: "richard_gaus.webp", description: "Passionate about the potential of AI to improve human physical and mental health", linkedin: "https://www.linkedin.com/in/richardgaus/", },
    
    // ACTIVE MEMBERS
	{name: "Aditya Shantaram Sawant", department: "Education", management: "Active member", studies: "M.Sc Electrical Engineering", image: "aditya_sawant.webp", description: "", linkedin: "", },
	{name: "Alex Pokras", department: "Industry", management: "Active member", studies: "B.Sc Computer Science", image: "alex_pokras.webp", description: "Starting my AI journey in my second semester at TUM", linkedin: "", },
	{name: "Alisha Riecker", department: "Community", management: "Active member", studies: "M.Sc Mathematics in Data Science", image: "alisha_riecker.webp", description: "", linkedin: "", },
    {name: "Amela Gjishti", department: "Education", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Anna Masiuta", department: "Industry", management: "Active member", studies: "B.Sc Computational Linguistics", image: "anna_masiuta.webp", description: "Efficient", linkedin: "https://www.linkedin.com/in/anna-masiuta-786210198/", },
    {name: "Artem Evdokimov", department: "Makeathon", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Antonija Krajcheva", department: "Makeathon", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Arturo Guridi", department: "Community", management: "Active member", studies: "M.Sc Mechatronics & Robotics", image: "arturo_guridi.webp", description: "", linkedin: "", },
    {name: "Bartlomiej Jezierski", department: "Marketing & PR", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Barnabás Börcsök", department: "Education", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Berinyuy Basil Shiynyuy", department: "Community", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Bruno Fernandes Maione", department: "Education", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Camilo Requena Witzig", department: "Marketing & PR", management: "Active member", studies: "M.Sc Robitics, Coginition, Intelligence", image: "camilo_requena_witzig.webp", description: "", linkedin: "", },
    {name: "Can Kayalan", department: "Venture", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Christoph Jasper", department: "Marketing & PR", management: "Active member", studies: "M.Sc Management & Technology", image: "christoph_jasper.webp", description: "Interested in generative ML and untapped markets", linkedin: "https://www.linkedin.com/in/christoph-jasper-1a9255151", },
    {name: "Christoph Waffler", department: "Industry", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Daniel Grittner", department: "IT & Infrastructure", management: "Active member", studies: "B.Sc Informatics", image: "daniel_grittner.webp", description: "Passionate about Tech and Entrepreneurship", linkedin: "https://www.linkedin.com/in/daniel-m-grittner/", },
    {name: "Danylo Movchan", department: "Industry", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Deepak Raj Gopal Gnanasekaran", department: "Education", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Emily Eppinger", department: "Venture", management: "Active member", studies: "B.Sc Medicine", image: "emily_eppinger.webp", description: "", linkedin: "", },
    {name: "Fabian Englbrecht", department: "Education", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Fabian Schaumann", department: "Education", management: "Active member", studies: "M.Sc Business Administration", image: "fabian_schaumann.webp", description: "", linkedin: "https://www.linkedin.com/in/fabian-schaumann/", },
	{name: "Fabius Sasse", department: "Venture", management: "Active member", studies: "M.Sc Management & Technology", image: "fabius_sasse.webp", description: "At the intersection of VC, Startups and AI", linkedin: "https://www.linkedin.com/in/fabius-sasse/", },
    {name: "Fabian Klövekorn", department: "Venture", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Felix Dietrich", department: "Legal & Finance", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Filippo Kiessler", department: "Partners & Sponsors", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Flora Geske ", department: "Partners & Sponsors", management: "Active member", studies: "M.Sc Finance & Information Management", image: "flora_geske.webp", description: "", linkedin: "", },
	{name: "Iana Makhonina", department: "Industry", management: "Active member", studies: "B.Sc Computational Linguistics,Informatics", image: "iana_makhonina.webp", description: "Excited about teaching AI to fully get my sarcastic jokes", linkedin: "https://www.linkedin.com/in/iana-makhonina-110748200/", },
    {name: "Isabella Espirini", department: "Marketing & PR", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Jan Boysen", department: "Legal & Finance", management: "Active member", studies: "M.Sc Robitics, Coginition, Intelligence", image: "person.webp", description: "", linkedin: "", },
    {name: "Jan-Oliver Seidenfuss", department: "Makeathon", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Johannes Pfannschmidt", department: "Legal & Finance", management: "Active member", studies: "B.Sc Informatics", image: "person.webp", description: "", linkedin: "", },
    {name: "Jonathan Lersch", department: "Makeathon", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Lamin Yannick Rubas", department: "Community", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Leopold Wieser", department: "Community", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Luca Dombetzki", department: "Partners & Sponsors", management: "Active member", studies: "M.Sc Finance & Information Management", image: "luca_dombetzki.webp", description: "", linkedin: "https://www.linkedin.com/in/luca-dombetzki/", },
    {name: "Luca Dombetzki", department: "Community", management: "Active member", studies: "M.Sc Finance & Information Management", image: "luca_dombetzki.webp", description: "", linkedin: "https://www.linkedin.com/in/luca-dombetzki/", },
	{name: "Malika Sanhinova", department: "IT & Infrastructure", management: "Active member", studies: "Computer Science", image: "malika_sanhinova.webp", description: "", linkedin: "https://www.linkedin.com/in/malika-sanhinova-732845194/", }, 
    {name: "Mariia Bogatyreva", department: "Marketing & PR", management: "Active member", studies: "B.Sc Information Systems", image: "mariia_bogatyreva.webp", description: "Applying AI to every area of our lives", linkedin: "https://www.linkedin.com/in/mariia-bogatyreva", },
    {name: "Marianne Kivikangasr", department: "Marketing & PR", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Marta Hasny", department: "Makeathon", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Martin Ganahl", department: "Partners & Sponsors", management: "Active member", studies: "M.Sc Electrical Engineering", image: "martin_ganahl.webp", description: "Waiting for AI to steal my job", linkedin: "https://www.linkedin.com/in/martin-ganahl-78a17014b/", },
	{name: "Max Prokopp", department: "Marketing & PR", management: "Active member", studies: "M.Sc Business Administration", image: "max_prokopp.webp", description: "", linkedin: "", },
    {name: "Mehdi Bhouri", department: "Legal & Finance", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Mohammed Kamran", department: "Education", management: "Active member", studies: "M.Sc Informatics", image: "mohammed_kamran.webp", description: "", linkedin: "", },
    {name: "Mujtaba Shahid Faizi", department: "Makeathon", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Naemi Stolte", department: "Community", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Nektarios Totikos", department: "Venture", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Nico Hermann", department: "Industry", management: "Active member", studies: "M.Sc Robitics, Coginition, Intelligence", image: "nico_hermann.webp", description: "", linkedin: "", },
	{name: "Nicolas Seppich", department: "Industry", management: "Active member", studies: "M.Sc Robitics, Coginition, Intelligence", image: "nicolas_seppich.webp", description: "", linkedin: "", },
	{name: "Nikita Makarov", department: "Partners & Sponsors", management: "Active member", studies: "M.Sc Data Engineering and Analytics", image: "nikita_makarov.webp", description: "", linkedin: "", },
	{name: "Nikolaus Pinger", department: "Industry", management: "Active member", studies: "M.Sc Robitics, Coginition, Intelligence", image: "nikolaus_pinger.webp", description: "Interested in Machine Learning, Product Development and Sustainability.", linkedin: "https://www.linkedin.com/in/nikolaus-pinger/", },
    {name: "Nils Jacobsen", department: "IT & Infrastructure", management: "Active member", studies: "Interaction Design", image: "nils_jacobsen.webp", description: "", linkedin: "https://www.linkedin.com/in/nils-jacobsen/", },
	{name: "Nora Walkembach", department: "Marketing & PR", management: "Active member", studies: "M.Sc Robitics, Coginition, Intelligence", image: "nora_walkembach.webp", description: "", linkedin: "", },
    {name: "Oleksandr Shulhin", department: "Partners & Sponsors", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Oliver Kovacs", department: "Community", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Pavel Czempin", department: "Education", management: "Active member", studies: "M.Sc Informatics", image: "pavel_czempin.webp", description: "Student researcher interested in AI safety and beneficial AI", linkedin: "https://www.linkedin.com/in/pavel-czempin/", },
    {name: "Peter So", department: "Venture", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Ramona Dombetzki", department: "IT & Infrastructure", management: "Active member", studies: "Interaction Design", image: "ramona_dombetzki.webp", description: "", linkedin: "https://www.linkedin.com/in/ramona-dombetzki-9a52531a0/", }, 
    {name: "Ruslan Mammadov", department: "Industry", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Sebastian Schleicher", department: "Makeathon", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Sebastian Wilhelm", department: "Partners & Sponsors", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Shahbaz Khan", department: "IT & Infrastructure", management: "Active member", studies: "M.Sc Informatics", image: "shahbaz_khan.webp", description: "", linkedin: "", },
	{name: "Suren Sritharan", department: "IT & Infrastructure", management: "Active member", studies: "Computer Science", image: "suren_sritharan.webp", description: "", linkedin: "https://www.linkedin.com/in/suren3141/", },
    {name: "Syed Husain Mustafa", department: "Education", management: "Active member", studies: "M.Sc Informatics", image: "syed_husain_mustafa.webp", description: "", linkedin: "", },
	{name: "Tarak Amouri", department: "Partners & Sponsors", management: "Active member", studies: "B.Sc Mathematics", image: "tarak_amouri.webp", description: "", linkedin: "", },
    {name: "Tim Traunecker", department: "Partners & Sponsors", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Tom Dörr", department: "IT & Infrastructure", management: "Active member", studies: "M.Sc Informatics", image: "tom_doerr.webp", description: "Interested in RL and adversarial examples", linkedin: "https://www.linkedin.com/in/tom-d%C3%B6rr-912607126/", },
    {name: "Veronika Lämmlein", department: "Makeathon", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Vinicius A. M. dos Santos", department: "Legal & Finance", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
	{name: "Wei Herng Choong", department: "Community", management: "Active member", studies: "M.Sc Electrical Engineering", image: "weiherng_choong.webp", description: "Focus on DL in Computer Vision and NLP", linkedin: "https://www.linkedin.com/in/weiherng/", },
    {name: "Wenceslao Villegas", department: "Partners & Sponsors", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Yarhy Flores", department: "Venture", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    {name: "Yuliana Poliakova", department: "Venture", management: "Active member", studies: "", image: "person.webp", description: "", linkedin: "", },
    
    // MEMBERS ON PAUSE
    //{name: "Abdullah Al-Hatem", department: "Partners & Sponsors", management: "membership PAUSED", studies: "M.Sc Robitics, Coginition, Intelligence", image: "abdullah_alhatem.webp", description: "Internet of Things Enthusiast", linkedin: "https://www.linkedin.com/in/abhatem/", },
    //{name: "Adam Misik", department: "Makeathon", management: "membership PAUSED", studies: "M.Sc Electrical Engineering", image: "adam_misik.webp", description: "", linkedin: "", },
    //{name: "Anna Mrosik", department: "IT & Infrastructure", management: "membership PAUSED", studies: "M.Sc Electrical Engineering", image: "anna_mrosik.webp", description: "", linkedin: "", },
    //{name: "Jonas Jürß", department: "Marketing & PR", management: "membership PAUSED", studies: "B.Sc Informatics", image: "jonas_jürß.webp", description: "", linkedin: "", },
    //{name: "Marlon Demandt", department: "Venture", management: "membership PAUSED", studies: "B.Sc Politics & Technology", image: "person.webp", description: "", linkedin: "", },
    //{name: "Christian Wallenwein", department: "Venture", management: "Active member", studies: "B.Sc Informatics", image: "christian_wallenwein.webp", description: "", linkedin: "", },
    
    // ALUMNI
    //{name: "Narine Harutyunyan", department: "Makeathon", management: "Active member", studies: "M.Sc Consumer Science", image: "narine_harutyunyan.webp", description: "", linkedin: "", },
    //{name: "Abhinav Krishnan", department: "Marketing", management: "Alumni", studies: "", image: "person.webp", description: "", linkedin: "", },
    //{name: "Hendrik Maier", department: "Venture", management: "Alumni", studies: "M.Sc Management & Technology", image: "person.webp", description: "", linkedin: "", }, 
    //{name: "Markus Böbel", department: "Makeathon", management: "Alumni", studies: "Information Systems", image: "person.webp", description: "", linkedin: "", }, 
    //{name: "Julia Kabalar", department: "Makeathon", management: "Active member", studies: "M.Sc Robitics, Coginition, Intelligence", image: "julia_kabalar.webp", description: "Robotic Software Developer with a passion for Computer Vision, Data and Mobility", linkedin: "https://www.linkedin.com/in/julia-kabalar/", },
	//{name: "Kejsi Struga", department: "Partners & Sponsors", management: "Active member", studies: "M.Sc Business Administration,Informatics", image: "kejsi_struga.webp", description: "", linkedin: "", },
    //{name: "Omar Eladawy", department: "Education", management: "Active member", studies: "M.Sc Robitics, Coginition, Intelligence", image: "omar_eladawy.webp", description: "", linkedin: "https://www.linkedin.com/in/omareladawy/", },
    //{name: "Tim Tomov", department: "Education", management: "Active member", studies: "B.Sc Information Systems", image: "tim_tomov.webp", description: "", linkedin: "", },
    //{name: "Umar Muhammad", department: "Venture", management: "Active member", studies: "M.Sc Applied and Engineering Physics", image: "muhammad_umar.webp", description: "", linkedin: "", },
    //{name: "Claudius Seitz", department: "Makeathon", management: "Active member", studies: "B.Sc Informatics", image: "claudius_seitz.webp", description: "", linkedin: "", },
	
	
];

let departments = ["Management", "Founders", "Makeathon", "Venture", "Industry", "Education", "IT & Infrastructure", "Legal & Finance", "Community", "Marketing & PR", "Partners & Sponsors"];
let active = 0;

function team_button_pressed(value) {
    document.getElementById("department_button_" + active).style.backgroundColor = "#474747";
    active = value;
    document.getElementById("department_button_" + active).style.backgroundColor = "#6812f4";

    team_area(value);
}

function show_members(members)
{
    var root = document.getElementsByClassName('team-div')[0];
    root.textContent = '';
    var i=0;
    var num_stud=8;
    var newdiv;
    members.forEach(function(item)
    {
        member = document.createElement('div');
        member.classList.add("card");
        member.style.backgroundImage = "url('assets/img/members/" + item.image + "')"; 
        root.appendChild(member);
        member_content = document.createElement('div');
        member_content.classList.add("content");
        member.appendChild(member_content);
        role = item.management;
        if (role == '0') {
            role = " </br>";
        }
        content = '<h2 class="title">'+item.name+'</h2><h3 class="title subtitle">'+role+'</h3><p class="description">'+item.description+'</p><p class="studies" style="color: #ffffff;">'+item.studies+'</p><a href="'+item.linkedin+'"><i class="fa fa-linkedin member-linkedin"</i></a>';
        member_content.innerHTML = content;
        
    });
}

function team_area(department)
{
    let members = []
    if (department == 0) {
        all_members.forEach(function(item)
        {
            if (item.management != "Active member" && item.management != "membership PAUSED") {
                if(!String(item.management).includes("Alumni")) {
                    if (!String(item.management).includes("Founder")) {
                        members.push(item);
                    }
                }
            }
        });
    } else {
        let dep_string = departments[department];
        all_members.forEach(function(item)
        {
            if (item.department == dep_string && item.management != "0") {
                members.push(item);
            }
        });
        all_members.forEach(function(item)
        {
            if (item.department == dep_string && item.management == "0") {
                members.push(item);
            }
        });
    }
    
    show_members(members);
}

$(document).ready ( function(){
   team_area(0);
});