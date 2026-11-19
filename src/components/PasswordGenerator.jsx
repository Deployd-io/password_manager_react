import { useState } from "react";
import logger from "../utils/logger";

const usePasswordGenerator = () => {
	logger.warn('PasswordGenerator', '>>> Entering usePasswordGenerator()', { "event.action": "usePasswordGenerator" });
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
	logger.warn('PasswordGenerator', `usePasswordGenerator: password → ${password}`, { "event.action": "usePasswordGenerator" });
	logger.warn('PasswordGenerator', `usePasswordGenerator: errorMessage → ${errorMessage}`, { "event.action": "usePasswordGenerator" });

    const generatePassword = (checkboxData, length) => {
		logger.warn('PasswordGenerator', `>>> Entering generatePassword(checkboxData=${checkboxData},length=${length})`, { "event.action": "generatePassword", "logrite.checkboxData": checkboxData, "logrite.length": length });
        let characters = "", generatePassword = "";
        const selectedCheckbox = checkboxData.filter(checkbox => checkbox.status);

        if (selectedCheckbox.length === 0) {
            logger.warn("Password generation failed: No options selected");
            setErrorMessage("Please select atleast one option");
            setPassword("");
            return;
        }

        logger.debug("Generating password with options:", { selectedOptions: selectedCheckbox.map(c => c.title), length });

        selectedCheckbox.forEach(check => {
            switch (check.title) {
                case "Include Uppercase Letters":
                    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters":
                    characters += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Special Characters":
                    characters += "!@#$%^&*()_-+={[}]|:;<,>.?/+";
                    break;
                case "Include Numbers":
                    characters += "0123456789";
                    break;
            };
        });

        for (let index = 0; index < length; index++) {
            const randomPassword = Math.floor(Math.random() * characters.length);
            generatePassword += characters[randomPassword];
        };

        setPassword(generatePassword);
        setErrorMessage("");
        logger.info("Password generated successfully", { length: generatePassword.length });
		logger.warn('PasswordGenerator', `<<< Exiting generatePassword(checkboxData=${checkboxData},length=${length})`, { "event.action": "generatePassword", "logrite.checkboxData": checkboxData, "logrite.length": length });
    };

	logger.warn('PasswordGenerator', '<<< Exiting usePasswordGenerator()', { "event.action": "usePasswordGenerator" });
    return {
        password,
        errorMessage,
        generatePassword
    }
};

export default usePasswordGenerator;