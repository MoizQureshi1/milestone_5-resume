var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
// LISTING ELEMENT
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    // TYPE ASSERTION
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var professionElement = document.getElementById('profession');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var aboutElement = document.getElementById('about');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && nameElement && professionElement && emailElement && phoneElement && addressElement && aboutElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var profession = professionElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var about = aboutElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // Picture Element
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
        // CREATE RESUME OUTPUT
        var resumeOutPut = "\n        <div class=\"resumeInSide\">\n            <div class=\"imageSide\">\n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n                <div>\n                <p id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </p>\n                <span id=\"edit-profession\" class=\"editable\"> ").concat(profession, "</span>\n                </div>\n            </div>\n            <div class=\"mainTextSide\">\n                <div class=\"contactSide\">\n                <div class=\"aboutSide\">    \n                    <h3>About Me</h3>\n                    <p id=\"edit-about\" class=\"editable\">").concat(about, "</p>\n                </div>\n                <div class=\"inContact\">    \n                    <h3>Contact Me</h3>\n                    <p id=\"edit-phone\" class=\"editable\"><i class=\"fa-solid fa-phone\"></i> ").concat(phone, " </p>\n                    <p id=\"edit-edit\" class=\"editable\"><i class=\"fa-solid fa-envelope\"></i> ").concat(email, " </p>\n                    <p id=\"edit-address\" class=\"editable\"><i class=\"fa-solid fa-location-dot\"></i> ").concat(address, " </p>\n                </div>\n                </div>\n                <div class=\"textSide\">\n                    <h3><i class=\"fa-solid fa-angles-right\"></i> Education</h3>\n                    <p id=\"edit-eaducation\" class=\"editable\">").concat(education, "</p>\n\n                    <h3><i class=\"fa-solid fa-angles-right\"></i> Experience</h3>\n                    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n                    <h3><i class=\"fa-solid fa-angles-right\"></i> Skills</h3>\n                    <p id=\"edit-skille\" class=\"editable\">").concat(skills, "</p>\n                </div>\n            </div>\n        </div>\n        ");
        // Display the resume in the output container
        var resumeOutPutElement = document.getElementById('resumeOutPut');
        if (resumeOutPutElement) {
            resumeOutPutElement.innerHTML = resumeOutPut;
            makeEditable();
            resumeOutPutElement.classList.remove("hidden");
            // Create contaoner for buttons
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutPutElement === null || resumeOutPutElement === void 0 ? void 0 : resumeOutPutElement.appendChild(buttonsContainer);
            // Add diwnload PDF button
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print(); // Open the print dailog, allowing the user to save as PDF.
            });
            buttonsContainer.appendChild(downloadButton);
            // Add shareable Link Button
            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resumes/".concat(name_1.replace(/\s+/g, '_'), "_cv.html");
                            // Use clipboard API to copy the shareable the Link
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            // Use clipboard API to copy the shareable the Link
                            _a.sent();
                            alert("shareableLink copy to clipborad!");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Faild to copy Link: ", err_1);
                            alert("Failed to copy link to clipboard, Please try again.");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonsContainer.appendChild(shareLinkButton);
        }
        else {
            console.error("Resume output container not found");
        }
    }
    else {
        console.error("Form element are missing");
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // REPLACE CONTENT
            if (currentElement.tagName === "p" || currentElement.tagName === "Span") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editable-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
