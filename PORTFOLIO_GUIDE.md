# 🎨 Kishan's Portfolio - Content Management Guide

Welcome to your portfolio! This website was designed specifically so that you do not need to know how to code to update your text, projects, or images. 

Everything you need to change is safely stored inside a single file: 
**`client/src/data/portfolio.js`**

Below is a simple guide on how to make changes like a pro.

---

## 📸 1. How to Change Photos & Images

If you want to update your profile photo or project cover images, follow these steps:

1. **Add your photo to the project folder:**
   Place your new image file (e.g., `new-photo.jpg` or `project-1.png`) into this folder:
   `client/public/images/`
2. **Link the photo in the data file:**
   Open `client/src/data/portfolio.js` and find the image you want to change.
   Change the text inside the quotes to match your new file name.
   *Example for your profile photo:*
   \`\`\`javascript
   profileImage: '/images/new-photo.jpg',
   \`\`\`

---

## 📝 2. How to Update Text details (Bio, Email, Links)

Open the \`portfolio.js\` file and look at the very top for \`personalInfo\`. 

*   To change your **Role** or **Bio**, just replace the text inside the quotes or backticks (\` \`).
*   To update your **Social Links**, simply paste your new profile URL into the quotes.

\`\`\`javascript
export const personalInfo = {
  name: 'Kishan Parvadiya',
  role: 'UI/UX Designer | Product Manager', // Change this text
  email: 'your-new-email@gmail.com',         // Change this text
  // ...
};
\`\`\`

---

## 💼 3. How to Manage Projects 

Scroll down to the \`projects\` section. You will see a list wrapped in brackets \`[  ]\`. Each project is wrapped in curly braces \`{  }\`.

*   **To change a project's details:** Edit the text beside \`title\`, \`description\`, and \`category\`.
*   **To add a new project:** Copy everything from an opening \`{\` to a closing \`},\` and paste it below another one.
*   **To delete a project:** Delete everything from the opening \`{\` to the closing \`},\` for that specific project.

\`\`\`javascript
  {
    id: 'my-new-project',
    title: 'New App Design',
    category: 'Mobile App',
    description: 'This is my awesome new project description!',
    image: '/images/new-project-photo.png', // Remember to put the photo in the public/images folder!
    tags: ['UI/UX', 'Figma', 'Mobile'],
    year: '2026',
    client: 'Awesome Client',
    hasCaseStudy: true,
  },
\`\`\`

---

## 📄 4. How to Update Project Case Studies

When users click "Case Study" on a project, a beautiful popup appears.

Right now, the generic sections (like "The Problem" and "Results") are all reading from the \`caseStudy\` object. 
You can edit the text inside the \`content\` fields for "The Problem", "Research & Discovery", "Design Process", and "Results" to perfectly match your projects!

*(In the future, if you want different text for every single project, simply change the \`caseStudy\` structure to hold an array of different case studies based on their \`id\`.)*

---

## 🚀 5. How to Update Skills

Skills are grouped into 6 categories (e.g., UI/UX Design, Product Management).
To update a skill's percentage bar, simply change the number next to \`level\`:

\`\`\`javascript
    items: [
      { name: 'Wireframing', level: 95 }, // Change 95 to whatever number you want!
      { name: 'Prototyping', level: 94 },
    ],
\`\`\`

---

## ⭐ Important Notes / Auto-Features

*   **Dynamic Experience Calculator:** Your website has custom programming that automatically tracks your months/years of experience starting from your very first internship in **January 2025**. You will **never** need to manually update your "Years of Experience" badge—it will update by itself!
*   **Syntax Rules:** Always make sure your text is wrapped in single quotes \`' '\` or backticks \` \` \` \`. If your text contains an apostrophe (like \`Don't\`), it's safest to wrap that whole block of text in backticks or double quotes instead of single quotes so it doesn't break the code.

Happy customizing!
