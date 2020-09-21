
const text = [
    // 0 -- good
    (
        "This visualization from The New York Time's Upshot representes data from the United States Postal Service. "+ 
        "The gradient in color intensity represents service delays by mailing region. "+
        "This is a good visualization because it uses high contrast colors and clear geographic delinations to show the distribution of a phenomenon over geographic space."
    ),
    // 1 -- bad
    (
        "This visualization, obtained from Washington University's admission profile for the class of 2024, has some problems. " + 
        "No specific geographic boundaries are drawn. The user is left to wonder where one region ends and the other begins; "+
        "Is Virginia a middle state, or a southern state? Is Ohio in the Midwest? \n"+
        "Compounding this issue is the fact that percentages are given by region. Many states are likely over represented by these percentages. "+
        "Are 17% of students from proportionally represented areas of the West, or are the majority of those 'Western' students from California?"  
    ),
    // 2 -- better
    (
        "In this visualization, I used fictious data to make my own student distribution map in Tableau. "+
        "The scaled colors indicate how many students are from each state. Color gradients now clearly show which states are highly represented and which states are not. "+
        "This screenshot does not show regions, but the interactive Tableau worksheet also allows users to identify clearly defined regions so that no state is ambiguously between two regional zones."
    )
]

module.exports = text;