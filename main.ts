// LISTING ELEMENT
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    // TYPE ASSERTION

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    const usernameElement = document.getElementById("username") as HTMLInputElement;

    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`


        // Picture Element
        const profilePicturefile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "" ;
        
        
        
        
        // CREATE RESUME OUTPUT
        const resumeOutPut = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : '' }
        <p><strong>Name:</strong> ${name} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Phone Number:</strong> ${phone} </p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;


        // Display the resume in the output container
        const resumeOutPutElement = document.getElementById('resumeOutPut')
        if(resumeOutPutElement){
            resumeOutPutElement.innerHTML = resumeOutPut;
            resumeOutPutElement.classList.remove("hidden");

            // Create contaoner for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutPutElement?.appendChild(buttonsContainer);

            // Add diwnload PDF button
            const downloadButton = document.createElement("button")
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", () => {
                window.print(); // Open the print dailog, allowing the user to save as PDF.
            });
            buttonsContainer.appendChild(downloadButton);

            // Add shareable Link Button
            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", async() =>{
                try {
                    // Create a unique shareable Link
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, '_')}_cv.html`;

                    // Use clipboard API to copy the shareable the Link
                    await navigator.clipboard.writeText(shareableLink);
                    alert("shareableLink copy to clipborad!");
                }catch (err) {
                    console.error("Faild to copy Link: ", err);
                    alert("Failed to copy link to clipboard, Please try again.");
                }
            });
            buttonsContainer.appendChild(shareLinkButton);
    }else{
        console.error("Resume output container not found");
    }
    }else{
        console.error("Form element are missing");
    }
});