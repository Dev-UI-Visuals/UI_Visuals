gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

var moreEvents = [{
    img: '/image/Code_Bricks_Event_1.jpg',
    title: "Code brisk Hackathon",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus, molestias veniam saepe maxime aut dignissimos reprehenderit impedit minima eveniet! Unde vitae earum natus ducimus, ab ipsam officia temporibus culpa nulla voluptas harum aliquam perspiciatis porro fugiat doloribus numquam expedita consectetur saepe ea soluta. Dolore quisquam accusantium non minus, fugit iste aspernatur odit, sequi eveniet esse similique at quam reiciendis suscipit, facere laudantium consequatur vero ipsa? Asperiores odio quisquam magnam.",
    location: "Kuri Village, Kalinchowk",
    date: "2023-04-23"
},
{
    img: '/image/Code_Bricks_Event_1.jpg',
    title: "UPC Design Hunt ",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus, molestias veniam saepe maxime aut dignissimos reprehenderit impedit minima eveniet! Unde vitae earum natus ducimus, ab ipsam officia temporibus culpa nulla voluptas harum aliquam perspiciatis porro fugiat doloribus numquam expedita consectetur saepe ea soluta. Dolore quisquam accusantium non minus, fugit iste aspernatur odit, sequi eveniet esse similique at quam reiciendis suscipit, facere laudantium consequatur vero ipsa? Asperiores odio quisquam magnam.",
    location: "Kuri Village, Kalinchowk",
    date: "2023-04-23"
},
{
    img: '/image/events/Vision_Quest.png',
    title: "Vision Quest",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus, molestias veniam saepe maxime aut dignissimos reprehenderit impedit minima eveniet! Unde vitae earum natus ducimus, ab ipsam officia temporibus culpa nulla voluptas harum aliquam perspiciatis porro fugiat doloribus numquam expedita consectetur saepe ea soluta. Dolore quisquam accusantium non minus, fugit iste aspernatur odit, sequi eveniet esse similique at quam reiciendis suscipit, facere laudantium consequatur vero ipsa? Asperiores odio quisquam magnam.",
    location: "Kuri Village, Kalinchowk",
    date: "2023-04-23"
}];

function setButton (isMore){
    var ButtonDiv = document.getElementById("button");
    if(isMore){
        ButtonDiv.innerHTML = `<button class="event-view-button" onclick="seeMoreEvents(${isMore})">See More Events</button>`;
    }else{
        ButtonDiv.innerHTML = `<button class="event-view-button" onclick="seeMoreEvents(${isMore})">See Less Events</button>`;
    }
}
setButton(true);

function seeMoreEvents(isMore){
    var EventsElement = document.getElementById("events");
   if(isMore){
    moreEvents.forEach((curr,indx) => {
        EventsElement.innerHTML += `<div class="single-event flex-col">
        <div class="event-title">
          <h3>${curr.title}</h3>
        </div>
        <img src="${curr.img}" />
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
            ${curr.description.substr(0,201)}
          </h5>
          <button onclick="seeMoreEvent(${indx})">See More</button>
        </div>
      </div>`
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
   }else{
    moreEvents.forEach((curr,indx) => {
        EventsElement.innerHTML = "";
        gsap.to(window,
            {
                duration: .4,
                scrollTo: {
                    y: "#event",
                    offsetY: 0
                }
            }
        )
        setButton(true)
    })
   }

}

function seeMoreEvent(num) {
    var elemet = document.getElementById("more-info-event");
   elemet.style.opacity = 1;
   elemet.style.display = "flex";
   
    var html = `<img src="${moreEvents[num - 1].img}" id="event-image-${num}"/>
    <div class="flex-col event-header">
        <h2>${moreEvents[num - 1].title}</h2>
        <div class="flex-row " style="align-items:center;gap:5px">
            <i class="uil uil-location-point"></i>
            <h4 style="font-size: 14px">${moreEvents[num - 1].location}</h4>
        </div>
        <div class="flex-row " style="align-items:center;gap:5px">
            <i class="uil uil-calendar-alt"></i>
            <h4 style="font-size: 14px">${moreEvents[num - 1].date}</h4>
        </div>
      <p>
      ${moreEvents[num - 1].description} 
      </P>
      <button onclick="seeLess()">See Less</button>
    </div>`
    setTimeout(function () {
        elemet.innerHTML = html
    }, 250);
    gsap.to(window,
        {
            duration: .4,
            scrollTo: {
                y: "#more-info-event",
                offsetY: 200
            }
        }
    )
}
function seeLess() {
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
                y: `#more-info-event`,
                offsetY: 0
            }
        }
    )
}