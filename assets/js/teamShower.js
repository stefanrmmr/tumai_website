let all_members = [
    {name: "Jakob Kruse", department: "IT & Infrastructure", management: "President, Mentor, Teamlead", studies: "M.Sc Electrical Engineering", image: "jakob_kruse.webp", description: "Focus on Software Engineering and AI", linkedin: "https://www.linkedin.com/in/jakob-kruse-b7293a197/", },
    {name: "Tobias Zeulner", department: "Makeathon", management: "President, Mentor", studies: "M.Sc Robitics, Coginition, Intelligence", image: "tobias_zeulner.webp", description: "Passion for leadership in a tech-oriented environment", linkedin: "https://www.linkedin.com/in/tobias-zeulner-893080169/", },
    {name: "Nicolas Remerscheid", department: "Community", management: "President, Mentor", studies: "M.Sc Data Engineering and Analytics", image: "nicolas_remerscheid.webp", description: "Privacy Preserving ML Enthusiast", linkedin: "https://www.linkedin.com/in/nicolas-remerscheid/", },
	{name: "Abdullah Al-Hatem", department: "Partners & Sponsors", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "abdullah_alhatem.webp", description: "Internet of Things Enthusiast", linkedin: "https://www.linkedin.com/in/abhatem/", },
	{name: "Abhinav Krishnan ", department: "Marketing & PR", management: "0", studies: "M.Sc Aerospace,ESPACE", image: "abhinav_krishnan.webp", description: "", linkedin: "", },
	{name: "Adam Misik", department: "Makeathon", management: "0", studies: "M.Sc Electrical Engineering", image: "adam_misik.webp", description: "", linkedin: "", },
	{name: "Aditya Shantaram Sawant", department: "Education", management: "0", studies: "M.Sc Electrical Engineering", image: "person.webp", description: "", linkedin: "", },
	{name: "Alex Pokras", department: "Industry", management: "0", studies: "B.Sc Computer Science", image: "alex_pokras.webp", description: "Starting my AI journey in my second semester at TUM", linkedin: "", },
	{name: "Alexander Schwarz", department: "Partners & Sponsors", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "alexander_schwarz.webp", description: "Passionate about innovations through AI", linkedin: "https://www.linkedin.com/in/alxschwrz", },
	{name: "Alisha Riecker", department: "Community", management: "0", studies: "M.Sc Mathematics in Data Science", image: "alisha_riecker.webp", description: "", linkedin: "", },
	{name: "Andreas Döring", department: "Education", management: "Teamlead", studies: "M.Sc Robitics, Coginition, Intelligence", image: "andreas_doering.webp", description: "Robotics & Vision", linkedin: "https://www.linkedin.com/in/andreas-doering", },
	{name: "Anna Masiuta", department: "Industry", management: "0", studies: "B.Sc Computational Linguistics", image: "anna_masiuta.webp", description: "Efficient", linkedin: "https://www.linkedin.com/in/anna-masiuta-786210198/", },
	{name: "Anna Mrosik", department: "IT & Infrastructure", management: "0", studies: "M.Sc Electrical Engineering", image: "anna_mrosik.webp", description: "", linkedin: "", },
	{name: "Arturo Guridi", department: "Community", management: "0", studies: "M.Sc Mechatronics & Robotics", image: "arturo_guridi.webp", description: "", linkedin: "", },
	{name: "Camilo Requena Witzig", department: "Marketing & PR", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "person.webp", description: "", linkedin: "", },
	{name: "Christian Wallenwein", department: "Venture", management: "0", studies: "B.Sc Informatics", image: "christian_wallenwein.webp", description: "", linkedin: "", },
	{name: "Christoph Jasper", department: "Education", management: "0", studies: "M.Sc Management & Technology", image: "christoph_jasper.webp", description: "Interested in generative ML and untapped markets", linkedin: "https://www.linkedin.com/in/christoph-jasper-1a9255151", },
	{name: "Christoph Kecht", department: "Legal & Finance", management: "0", studies: "M.Sc Finance & Information Management", image: "christoph_kecht.webp", description: "Passionate about AI-based Information Systems", linkedin: "https://www.linkedin.com/in/christoph-kecht/", },
	{name: "Claudius Seitz", department: "Makeathon", management: "0", studies: "B.Sc Informatics", image: "person.webp", description: "", linkedin: "", },
	{name: "Daniel Grittner", department: "Venture", management: "0", studies: "B.Sc Informatics", image: "daniel_grittner.webp", description: "Passionate about Tech and Entrepreneurship", linkedin: "https://www.linkedin.com/in/daniel-m-grittner/", },
	{name: "David Podolskyi", department: "Venture", management: "Teamlead", studies: "B.Sc Information Systems", image: "david_podolskyi.webp", description: "", linkedin: "", },
	{name: "Ekin Karabulut", department: "Makeathon", management: "Teamlead", studies: "M.Sc Robitics, Coginition, Intelligence", image: "ekin_karabulut.webp", description: "Passionate about ML applications in Healthcare", linkedin: "https://www.linkedin.com/in/ekin-karabulut-40baa2187/", },
	{name: "Emily Eppinger", department: "Venture", management: "0", studies: "B.Sc Medicine", image: "person.webp", description: "", linkedin: "", },
	{name: "Fabian Schaumann", department: "Makeathon", management: "0", studies: "M.Sc Business Administration", image: "fabian_schaumann.webp", description: "", linkedin: "", },
	{name: "Fabius Sasse", department: "Community", management: "0", studies: "M.Sc Management & Technology", image: "fabius_sasse.webp", description: "At the intersection of VC, Startups and AI", linkedin: "https://www.linkedin.com/in/fabius-sasse/", },
	{name: "Ferdinand Eberding", department: "Legal & Finance", management: "Teamlead", studies: "M.Sc Robitics, Coginition, Intelligence", image: "ferdinand_eberding.webp", description: "Open minded, technical student that wants to make an impact.", linkedin: "", },
	{name: "Flora Geske ", department: "Partners & Sponsors", management: "0", studies: "M.Sc Finance & Information Management", image: "flora_geske.webp", description: "", linkedin: "", },
	{name: "Hai Dang", department: "Community", management: "0", studies: "PhD Human Computer Interaction", image: "person.webp", description: "", linkedin: "", },
	{name: "Hendrik Maier", department: "Venture", management: "0", studies: "M.Sc Management & Technology", image: "person.webp", description: "", linkedin: "", },
	{name: "Iana Makhonina", department: "Industry", management: "0", studies: "B.Sc Computational Linguistics,Informatics", image: "iana_makhonina.webp", description: "Excited about teaching AI to fully get my sarcastic jokes", linkedin: "https://www.linkedin.com/in/iana-makhonina-110748200/", },
	{name: "Jan Boysen", department: "Legal & Finance", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "person.webp", description: "", linkedin: "", },
	{name: "Johannes Pfannschmidt", department: "Legal & Finance", management: "0", studies: "B.Sc Informatics", image: "person.webp", description: "", linkedin: "", },
	{name: "Jonas Jürß", department: "Marketing & PR", management: "0", studies: "B.Sc Informatics", image: "person.webp", description: "", linkedin: "", },
	{name: "Julia Kabalar", department: "Makeathon", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "julia_kabalar.webp", description: "Robotic Software Developer with a passion for Computer Vision, Data and Mobility", linkedin: "https://www.linkedin.com/in/julia-kabalar/", },
	{name: "Kejsi Struga", department: "Partners & Sponsors", management: "0", studies: "M.Sc Business Administration,Informatics", image: "kejsi_struga.webp", description: "", linkedin: "", },
	{name: "Kerstin Forster", department: "Education", management: "Teamlead", studies: "M.Sc Electrical Engineering", image: "kerstin_forster.webp", description: "Committed to encouraging beneficial AI", linkedin: "https://www.linkedin.com/in/kerstin-forster-746763201/", },
	{name: "Leonard Wolters", department: "Venture", management: "Teamlead", studies: "M.Sc Management & Innovation", image: "leonard_wolters.webp", description: "", linkedin: "", },
	{name: "Leonhard Zirus", department: "Marketing & PR", management: "Teamlead", studies: "B.Sc Informatics", image: "leonhard_zirus.webp", description: "Society oriented thinker, entrepreneur and tech-enthusiast", linkedin: "https://www.linkedin.com/in/leonhard-zirus/", },
	{name: "Leonie Freisinger", department: "Partners & Sponsors", management: "Teamlead", studies: "M.Sc Mechatronics & Robotics", image: "leonie_freisinger.webp", description: "", linkedin: "", },
	{name: "Luca Dombetzki", department: "Partners & Sponsors", management: "Mentor", studies: "M.Sc Finance & Information Management", image: "luca_dombetzki.webp", description: "", linkedin: "", },
	{name: "Mariia Bogatyreva", department: "Marketing & PR", management: "0", studies: "B.Sc Information Systems", image: "mariia_bogatyreva.webp", description: "Applying AI to every area of our lives", linkedin: "https://www.linkedin.com/in/mariia-bogatyreva", },
	{name: "Marlon Demandt", department: "Venture", management: "0", studies: "B.Sc Politics & Technology", image: "person.webp", description: "", linkedin: "", },
	{name: "Martin Ganahl", department: "Partners & Sponsors", management: "0", studies: "M.Sc Electrical Engineering", image: "martin_ganahl.webp", description: "Waiting for AI to steal my job", linkedin: "https://www.linkedin.com/in/martin-ganahl-78a17014b/", },
	{name: "Max Prokopp", department: "Marketing & PR", management: "0", studies: "M.Sc Business Administration", image: "max_prokopp.webp", description: "", linkedin: "", },
	{name: "Maximilian Forstenhäusler", department: "IT & Infrastructure", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "maximilian_forstenhaeusler.webp", description: "Enthusiastic about applied ML and DL", linkedin: "https://www.linkedin.com/in/maximilian-forstenhaeusler/", },
	{name: "Mohammed Kamran", department: "Education", management: "0", studies: "M.Sc Informatics", image: "person.webp", description: "", linkedin: "", },
	{name: "Mohd Toaha Umar", department: "Community", management: "Teamlead", studies: "M.Sc Communications Engineering", image: "mohd_toaha_umar.webp", description: "", linkedin: "", },
	{name: "Narine Harutyunyan", department: "Makeathon", management: "0", studies: "M.Sc Consumer Science", image: "person.webp", description: "", linkedin: "", },
	{name: "Nejira Hadzalic", department: "Makeathon", management: "0", studies: "M.Sc Electrical Engineering", image: "nejira_hadzalic.webp", description: "Passionate about future ML applications", linkedin: "https://www.linkedin.com/in/nejira-hadzalic-595863181/", },
	{name: "Nico Hermann", department: "Industry", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "nico_hermann.webp", description: "", linkedin: "", },
	{name: "Nicolas Seppich", department: "Industry", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "nicolas_seppich.webp", description: "", linkedin: "", },
	{name: "Nikita Makarov", department: "Community", management: "0", studies: "M.Sc Data Engineering and Analytics", image: "person.webp", description: "", linkedin: "", },
	{name: "Nikolaus Pinger", department: "Industry", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "nikolaus_pinger.webp", description: "Interested in Machine Learning, Product Development and Sustainability.", linkedin: "https://www.linkedin.com/in/nikolaus-pinger/", },
	{name: "Nora Walkembach", department: "Marketing & PR", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "nora_walkembach.webp", description: "", linkedin: "", },
	{name: "Omar Hedeya", department: "Partners & Sponsors", management: "Teamlead", studies: "M.Sc Robitics, Coginition, Intelligence", image: "omar_hedeya.webp", description: "I love connecting ideas from different branches of human knowledge", linkedin: "https://www.linkedin.com/in/omar-hedeya-7698841b8/", },
	{name: "Patrick Remerscheid", department: "Venture", management: "0", studies: "M.Sc Robitics, Coginition, Intelligence", image: "patrick_remerscheid.webp", description: "Robotics & AI student with a background in mechanical engineering", linkedin: "https://www.linkedin.com/in/patrickremerscheid/", },
	{name: "Pavel Czempin", department: "Education", management: "0", studies: "M.Sc Informatics", image: "pavel_czempin.webp", description: "Student researcher interested in AI safety and beneficial AI", linkedin: "https://www.linkedin.com/in/pavel-czempin/", },
	{name: "Petar Petrov", department: "Makeathon", management: "Teamlead", studies: "M.Sc Informatics", image: "petar_petrov.webp", description: "", linkedin: "", },
	{name: "Philipp Wolters", department: "Industry", management: "Teamlead", studies: "M.Sc Robitics, Coginition, Intelligence", image: "philipp_wolters.webp", description: "Passionate about Machine Learning, Computer Vision & Highly Automated Driving", linkedin: "https://www.linkedin.com/in/philippwolters/", },
	{name: "Rafi Al Attrach", department: "Community", management: "Teamlead", studies: "B.Sc Information Systems", image: "rafi_attrach.webp", description: "Sitting at the intersection of IT & Business", linkedin: "https://www.linkedin.com/in/rafi-attrach-ab2a2b196/", },
	{name: "Richard Gaus", department: "Industry", management: "Teamlead", studies: "M.D. Informatics,Medicine", image: "richard_gaus.webp", description: "Passionate about the potential of AI to improve human physical and mental health", linkedin: "https://www.linkedin.com/in/richardgaus/", },
	{name: "Sebastian Lettner", department: "Legal & Finance", management: "Mentor", studies: "M.Sc Electrical Engineering", image: "sebastian_lettner.webp", description: "", linkedin: "", },
	{name: "Shahbaz Khan", department: "IT & Infrastructure", management: "0", studies: "M.Sc Informatics", image: "shahbaz_khan.webp", description: "", linkedin: "", },
	{name: "Stefan Rummer", department: "IT & Infrastructure", management: "Teamlead", studies: "B.Sc Electrical Engineering", image: "stefan_rummer.webp", description: "Enthusiastic about deep learning and predictive modeling", linkedin: "https://www.linkedin.com/in/stefanrmmr/", },
	{name: "Stefanie Manger", department: "Marketing & PR", management: "Teamlead", studies: "B.Sc Informatics", image: "stefanie_manger.webp", description: "Open minded and enthusiastic team player, always striving for the best", linkedin: "https://www.linkedin.com/in/stefanie-manger-29456b20b", },
	{name: "Syed Husain Mustafa", department: "Education", management: "0", studies: "M.Sc Informatics", image: "person.webp", description: "", linkedin: "", },
	{name: "Tara Gürel", department: "Legal & Finance", management: "0", studies: "B.Sc Management & Technology", image: "person.webp", description: "", linkedin: "", },
	{name: "Tarak Amouri", department: "Community", management: "0", studies: "B.Sc Mathematics", image: "person.webp", description: "", linkedin: "", },
	{name: "Tim Tomov", department: "Education", management: "0", studies: "B.Sc Information Systems", image: "person.webp", description: "", linkedin: "", },
	{name: "Tom Dörr", department: "IT & Infrastructure", management: "0", studies: "M.Sc Informatics", image: "tom_doerr.webp", description: "Interested in RL and adversarial examples", linkedin: "https://www.linkedin.com/in/tom-d%C3%B6rr-912607126/", },
	{name: "Umar Muhammad", department: "Venture", management: "Mentor", studies: "M.Sc Applied and Engineering Physics", image: "muhammad_umar.webp", description: "", linkedin: "", },
	{name: "Viktoria Harmel", department: "Industry", management: "0", studies: "B.Sc Management & Technology", image: "viktoria_harmel.webp", description: "Passion for AI applications having knowledge on different business use cases", linkedin: "", },
	{name: "Wei Herng Choong", department: "Community", management: "0", studies: "M.Sc Electrical Engineering", image: "weiherng_choong.webp", description: "Focus on DL in Computer Vision and NLP", linkedin: "https://www.linkedin.com/in/weiherng/", },
];

let departments = ["Management", "Makeathon", "Venture", "Industry", "Education", "IT & Infrastructure", "Legal & Finance", "Community", "Marketing & PR", "Partners & Sponsors"];
let active = 0;

function team_button_pressed(value) {
    document.getElementById("department_button_" + active).style.backgroundColor = "#45b69c";
    active = value;
    document.getElementById("department_button_" + active).style.backgroundColor = "#007bff";

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
            role = "Member";
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
            if (item.management != "0") {
                members.push(item);
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