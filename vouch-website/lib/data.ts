// All school content lives here so it can be updated without touching the page layouts.

export const school = {
  name: "VOUCH Group of Schools",
  fullName: "Voluntary Organisation for the Upliftment of Children",
  address: "1 National Heroes Circle, Kingston 4",
  phone: "876-922-5715",
  phoneHref: "tel:8769225715",
  email: "vouchgroupofschools@yahoo.com",
  officeHours: "Mon – Fri, 7:30am – 5:00pm",
  tagline: "Where children are guided, supported and encouraged to flourish.",
  facebook: "https://www.facebook.com/people/Vouch-Basic-School/100093157604951/",
  instagram: "https://www.instagram.com/vouch_basic_school/",
  parentOrg: "https://www.gorefamilyfoundation.org/",
  mapEmbed: "https://www.google.com/maps?q=1+National+Heroes+Circle,+Kingston,+Jamaica&output=embed",
  mapDirections: "https://www.google.com/maps/dir/?api=1&destination=1+National+Heroes+Circle,+Kingston,+Jamaica",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/admissions/", label: "Admissions & FAQ" },
  { href: "/contact/", label: "Contact" },
];

export const schools = [
  { name: "Nursery", tag: "For toddlers", icon: "heart", bg: "bg-peach", fg: "text-coral", tilt: "-rotate-[1.5deg]" },
  { name: "Mary Issa Preschool", tag: "Pre 1 & Pre 2", icon: "sprout", bg: "bg-lemon", fg: "text-[#9A7600]", tilt: "rotate-1" },
  { name: "Sylvia Foote Basic School", tag: "K1 – K3", icon: "book", bg: "bg-sky", fg: "text-vouch-blue", tilt: "-rotate-1" },
  { name: "Special Education Unit", tag: "Individualised support & therapy services", icon: "hand", bg: "bg-mint", fg: "text-leaf", tilt: "rotate-[1.5deg]" },
] as const;

export const programs = [
  { title: "Education", img: "/images/classroom.jpeg", w: 1200, h: 1164, alt: "Children reading together in class",
    text: "A strong academic foundation, personalised support and opportunities to develop critical skills." },
  { title: "Karate", img: "/images/karate.jpeg", w: 1229, h: 1142, alt: "Student in a karate uniform",
    text: "Discipline, focus and self-confidence, with physical fitness and respect for others." },
  { title: "Music", img: "/images/music.jpeg", w: 1280, h: 832, alt: "Students playing instruments",
    text: "Creativity and self-expression that grow musical skills and a love for the arts." },
];

export const marquee = ["Nursery", "Mary Issa Preschool", "Sylvia Foote Basic School", "Special Education Unit",
  "Karate", "Music", "Swimming", "Football", "4H Club", "Aftercare"];

export const beliefs = [
  { icon: "heart", bg: "bg-sky", fg: "text-vouch-blue", text: "Every child deserves a safe, nurturing environment that fosters both academic and emotional growth." },
  { icon: "star", bg: "bg-lemon", fg: "text-[#B58A00]", text: "Learning happens best through play, exploration and hands-on experiences." },
  { icon: "hand", bg: "bg-mint", fg: "text-leaf", text: "Inclusive education benefits all children by teaching empathy, diversity and collaboration." },
  { icon: "users", bg: "bg-peach", fg: "text-coral", text: "Strong partnerships between educators and families are essential for a child's success." },
] as const;

export const mission =
  "VOUCH is a voluntary social organization dedicated to providing vital services for children and their families through healthcare, education and training towards the realization of their full potential.";
export const vision =
  "To be the model social institution providing excellent customer care through an integrated package of services including healthcare, education, training, parenting and counselling — with state-of-the-art infrastructure, a committed cadre of volunteers and highly specialized, professional staff.";

export const principalLetter = [
  "It is with great pleasure and pride that I welcome you to VOUCH Group of Schools, a place where every child's journey is valued, nurtured, and celebrated.",
  "Over the years, our institution has been dedicated to providing exceptional early childhood and primary education while ensuring that children with diverse learning needs receive the specialized support they deserve. Our integrated approach across Nursery, Preschool, Basic Education, and our Special Education Unit creates a unique educational ecosystem where all children learn, grow, and thrive together.",
  "At VOUCH, we believe that education is not merely about academic achievement but about cultivating curious minds, compassionate hearts, and resilient spirits. Our dedicated team of educators works tirelessly to create safe, stimulating, and inclusive environments where each child can discover their unique potential.",
  "Our inclusive Special Education Unit provides individualized support, therapy services, and adapted learning strategies for children with diverse abilities, ensuring all students reach their full potential.",
  "Thank you for considering VOUCH Group of Schools as your partner in your child's educational journey.",
];

