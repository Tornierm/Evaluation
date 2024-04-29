import { Question } from "./components/types"

export const texts: string[] = [
    "A group of friends decided to go on a camping trip to a nearby forest. They packed tents, sleeping bags, and enough food for three days. The forest was known for its beautiful river and diverse wildlife. On their first night, they gathered around a campfire, telling stories and roasting marshmallows.",
    "During a school field trip, students visited a local museum to learn about ancient civilizations. They were particularly fascinated by the Egyptian exhibit, which included mummies, sarcophagi, and various artifacts. The guide explained the significance of hieroglyphics and the process of mummification.",
    "Liam decided to start a vegetable garden in his backyard. He planted tomatoes, carrots, and cucumbers. Every day, he watered the plants and checked for pests. By the end of the season, he was able to harvest a large bounty of vegetables, which he shared with his neighbors.",
    "Sophie loves to paint landscapes. One day, she decided to capture the beauty of a sunset over the ocean. Using vibrant colors, she meticulously added details like the reflection of the sun on the water and the silhouettes of distant ships. Her painting was later exhibited in a local gallery.",
    "During his summer vacation, Marco took a trip to Italy to explore his heritage. He visited landmarks such as the Colosseum and the Vatican. He also enjoyed the local cuisine, particularly the gelato and pizza. Marco found the trip enlightening and felt more connected to his roots.",
    "Emma opened a small bookstore in her hometown. The store quickly became a popular spot for book lovers, who appreciated the cozy reading nooks and the wide selection of genres. Emma also hosted monthly book clubs and author signing events, which helped build a loyal community of readers.",
    "A local community decided to restore an old park in their neighborhood. Volunteers planted trees, installed new benches, and repaired playground equipment. The park reopening was celebrated with a community picnic, where families enjoyed games and shared meals. The project brought the community closer together.",
    "Jason became fascinated with birdwatching during his visit to a national park. He saw several rare bird species, including the Azure Kingfisher and the Red-tailed Hawk. He used his binoculars to observe their behaviors and habitats. Jason documented his findings in a blog that attracted fellow bird enthusiasts.",
    "Anita took part in a city-wide science fair, presenting a project on renewable energy. Her project focused on the benefits of solar panels and wind turbines. Anita's detailed models and thorough research won her the first prize. Her success inspired many young students to explore science projects."
];

