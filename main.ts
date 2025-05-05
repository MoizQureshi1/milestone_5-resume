// LISTING ELEMENT
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    // TYPE ASSERTION

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const professionElement = document.getElementById('profession') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const aboutElement = document.getElementById('about') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    const usernameElement = document.getElementById("username") as HTMLInputElement;

    if(profilePictureInput && nameElement && professionElement && emailElement && phoneElement && addressElement && aboutElement && educationElement && experienceElement && skillsElement && usernameElement){
        const name = nameElement.value;
        const profession = professionElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const about = aboutElement.value;
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
        <div class="resumeInSide">
            <div class="imageSide">
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : '' }
                <div>
                <p id="edit-name" class="editable"> ${name} </p>
                <span id="edit-profession" class="editable"> ${profession}</span>
                </div>
            </div>
            <div class="mainTextSide">
                <div class="contactSide">
                <div class="aboutSide">    
                    <h3>About Me</h3>
                    <p id="edit-about" class="editable">${about}</p>
                </div>
                <div class="inContact">    
                    <h3>Contact Me</h3>
                    <p id="edit-phone" class="editable"><i class="fa-solid fa-phone"></i> ${phone} </p>
                    <p id="edit-edit" class="editable"><i class="fa-solid fa-envelope"></i> ${email} </p>
                    <p id="edit-address" class="editable"><i class="fa-solid fa-location-dot"></i> ${address} </p>
                </div>
                </div>
                <div class="textSide">
                    <h3><i class="fa-solid fa-angles-right"></i> Education</h3>
                    <p id="edit-eaducation" class="editable">${education}</p>

                    <h3><i class="fa-solid fa-angles-right"></i> Experience</h3>
                    <p id="edit-experience" class="editable">${experience}</p>

                    <h3><i class="fa-solid fa-angles-right"></i> Skills</h3>
                    <p id="edit-skille" class="editable">${skills}</p>
                </div>
            </div>
        </div>
        `;


        // Display the resume in the output container
        const resumeOutPutElement = document.getElementById('resumeOutPut')
        if(resumeOutPutElement){
            resumeOutPutElement.innerHTML = resumeOutPut;
            makeEditable();
            resumeOutPutElement.classList.remove("hidden");

            // Create contaoner for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutPutElement?.appendChild(buttonsContainer);

            // Add diwnload PDF button
            const downloadHTMLButton = document.createElement("button");
            downloadHTMLButton.textContent = "Download as HTML";
            downloadHTMLButton.addEventListener("click", () => {
            const blob = new Blob([resumeOutPut], { type: "text/html" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = `${username.replace(/\s+/g, '_')}_cv.html`;
            link.click();
            });
            buttonsContainer.appendChild(downloadHTMLButton);


            // Add shareable Link Button
            // Replace old Share Link button code
            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Temporary Link";
            shareLinkButton.addEventListener("click", async () => {
            const blob = new Blob([resumeOutPut], { type: "text/html" });
            const blobURL = URL.createObjectURL(blob);

                try {
                await navigator.clipboard.writeText(blobURL);
                alert("Temporary link copied to clipboard!");
                } catch (err) {
                console.error("Failed to copy link:", err);
                alert("Failed to copy temporary link.");
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



function makeEditable(){
    const editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(element => {
        element.addEventListener('click' , function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "" ;
            
            // REPLACE CONTENT
            if(currentElement.tagName === "p" || currentElement.tagName === "Span"){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editable-input')

                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()    
                })


                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}