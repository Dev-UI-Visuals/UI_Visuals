gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

var moreEvents = [
    {
        "profileImage": "/image/events/UPC_Design_Hunt.png",
        "name": "UPC Design Hunt",
        "description": "UI Visuals organized an exciting event called Design Hunt, aimed at providing a platform for students to showcase their creativity and design skills. The event focused on designing a mobile app with unique features for new UPC early birds. The event was executed successfully, thanks to the efforts and support of our members. The event aimed to challenge participants' creativity and problem-solving skills while promoting collaboration and teamwork. Participants were given the resources to design a mobile app with unique features for new UPC early birds, showcasing their skills and potential in the UI and Visual Design field. The event encouraged participants to explore their creativity and learn from their peers and community leaders.",
        "location": "Herald College, Naxal",
        "date": "2023-02-09",
        "headerImage": "/image/events/UPC_Design_Hunt_1.png"
    },
    {
        "profileImage": "/image/events/Vision_Quest.png",
        "name": "Vision Quest",
        "description": "UI Visuals organized a remarkable event to help +2 students interested in the field of IT. The event named Vision Quest: Sneak Peek into the Design World was organized to give aspiring software developers and designers a first-hand experience of the design process. The event was specially designed for +2 students who were looking forward to pursuing a career in the field of IT. The event focused on two key topics, namely 'Software Development' and 'UI/UX Design'. Both of these topics are critical to the IT industry, and understanding them is essential for anyone looking to make a career in the field. The event was curated by the community leaders who had years of experience in these fields and had a lot to share with the participants. The event was a great success, with many students attending and learning a lot about software development and UI/UX design. The participants were enthusiastic, and the experts' presentations were engaging and informative. Overall, the event was an excellent opportunity for +2 students to learn about the IT industry and gain valuable insights into software development and UI/UX design.",
        "location": "Herald College, Naxal",
        "date": "2022-09-01",
        "headerImage": "/image/events/Vision_Quest_1.png"
    },
    {
        "profileImage": "/image/events/Photoshop_Session.png",
        "name": "Photoshop Session",
        "description": "UI Visuals successfully organized a session on Photoshop Session for beginners. The event provided an opportunity for participants to learn how to use Photoshop tools to edit and manipulate images, as well as design minimalistic posters. The session was beneficial for students who are starting their journey in design and editing, as well as those who want to become familiar with other Adobe software in the future. Participants were able to book their seats by filling out a form and joining the event. UI Visuals hopes that the knowledge and skills gained from this event will be useful for participants in their future design endeavors.",
        "location": "Herald College, Naxal",
        "date": "2022-04-12",
        "headerImage": "/image/events/Photoshop_Session_1.png"
    },
    {
        "profileImage": "/image/events/Photography_Session.png",
        "name": "Photography Session",
        "headerImage": "/image/Events/Photography_Session_1.png",
        "description": "UI Visuals organized a photography session as a part of the Visual Mela event in the Herald Devfest 2021. The session featured guest speakers Mr. Oscar Shrestha, a professional photographer and Islington graduate, and Mr. Pratik Pradhan and Mr. Rakshak Bhusan Bajracharya as guest lecturers. The session was held at Kumari Hall, Kamalpokhari. Participants had the opportunity to learn about photography concepts, creativity, dos and don'ts while clicking photos, and real-life experiences from the guest speakers.Additionally, the guest tutors provided professional ideas on how to click better photos and also provided feedback on the photographs submitted by the participants on that very day. Overall, the session was a great opportunity for photography enthusiasts to learn from industry professionals and improve their photography skill.",
        "date": "2021-11-01",
        "location": "Kumari Hall"
    },
    {
        "profileImage": "/image/events/Figma_Session.png",
        "headerImage": "/image/events/Figma_Session_1.png",
        "name": "Figma Session",
        "description": "UI Visuals organized a Figma Session led by our community leader Ms. Nerisha Shrestha as a part of their Visual Mela 2021. This session was targeted towards beginners who are looking for guidance and a starting point for their design journey. Figma is a user-friendly web-based/desktop app that is useful for graphics designing and prototyping. It generates the code based on the design and can be used for wireframing websites, designing mobile app interfaces, prototyping, and creating social media posts.The session took place from today until the 30th of September, and participants were encouraged to bring their laptops to get hands-on experience with Figma tools and resources. UI Visuals was excited to share their knowledge and experience about interface designing with attendees. This Figma Session was a great opportunity for anyone looking to learn more about design, and it was a part of the series of events organized for the Visual Mela 2021.",
        "location": "Herald College, Naxal",
        "date": "2021-09-28"
    }
]