export const questions: Question[][] = [
    // Questions for Text 1
    [
        { question: "What did the group pack for their camping trip?", answers: ["Sports equipment", "Sleeping bags", "Musical instruments", "Video games"] },
        { question: "Where did the friends go camping?", answers: ["A city park", "A nearby forest", "A mountain", "A beach"] },
        { question: "What is the forest known for?", answers: ["Skyscrapers", "Snowy landscapes", "A beautiful river and diverse wildlife", "Desert dunes"] },
        { question: "What did they do on their first night?", answers: ["They went swimming", "They watched a movie", "They played soccer", "They gathered around a campfire"] },
    ],[

    // Questions for Text 2
    { question: "Where did the students go on their field trip?", answers: ["A farm", "A factory", "A museum", "A library"] },
    { question: "Which exhibit fascinated the students the most?", answers: ["The dinosaur exhibit", "The modern art exhibit", "The Egyptian exhibit", "The space exhibit"] },
    { question: "What did the Egyptian exhibit include?", answers: ["Paintings", "Sculptures", "Mummies and sarcophagi", "Books"] },
    { question: "What did the guide explain about?", answers: ["The significance of hieroglyphics", "The importance of agriculture", "The rules of ancient sports", "The types of ancient clothing"] },
],[
    // Questions for Text 3
    { question: "What did Liam plant in his garden?", answers: ["Flowers", "Shrubs", "Vegetables", "Trees"] },
    { question: "What vegetables did Liam plant?", answers: ["Potatoes and onions", "Tomatoes, carrots, and cucumbers", "Lettuce and spinach", "Peppers and garlic"] },
    { question: "What did Liam do every day for his plants?", answers: ["He sang to them", "He watered them and checked for pests", "He played music", "He read books"] },
    { question: "What did Liam do with the harvested vegetables?", answers: ["He sold them", "He donated them to a school", "He shared them with his neighbors", "He kept them all"] },
],[
    // Questions for Text 4
    { question: "What does Sophie love to paint?", answers: ["Portraits", "Abstract art", "Landscapes", "Still lifes"] },
    { question: "What scene did Sophie paint?", answers: ["A cityscape at night", "A sunset over the ocean", "A forest in autumn", "A mountain in winter"] },
    { question: "What details did Sophie include in her painting?", answers: ["Animals in the forest", "Cars on a street", "The reflection of the sun on the water", "People in a park"] },
    { question: "Where was her painting exhibited?", answers: ["In a school", "In a local gallery", "At her home", "On a website"] },
],[
    // Questions for Text 5
    { question: "Where did Marco go for his summer vacation?", answers: ["France", "Italy", "Spain", "Germany"] },
    { question: "What landmarks did Marco visit in Italy?", answers: ["The Eiffel Tower and Louvre", "The Colosseum and the Vatican", "Buckingham Palace and Big Ben", "The Statue of Liberty and Central Park"] },
    { question: "What local cuisine did Marco enjoy?", answers: ["Sushi and ramen", "Gelato and pizza", "Tacos and burritos", "Fish and chips"] },
    { question: "How did Marco feel about the trip?", answers: ["He was disappointed", "He felt more connected to his roots", "He was indifferent", "He was eager to leave"] },
],[
    // Questions for Text 6
    { question: "What did Emma open?", answers: ["A cafe", "A library", "A bookstore", "A gym"] },
    { question: "Why did the store become popular?", answers: ["For its discounts", "For its wide selection of genres", "For its modern design", "For its location"] },
    { question: "What events did Emma host?", answers: ["Cooking classes", "Dance lessons", "Author signing events", "Film screenings"] },
    { question: "What did the store help build?", answers: ["A shopping complex", "A loyal community of readers", "A playground", "A school"] },
],[
    // Questions for Text 7
    { question: "What did the community decide to restore?", answers: ["A library", "A school", "A park", "A museum"] },
    { question: "What did volunteers do to restore the park?", answers: ["They built a fountain", "They installed security cameras", "They planted trees and installed new benches", "They paved new walkways"] },
    { question: "How was the park reopening celebrated?", answers: ["With a dance", "With a community picnic", "With a concert", "With a parade"] },
    { question: "What effect did the project have on the community?", answers: ["It caused disagreements", "It brought the community closer together", "It had no noticeable effect", "It led to further decay"] },
],[
    // Questions for Text 8
    { question: "What activity did Jason become fascinated with?", answers: ["Hiking", "Photography", "Birdwatching", "Camping"] },
    { question: "Where did Jason go birdwatching?", answers: ["A city park", "A national park", "A backyard", "A zoo"] },
    { question: "Which rare bird species did Jason see?", answers: ["Canary and Parrot", "Eagle and Owl", "Azure Kingfisher and Red-tailed Hawk", "Pigeon and Crow"] },
    { question: "What did Jason do with his observations?", answers: ["He published a book", "He started a podcast", "He created a documentary", "He documented them in a blog"] },
],[
    // Questions for Text 9
    { question: "What type of project did Anita present?", answers: ["A historical project", "A science project", "A geography project", "An art project"] },
    { question: "What was the focus of Anita's project?", answers: ["The history of electricity", "The benefits of fossil fuels", "The benefits of solar panels and wind turbines", "The use of natural gas"] },
    { question: "What did Anita win?", answers: ["A scholarship", "First prize", "A participation certificate", "A trip"] },
    { question: "What was the impact of Anita's success?", answers: ["It discouraged competition", "It had no impact", "It inspired young students to explore science", "It reduced interest in science"] }
]];

export const latinSquareTable: number[][] = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [2, 3, 4, 5, 6, 7, 8, 1],
    [3, 4, 5, 6, 7, 8, 1, 2],
    [4, 5, 6, 7, 8, 1, 2, 3],
    [5, 6, 7, 8, 1, 2, 3, 4],
    [6, 7, 8, 1, 2, 3, 4, 5],
    [7, 8, 1, 2, 3, 4, 5, 6],
    [8, 1, 2, 3, 4, 5, 6, 7],
]