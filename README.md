# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?
- I'm making a feedback app! In this app, users will be led through three different questions, asked for their feedback on how they're doing in three catagories: how they're feeling, how well they feel they've understood the (nonexistent) material, and if they have any comments to leave. Then, there will be a page where they can review their feedback before submitting it. Finally, there will be a page where they're thanked for their feedback! Wonderful.




**Problems/Decisions I came across**
-   *How do I structure my reducers and actions?* 
    - Once I get around to creating them, I think I will extract them out into their own files + folders, then import them to be used. Just trying to capitalize on the component nature of React.
- **How do I format my reducer?** 
    - Decided to go with a single object, for clealiness. After refactoring using a switch case + a single line state edit/return, it might not be the most readable. But I don't think it's terrible, so that's where I'm keeping it.
- **How to reset state upon submission + re-entry into the beginning of the app?**
    - Upon sending the RESET dispatch, in that switch case I did this => return {...state, feelings:'', understanding:'', support:'', comments:''}. The only problem I see with this, and it isn't a terrible problem, is that there are still technically 'values' in the state, only the values are empty strings. 🤷‍♂️ oh well.
- **How can I unify my UI using both MUI and Tailwind CSS?**
    - It took some finagling, because it seems only certain MUI components are able to be edited by Tailwind classes. So, I had to be a bit clever....I wrapped everything in divs, and then used the CSS classes on the divs. In particular, because I wasn't able to affect the MUI buttons directly, I had to wrap those in divs so that I could position and space them correctly.
- **Why isn't my ID for the element to be deleted passing to it's onClick function correctly?** 
    - Couldn't tell ya the answer to this one. Haven't figured it out yet. But if I get time, I will ask someone to look over my code with me to see if they can help me find the problem.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
