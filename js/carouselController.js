
// text to populate views -- should fetch this in a real setup but this'll do
// import { text } from '../assets/text.js';

const text = [
    // 0 -- good
    (
        "The Upshot from The New York times uses this map to represent data from the United States Postal Service. "+ 
        "The gradient in color intensity represents service delays by mailing region. "
    ),
    // 1 -- bad
    (
        "This graphic, obtained from Washington University, has some problems. " + 
        "No specific geographic boundaries are drawn. The user is left to wonder where one region ends and the other begins; "+
        "is Virginia a middle state, or a southern state?" 
    ),
    // 2 -- better
    (
        "In this visualization, I used fictious data to make my own student distribution map in Tableau. "+
        "The scaled colors indicate how many students are from each state. Color gradients now clearly show which states are highly represented and which states are not."
    ),
    // 3 -- good second
    (        
        "This is a good visualization because it uses high contrast colors and clear geographic delinations to show the distribution of a phenomenon over geographic space."
    ),
    // 4 -- bad second
    (
        "Percentages are given by region. States are likely over represented by these percentages. "+
        "17% of students come from the West, but are counts proportional or are states like California overrepresented?" 
    ),
    // 5 -- better second
    (
        "This screenshot does not show regions, but the interactive Tableau worksheet does. Regions are clearly defined - no state is ambiguously categorized."
    )
];

const sources = [
    // 0 -- Upshot about
    "The Upshot is a webpage from the New York Times. Their articles combine traditional journalism with data-driven digital visualizations.",
    // 1 -- WashU about
    "This visualization comes from an annual statistical profile of incoming undergraduates at WashU.",
    // 2 -- tableau about
    "Tableau is a visualization software. I modified Tableau sample data for this visualization. It does not relate to the information presented in WashU's visualization.",
    // 3 -- Upshot url
    "https://www.nytimes.com/interactive/2020/09/14/upshot/is-the-mail-getting-slower-tracker.html",
    // 4 -- WashU url
    "https://admissions.wustl.edu/life-at-washu/our-students/",
    // 5 -- Tableau url
    "https://public.tableau.com/en-us/s/resources"
];

window.carouselCounter = 0;
window.showSourceInfo = false;

$( document ).ready(function() {
    toggleSourceInfo(true);
    // $('#aboutSource').attr({opacity: 0});
    updateText();
    updateSourceInfo();
});

const updateCritiqueHead = () => {
    if (window.carouselCounter % 3 == 1) {
        $('#critiqueHead').text("Bad");
    }
    else if (window.carouselCounter % 3 == 2) {
        $('#critiqueHead').text("Better");
    }
    else {
        $('#critiqueHead').text("Good");
    }
}

const updateText = () => {
    $('#critiqueFirst').text(text[window.carouselCounter]);
    $('#critiqueSecond').text(text[window.carouselCounter + 3]);
}

const updateSourceInfo = () => {
    $('#aboutSource').text(sources[window.carouselCounter]);
}

const toggleSourceInfo = (newslide=false) => {
    if (newslide)
        window.showSourceInfo = false;
    else {
        if (window.showSourceInfo) 
            $('#aboutSource').animate( {opacity: 0}, "slow")
        else
            $('#aboutSource').animate( {opacity: 1}, "slow")
        window.showSourceInfo = !window.showSourceInfo
    }
}

const visitSource = () => {
    location.href = sources[window.carouselCounter+3];
}

$('#graphicCarousel').on('slide.bs.carousel', function () {
    toggleSourceInfo(true);    
    $('#critiqueHead, #critiqueFirst, #critiqueSecond, #buttonBar, #aboutSource').animate({ opacity: 0 }, "fast", function() {
        updateCritiqueHead()
        updateText();
        updateSourceInfo();
        $('#critiqueHead, #critiqueFirst, #critiqueSecond, #buttonBar').animate( { opacity: 1 }, "slow");
    });
});

$('#nextButton').click(function() {
    window.carouselCounter += 1;
    if (window.carouselCounter > 2)
        window.carouselCounter = 0;
    
});

$('#prevButton').click(function() {
    window.carouselCounter -= 1;
    if (window.carouselCounter < 0 )
        window.carouselCounter = 2;
});