function setButton(isMore) {
    var ButtonDiv = document.getElementById("button");
    if (isMore) {
        ButtonDiv.innerHTML = `<button class="event-view-button" onclick="seeMoreEvents(${isMore})">See More Events</button>`;
    } else {
        ButtonDiv.innerHTML = `<button class="event-view-button" onclick="seeMoreEvents(${isMore})">See Less Events</button>`;
    }
}
setButton(true);

function seeMoreEvents(isMore) {
    var EventsElement = document.getElementById("events");
    if (isMore) {
        moreEvents.forEach((curr, indx) => {
            if (indx > 2) {
                EventsElement.innerHTML += `<div class="single-event flex-col">
            <div class="event-title">
              <h3>${curr.name}</h3>
            </div>
            <img src="${curr.profileImage}" />
            <div class="single-event-content flex-col">
              <div class="flex-row events-icons">
                <i class="uil uil-location-point"></i>
                <h5 style="font-size: 14px">${curr.location}</h5>
              </div>
              <div class="flex-row events-icons">
                <i class="uil uil-calendar-alt"></i>
                <h5 style="font-size: 14px">${curr.date}</h5>
              </div>
              <h5>
                ${curr.description.substr(0, 180) + "..."}
              </h5>
              <button onclick="readMore(${indx})">Read More</button>
            </div>
          </div>`
            }

        })
        setButton(false)
        gsap.to(window,
            {
                duration: .4,
                scrollTo: {
                    y: "#events",
                    offsetY: 0
                }
            }
        )
    } else {
        moreEvents.forEach((curr, indx) => {
            EventsElement.innerHTML = "";
            gsap.to(window,
                {
                    duration: .4,
                    scrollTo: {
                        y: "#top-events",
                        offsetY: 130
                    }
                }
            )
            setButton(true)
        })
    }

}

function readMore(ok) {
    console.log(ok);
}

// function readMore(num) {
//     var elemet = document.getElementById("more-info-event");
//     elemet.style.opacity = 1;
//     elemet.style.display = "flex";

//     var html = `<img src="${moreEvents[num].bgImg}" />
//     <div class="flex-col event-header">
//         <h2>${moreEvents[num].title}</h2>
//         <div class="flex-row " style="align-items:center;gap:5px">
//             <i class="uil uil-location-point"></i>
//             <h4 style="font-size: 14px">${moreEvents[num].location}</h4>
//         </div>
//         <div class="flex-row " style="align-items:center;gap:5px">
//             <i class="uil uil-calendar-alt"></i>
//             <h4 style="font-size: 14px">${moreEvents[num].date}</h4>
//         </div>
//       <p>
//       ${moreEvents[num].description} 
//       </P>
//       <button onclick="readLess()">Read Less</button>
//     </div>`
//     setTimeout(function () {
//         elemet.innerHTML = html
//     }, 250);
//     gsap.to(window,
//         {
//             duration: .4,
//             scrollTo: {
//                 y: "#more-info-event",
//                 offsetY: 200
//             }
//         }
//     )
// }
function readLess() {
    var elemet = document.getElementById("more-info-event");
    elemet.innerHTML = "";
    setTimeout(function () {
        elemet.style.opacity = 0;
        elemet.style.display = "none";
    }, 100);
    gsap.to(window,
        {
            duration: .4,
            scrollTo: {
                y: `#top-events`,
                offsetY: 0
            }
        }
    )
}

const getYear = () => {
    var elemet = document.getElementById("year");
    elemet.innerText = new Date().getFullYear();
}
getYear();