export const board = {
  leads: [
    { role: "Chairman of the VOUCH Board", name: "Mrs. Alrea Washington Hoilett", bg: "bg-sky" },
    { role: "Chairman of the School Board", name: "Mr. Dorian Dixon", bg: "bg-lemon" },
    { role: "Vice Chairman of the School Board", name: "Michael Sutherland", bg: "bg-mint" },
  ],
  members: ["Mrs. Sheron Glo Gilzean", "Mrs. Debra-ann Anderson Matthews", "Mrs. Kaleela Bromfield",
    "Karen Kay Chambers", "Mrs. Claudette Johnson", "Ms. Lola Richards"],
};

export const teachers = [
  { school: "Mary Issa Preschool", color: "text-[#9A7600]", chip: "bg-lemon", people: [
    { photo: 1, name: "Callique Campbell", cls: "Pre 1" },
    { photo: 18, name: "Anastasia Williams", cls: "Pre 1" },
    { photo: 19, name: "Britanny Fisher", cls: "Pre 2" },
    { photo: 4, name: "Shamise Johnson", cls: "Pre 2" },
    { photo: 17, name: "Karlene Evans", cls: "Supervisor" },
  ]},
  { school: "Sylvia Foote Basic School", color: "text-vouch-blue", chip: "bg-sky", people: [
    { photo: 5, name: "Mrs Jennifer Whyte-Reid", cls: "K1" },
    { photo: 6, name: "Angela Walker", cls: "K1" },
    { photo: 7, name: "Karen-Kay Chambers", cls: "K1" },
    { photo: 8, name: "Eileen Clarke", cls: "K1" },
    { photo: 9, name: "Nadine Thomas", cls: "K1" },
    { photo: 10, name: "Mrs Natanya Messam-Johnson", cls: "K2" },
    { photo: 11, name: "Shantina Harley", cls: "K2" },
    { photo: 13, name: "Nedra Clarke", cls: "K3" },
    { photo: 14, name: "Johnique Scott", cls: "K3" },
  ]},
  { school: "Special Education Unit", color: "text-leaf", chip: "bg-mint", people: [
    { photo: 15, name: "Aveena Bancroft", cls: "Special Education Unit" },
    { photo: 16, name: "Mrs Nicola Stewart-Wynter", cls: "Special Education Unit" },
  ]},
];

export const news = [
  { feature: true, source: "Jamaica Information Service", date: "January 2015", pin: "bg-coral",
    title: "VOUCH launches SAVER project to assist children with learning disabilities",
    text: "A new programme at VOUCH offers diagnostic services and support for young children aged 2 to 5 years 11 months. Students of Sylvia Foote Basic School performed for the Minister of Education at the launch, with the Ministry, the Jamaica Teachers' Association and the Women's Leadership Initiative backing the project.",
    href: "https://jis.gov.jm/vouch-launches-saver-project-assist-children-learning-disabilities/" },
  { source: "Jamaica Information Service", date: "May 2014", pin: "bg-leaf",
    title: "Ministry of Education and VOUCH to provide diagnostic services for special needs children",
    text: "The Ministry partnered with VOUCH to provide diagnostic services for children with special needs in Kingston.",
    href: "https://jis.gov.jm/moe-vouch-provide-diagnostic-services-special-needs-children/" },
  { source: "Jamaica Information Service", date: "February 2014", pin: "bg-sun",
    title: "Development of VOUCH as special needs centre begins September",
    text: "The Jamaica Teachers' Association donated 10 computers, valued at $600,000, to VOUCH's refurbished lab. The Minister of Education described the planned centre as the only state-of-the-art assessment, diagnostic and therapeutic facility for early childhood.",
    href: "https://jis.gov.jm/development-vouch-special-needs-centre-begins-september/" },
  { source: "Jamaica Observer", date: "October 2013", pin: "bg-vouch-blue", observer: true,
    title: "VOUCH to become centre for assessment of special needs children",
    text: "Plans were announced to develop VOUCH as an assessment centre. The article notes VOUCH was created in 1979 by merging the Child Welfare Association and the Jamaica Children's Service Society.",
    href: "https://www.jamaicaobserver.com/2013/10/12/vouch-to-become-centre-for-assessment-of-special-needs-children" },
];

export const requirements = [
  { title: "Completed application form" },
  { title: "2 passport-size photographs" },
  { title: "Copy of birth certificate", note: "Bring the original for verification" },
  { title: "Immunisation passport", note: "Copy of pages 8 – 14" },
];

export const tuition = [
  { label: "Sylvia Foote Basic School", value: "JMD $35,000" },
  { label: "Mary Issa Preschool", value: "JMD $30,000" },
];
export const extraFees = [
  { label: "Registration (non-refundable)", value: "JMD $2,000" },
  { label: "Uniform (not sold by the school)", value: "JMD $3,500 each" },
];
export const activityFees = [
  { label: "Karate", value: "JMD $4,500 / month" },
  { label: "Swimming", value: "JMD $6,500 / month" },
  { label: "Football", value: "JMD $3,500 / month" },
  { label: "4H Club", value: "JMD $3,500 / month" },
];
export const hours = [
  { label: "Nursery", value: "7:30am – 5:00pm" },
  { label: "Preschool", value: "7:30am – 4:30pm" },
  { label: "Basic School & Special Education Unit", value: "7:30am – 2:30pm" },
];
